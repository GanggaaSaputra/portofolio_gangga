"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function DesignPortfolioDetail() {
  // 1. Array gambar desain lu
  const images = [
    "/design-1.png",
    "/design-2.png",
    "/design-3.png",
    "/design-4.png",
    "/design-5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-[5%] sm:px-[10%] lg:px-[12%] dark:bg-darkTheme dark:text-white">
      {/* Tombol Back */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <span>&larr;</span> Back
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-ovo mb-6 text-center"
      >
        Logo & Brand Identity Design
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 font-ovo text-center"
      >
        A showcase of my visual communication and graphic design skills,
        specializing in vector illustration, brand identity creation, and
        large-scale promotional layouts using CorelDRAW.
      </motion.p>

      {/* Fitur Image Slider (Geser Gambar) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full aspect-square md:aspect-video bg-[#FFFBE7] dark:bg-gray-800 rounded-xl overflow-hidden mb-16 relative group shadow-lg flex items-center justify-center"
      >
        {/* Gambar yang ditampilkan dengan efek animasi per index */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <Image
            src={images[currentIndex]}
            alt={`Graphic Design Showcase ${currentIndex + 1}`}
            fill
            className="object-contain" // Diubah ke object-contain agar logo tidak terpotong
          />
        </motion.div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              &#10095;
            </button>
          </>
        )}

        {/* Indikator Titik */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentIndex === index
                    ? "bg-black dark:bg-white scale-125"
                    : "bg-black/30 dark:bg-white/50 hover:bg-black/50"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Grid Layout untuk Konten Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Kolom Kiri: Overview & Fitur */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 dark:border-white/20">
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
              This featured project is the official emblem designed for the
              KKN-48 program in Desa Sungai Teluk, Bawean, Gresik. The logo
              elegantly integrates the silhouette of the endemic Bawean Deer
              with dynamic wave and contour patterns, reflecting both the
              geographic identity and the vibrant spirit of the local community.
            </p>
            <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
              Beyond crafting philosophical community identities, my graphic
              design expertise extends to commercial marketing materials. I am
              experienced in conceptualizing and rendering large-scale print
              assets—such as 400cm x 150cm promotional banners for laptop credit
              campaigns—ensuring that vector lines remain crisp and colors stay
              accurate from screen to printing press.
            </p>

            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 dark:border-white/20 mt-10">
              Design Competencies
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-white/80 space-y-3">
              <li>Vector Illustration & Iconography.</li>
              <li>Brand Identity & Logo Conceptualization.</li>
              <li>Color Psychology and Typography Selection.</li>
              <li>Large-format Print Preparation (Banners, Posters, etc.).</li>
            </ul>
          </motion.div>
        </div>

        {/* Kolom Kanan: Tech Stack & Info */}
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-darkHover/30 p-6 rounded-xl border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4">Tools & Software</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                CorelDRAW
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                Vector Graphics
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                CMYK Print Prep
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-white/80">
              <li>
                <strong>Category:</strong> Graphic Design & Branding
              </li>
              <li>
                <strong>Featured:</strong> KKN-48 Bawean Emblem
              </li>
              <li>
                <strong>Role:</strong> Graphic Designer
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
