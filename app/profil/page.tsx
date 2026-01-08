'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] // smooth & premium
 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] // smooth & premium
 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] // smooth & premium
 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================= PAGE ================= */
export default function ProfilPage() {
  return (
    <div className="bg-[#FCF8F1] min-h-screen overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 px-6 overflow-hidden">
        {/* DECORATIVE BLOBS */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-green-200/40 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-32 w-[420px] h-[420px] bg-emerald-300/30 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* TEXT */}
          <motion.div variants={fadeLeft}>
            <span className="inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-700">
              Tentang Platform
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Platform Belajar Islam <br />
              <span className="text-green-600">Modern & Terarah</span>
            </h1>

            <p className="mt-6 text-gray-700 text-lg max-w-xl">
              Menghadirkan pembelajaran Islam yang terstruktur, relevan,
              dan berkelanjutan dengan pendekatan teknologi masa kini.
            </p>
          </motion.div>

          {/* VISUAL CARD */}
          <motion.div
            variants={fadeRight}
            className="relative bg-white rounded-3xl shadow-2xl p-10"
          >
            <p className="text-2xl font-serif italic text-green-700 mb-6">
              “Ilmu bukan sekadar diketahui, tetapi diamalkan
              untuk membentuk peradaban.”
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                LP
              </div>
              <div>
                <p className="font-semibold text-gray-900">Tim Pengembang</p>
                <p className="text-sm text-gray-500">Learning Platform</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SAMBUTAN ================= */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="relative lg:-ml-20"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/sambutan.jpeg"
                alt="Sambutan"
                className="w-full h-[360px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sambutan Pengelola
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Assalamu’alaikum warahmatullahi wabarakatuh.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Platform ini dibangun sebagai ruang belajar Islam
              yang tidak hanya menyampaikan ilmu, tetapi juga
              menumbuhkan adab, pemahaman, dan konsistensi belajar.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Kami berharap setiap langkah belajar menjadi amal
              jariyah yang berkelanjutan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VISI MISI ================= */}
      <section className="px-6 py-28 bg-white">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* VISI */}
          <motion.div variants={fadeUp} className="relative bg-white rounded-3xl p-12 shadow-lg">
            <span className="absolute left-0 top-10 h-20 w-1 bg-green-600 rounded-full" />
            <h3 className="text-2xl font-bold mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform pembelajaran Islam terpercaya
              dalam membentuk generasi berilmu, beradab,
              dan berkontribusi positif bagi umat.
            </p>
          </motion.div>

          {/* MISI */}
          <motion.div variants={fadeUp} className="relative bg-white rounded-3xl p-12 shadow-lg">
            <span className="absolute left-0 top-10 h-20 w-1 bg-green-600 rounded-full" />
            <h3 className="text-2xl font-bold mb-6">Misi</h3>
            <ul className="space-y-4">
              {[
                'Kelas Islam terstruktur dan bertahap',
                'Pengajar kompeten dan berpengalaman',
                'Teknologi untuk dakwah berkelanjutan',
                'Lingkungan belajar yang aman dan relevan',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= NILAI ================= */}
      <section className="px-6 py-28">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: 'Amanah', desc: 'Menjaga kepercayaan dalam setiap proses.' },
            { title: 'Profesional', desc: 'Dikelola dengan standar tinggi.' },
            { title: 'Relevan', desc: 'Sesuai tantangan zaman.' },
            { title: 'Berkelanjutan', desc: 'Belajar sepanjang hayat.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center shadow
                         hover:-translate-y-3 hover:shadow-xl transition"
            >
              <h4 className="font-bold mb-3 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-green-600 rounded-[40px] p-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Belajarmu?
          </h2>
          <p className="mb-8 text-green-100 text-lg">
            Bergabung dan tumbuh bersama komunitas pembelajar Islam modern.
          </p>
          <button className="px-12 py-4 rounded-full bg-white text-green-700 font-semibold hover:bg-gray-100 transition">
            Lihat Program Kelas
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
