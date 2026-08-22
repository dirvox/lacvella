"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#e7e3f2] overflow-hidden pt-28 pb-16 flex flex-col justify-between">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Hero Grid / Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow">
        
        {/* Left Column (Desktop Text & Left Floating Card) */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-6 text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm mb-4 mx-auto lg:mx-0">
              {/* <Sparkles size={14} className="text-[#9b8ac4]" /> */}
              <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
                Ready-to-Wear Press-Ons
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.1]">
              Luxury <br />
              <span className="font-normal">Nail Art</span>
            </h1>
            
            <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-sm mx-auto lg:mx-0 font-light leading-relaxed">
              Salon-quality designer nails delivered to your doorstep. Apply in minutes, stay flawless for weeks.
            </p>
          </motion.div>

          {/* Floating Card 1: Shop Collection (Visible on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col p-6 bg-white/70 backdrop-blur-md border border-white/90 rounded-3xl shadow-xl max-w-[260px] text-left space-y-3 hover:shadow-2xl transition-all duration-300 group"
          >
            <p className="text-lg font-medium text-neutral-800 leading-snug">
              Handcrafted <br />Designer Sets
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-between py-2.5 px-4 text-sm font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-sm group-hover:gap-2"
            >
              <span>Shop Collection</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Center Column (Model Image) */}
        <div className="lg:col-span-6 relative flex justify-center items-center my-4 lg:my-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[420px] sm:h-[500px] lg:h-[630px] overflow-hidden flex items-end justify-center rounded-3xl lg:rounded-none shadow-2xl lg:shadow-none bg-neutral-200/50"
          >
            {/* Model Image Source */}
            <img
              src="/hero-girl.png"
              alt="Luxury Press-On Nails Model"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            
            {/* Subtle Gradient Overlay for enhanced contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
            
            {/* Mobile Cards Overlay (Optimized for small screens) */}
            <div className="absolute inset-x-4 bottom-4 flex flex-row justify-between gap-3 lg:hidden z-20">
              <div className="flex-1 p-3.5 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl shadow-lg text-left">
                <p className="text-xs font-semibold text-neutral-800 leading-tight">
                  Salon Quality
                </p>
                <a
                  href="#shop"
                  className="mt-2 block text-center py-1.5 px-2 text-xs font-medium text-white bg-[#9b8ac4] rounded-full shadow-sm"
                >
                  Shop Now
                </a>
              </div>
              
              <div className="flex-1 p-3.5 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl shadow-lg text-left flex flex-col justify-between">
                <div className="flex items-center space-x-1 text-neutral-900 font-bold text-base">
                  <span>4.9</span>
                  <Star size={14} className="fill-neutral-900 text-neutral-900" />
                </div>
                <p className="text-[11px] text-neutral-600 leading-tight">
                  Over 12K happy buyers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Desktop Right Floating Cards) */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-6 items-center lg:items-end z-20">
          
          {/* Floating Card 2: Reusable Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex flex-col p-6 bg-white/70 backdrop-blur-md border border-white/90 rounded-3xl shadow-xl w-[260px] text-left space-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#9b8ac4] mb-1">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 leading-snug">
              Reusable &amp; <br />Damage-Free
            </h3>
            <p className="text-xs text-neutral-600">Pop them on, take them off safely.</p>
          </motion.div>

          {/* Floating Card 3: Ratings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex flex-col p-6 bg-white/70 backdrop-blur-md border border-white/90 rounded-3xl shadow-xl w-[260px] text-left space-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-1.5 text-neutral-900 font-bold text-2xl">
              <span>4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neutral-900 text-neutral-900" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-600">Over 12K happy customers</p>
          </motion.div>
        </div>

      </div>

      {/* Massive Background Typography Banner ("PRESS ON NAILS") */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-center whitespace-nowrap text-[10vw] font-light tracking-widest text-white/60 uppercase"
        >
          Press On Nails
        </motion.div>
      </div>
    </section>
  );
}