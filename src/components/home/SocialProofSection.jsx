"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, MessageCircle } from "lucide-react";

// Social Proof / Instagram & TikTok UGC Wall Data
const UGC_POSTS = [
  {
    id: 1,
    username: "@aanya.style",
    handle: "Mumbai",
    image: "/hero-girl.png", // Replace with client selfie / nail shot
    likes: "2.4K",
    comments: "142",
    caption: "Obsessed with these custom press-ons! They look completely natural 😍💅",
    platform: "Instagram",
  },
  {
    id: 2,
    username: "@riya_nails",
    handle: "Delhi",
    image: "/hero-girl.png",
    likes: "4.8K",
    comments: "310",
    caption: "The chrome finish on these is unreal ✨ Got so many compliments today!",
    platform: "TikTok",
  },
  {
    id: 3,
    username: "@natasha.V",
    handle: "Bangalore",
    image: "/hero-girl.png",
    likes: "1.9K",
    comments: "95",
    caption: "Easiest application ever. Salon quality right at home in 5 minutes 🤍",
    platform: "Instagram",
  },
  {
    id: 4,
    username: "@simran_k",
    handle: "Chandigarh",
    image: "/hero-girl.png",
    likes: "5.1K",
    comments: "420",
    caption: "The 3D floral art is next level! Reusable and sturdy too 🌸🔥",
    platform: "TikTok",
  },
];

export default function SocialProofSection() {
  return (
    <section className="relative min-h-screen bg-[#e7e3f2] py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-purple-300/20 blur-[130px] rounded-full pointer-events-none" />

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
            {/* <Instagram size={14} className="text-[#9b8ac4]" /> */}
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              As Seen On Instagram &amp; TikTok
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight"
          >
            Loved by <span className="font-normal">12,000+ Trendsetters</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 font-light"
          >
            Explore real selfies and reviews shared by our gorgeous community wearing our signature nail sets.
          </motion.p>
        </div>

        {/* UGC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UGC_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Square Image Box (1:1 ratio) with platform badge */}
              <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={post.image}
                  alt={post.username}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/85 backdrop-blur-md text-neutral-800 text-[11px] font-medium rounded-full shadow-sm">
                  {post.platform}
                </span>
              </div>

              {/* Post Details */}
              <div className="px-2 pb-2 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{post.username}</h3>
                    <p className="text-[11px] text-neutral-400">{post.handle}</p>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-600 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Heart size={14} className="fill-rose-500 text-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} className="text-[#9b8ac4]" />
                      {post.comments}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}