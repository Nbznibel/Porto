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

const TAKEOVER = 1100;
const BASE_FRAME_H = 544;
const BASE_BEZEL = 8;
const BASE_SCREEN_W = 496;
const BASE_SCREEN_H = 368;
const MAX_FRAME_SCALE = 0.78;
const HEADER_CLEARANCE = 80;
const FRAME_GAP = 16;
const BOTTOM_CLEARANCE = 24;

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

// Desktop-only scroll takeover. The MacBook replaces the hero: at rest it shows
// the portfolio (starting at the hero banner) on its screen. Scrolling widens
// that screen into a full-viewport perspective; once full-screen the content is
// released from all transforms and scrolls normally. Mobile and reduced-motion
// users receive the same children directly, with no frame or mask.
export const MacbookExperience = ({ children }: MacbookExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { width, height } = useMacbookViewport();
  const prefersReducedMotion = useReducedMotion();
  const enabled = width >= 1024 && !prefersReducedMotion;

  const { scrollY } = useScroll();
  const geometryRef = useRef({ width, height, sectionTop: 0 });

  const contentY = useMotionValue(0);
  const contentScale = useMotionValue(1);
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
      } = geometryRef.current;
      const progress = clamp((scroll - sectionTop) / TAKEOVER, 0, 1);
      const eased = easeOut(progress);
      const scaleFactor = frameScaleFor(viewportHeight);
      const screenW = BASE_SCREEN_W * scaleFactor;
      const screenH = BASE_SCREEN_H * scaleFactor;
      const screenTop =
        frameTopFor(viewportHeight, scaleFactor) + BASE_BEZEL * scaleFactor;
      const initialScale = Math.min(1, screenW / Math.max(1, viewportWidth));
      const scale = initialScale + (1 - initialScale) * eased;
      const nextWindowWidth = viewportWidth * scale;

      contentY.set(
        scroll >= sectionTop + TAKEOVER
          ? 0
          : screenTop * (1 - progress) - (sectionTop + TAKEOVER - scroll),
      );
      contentScale.set(scale);
      frameOpacity.set(1 - clamp((progress - 0.25) / 0.3, 0, 1));
      windowTop.set(screenTop * (1 - progress));
      windowLeft.set((viewportWidth - nextWindowWidth) / 2);
      windowWidth.set(nextWindowWidth);
      windowHeight.set(screenH + (viewportHeight - screenH) * eased);
      hintOpacity.set(1 - clamp(progress / 0.15, 0, 1));
    },
    [
      contentY,
      contentScale,
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
      geometryRef.current = {
        width,
        height,
        sectionTop: sectionRef.current
          ? sectionRef.current.getBoundingClientRect().top + window.scrollY
          : 0,
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
          <MacbookFrame />
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
          transformOrigin: "top center",
        }}
        className="relative z-10 w-full bg-paper will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};
