import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Project
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-outfit"
      >
        My Latest Project
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my web development portfolio. Explore my latest full-stack
        projects, including a web-based sales forecasting system utilizing
        Triple Exponential Smoothing, built with React, Node.js, and MySQL.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <Link href={project.link || "#"} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{
                backgroundImage: `url(${project.bgImage.src || project.bgImage})`,
              }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
