"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function SalesForecastDetail() {
  // 1. Siapkan Array berisi daftar gambar lu di sini
  // Pastikan nama file ini sesuai dengan yang ada di folder public lu
  const images = [
    "/forecast-1.png",
    "/forecast-2.png",
    "/forecast-3.png",
    "/forecast-4.png",
    "/forecast-5.png",
    "/forecast-6.png",
    "/forecast-7.png",
    "/forecast-8.png",
    "/forecast-9.png",
  ];

  // 2. State untuk melacak gambar yang sedang aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Fungsi untuk geser kanan
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // 4. Fungsi untuk geser kiri
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
        Laptop Sales Forecasting System
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 font-ovo text-center"
      >
        A full-stack web application designed to predict future laptop sales
        accurately using the Triple Exponential Smoothing method. Built to
        process monthly historical sales data and provide actionable business
        insights.
      </motion.p>

      {/* Fitur Image Slider (Geser Gambar) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden mb-16 relative group shadow-lg"
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
            alt={`Sales Forecasting System Screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Tombol Kiri */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          &#10094;
        </button>

        {/* Tombol Kanan */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          &#10095;
        </button>

        {/* Indikator Titik (Dots) di bawah gambar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
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
              This system was developed as a case study for Alibaba Original
              Store to solve the challenge of inventory management. By utilizing
              sales data from 2023 to 2025, the application calculates trends
              and seasonality through the Triple Exponential Smoothing
              algorithm, allowing the store to anticipate market demand and
              optimize their laptop stock efficiently.
            </p>

            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 dark:border-white/20 mt-10">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-white/80 space-y-3">
              <li>
                Implementation of the Triple Exponential Smoothing algorithm for
                accurate time-series forecasting.
              </li>
              <li>Dynamic processing of monthly sales data (2023–2025).</li>
              <li>Interactive data visualization and reporting dashboards.</li>
              <li>Secure backend architecture for database management.</li>
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
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                Express
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                MySQL
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-white/80">
              <li>
                <strong>Type:</strong> Academic Research Project
              </li>
              <li>
                <strong>Client:</strong> Alibaba Original Store
              </li>
              <li>
                <strong>Role:</strong> Full-Stack Developer
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <a
                href="https://github.com/GanggaaSaputra/sistem-peramalan-penjualan-laptop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}