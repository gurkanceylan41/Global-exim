import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { FaWhatsapp, FaInstagram, FaXTwitter, FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-20 md:h-24 flex justify-between items-center">
        {/* Logo - Fixed Size */}
        <Link href="/" className="flex items-center shrink-0 z-10">
          <img
            src="/logo1.png"
            alt="Global Exim Logo"
            className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/About"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Hakkımızda
          </Link>
          <Link
            href="/Products"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            Ürünler
          </Link>

          <Link
            href="/Contact"
            className="relative py-2 hover:text-[#53B6F0] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#53B6F0] after:transition-all after:duration-300 hover:after:w-full"
          >
            İletişim
          </Link>
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
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#53B6F0] transition-all duration-300 text-2xl"
            aria-label="Menüyü Aç"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
