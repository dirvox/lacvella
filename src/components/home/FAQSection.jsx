"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, HelpCircle } from "lucide-react";

// FAQ Data for Press-On Nail Brand
const FAQ_ITEMS = [
  {
    question: "How long do press-on nail sets last?",
    answer: "When applied with our professional nail glue, our luxury sets securely last for 2 to 3 weeks. If you prefer to change your designs frequently, you can use our adhesive tabs for 2 to 3 days of wear.",
  },
  {
    question: "Are the press-on nail sets reusable?",
    answer: "Yes, absolutely! Because we craft our sets using high-grade salon acrylic and gel, you can safely remove them, clean off any old adhesive, and wear them multiple times.",
  },
  {
    question: "How do I find my correct nail size?",
    answer: "You can either use our simple online sizing guide (measuring your nail width in millimeters) or order our inexpensive sizing kit first to try on all sizes for a 100% custom fit.",
  },
  {
    question: "What comes inside the nail package?",
    answer: "Each order includes your custom handcrafted set of 10 nails, professional nail glue, adhesive jelly tabs, a double-sided nail file, a cuticle pusher, an alcohol prep pad, and instructions.",
  },
  {
    question: "How do I safely remove the press-on nails without damage?",
    answer: "Soak your hands in warm soapy water with a little bit of cuticle oil for 10–15 minutes. Gently use the wooden cuticle stick provided to lift the nails off from the sides. Never force or pull them off dry.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-300/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-4"
          >
            <HelpCircle size={14} className="text-[#9b8ac4]" />
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              Got Questions?
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            Frequently Asked <span className="font-normal">Questions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Everything you need to know about our application process, sizing, and reusability.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-neutral-900 pr-4">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-neutral-700 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#9b8ac4] text-white" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-0 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200/40">
                        <p className="pt-4">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}