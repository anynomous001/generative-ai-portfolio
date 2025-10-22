"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // Static import of three

export default function VantaDotsBg({ children }: any) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaInstance = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!vantaRef.current || vantaInstance.current) return;

      const { default: DOTS } = await import("vanta/dist/vanta.dots.min"); // dynamic import of Vanta only

      if (!mounted || !vantaRef.current) return;

      try {
        vantaInstance.current = DOTS({
          el: vantaRef.current,
          THREE, // pass static import
          backgroundColor: 0x000000,
          color: 0xffffff,
          color2: 0x9ca3af,
          size: 5,
          spacing: 22,
          showLines: true,
        });

        const canvas = vantaRef.current.querySelector("canvas") as HTMLCanvasElement | null;
        if (canvas) {
          canvas.style.position = "absolute";
          canvas.style.inset = "0";
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.pointerEvents = "none";
          canvas.style.zIndex = "0";
          canvas.style.display = "block";
          canvas.style.mixBlendMode = "screen";
          canvas.style.opacity = "0.9";
        }

        console.info("VantaDotsBg initialized", !!vantaInstance.current);
      } catch (err) {
        console.error("Vanta init error:", err);
      }
    }

    init();

    return () => {
      mounted = false;
      if (vantaInstance.current && typeof vantaInstance.current.destroy === "function") {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
