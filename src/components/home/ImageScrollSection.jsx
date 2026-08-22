"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Static mock data with square image assets matching the Lacvella aesthetic
const STATIC_IMAGES = [
  { id: 1, title: "Blush Rose Quartz", image: "/nails/1.png" },
  { id: 2, title: "Golden Chrome French", image: "/nails/nails6.png" },
  { id: 3, title: "Pearl Minimalist", image: "/nails/3.png" },
  { id: 4, title: "Velvet Cat-Eye Wine", image: "/nails/5.png" },
  { id: 5, title: "Nude Elegance Gloss", image: "/nails/4.png" },
  { id: 6, title: "Royal Diamond Petals", image: "/nails/nails6.png" },
];

export default function ImageScrollSection() {
  const duplicatedImages = [...STATIC_IMAGES, ...STATIC_IMAGES];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-[#e7e3f2] overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Visual Edge Fades matching the #e7e3f2 background */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-28 z-10 bg-gradient-to-r from-[#e7e3f2] via-[#e7e3f2]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-28 z-10 bg-gradient-to-l from-[#e7e3f2] via-[#e7e3f2]/80 to-transparent" />

      <div className="max-w-7xl mx-auto mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-3">
          <Sparkles size={14} className="text-[#9b8ac4]" />
          <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
            Lacvella Gallery Showcase
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
          As Seen on <span className="font-normal text-[#8a77b3]">Our Clients</span>
        </h2>
      </div>

      {/* Main Container Wrapper */}
      <div className="w-full overflow-hidden relative z-10">
        {/* GPU Accelerated CSS Marquee Track */}
        <div className="flex gap-6 marquee-track">
          {duplicatedImages.map((item, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] aspect-square rounded-[2rem] overflow-hidden bg-white/75 backdrop-blur-xl border border-white/90 shadow-xl hover:scale-105 transition-all duration-500 flex-shrink-0 relative group p-3"
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title || "Lacvella nail collection"}
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-white/85 backdrop-blur-md text-neutral-900 text-xs font-medium rounded-full shadow-sm">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded High-Performance CSS Scopes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-50% - 12px), 0, 0);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}