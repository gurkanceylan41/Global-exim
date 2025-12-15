"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaGlobe,
  FaShippingFast,
  FaAward,
  TrendingUp,
} from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
