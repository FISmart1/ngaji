'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

type Program = {
  id: number;
  title: string;
  level: string;
  duration: string;
  image: string;
  desc: string;
  detail: string;
  benefits: string[];
};


const programs: Program[] = [
  {
    id: 1,
    title: 'Fiqih Dasar',
    level: 'Pemula',
    duration: 'Online',
    image: '/program/fiqih.jpg',
    desc: 'Belajar fiqih dari nol',
    detail: 'Program ini membahas hukum-hukum dasar Islam yang sering ditemui dalam kehidupan sehari-hari secara praktis dan mudah dipahami.',
    benefits: ['Pemahaman fiqih ibadah sehari-hari', 'Materi terstruktur & mudah dipahami', 'Pembimbing berpengalaman', 'Akses materi selamanya'],
  },
  {
    id: 2,
    title: 'Tafsir Al-Qur’an',
    level: 'Menengah',
    desc: 'Memahami makna ayat Al-Qur’an secara kontekstual.',
    detail: 'Peserta akan mempelajari tafsir ayat-ayat pilihan, latar belakang turunnya ayat, serta penerapannya dalam kehidupan modern. Cocok untuk yang sudah terbiasa membaca Al-Qur’an.',
    duration: 'Online',
    image: '/program/tafsir.jpeg',
    benefits: ['Pemahaman fiqih ibadah sehari-hari', 'Materi terstruktur & mudah dipahami', 'Pembimbing berpengalaman', 'Akses materi selamanya'],
  },
  {
    id: 3,
    title: 'Tahsin & Tajwid',
    level: 'Semua Level',
    desc: 'Memperbaiki bacaan Al-Qur’an sesuai kaidah tajwid.',
    detail: 'Fokus pada makharijul huruf, sifat huruf, dan penerapan tajwid secara praktik. Tersedia sesi evaluasi bacaan bersama mentor.',
    duration: 'Online',
    image: '/program/quran.jpeg',
    benefits: ['Pemahaman fiqih ibadah sehari-hari', 'Materi terstruktur & mudah dipahami', 'Pembimbing berpengalaman', 'Akses materi selamanya'],
  },
];

export default function ProgramPage() {
  const [selected, setSelected] = useState<Program | null>(null);


  return (
    <div>
      <Navbar />
      <section className="w-full bg-[#FCF8F1] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 py-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Program <span className="text-green-600">Kelas</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Seperti Skilvul, kami menyediakan kelas terstruktur untuk mendukung perjalanan belajar ngaji dan keislaman secara bertahap.</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden
             flex flex-col justify-between
             transition hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-44 w-full">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  {/* overlay tipis */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <button
                    onClick={() => setSelected(item)}
                    className="mt-8 px-6 py-3 rounded-xl
                 bg-green-600 text-white font-semibold
                 hover:bg-green-700 transition"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-[2000] bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl p-10 animate-fadeIn relative">
              {/* Close */}
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-700">
                ✕
              </button>

              {/* TOP SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* LEFT — TEXT */}
                <div>
                  <span className="inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-700">{selected.level}</span>

                  <h3 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">{selected.title}</h3>

                  <p className="text-sm text-gray-500 mb-6">Lokasi Pembelajaran · {selected.duration}</p>

                  <p className="text-gray-700 leading-relaxed text-base">{selected.detail}</p>
                </div>

                {/* RIGHT — IMAGE */}
                <div className="w-full">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-10 h-px bg-gray-200" />

              {/* BENEFITS */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Yang akan kamu pelajari</h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  {selected.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 py-4 rounded-full bg-green-600
                   text-white font-semibold
                   hover:bg-green-700 transition"
                >
                  Daftar Sekarang
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 py-4 rounded-full
                   border border-gray-300
                   hover:bg-gray-100 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
