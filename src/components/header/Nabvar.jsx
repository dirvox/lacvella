"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "New Clients", href: "#new-clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-neutral-900"
        >
          
          <img src="/logo.png" className="h-14" alt="logo" />
        </motion.a>

        {/* Desktop Nav Links (Floating Pill Style) */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-1 bg-white/40 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full shadow-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors rounded-full hover:bg-white/50"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>

        {/* Desktop CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <a
            href="#book"
            className="px-5 py-2.5 text-sm font-medium text-neutral-800 bg-[#d4cceb] hover:c-purple-300 transition-all rounded-full shadow-sm hover:shadow"
          >
            Book Now
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="#book"
            className="px-4 py-2 text-xs font-medium text-neutral-800 bg-[#d4cceb] rounded-full"
          >
            Book Now
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}