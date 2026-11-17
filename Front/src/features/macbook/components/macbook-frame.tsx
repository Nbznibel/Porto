"use client";

// Ported from the official Aceternity UI Macbook Scroll registry component
// (https://ui.aceternity.com/registry/macbook-scroll.json).
// The hardware stays untouched; the image screen is replaced by a transparent
// bezel so live React children can be rendered underneath it.

import type { ReactNode } from "react";
import { motion, type MotionValue } from "motion/react";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretDownFilled,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconCommand,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconWorld,
} from "@tabler/icons-react";
import { cn } from "../../../lib/utils";

export const MacbookFrame = ({
  className,
  screenRotateX,
}: {
  className?: string;
  screenRotateX: MotionValue<number>;
}) => (
  <div className={cn("relative [perspective:1200px]", className)} aria-hidden="true">
    {/* Lid spacer keeps the original frame height; the single tilted bezel below
        provides the X-axis inclination without a second visible border. No
        parent perspective here: the screen keeps the same width as the keyboard
        base instead of tapering away from it. */}
    <div className="relative">
      <div className="relative h-[12rem] w-[32rem]" />
      {/* Transparent front bezel. It keeps the X-axis tilt and reveals the live
          content rendered behind the inner screen area. */}
      <motion.div
        style={{
          scale: 1.25,
          rotateX: screenRotateX,
          transformPerspective: 800,
          transformOrigin: "top",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl border-8 border-[#010101] shadow-[0_0_0_1px_#272729_inset]"
      >
        <div data-macbook-screen className="relative h-full w-full rounded-lg">
          <div className="absolute left-1/2 top-0 h-2 w-16 -translate-x-1/2 rounded-b-xl bg-[#050505]" />
        </div>
      </motion.div>
    </div>

    {/* Base */}
    <div className="relative h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-[#1f1f21]">
      <div className="relative h-10 w-full">
        <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
      </div>
      <div className="relative flex">
        <div className="mx-auto h-full w-[10%] overflow-hidden">
          <SpeakerGrid />
        </div>
        <div className="mx-auto h-full w-[80%]">
          <Keypad />
        </div>
        <div className="mx-auto h-full w-[10%] overflow-hidden">
          <SpeakerGrid />
        </div>
      </div>
      <div
        className="mx-auto my-1 h-32 w-[40%] rounded-xl"
        style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
    </div>
  </div>
);

export const Keypad = () => (
  <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">esc</KBtn>
      <KBtn><IconBrightnessDown className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F1</span></KBtn>
      <KBtn><IconBrightnessUp className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F2</span></KBtn>
      <KBtn><IconTable className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F3</span></KBtn>
      <KBtn><IconSearch className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F4</span></KBtn>
      <KBtn><IconMicrophone className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F5</span></KBtn>
      <KBtn><IconMoon className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F6</span></KBtn>
      <KBtn><IconPlayerTrackPrev className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F7</span></KBtn>
      <KBtn><IconPlayerSkipForward className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F8</span></KBtn>
      <KBtn><IconPlayerTrackNext className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F9</span></KBtn>
      <KBtn><IconVolume3 className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F10</span></KBtn>
      <KBtn><IconVolume2 className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F11</span></KBtn>
      <KBtn><IconVolume className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F12</span></KBtn>
      <KBtn>
        <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
          <div className="h-full w-full rounded-full bg-black" />
        </div>
      </KBtn>
    </div>

    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn><span className="block">~</span><span className="mt-1 block">`</span></KBtn>
      <KBtn><span className="block">!</span><span className="block">1</span></KBtn>
      <KBtn><span className="block">@</span><span className="block">2</span></KBtn>
      <KBtn><span className="block">#</span><span className="block">3</span></KBtn>
      <KBtn><span className="block">$</span><span className="block">4</span></KBtn>
      <KBtn><span className="block">%</span><span className="block">5</span></KBtn>
      <KBtn><span className="block">^</span><span className="block">6</span></KBtn>
      <KBtn><span className="block">&</span><span className="block">7</span></KBtn>
      <KBtn><span className="block">*</span><span className="block">8</span></KBtn>
      <KBtn><span className="block">(</span><span className="block">9</span></KBtn>
      <KBtn><span className="block">)</span><span className="block">0</span></KBtn>
      <KBtn><span className="block">&mdash;</span><span className="block">_</span></KBtn>
      <KBtn><span className="block">+</span><span className="block"> = </span></KBtn>
      <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">delete</KBtn>
    </div>

    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">tab</KBtn>
      {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
        <KBtn key={key}><span className="block">{key}</span></KBtn>
      ))}
      <KBtn><span className="block">{`{`}</span><span className="block">{`[`}</span></KBtn>
      <KBtn><span className="block">{`}`}</span><span className="block">{`]`}</span></KBtn>
      <KBtn><span className="block">{`|`}</span><span className="block">{`\\`}</span></KBtn>
    </div>

    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">caps lock</KBtn>
      {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
        <KBtn key={key}><span className="block">{key}</span></KBtn>
      ))}
      <KBtn><span className="block">{`:`}</span><span className="block">{`;`}</span></KBtn>
      <KBtn><span className="block">{`"`}</span><span className="block">{`'`}</span></KBtn>
      <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">return</KBtn>
    </div>

    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">shift</KBtn>
      {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
        <KBtn key={key}><span className="block">{key}</span></KBtn>
      ))}
      <KBtn><span className="block">{`<`}</span><span className="block">{`,`}</span></KBtn>
      <KBtn><span className="block">{`>`}</span><span className="block">{`.`}</span></KBtn>
      <KBtn><span className="block">{`?`}</span><span className="block">{`/`}</span></KBtn>
      <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">shift</KBtn>
    </div>

    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
      <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-end pr-1"><span className="block">fn</span></div>
        <div className="flex w-full justify-start pl-1"><IconWorld className="h-[6px] w-[6px]" /></div>
      </KBtn>
      <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-end pr-1"><IconChevronUp className="h-[6px] w-[6px]" /></div>
        <div className="flex w-full justify-start pl-1"><span className="block">control</span></div>
      </KBtn>
      <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-end pr-1"><OptionKey className="h-[6px] w-[6px]" /></div>
        <div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
      </KBtn>
      <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-end pr-1"><IconCommand className="h-[6px] w-[6px]" /></div>
        <div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
      </KBtn>
      <KBtn className="w-[8.2rem]" />
      <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-start pl-1"><IconCommand className="h-[6px] w-[6px]" /></div>
        <div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
      </KBtn>
      <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
        <div className="flex w-full justify-start pl-1"><OptionKey className="h-[6px] w-[6px]" /></div>
        <div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
      </KBtn>
      <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
        <KBtn className="h-3 w-6"><IconCaretUpFilled className="h-[6px] w-[6px]" /></KBtn>
        <div className="flex">
          <KBtn className="h-3 w-6"><IconCaretLeftFilled className="h-[6px] w-[6px]" /></KBtn>
          <KBtn className="h-3 w-6"><IconCaretDownFilled className="h-[6px] w-[6px]" /></KBtn>
          <KBtn className="h-3 w-6"><IconCaretRightFilled className="h-[6px] w-[6px]" /></KBtn>
        </div>
      </div>
    </div>
  </div>
);

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => (
  <div
    className={cn(
      "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
      backlit && "bg-white/[0.2] shadow-xl shadow-white",
    )}
  >
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
        className,
      )}
      style={{
        boxShadow:
          "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
      }}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
          childrenClassName,
          backlit && "text-white",
        )}
      >
        {children}
      </div>
    </div>
  </div>
);

export const SpeakerGrid = () => (
  <div
    className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
    style={{
      backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
      backgroundSize: "3px 3px",
    }}
  />
);

const OptionKey = ({ className }: { className: string }) => (
  <svg fill="none" version="1.1" viewBox="0 0 32 32" className={className}>
    <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
    <polygon
      stroke="currentColor"
      strokeWidth={2}
      points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
    />
  </svg>
);
