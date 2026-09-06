import React from "react";
import { motion } from "motion/react";

const publicationData = [
  {
    type: "Research Article",
    title:
      "Perancangan dan Simulasi Jaringan IP Camera Menggunakan Fitur VLAN: Studi Kasus CV Rozitech Multimdia Indonesia",
    journal: "Applied Informatics Research",
    year: "2026",
    description:
      "A study on designing and simulating an IP camera network with VLAN implementation at CV Rozitech Multimedia Indonesia, focusing on network segmentation, traffic management, and reliable video surveillance.",
    status: "Published",
    link: "https://garuda.kemdiktisaintek.go.id/documents/detail/5866584",
  },
  {
    type: "Undergraduate Thesis",
    title:
      "Sistem Peramalan Penjualan Laptop Menggunakan Metode Triple Exponential Smoothing (Studi Kasus: Alibaba Original Store)",
    journal: "Undergraduate Thesis Research",
    year: "2026",
    description:
      "A study on developing a laptop sales forecasting system using the Triple Exponential Smoothing method, with Alibaba Original Store as the case study, to support more accurate inventory planning and sales decisions.",
    status: "Published",
    link: "#",
  },
];

const Publication = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="publication"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Research & Publications
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Scientific Publications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Selected research and academic work exploring practical applications of
        software engineering, data, and technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
      >
        {publicationData.map((publication, index) => (
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            key={index}
            className="border border-gray-400 rounded-lg p-6 hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div className="flex items-center justify-between gap-4 mb-5 text-sm text-gray-600 dark:text-white/70">
              <span className="font-medium">{publication.type}</span>
              <span>{publication.year}</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              {publication.title}
            </h3>
            <p className="mt-2 text-sm font-ovo text-gray-600 dark:text-white/80">
              {publication.journal}
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-white/80">
              {publication.description}
            </p>

            <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-white/20">
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                {publication.status}
              </span>
              <a
                href={publication.link}
                className="text-sm font-medium hover:text-blue-500"
              >
                View Publication <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Publication;
