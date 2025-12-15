"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-20 md:h-24 flex justify-between items-center">
        {/* Logo - Fixed Size */}
        <a href="/" className="flex items-center shrink-0 z-10">
          <img
            src="/logo1.png"
            alt="Global Exim Logo"
            className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a
            href="/"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Ana Sayfa
          </a>
          <a
            href="/About"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Hakkımızda
          </a>
          <a
            href="/Products"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Ürünler
          </a>
          <a
            href="/Contact"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            İletişim
          </a>
        </nav>

        {/* Right Side - Social Icons & Menu */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/905368854619"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-lg"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hlydmr90/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/globalexim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-lg"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#53B6F0] transition-all duration-300 text-2xl"
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 md:top-24 left-0 w-full bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-4">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-[#53B6F0] rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Ana Sayfa
          </a>
          <a
            href="/About"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-[#53B6F0] rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Hakkımızda
          </a>
          <a
            href="/Products"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-[#53B6F0] rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Ürünler
          </a>
          <a
            href="/Contact"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-[#53B6F0] rounded-lg transition-all duration-300 border-b border-white/10"
          >
            İletişim
          </a>

          {/* Social Media Icons - Mobile */}
          <div className="flex items-center justify-center gap-4 pt-4 mt-2 border-t border-white/10">
            <a
              href="https://wa.me/905368854619"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hlydmr90/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/globalexim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#53B6F0] hover:scale-110 transition-all duration-300 text-xl"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
