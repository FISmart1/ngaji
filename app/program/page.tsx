'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const programs = [
  {
    id: 1,
    title: 'Fiqih Ibadah',
    level: 'Pemula',
    mapel: 'Fiqih',
    image: '/program/fiqih.jpg',
    duration: '6 Minggu',
    desc: 'Pembahasan thaharah, shalat, puasa, dan ibadah harian.',
  },
  {
    id: 2,
    title: 'Fiqih Muamalah',
    level: 'Menengah',
    mapel: 'Fiqih',
    image: '/program/fiqih2.jpg',
    duration: '8 Minggu',
    desc: 'Memahami transaksi dan muamalah sesuai syariat.',
  },
  {
    id: 3,
    title: 'Tajwid Dasar',
    level: 'Pemula',
    mapel: 'Tajwid',
    image: '/program/tajwid.jpg',
    duration: '6 Minggu',
    desc: 'Makharijul huruf dan hukum bacaan dasar.',
  },
  {
    id: 4,
    title: 'Tajwid Lanjutan',
    level: 'Menengah',
    mapel: 'Tajwid',
    image: '/program/tajwid2.jpg',
    duration: '8 Minggu',
    desc: 'Pendalaman gharib dan tajwid tingkat lanjut.',
  },
  {
    id: 5,
    title: 'Tafsir Tematik',
    level: 'Menengah',
    mapel: 'Tafsir',
    image: '/program/tafsir.jpeg',
    duration: '10 Minggu',
    desc: 'Mengkaji tema kehidupan dari ayat Al-Qur’an.',
  },
  {
    id: 6,
    title: 'Adab & Akhlaq Muslim',
    level: 'Pemula',
    mapel: 'Akhlaq',
    image: '/program/adab.jpg',
    duration: '4 Minggu',
    desc: 'Membentuk karakter dan akhlaq Islami.',
  },
];

export default function ProgramPage() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('Semua');
  const [mapel, setMapel] = useState('Semua');

  const filtered = programs.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchLevel = level === 'Semua' || p.level === level;
    const matchMapel = mapel === 'Semua' || p.mapel === mapel;
    return matchSearch && matchLevel && matchMapel;
  });

  return (
    <div className="bg-[#FCF8F1] min-h-screen">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-green-300/30 rounded-full blur-3xl" />
        <div className="absolute top-32 -left-40 w-[420px] h-[420px] bg-yellow-300/30 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <span className="inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-700">
            Program Kelas
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Temukan Kelas <br />
            <span className="text-green-600">Sesuai Tujuanmu</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Kelas Islami terstruktur dengan mentor berpengalaman dan komunitas aktif.
          </p>
        </motion.div>
      </section>

      {/* ================= SEARCH FLOAT ================= */}
      <section className="-mt-24 px-6 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Cari nama program..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full bg-gray-100 focus:outline-none"
          />
          <button className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold">
            Cari
          </button>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 pt-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* ===== FILTER SIDEBAR ===== */}
          <aside className="lg:col-span-1 bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-28">
            <h3 className="font-bold text-lg mb-6">Filter Program</h3>

            {/* LEVEL */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-4">Level</p>
              {['Semua', 'Pemula', 'Menengah'].map((item) => (
                <label key={item} className="flex items-center gap-3 mb-3 text-sm">
                  <input
                    type="radio"
                    checked={level === item}
                    onChange={() => setLevel(item)}
                    className="accent-green-600"
                  />
                  {item}
                </label>
              ))}
            </div>

            {/* MAPEL */}
            <div>
              <p className="text-sm font-semibold mb-4">Mata Pelajaran</p>
              {['Semua', 'Fiqih', 'Tajwid', 'Tafsir', 'Akhlaq'].map((item) => (
                <label key={item} className="flex items-center gap-3 mb-3 text-sm">
                  <input
                    type="radio"
                    checked={mapel === item}
                    onChange={() => setMapel(item)}
                    className="accent-green-600"
                  />
                  {item}
                </label>
              ))}
            </div>
          </aside>

          {/* ===== PROGRAM GRID ===== */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold bg-black/70 text-white">
                    {item.mapel}
                  </div>
                </div>

                <div className="p-7 flex flex-col h-full">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.duration}</p>
                  <p className="text-gray-700 text-sm mb-6 flex-1">{item.desc}</p>

                  <button className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-green-600 transition">
                    Lihat Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
