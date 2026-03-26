"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 140;

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // ezgif-frame-001.jpg -> ezgif-frame-140.jpg
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/ezgif/ezgif-frame-${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ensure canvas drawing is responsive
  const drawImage = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];

    // Set canvas dimensions to window inner size for full screen cover
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate aspect ratio for cover behavior
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  // Draw the first frame when images load
  useEffect(() => {
    if (imagesLoaded) {
      drawImage(0);
    }
  }, [imagesLoaded]);

  // Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    // Use requestAnimationFrame for smooth drawing
    requestAnimationFrame(() => drawImage(frameIndex));
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const currentScroll = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(currentScroll * FRAME_COUNT)
      );
      drawImage(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Overlay Content */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
            <div className="text-warm-white text-xl animate-pulse font-display">
              Loading Experience...
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] mb-6 text-warm-white tracking-wide drop-shadow-2xl">
            Crafted for <br /> Those Who <br /> Demand <span className="text-gold italic">More</span>
          </h1>
          <p className="text-warm-white text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light drop-shadow-lg">
            Experiencing the cinematic depth of flavor. Where every layer is an act of culinary defiance.
          </p>
          <div className="text-warm-white font-light text-sm tracking-widest uppercase mt-auto pb-12 animate-bounce">
            Scroll to discover
          </div>
        </div>
      </div>
    </div>
  );
}
