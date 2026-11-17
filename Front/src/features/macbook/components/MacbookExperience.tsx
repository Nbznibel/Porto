"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useMacbookViewport } from "../hooks/useMacbookViewport";
import { MacbookFrame } from "./macbook-frame";

interface MacbookExperienceProps {
  children: ReactNode;
}

interface ScreenRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

const TAKEOVER = 1100;
const BASE_FRAME_H = 544;
const BASE_SCREEN_W = 496;
const BASE_SCREEN_H = 368;
const BASE_BEZEL = 8;
const MAX_FRAME_SCALE = 0.78;
const HEADER_CLEARANCE = 80;
const FRAME_GAP = 16;
const BOTTOM_CLEARANCE = 24;
const SCREEN_ROTATE_X = -26;
const CONTENT_SCREEN_LIFT = 0.1235;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const easeOut = (progress: number) => 1 - (1 - progress) * (1 - progress);

const frameScaleFor = (viewportHeight: number) =>
  Math.min(
    MAX_FRAME_SCALE,
    Math.max(
      0.55,
      (viewportHeight - HEADER_CLEARANCE - BOTTOM_CLEARANCE) / BASE_FRAME_H,
    ),
  );

const frameTopFor = (viewportHeight: number, scale: number) =>
  Math.max(
    HEADER_CLEARANCE,
    (viewportHeight - BASE_FRAME_H * scale) / 2 + FRAME_GAP,
  );

const fallbackScreen = (viewportWidth: number, viewportHeight: number): ScreenRect => {
  const scale = frameScaleFor(viewportHeight);
  return {
    top: frameTopFor(viewportHeight, scale) + BASE_BEZEL * scale,
    left: (viewportWidth - BASE_SCREEN_W * scale) / 2,
    width: BASE_SCREEN_W * scale,
    height: BASE_SCREEN_H * scale,
  };
};

// Desktop-only scroll takeover. The MacBook replaces the hero: at rest it shows
// the portfolio (starting at the hero banner) on its X-inclined screen. The lid
// stays fixed; scrolling fades the frame while the live content flattens and
// widens to the viewport, then releases it so scrolling continues normally.
// Mobile and reduced-motion users receive the children
// directly, with no frame or mask.
export const MacbookExperience = ({ children }: MacbookExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { width, height } = useMacbookViewport();
  const prefersReducedMotion = useReducedMotion();
  const enabled = width >= 1024 && !prefersReducedMotion;

  const { scrollY } = useScroll();
  const geometryRef = useRef<{
    width: number;
    height: number;
    sectionTop: number;
    screen: ScreenRect | null;
  }>({ width, height, sectionTop: 0, screen: null });

  const contentY = useMotionValue(0);
  const contentScale = useMotionValue(1);
  const contentRotateX = useMotionValue(SCREEN_ROTATE_X);
  const frameOpacity = useMotionValue(1);
  const windowTop = useMotionValue(0);
  const windowLeft = useMotionValue(0);
  const windowWidth = useMotionValue(BASE_SCREEN_W);
  const windowHeight = useMotionValue(BASE_SCREEN_H);
  const hintOpacity = useMotionValue(1);

  const sync = useCallback(
    (scroll: number) => {
      const {
        width: viewportWidth,
        height: viewportHeight,
        sectionTop,
        screen: measuredScreen,
      } = geometryRef.current;
      const screen =
        measuredScreen ?? fallbackScreen(viewportWidth, viewportHeight);
      const progress = clamp((scroll - sectionTop) / TAKEOVER, 0, 1);
      const eased = easeOut(progress);
      const initialScale = Math.min(1, screen.width / Math.max(1, viewportWidth));
      const scale = initialScale + (1 - initialScale) * eased;
      const rotate = SCREEN_ROTATE_X * (1 - eased);

      // The X tilt pushes the hero text toward the bottom of the projected
      // screen, so lift it into the visible area while the MacBook is closed.
      const liftedScreenTop =
        (screen.top - screen.height * CONTENT_SCREEN_LIFT) * (1 - eased);
      contentY.set(
        scroll >= sectionTop + TAKEOVER
          ? 0
          : liftedScreenTop - (sectionTop + TAKEOVER - scroll),
      );
      contentScale.set(scale);
      contentRotateX.set(rotate);
      frameOpacity.set(1 - clamp((progress - 0.25) / 0.3, 0, 1));
      windowTop.set(screen.top * (1 - eased));
      windowLeft.set(screen.left * (1 - eased));
      windowWidth.set(screen.width + (viewportWidth - screen.width) * eased);
      windowHeight.set(screen.height + (viewportHeight - screen.height) * eased);
      hintOpacity.set(1 - clamp(progress / 0.15, 0, 1));
    },
    [
      contentY,
      contentScale,
      contentRotateX,
      frameOpacity,
      windowTop,
      windowLeft,
      windowWidth,
      windowHeight,
      hintOpacity,
    ],
  );

  // useMotionValueEvent subscribes in an insertion effect, before useScroll and
  // useLayoutEffect run. Without this, the first measured geometry is set before
  // the derived values are listening and the takeover stays stale.
  useMotionValueEvent(scrollY, "change", sync);

  useLayoutEffect(() => {
    const measure = () => {
      const screenElement = sectionRef.current?.querySelector<HTMLElement>(
        "[data-macbook-screen]",
      );
      const rect = screenElement?.getBoundingClientRect();
      geometryRef.current = {
        width,
        height,
        sectionTop: sectionRef.current
          ? sectionRef.current.getBoundingClientRect().top + window.scrollY
          : 0,
        screen: rect
          ? {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }
          : null,
      };
      sync(window.scrollY);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [width, height, sync]);

  if (!enabled) {
    return <>{children}</>;
  }

  const frameScale = frameScaleFor(height);
  const frameTop = frameTopFor(height, frameScale);

  return (
    <section ref={sectionRef} aria-label="Portfolio experience" className="relative">
      <motion.div
        style={{ opacity: frameOpacity }}
        className="pointer-events-none fixed inset-0 z-20"
      >
        <motion.div
          className="absolute"
          style={{
            top: windowTop,
            left: windowLeft,
            width: windowWidth,
            height: windowHeight,
            boxShadow: "0 0 0 100vmax var(--color-paper)",
          }}
        />
        <div
          className="absolute left-1/2"
          style={{
            top: frameTop,
            transform: `translateX(-50%) scale(${frameScale})`,
            transformOrigin: "top center",
          }}
        >
          <MacbookFrame screenRotateX={SCREEN_ROTATE_X} />
        </div>
        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          Scroll to open
        </motion.p>
      </motion.div>

      <div style={{ height: TAKEOVER }} aria-hidden="true" />

      <motion.div
        style={{
          y: contentY,
          scale: contentScale,
          rotateX: contentRotateX,
          transformPerspective: 1400,
          transformOrigin: "top center",
        }}
        className="relative z-10 w-full bg-paper will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};
