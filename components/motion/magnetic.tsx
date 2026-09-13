"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type MagneticProps = {
  children: ReactNode;

  /**
   * How strongly the element follows the pointer.
   *
   * 0.1 = extremely subtle
   * 0.2 = noticeable
   * 0.35 = strong
   */
  strength?: number;

  /**
   * Maximum movement in pixels.
   *
   * This prevents the interaction from ever
   * becoming visually excessive.
   */
  maxDistance?: number;

  /**
   * Spring stiffness.
   */
  stiffness?: number;

  /**
   * Spring damping.
   */
  damping?: number;

  /**
   * How far outside the element the magnetic
   * interaction remains active.
   */
  radius?: number;

  className?: string;
};

export function Magnetic({
  children,
  strength = 0.18,
  maxDistance = 12,
  stiffness = 180,
  damping = 22,
  radius = 24,
  className = "",
}: MagneticProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness,
    damping,
    mass: 0.35,
  });

  const springY = useSpring(y, {
    stiffness,
    damping,
    mass: 0.35,
  });

  /*
   * Magnetic interactions are intentionally disabled when:
   *
   * - the user prefers reduced motion
   * - the device doesn't have a fine pointer
   * - the viewport is touch-oriented
   */
  useEffect(() => {
    if (reducedMotion) {
      setEnabled(false);
      return;
    }

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const update = () => {
      setEnabled(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [reducedMotion]);

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabled || !elementRef.current) {
      return;
    }

    const rect = elementRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    const distance = Math.sqrt(
      distanceX * distanceX + distanceY * distanceY
    );

    /*
     * The pointer is outside the magnetic field.
     */
    if (distance > Math.max(rect.width, rect.height) / 2 + radius) {
      reset();
      return;
    }

    /*
     * Normalize the pointer's position relative
     * to the element's center.
     */
    const normalizedX = distanceX / (rect.width / 2);
    const normalizedY = distanceY / (rect.height / 2);

    /*
     * Clamp the result so the element never
     * travels farther than maxDistance.
     */
    const nextX = clamp(
      normalizedX * maxDistance * strength,
      -maxDistance,
      maxDistance
    );

    const nextY = clamp(
      normalizedY * maxDistance * strength,
      -maxDistance,
      maxDistance
    );

    x.set(nextX);
    y.set(nextY);
  };

  return (
    <motion.div
      ref={elementRef}
      style={
        {
          x: enabled ? springX : 0,
          y: enabled ? springY : 0,
        } as {
          x: MotionValue<number> | number;
          y: MotionValue<number> | number;
        }
      }
      onMouseMove={handlePointerMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}