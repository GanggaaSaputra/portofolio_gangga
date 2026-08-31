import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* Atribut alt diisi */}
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto dark:text-white">
          {/* Atribut alt diisi */}
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email Icon"
            className="w-6"
          />
          syahputragangga999@gmail.com
        </div>
      </div>

      {/* Menambahkan dark:border-white/50 dan dark:text-white/80 untuk Dark Mode */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-white/50 dark:text-white/80">
        <p>© 2026 Gangga Aditya Saputra. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/GanggaaSaputra"
              className="hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gangga-aditya-saputra"
              className="hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {/* Link Instagram dibersihkan dari parameter tracking */}
            <a
              target="_blank"
              href="https://www.instagram.com/gnggsptr_/"
              className="hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
