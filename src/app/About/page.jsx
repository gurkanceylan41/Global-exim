"use client";

import React, { useState } from "react";
import {
  FaGlobe,
  FaShippingFast,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { value: "70+", label: "Ülke", icon: FaGlobe },
    { value: "1000+", label: "Mutlu Müşteri", icon: FaUsers },
    { value: "10K+", label: "Başarılı Sevkiyat", icon: FaShippingFast },
    { value: "15+", label: "Yıl Deneyim", icon: FaAward },
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Güvenilirlik",
      description: "ISO 9001 sertifikalı kalite yönetim sistemi",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaRocket,
      title: "İnovasyon",
      description: "Teknoloji odaklı çözümler ve dijital dönüşüm",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaUsers,
      title: "Müşteri Odaklılık",
      description: "7/24 destek ve özel çözümler",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: FaStar,
      title: "Mükemmellik",
      description: "En yüksek standartlarda hizmet kalitesi",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Kuruluş",
      description:
        "Global Exim, Türkiye'de uluslararası ticaret vizyonuyla kuruldu",
      color: "bg-blue-500",
    },
    {
      year: "2015",
      title: "Büyüme Dönemi",
      description: "50+ ülkeye hizmet veren güçlü bir yapıya kavuştuk",
      color: "bg-emerald-500",
    },
    {
      year: "2020",
      title: "Dijital Dönüşüm",
      description:
        "E-ticaret ve dijital platformlarda yeni hizmetler başlattık",
      color: "bg-purple-500",
    },
    {
      year: "2025",
      title: "Lider Pozisyon",
      description: "70+ ülkede faaliyet gösteren sektör lideri konumundayız",
      color: "bg-amber-500",
    },
  ];

  const tabs = [
    {
      id: "mission",
      label: "Misyon",
      icon: FaRocket,
      content:
        "Uluslararası ticarette güvenilir köprü olmak, müşterilerimize en yüksek kalitede hizmet sunarak küresel pazarlarda büyümelerine destek sağlamak. Sürdürülebilir ticaret anlayışı ile sektörde öncü olmayı hedefliyoruz.",
    },
    {
      id: "vision",
      label: "Vizyon",
      icon: FaBuilding,
      content:
        "2030 yılına kadar 100'den fazla ülkeye hizmet veren, teknoloji odaklı çözümleri ile sektörde referans alınan küresel bir ticaret şirketi olmak. Dijital dönüşüm ve inovasyon ile geleceği şekillendirmek.",
    },
    {
      id: "values",
      label: "Değerler",
      icon: FaStar,
      content:
        "Dürüstlük, şeffaflık, müşteri memnuniyeti, sürekli gelişim ve çevreye saygı. Bu değerler doğrultusunda tüm iş süreçlerimizi yönetiyor ve uzun vadeli iş ortaklıkları kuruyoruz.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Hero Section - STANDARDIZED pt-32 pb-12 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#53B6F0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-[#53B6F0] rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">
                Hakkımızda
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Global Exim
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent blur-xl animate-shine"></span>
              </span>
            </h1>

            <style jsx>{`
              @keyframes gradient {
                0%,
                100% {
                  background-position: 0% center;
                }
                50% {
                  background-position: 100% center;
                }
              }

              @keyframes shine {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(100%);
                  opacity: 0;
                }
              }

              .animate-gradient {
                animation: gradient 4s ease infinite;
              }

              .animate-shine {
                animation: shine 3s ease-in-out infinite;
              }
            `}</style>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
              15 yıldır uluslararası ticarette güvenin ve mükemmelliğin adresi
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-[#53B6F0]" />
                    <div className="text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-slate-900">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Mission/Vision/Values Section - py-24 */}
      <div className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex gap-2 p-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#53B6F0] text-white shadow-lg shadow-[#53B6F0]/50"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 shadow-2xl">
              <p className="text-slate-300 text-lg leading-relaxed text-center">
                {tabs.find((tab) => tab.id === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section - py-24 */}
      <div className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Temel <span className="text-[#53B6F0]">Değerlerimiz</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Başarımızın ardındaki prensipler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-[#53B6F0]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#53B6F0]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#53B6F0] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section - py-24 */}
      <div className="py-24 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bizim <span className="text-[#53B6F0]">Yolculuğumuz</span>
            </h2>
            <p className="text-slate-400 text-lg">15 yıllık başarı hikayemiz</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 to-amber-500 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl mb-6 relative z-10`}
                    >
                      {item.year}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - py-24 */}
      <div className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#53B6F0]/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Neden <span className="text-[#53B6F0]">Bizi</span>{" "}
                  Seçmelisiniz?
                </h2>
                <p className="text-slate-400 text-lg">
                  Müşterilerimize sunduğumuz benzersiz avantajlar
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "ISO 9001 sertifikalı kalite güvencesi",
                  "70+ ülkede kesintisiz hizmet ağı",
                  "15 yıllık sektör deneyimi ve uzmanlık",
                  "7/24 müşteri destek hizmeti",
                  "Rekabetçi fiyatlandırma ve özel çözümler",
                  "Zamanında teslimat garantisi",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-[#53B6F0]/50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#53B6F0] to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - py-24 */}
      <div className="py-24 px-6 bg-gradient-to-br from-[#53B6F0] to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            İş Birliği Yapmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Uluslararası ticarette bir sonraki adımı birlikte atalım
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-[#53B6F0] font-bold rounded-xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Teklif Al
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-[#53B6F0] transition-all duration-300">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
