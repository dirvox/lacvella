"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#e7e3f2] pt-20 pb-12 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-white/60">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-300/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Newsletter / Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-[2.5rem] p-8 sm:p-12 shadow-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/60 text-[#9b8ac4] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Join the VIP Club</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
              Get 10% off your <span className="font-normal">first luxury nail set</span>
            </h3>
            <p className="text-sm text-neutral-600 font-light mt-2">
              Subscribe for exclusive access to weekly viral drops, secret discount codes, and nail care tips.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="py-3.5 px-6 rounded-full bg-white/90 border border-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#9b8ac4] shadow-sm w-full sm:w-72"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 text-sm font-medium text-white bg-[#9b8ac4] hover:bg-[#8a77b3] transition-all rounded-full shadow-md hover:shadow-lg shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-light tracking-tight text-neutral-900">
              Luxury <span className="font-normal">Nails</span>
            </h2>
            <p className="text-sm text-neutral-600 font-light max-w-sm mx-auto md:mx-0 leading-relaxed">
              Salon-quality handcrafted press-on nails and professional care products designed for effortless beauty, instant application, and reusable perfection.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 hover:text-[#9b8ac4] transition-all">
                <FaInstagram size={17} />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 hover:text-[#9b8ac4] transition-all">
                <FaFacebookF size={16} />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-neutral-700 shadow-sm hover:scale-110 hover:text-[#9b8ac4] transition-all">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 font-light">
              <li><a href="#shop" className="hover:text-[#9b8ac4] transition-colors">Shop All Sets</a></li>
              <li><a href="#trending" className="hover:text-[#9b8ac4] transition-colors">Trending Drops</a></li>
              <li><a href="#transformations" className="hover:text-[#9b8ac4] transition-colors">Transformations</a></li>
              <li><a href="#howitworks" className="hover:text-[#9b8ac4] transition-colors">Sizing Guide</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 font-light">
              <li><a href="#faq" className="hover:text-[#9b8ac4] transition-colors">FAQs</a></li>
              <li><a href="#shipping" className="hover:text-[#9b8ac4] transition-colors">Shipping &amp; Delivery</a></li>
              <li><a href="#returns" className="hover:text-[#9b8ac4] transition-colors">Returns &amp; Exchanges</a></li>
              <li><a href="#contact" className="hover:text-[#9b8ac4] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 font-light">
              <li><a href="#privacy" className="hover:text-[#9b8ac4] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#9b8ac4] transition-colors">Terms of Service</a></li>
              <li><a href="#refund" className="hover:text-[#9b8ac4] transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4 text-center">
          <p>&copy; 2026 Luxury Nail Care. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={13} className="fill-rose-500 text-rose-500" />
            <span>for trendsetters</span>
          </p>
        </div>

      </div>
    </footer>
  );
}