"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Ruler, Wand2, HeartHandshake, ArrowRight } from "lucide-react";

// 3-Step Process Data for Press-On Nail Kits
const STEPS = [
  {
    step: "01",
    title: "Measure & Choose",
    description: "Find your perfect fit using our simple sizing guide or order a sizing kit first for 100% custom comfort.",
    icon: <Ruler size={24} className="text-[#9b8ac4]" />,
  },
  {
    step: "02",
    title: "Prep & Apply",
    description: "Buff your natural nails, wipe clean with the prep pad, apply professional glue or adhesive tabs, and press on.",
    icon: <Wand2 size={24} className="text-[#9b8ac4]" />,
  },
  {
    step: "03",
    title: "Flaunt for Weeks",
    description: "Enjoy salon-quality luxury nails instantly. Reusable, damage-free, and designed to turn heads everywhere.",
    icon: <HeartHandshake size={24} className="text-[#9b8ac4]" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-4"
          >
            <Sparkles size={14} className="text-[#9b8ac4]" />
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              Effortless Application
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            How It <span className="font-normal">Works</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Get a salon-quality manicure in under 5 minutes from the comfort of your home. No UV light or messy acrylics needed.
          </motion.p>
        </div>

        {/* 3-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
            >
              <div>
                {/* Top Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-light text-neutral-300 tracking-tighter">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-neutral-900 tracking-tight group-hover:text-[#9b8ac4] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator line */}
              <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-medium text-neutral-500">
                <span>Step {item.step} of 03</span>
                <span className="text-[#9b8ac4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}