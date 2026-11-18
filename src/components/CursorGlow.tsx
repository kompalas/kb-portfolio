"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CursorGlow.module.scss";

// Diameter of the glow in CSS pixels.
const SIZE = 500;
// Keep the accent subdued in both themes.
const OPACITY = { light: 0.14, dark: 0.08 };
// Fraction of the remaining distance covered on each animation frame.
const EASING = 0.14;

export function CursorGlow() {
  const [isSupported, setIsSupported] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSupport = () => setIsSupported(hoverPointer.matches && !reducedMotion.matches);

    updateSupport();
    hoverPointer.addEventListener("change", updateSupport);
    reducedMotion.addEventListener("change", updateSupport);

    return () => {
      hoverPointer.removeEventListener("change", updateSupport);
      reducedMotion.removeEventListener("change", updateSupport);
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    const glow = glowRef.current;
    if (!isSupported || !layer || !glow) return;

    glow.style.setProperty("--cursor-glow-size", `${SIZE}px`);
    glow.style.setProperty("--cursor-glow-light-opacity", String(OPACITY.light));
    glow.style.setProperty("--cursor-glow-dark-opacity", String(OPACITY.dark));

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId: number | null = null;

    const animate = () => {
      currentX += (targetX - currentX) * EASING;
      currentY += (targetY - currentY) * EASING;
      glow.style.setProperty("--cursor-glow-x", `${currentX}px`);
      glow.style.setProperty("--cursor-glow-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        currentX = targetX;
        currentY = targetY;
        glow.style.setProperty("--cursor-glow-x", `${currentX}px`);
        glow.style.setProperty("--cursor-glow-y", `${currentY}px`);
        frameId = null;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      layer.style.opacity = "1";
      if (frameId === null) frameId = window.requestAnimationFrame(animate);
    };

    const hideGlow = () => {
      layer.style.opacity = "0";
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) hideGlow();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", hideGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", hideGlow);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [isSupported]);

  if (!isSupported) return null;

  return (
    <div ref={layerRef} className={styles.layer} aria-hidden="true">
      <div ref={glowRef} className={styles.glow} />
    </div>
  );
}
