"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useMacbookViewport } from "../hooks/useMacbookViewport";
import { MacbookFrame } from "./macbook-frame";

interface MacbookExperienceProps {
  children: ReactNode;
}

const TAKEOVER_DISTANCE = 1200;
const FRAME_HEIGHT = 544;
const SCREEN_WIDTH = 496;
const SCREEN_HEIGHT = 368;
const SCREEN_INSET = 8;

// Desktop-only scroll takeover. Children are mounted exactly once: they start
// inside the MacBook screen and end as the full-width page content. Mobile and
// reduced-motion users receive the children directly, with no frame or mask.
export const MacbookExperience = ({ children }: MacbookExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionTopRef = useRef(0);
  const { width } = useMacbookViewport();
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = width >= 1024;
  const enabled = isDesktop && !prefersReducedMotion;

  const { scrollY } = useScroll();

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        sectionTopRef.current =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [width]);

  const progressAt = (y: number) =>
    Math.min(1, Math.max(0, (y - sectionTopRef.current) / TAKEOVER_DISTANCE));

  const screenScale = useTransform(scrollY, (y) => {
    const initial = Math.min(1, SCREEN_WIDTH / Math.max(1, width));
    const progress = progressAt(y);
    return initial + (1 - initial) * Math.min(1, progress / 0.72);
  });
  const screenRotateX = useTransform(
    scrollY,
    (y) => -26 * (1 - Math.min(1, progressAt(y) / 0.5)),
  );
  const screenY = useTransform(scrollY, (y) => {
    const stageHeight = Math.max(1, window.innerHeight - 64);
    const frameTop = Math.max(0, (stageHeight - FRAME_HEIGHT) / 2);
    return (frameTop + SCREEN_INSET) * (1 - Math.min(1, progressAt(y) / 0.72));
  });
  const frameOpacity = useTransform(scrollY, (y) =>
    1 - Math.min(1, Math.max(0, (progressAt(y) - 0.5) / 0.35)),
  );

  if (!enabled) {
    return <>{children}</>;
  }

  const frameTop = Math.max(
    0,
    (Math.max(1, window.innerHeight - 64) - FRAME_HEIGHT) / 2,
  );

  return (
    <section ref={sectionRef} aria-label="Portfolio experience" className="relative">
      <div className="pointer-events-none sticky top-16 z-20 h-[calc(100vh-4rem)] overflow-hidden [perspective:1400px]">
        <motion.div style={{ opacity: frameOpacity }} className="absolute inset-0">
          {/* Ivory mask with a transparent window hides content outside the screen. */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: frameTop + SCREEN_INSET,
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              boxShadow: "0 0 0 100vmax var(--color-paper)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <MacbookFrame />
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{
          scale: screenScale,
          rotateX: screenRotateX,
          y: screenY,
          transformPerspective: 1400,
          transformOrigin: "top center",
        }}
        className="relative z-10 -mt-[calc(100vh-4rem)] bg-paper will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};
