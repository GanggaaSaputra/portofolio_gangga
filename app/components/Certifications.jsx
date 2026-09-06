import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets, certificationData } from "@/assets/assets";
import { motion, AnimatePresence } from "motion/react";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCertificate ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate]);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="certifications"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Credentials
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Licenses & Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        A collection of my academic and professional credentials, including a
        D1 English Language Program and TOEFL-equivalent English proficiency
        certification from Universitas Muhammadiyah Gresik, along with three
        national Digital Talent Scholarship certifications: Associate Data
        Scientist + Python, Fundamental Assistant Web Developer, and
        Intermediate Assistant Web Developer.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {certificationData.map((cert, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col"
            onClick={() => openModal(cert)}
          >
            {/* REVISI: Background dikunci ke putih (bg-white) & border tetap terang (border-gray-200) di mode apapun */}
            <div className="w-full h-40 overflow-hidden rounded-md border border-gray-200 mb-4 bg-white p-2 flex items-center justify-center">
              {cert.thumbnail ? (
                <Image
                  src={cert.thumbnail}
                  alt={cert.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Thumbnail</span>
              )}
            </div>

            <h3 className="text-lg my-2 font-semibold text-gray-700 dark:text-white">
              {cert.title}
            </h3>

            <p className="text-gray-600 text-sm leading-5 dark:text-white/80 grow">
              {cert.full_description?.substring(0, 80) || ""}...
            </p>

            <button className="flex items-center gap-2 mt-5 text-sm font-medium hover:text-blue-500">
              View Details
              <Image
                src={assets.right_arrow}
                alt="Right Arrow"
                className="w-4 dark:invert"
              />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Komponen Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-darkHover rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative border border-gray-200 dark:border-gray-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Tutup SVG */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-500 bg-white/90 dark:bg-darkHover/90 shadow-sm rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                {/* Bagian Kiri: Kumpulan Gambar */}
                <div className="w-full md:w-1/2 flex-1 overflow-y-auto p-6 md:p-10 bg-gray-50 dark:bg-gray-800/50 flex flex-col gap-6">
                  {Array.isArray(selectedCertificate.full_image) ? (
                    selectedCertificate.full_image.map((img, idx) =>
                      img ? (
                        <div
                          key={idx}
                          className="shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0"
                        >
                          <Image
                            src={img}
                            alt={`${selectedCertificate.title} - Page ${idx + 1}`}
                            width={800}
                            height={1130}
                            className="w-full h-auto object-contain bg-white"
                          />
                        </div>
                      ) : null,
                    )
                  ) : selectedCertificate.full_image ? (
                    <div className="shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0">
                      <Image
                        src={selectedCertificate.full_image}
                        alt={selectedCertificate.title}
                        width={800}
                        height={1130}
                        className="w-full h-auto object-contain bg-white"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-40 flex items-center justify-center text-gray-500 italic">
                      Gambar sertifikat belum tersedia.
                    </div>
                  )}
                </div>

                {/* Bagian Kanan: Detail Sertifikat */}
                <div className="w-full md:w-1/2 flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-5">
                  <h2 className="text-3xl font-ovo text-gray-800 dark:text-white">
                    {selectedCertificate.title}
                  </h2>

                  <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-white/90 font-sans border-b border-gray-200 dark:border-gray-700 pb-4">
                    <p>
                      <strong>Penerbit:</strong> {selectedCertificate.issuer}
                    </p>
                    <p>
                      <strong>Tanggal Diterbitkan:</strong>{" "}
                      {selectedCertificate.date_issued}
                    </p>
                    {selectedCertificate.credential_id && (
                      <p>
                        <strong>ID Kredensial:</strong>{" "}
                        {selectedCertificate.credential_id}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed dark:text-white/80 font-ovo">
                    {selectedCertificate.full_description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certifications;
