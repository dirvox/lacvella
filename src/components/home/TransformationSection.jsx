"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";

// Before & After Transformation Data
const TRANSFORMATIONS = [
  {
    id: 1,
    title: "3D Floral Acrylic Sculpting",
    subtitle: "From bare natural nails to intricate bridal masterpiece",
    beforeImage: "/hero-girl.png", // Replace with your 'Before' image path
    afterImage: "/hero-girl.png",  // Replace with your 'After' image path
    tag: "Bridal Special",
  },
  {
    id: 2,
    title: "Golden Chrome French Glaze",
    subtitle: "Short weak nails upgraded to luxurious glossy length",
    beforeImage: "/hero-girl.png",
    afterImage: "/hero-girl.png",
    tag: "Editorial Trend",
  },
  {
    id: 3,
    title: "Velvet Cat-Eye Manicure",
    subtitle: "Plain nails transformed with deep magnetic shimmer",
    beforeImage: "/hero-girl.png",
    afterImage: "/hero-girl.png",
    tag: "Most Requested",
  },
];

export default function TransformationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPositions, setSliderPositions] = useState({ 0: 50, 1: 50, 2: 50 });

  const handleSliderChange = (index, value) => {
    setSliderPositions((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-300/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-4"
          >
            <Sparkles size={14} className="text-[#9b8ac4]" />
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              Real Client Proof
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            Stunning <span className="font-normal">Transformations</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Drag the slider across each transformation to witness the magic of our precision nail artistry.
          </motion.p>
        </div>

        {/* Navigation Tabs for Transformations */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-3 no-scrollbar px-2">
          {TRANSFORMATIONS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`inline-flex items-center gap-2 py-3 px-6 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-md shadow-sm shrink-0 ${
                activeTab === index
                  ? "bg-neutral-900 text-white shadow-md scale-105"
                  : "bg-white/70 hover:bg-white text-neutral-800 border border-white/90"
              }`}
            >
              <CheckCircle2 size={16} className={activeTab === index ? "text-[#9b8ac4]" : "text-neutral-500"} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Transformation Comparison Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 bg-[#9b8ac4]/15 text-[#9b8ac4] text-xs font-semibold rounded-full tracking-wide">
                    {TRANSFORMATIONS[activeTab].tag}
                  </span>
                  <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mt-2">
                    {TRANSFORMATIONS[activeTab].title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light mt-1">
                    {TRANSFORMATIONS[activeTab].subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 bg-white/80 px-4 py-2 rounded-full border border-white/90 shadow-sm self-start md:self-auto">
                  <ArrowLeftRight size={14} className="text-[#9b8ac4]" />
                  <span>Drag Slider to Compare</span>
                </div>
              </div>

              {/* Interactive Before & After Image Comparison Slider Box */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-[2rem] overflow-hidden bg-neutral-200 select-none shadow-inner">
                
                {/* After Image (Background Layer) */}
                <img
                  src={TRANSFORMATIONS[activeTab].afterImage}
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                />
                <span className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-medium rounded-full shadow-md">
                  After ✨
                </span>

                {/* Before Image (Foreground Layer clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPositions[activeTab]}%` }}
                >
                  <img
                    src={TRANSFORMATIONS[activeTab].beforeImage}
                    alt="Before Transformation"
                    className="absolute inset-0 w-full h-full object-cover object-top max-w-none"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  <span className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-medium rounded-full shadow-md">
                    Before
                  </span>
                </div>

                {/* Range Input Control Overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[activeTab]}
                  onChange={(e) => handleSliderChange(activeTab, Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                {/* Visual Divider Line and Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-20 flex items-center justify-center"
                  style={{ left: `${sliderPositions[activeTab]}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-800">
                    <ArrowLeftRight size={14} />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}