/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Ilink {
  name: string;
  url: string;
  icon: IconType;
}

const link: Ilink[] = [
  {
    name: "facebook",
    url: "/",
    icon: BsFacebook,
  },
  {
    name: "linkedin",
    url: "/",
    icon: BsLinkedin,
  },
  {
    name: "instagram",
    url: "/",
    icon: BsInstagram,
  },
  {
    name: "github",
    url: "/",
    icon: BsGithub,
  },
];

const About = () => {
  return (
    <section
      id="about-me"
      className="mt-32 mb-32 flex flex-col gap-4 bg-grayLight text-black text-xl rounded-3xl shadow-2xl p-10 w-10/12"
    >
      <h1 className="text-3xl text-center font-semibold pb-5">Tentang Kami</h1>
      <p>
        Halo !, Selamat datang di website kami , di sini Anda bisa dengan mudah
        dan nyaman mengakses Al-Qur'an secara online, sebagai sesama umat muslim
        tentunya kita harus senantiasa menjadikan Al-Quran sebagai pedoman,
        petunjuk dan sumber pahala yang luar biasa.
      </p>
      <p>
        Tujuan kami membuat website ini bukan lain adalah untuk membantu semua
        umat muslim agar bisa menggunakanya kapanpun dan di manapun , bisa
        memahami dan mengamalkan pesan-pesan yang terkandung dalam setiap
        lantunan ayat suci Al-Qur'an dalam kehidupan sehari-hari. Di website ini
        terdapat fitur-fitur untuk menjelajahi secara detail ayat-ayat specifik
        Al-Quran.
      </p>
      <p>
        Selain itu kami juga menyediakan fitur pemutar suara bacaan murrotal
        indah yang dapat Anda dengarkan dari semua surah-surah di Al-Qur'an
      </p>
      <p>
        Jika Anda memiliki pertanyaan , atau pun kritik - saran , silahkan
        hubungi kami melalui kontak yang tersedia di bawah ini, semoga kita
        tetap istiqomah menjalankan hak dan kewajiban sebagai umat muslim dan
        terima kasih Sukses Selalu !
      </p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.2, duration: 1 },
        }}
      >
        <div
          id="contact"
          className="w-full flex justify-center text-white text-3xl"
        >
          <ul className="flex gap-5 text-center bg-greenDark p-4 rounded-2xl">
            {link.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <item.icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
