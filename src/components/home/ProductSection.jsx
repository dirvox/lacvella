"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Sparkles, Star, Heart } from "lucide-react";

// Mock product data featuring high-end nail sets
const PRODUCTS = [
  {
    id: 1,
    name: "Blush Rose Quartz",
    price: "₹1,499",
    originalPrice: "₹2,199",
    image: "/hero-girl.webp",
    tag: "Bestseller",
    rating: "4.9",
    reviews: "1,240",
  },
  {
    id: 2,
    name: "Golden Chrome French",
    price: "₹1,699",
    originalPrice: "₹2,499",
    image: "/hero-girl.webp",
    tag: "New Arrival",
    rating: "5.0",
    reviews: "850",
  },
  {
    id: 3,
    name: "Pearl Minimalist",
    price: "₹1,299",
    originalPrice: "₹1,899",
    image: "/hero-girl.webp",
    tag: "Trending",
    rating: "4.8",
    reviews: "930",
  },
  {
    id: 4,
    name: "Velvet Cat-Eye Wine",
    price: "₹1,799",
    originalPrice: "₹2,599",
    image: "/hero-girl.webp",
    tag: "Limited Edition",
    rating: "4.9",
    reviews: "1,520",
  },
  {
    id: 5,
    name: "Nude Elegance Gloss",
    price: "₹1,199",
    originalPrice: "₹1,699",
    image: "/hero-girl.webp",
    tag: "Classic",
    rating: "4.7",
    reviews: "710",
  },
  {
    id: 6,
    name: "Royal Diamond Petals",
    price: "₹1,999",
    originalPrice: "₹2,899",
    image: "/hero-girl.webp",
    tag: "Luxury Set",
    rating: "5.0",
    reviews: "2,100",
  },
  {
    id: 7,
    name: "Silver Aurora Glaze",
    price: "₹1,599",
    originalPrice: "₹2,299",
    image: "/hero-girl.webp",
    tag: "Popular",
    rating: "4.8",
    reviews: "640",
  },
  {
    id: 8,
    name: "Milky Ombre Sparkle",
    price: "₹1,399",
    originalPrice: "₹1,999",
    image: "/hero-girl.webp",
    tag: "New",
    rating: "4.9",
    reviews: "980",
  },
  {
    id: 9,
    name: "Soft Lavender Chic",
    price: "₹1,499",
    originalPrice: "₹2,099",
    image: "/hero-girl.webp",
    tag: "Trending",
    rating: "4.8",
    reviews: "530",
  },
  {
    id: 10,
    name: "Smoky Marble Luxe",
    price: "₹1,899",
    originalPrice: "₹2,699",
    image: "/hero-girl.webp",
    tag: "Exclusive",
    rating: "5.0",
    reviews: "1,150",
  },
  {
    id: 11,
    name: "Champagne Glitter Tip",
    price: "₹1,599",
    originalPrice: "₹2,299",
    image: "/hero-girl.webp",
    tag: "Bestseller",
    rating: "4.9",
    reviews: "1,420",
  },
  {
    id: 12,
    name: "Matte Velvet Orchid",
    price: "₹1,399",
    originalPrice: "₹1,999",
    image: "/hero-girl.webp",
    tag: "Classic",
    rating: "4.7",
    reviews: "490",
  },
];

export default function ProductSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [likedItems, setLikedItems] = useState({});

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, PRODUCTS.length));
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="shop" className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
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
              Handcrafted Collection
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            Explore Signature <span className="font-normal">Press-On Sets</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Salon-quality luxury nails designed for effortless wear, easy removal, and reusable perfection.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {PRODUCTS.slice(0, visibleCount).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                className="group bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image Container with Luxury Badge and Wishlist Heart */}
                <div className="relative w-full h-72 sm:h-80 rounded-[1.5rem] overflow-hidden bg-neutral-100 mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none" />

                  {/* Tag Badge */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/85 backdrop-blur-md border border-white/90 text-neutral-800 text-xs font-medium rounded-full shadow-sm tracking-wide">
                    {product.tag}
                  </span>

                  {/* Interactive Wishlist Button */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-white/90 flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 transition-all"
                    aria-label="Wishlist"
                  >
                    <Heart
                      size={17}
                      className={`transition-colors ${
                        likedItems[product.id]
                          ? "fill-rose-500 text-rose-500"
                          : "text-neutral-700 hover:text-rose-500"
                      }`}
                    />
                  </button>

                  {/* Rating Badge inside image bottom-left */}
                  <div className="absolute bottom-3.5 left-3.5 px-2.5 py-1 bg-white/85 backdrop-blur-md border border-white/90 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star size={13} className="fill-neutral-900 text-neutral-900" />
                    <span className="text-xs font-bold text-neutral-900">{product.rating}</span>
                    <span className="text-[10px] text-neutral-500">({product.reviews})</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow justify-between px-2 pb-2 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-[#9b8ac4] transition-colors tracking-tight">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-2 mt-1.5">
                      <span className="text-lg font-bold text-neutral-900">
                        {product.price}
                      </span>
                      <span className="text-sm font-light text-neutral-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <a
                    href="#checkout"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-md hover:shadow-lg group-hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag size={16} />
                    <span>Buy Now</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < PRODUCTS.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center"
          >
            <button
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 py-3.5 px-8 text-sm font-medium text-neutral-900 bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Show More Designs</span>
              <ArrowRight size5={16} />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}