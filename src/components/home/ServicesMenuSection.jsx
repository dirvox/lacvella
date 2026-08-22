"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, ArrowRight, HandMetal, Sparkle, Brush } from "lucide-react";

// Service categories strictly focused on Nails: Extensions, Products, and Polishes
const SERVICE_CATEGORIES = [
  {
    id: "extensions",
    name: "Nail Extensions",
    icon: <HandMetal size={18} />,
    services: [
      {
        name: "Custom Press-On Extensions (Full Kit)",
        duration: "Ready-to-wear",
        price: "₹1,499",
        description: "Handcrafted luxury press-on nail extensions complete with safe glue, buffer, and cuticle tools.",
        popular: true,
      },
      {
        name: "Acrylic Full Set Extensions",
        duration: "75 mins",
        price: "₹2,199",
        description: "Durable, premium sculpted length extensions tailored with your choice of shape and color.",
        popular: false,
      },
      {
        name: "Gel X Luxury Extensions",
        duration: "60 mins",
        price: "₹2,499",
        description: "Full-coverage soft gel extensions offering flawless durability and natural lightweight comfort.",
        popular: true,
      },
    ],
  },
  {
    id: "products",
    name: "Nail Care Products",
    icon: <Sparkle size={18} />,
    services: [
      {
        name: "Nourishing Cuticle Oil Serum",
        duration: "Home care",
        price: "₹599",
        description: "Organic botanical oil blend designed to heal dry cuticles and accelerate natural nail growth.",
        popular: true,
      },
      {
        name: "Nail Strengthening Base Coat",
        duration: "Home care",
        price: "₹799",
        description: "Professional protein-infused formula to prevent peeling, splitting, and brittle nails.",
        popular: false,
      },
      {
        name: "Press-On Removal & Care Kit",
        duration: "Home care",
        price: "₹499",
        description: "Everything you need to safely dissolve glue and maintain press-on nails for multiple re-uses.",
        popular: true,
      },
    ],
  },
  {
    id: "polish",
    name: "Nail Polishes",
    icon: <Brush size={18} />,
    services: [
      {
        name: "Mirror-Shine Gel Polish Set",
        duration: "30 mins per coat",
        price: "₹899",
        description: "Chip-resistant, highly pigmented professional gel polish available in trending seasonal shades.",
        popular: true,
      },
      {
        name: "Magnetic Cat-Eye Effect Polish",
        duration: "35 mins",
        price: "₹1,199",
        description: "Specialty light-reflective polish that creates a mesmerizing multidimensional velvet shimmer.",
        popular: true,
      },
      {
        name: "Breathable Classic Lacquer",
        duration: "20 mins",
        price: "₹699",
        description: "Air-permeable, fast-drying luxury regular polish formulated for healthy non-toxic wear.",
        popular: false,
      },
    ],
  },
];

export default function ServicesMenuSection() {
  const [activeCategory, setActiveCategory] = useState("extensions");

  const currentCategoryData = SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-300/20 blur-[130px] rounded-full pointer-events-none" />

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
              Nail Studio Catalog & Pricing
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            Explore Our <span className="font-normal">Nail Collections</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Discover professional nail extensions, maintenance products, and high-shine polishes.
          </motion.p>
        </div>

        {/* Tab Navigation Menu (Horizontal scrollable on mobile, centered on desktop) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar px-2">
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 py-3 px-6 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-md shadow-sm shrink-0 ${
                activeCategory === category.id
                  ? "bg-neutral-900 text-white shadow-md scale-105"
                  : "bg-white/70 hover:bg-white text-neutral-800 border border-white/90"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Cards List Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentCategoryData?.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Popular Tag */}
                {service.popular && (
                  <span className="absolute top-5 right-5 px-3 py-1 bg-[#9b8ac4]/15 text-[#9b8ac4] text-[11px] font-semibold rounded-full tracking-wide">
                    Bestseller
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
                    <Clock size={13} className="text-[#9b8ac4]" />
                    <span>{service.duration}</span>
                  </div>

                  <h3 className="text-xl font-medium text-neutral-900 group-hover:text-[#9b8ac4] transition-colors tracking-tight pr-12">
                    {service.name}
                  </h3>

                  <p className="text-sm text-neutral-600 font-light mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-400 block uppercase tracking-wider font-light">Price</span>
                    <span className="text-xl font-bold text-neutral-900">{service.price}</span>
                  </div>

                  <a
                    href="#book"
                    className="inline-flex items-center gap-1.5 py-2.5 px-5 text-xs font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-sm hover:shadow group-hover:scale-105"
                  >
                    <span>Get Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}