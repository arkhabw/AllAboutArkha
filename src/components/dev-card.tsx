"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { User, QrCode } from "lucide-react";

export function DevCard() {
  const [imgError, setImgError] = useState(false);

  // Mouse position relative to card: values from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 20 });

  // Floating ambient back-glow position
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [-30, 30]), { stiffness: 80, damping: 20 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [-30, 30]), { stiffness: 80, damping: 20 });

  // Holographic reflection coordinates
  const highlightX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const highlightY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  
  // Radial gradient that moves across the card on hover to simulate reflective glass/plastic
  const backgroundHighlight = useMotionTemplate`radial-gradient(circle at ${highlightX} ${highlightY}, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position from center (-0.5 to 0.5)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Barcode line pattern (widths in pixels)
  const barcodePattern = [2, 1, 3, 1, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3, 2, 1, 1, 3, 4, 1, 2, 3, 1, 2];

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* 3D Perspective Wrapper */}
      <div 
        className="relative perspective-[1200px]"
        style={{ perspective: "1200px" }}
      >
        {/* Animated Glow in Background */}
        <motion.div
          className="absolute -inset-4 rounded-3xl bg-zinc-800/10 opacity-60 blur-3xl filter transition-opacity duration-500 group-hover:opacity-100"
          style={{
            x: glowX,
            y: glowY,
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)"
          }}
        />

        {/* The Card Container */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-[480px] w-[310px] cursor-grab active:cursor-grabbing rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-zinc-700/80 select-none overflow-hidden"
        >
          {/* Card Glass Highlight Layer */}
          <motion.div 
            className="absolute inset-0 pointer-events-none z-30" 
            style={{ background: backgroundHighlight }}
          />

          {/* Card Content Wrapper (to apply perspective-3d translation depth) */}
          <div className="flex h-full flex-col justify-between" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
            
            {/* Header: Company/System Name & Chip */}
            <div className="flex items-center justify-between" style={{ transform: "translateZ(10px)" }}>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Arkha Systems</span>
                <span className="text-[8px] font-mono tracking-widest text-zinc-600">SYS_ACCESS: LEVEL_03</span>
              </div>
              
              {/* Golden Smart Card Chip */}
              <div className="h-8 w-11 rounded-md bg-gradient-to-br from-amber-400/90 via-yellow-500/80 to-amber-600/90 p-[1px] shadow-inner shadow-amber-500/20">
                <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-[1.5px] rounded-[5px] bg-zinc-950/20 p-1">
                  <div className="border-r border-b border-zinc-950/30" />
                  <div className="border-r border-b border-zinc-950/30" />
                  <div className="border-b border-zinc-950/30" />
                  <div className="border-r border-zinc-950/30" />
                  <div className="border-r border-zinc-950/30" />
                  <div className="h-full w-full" />
                </div>
              </div>
            </div>

            {/* Avatar Frame: Photo Spot */}
            <div className="my-6 flex justify-center" style={{ transform: "translateZ(25px)" }}>
              <div className="relative h-32 w-32 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-[6px] shadow-inner overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10 pointer-events-none" />
                
                {/* Visual scanlines/grid behind photo */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.1)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-40" />

                {/* Avatar Image or fallback */}
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/avatar.jpg"
                    alt="Arkha"
                    onError={() => setImgError(true)}
                    className="h-full w-full rounded-lg object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                ) : (
                  // Stylized fallback silhouette for when no photo is placed in /public
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-zinc-950/30 text-zinc-600">
                    <User className="h-10 w-10 text-zinc-500 animate-pulse" />
                    <span className="mt-1 text-[7px] font-mono tracking-widest text-zinc-500 uppercase">No Photo Uploaded</span>
                  </div>
                )}
              </div>
            </div>

            {/* Middle: User details */}
            <div className="text-center" style={{ transform: "translateZ(15px)" }}>
              <h2 className="text-lg font-mono font-bold tracking-widest text-zinc-100 uppercase">
                Arkhandika B. W.
              </h2>
              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-0.5 text-[10px] font-mono tracking-wider text-emerald-500 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Software Developer
              </div>
            </div>

            {/* Details Table */}
            <div className="mt-4 border-t border-zinc-900 pt-4" style={{ transform: "translateZ(10px)" }}>
              <div className="grid grid-cols-2 gap-y-2 text-[9px] font-mono">
                <div className="flex flex-col">
                  <span className="text-zinc-600">SEC_PASS_ID</span>
                  <span className="text-zinc-400 font-semibold uppercase">2410.511.022</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-zinc-600">CLEARANCE</span>
                  <span className="text-zinc-400 font-semibold uppercase text-right">L3_FULL_DEV</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-600">SYSTEM_OS</span>
                  <span className="text-zinc-400 font-semibold uppercase">NEXTJS // ANDROID</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-zinc-600">ISSUE_DATE</span>
                  <span className="text-zinc-400 font-semibold uppercase text-right">07 / 2026</span>
                </div>
              </div>
            </div>

            {/* Footer: Barcode & QR Code */}
            <div className="mt-4 flex items-end justify-between border-t border-zinc-900/80 pt-4" style={{ transform: "translateZ(15px)" }}>
              {/* Procedural Barcode */}
              <div className="flex flex-col">
                <div className="flex h-6 items-center gap-[1px]">
                  {barcodePattern.map((width, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-600 h-full"
                      style={{ width: `${width * 0.7}px`, opacity: idx % 3 === 0 ? 0.7 : 0.9 }}
                    />
                  ))}
                </div>
                <span className="mt-1 text-[7px] font-mono tracking-widest text-zinc-600">CODE-X-88022</span>
              </div>

              {/* NFC Logo / Small QR code */}
              <div className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                <QrCode className="h-7 w-7 opacity-75" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
