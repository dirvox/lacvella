"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Flame, ShoppingBag, Heart } from "lucide-react";

// 4 Trending Featured Products with a balanced magazine layout
const TRENDING_PRODUCTS = [
  {
    id: 101,
    name: "Royal Diamond Petals",
    category: "Signature Luxury Set",
    price: "₹1,999",
    originalPrice: "₹2,899",
    image: "/hero-girl.webp",
    badge: "Most Loved 🔥",
    description: "Hand-sculpted 3D floral art with encapsulated crystal dust.",
  },
  {
    id: 102,
    name: "Velvet Cat-Eye Wine",
    category: "Limited Edition",
    price: "₹1,799",
    originalPrice: "₹2,599",
    image: "/hero-girl.webp",
    badge: "Trending #1",
    description: "Deep mesmerizing magnetic shimmer that shifts with every angle.",
  },
  {
    id: 103,
    name: "Golden Chrome French",
    category: "Editorial Collection",
    price: "₹1,699",
    originalPrice: "₹2,499",
    image: "/hero-girl.webp",
    badge: "Celebrity Choice",
    description: "Modern metallic gold tips paired with a milky neutral base.",
  },
  {
    id: 104,
    name: "Blush Ombre Aura",
    category: "Exclusive Drop",
    price: "₹1,599",
    originalPrice: "₹2,299",
    image: "/hero-girl.webp",
    badge: "Bestseller ✨",
    description: "Soft ethereal airbrushed aura glow designed for everyday elegance.",
  },
];

export default function TrendingSection() {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Decorative Blur Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-400/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-4"
            >
              <Flame size={14} className="text-rose-500 fill-rose-500" />
              <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
                This Week's Viral Drop
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
            >
              Trending <span className="font-normal">Masterpieces</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-600 font-light max-w-sm"
          >
            Handcrafted sets currently taking social media by storm. Grab yours before they sell out.
          </motion.p>
        </div>

        {/* Unique Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Item 1: Large Featured Card (Spans 7 columns on desktop) */}
          {TRENDING_PRODUCTS.slice(0, 1).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 group relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2.5rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 blur-3xl pointer-events-none rounded-full" />

              {/* Top row tags */}
              <div className="flex items-center justify-between relative z-10 mb-6">
                <span className="px-4 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded-full shadow-md tracking-wide">
                  {item.badge}
                </span>
                <button
                  onClick={() => toggleLike(item.id)}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 transition-all"
                >
                  <Heart
                    size={18}
                    className={`transition-colors ${
                      liked[item.id] ? "fill-rose-500 text-rose-500" : "text-neutral-700"
                    }`}
                  />
                </button>
              </div>

              {/* Center Image with immersive zoom */}
              <div className="relative w-full h-80 sm:h-[420px] rounded-[2rem] overflow-hidden bg-neutral-100 my-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom details & action */}
              <div className="pt-6 relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#9b8ac4] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1 max-w-sm">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-2.5 mt-3">
                    <span className="text-xl font-bold text-neutral-900">{item.price}</span>
                    <span className="text-sm font-light text-neutral-400 line-through">{item.originalPrice}</span>
                  </div>
                </div>

                <a
                  href="#checkout"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-md hover:shadow-lg shrink-0 group-hover:scale-105"
                >
                  <ShoppingBag size={16} />
                  <span>Grab This Look</span>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Items 2, 3 & 4: Stacked Column (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-2 justify-between">
            {TRENDING_PRODUCTS.slice(1, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
                className="group relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2.2rem] p-5 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row gap-5 items-center overflow-hidden"
              >
                {/* Small Image Box */}
                <div className="relative w-full sm:w-36 h-48 sm:h-36 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/85 backdrop-blur-md text-neutral-800 text-[10px] font-medium rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Details Box */}
                <div className="flex flex-col justify-between flex-grow w-full space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-[#9b8ac4] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-base font-medium text-neutral-900 tracking-tight leading-snug mt-0.5">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 transition-all shrink-0"
                    >
                      <Heart
                        size={14}
                        className={`transition-colors ${
                          liked[item.id] ? "fill-rose-500 text-rose-500" : "text-neutral-700"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-neutral-900">{item.price}</span>
                    <span className="text-xs font-light text-neutral-400 line-through">{item.originalPrice}</span>
                  </div>

                  <a
                    href="#checkout"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-sm"
                  >
                    <span>Buy Now</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}