'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { fadeUp, fade, stagger } from '@/components/animations';
import Footer from '@/components/Footer';

export default function ProfilPage() {
  return (
    <div className="bg-[#FCF8F1] min-h-screen">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-700"
          >
            Profil Platform
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Belajar Islam <br />
            <span className="text-green-600">Lebih Terarah & Bermakna</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Platform pembelajaran Islam modern dengan kelas terstruktur,
            pembimbing terpercaya, dan pendekatan relevan untuk generasi kini.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SAMBUTAN ================= */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sambutan Pengelola
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Assalamu’alaikum warahmatullahi wabarakatuh.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Kami menghadirkan ruang belajar Islam yang tidak hanya fokus pada
              ilmu, tetapi juga adab, pemahaman kontekstual, dan keberlanjutan
              belajar.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Semoga platform ini menjadi wasilah kebaikan bagi umat.
            </p>

            <p className="mt-6 font-semibold text-gray-900">
              — Tim Pengembang
            </p>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/sambutan.jpeg"
              alt="Sambutan"
              className="w-full h-[340px] object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= VISI MISI ================= */}
      <section className="px-6 py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-lg p-10
                       hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform pembelajaran Islam terpercaya
              dalam membentuk generasi berilmu dan berakhlak mulia.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-lg p-10
                       hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-6">Misi</h3>
            <ul className="space-y-4">
              {[
                'Menyediakan kelas Islam terstruktur',
                'Menghadirkan pengajar berpengalaman',
                'Menggabungkan teknologi dan dakwah',
                'Mendukung pembelajaran berkelanjutan',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex gap-3 text-gray-700"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= NILAI ================= */}
      <section className="px-6 py-24">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: 'Amanah', desc: 'Menjaga kepercayaan dan tanggung jawab.' },
            { title: 'Profesional', desc: 'Dikelola secara serius dan rapi.' },
            { title: 'Relevan', desc: 'Sesuai kebutuhan umat masa kini.' },
            { title: 'Berkelanjutan', desc: 'Belajar tanpa henti.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center
                         shadow hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h4 className="font-bold mb-3 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto bg-green-600 rounded-3xl p-14 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mulai Perjalanan Belajarmu Hari Ini
          </h2>
          <p className="mb-8 text-green-100 text-lg">
            Bergabung bersama ribuan peserta lain dalam belajar Islam
            secara terarah dan bermakna.
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-green-700 font-semibold hover:bg-gray-100 transition">
            Lihat Program Kelas
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
