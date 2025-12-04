"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent">
              Combly.ai
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#use-cases" className="text-gray-600 hover:text-primary transition-colors">
              Use Cases
            </a>
            <a
              href="#download"
              className="px-6 py-2 bg-primary-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
