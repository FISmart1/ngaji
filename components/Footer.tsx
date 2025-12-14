'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FCF8F1] text-gray-700">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              SMK <span className="text-green-600">Unggulan</span>
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 max-w-xl mx-auto lg:mx-0">
              Sekolah kejuruan berbasis teknologi, kreativitas, dan karakter
              untuk mencetak generasi yang siap kerja, siap kuliah, dan siap
              bersaing di era digital.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="text-green-600">📍</span>
                <span>Jl. Pendidikan No. 123, Indonesia</span>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="text-green-600">📞</span>
                <span>(021) 123-4567</span>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="text-green-600">✉️</span>
                <span>info@smkunggulan.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 text-center sm:text-left">

            {/* Menu */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-5">Menu</h4>
              <ul className="space-y-3 text-sm">
                {['Beranda', 'Profil', 'Program', 'Kontak'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative inline-block hover:text-green-600 transition
                      after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                      after:w-0 after:bg-green-600 after:transition-all
                      hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-5">Program</h4>
              <ul className="space-y-3 text-sm">
                {['Fiqih', 'Tafsir', 'Tajwid', 'Akhlak'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative inline-block hover:text-green-600 transition
                      after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                      after:w-0 after:bg-green-600 after:transition-all
                      hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6
          flex flex-col sm:flex-row items-center justify-between
          gap-4 text-sm text-gray-500 text-center sm:text-left"
        >
          <p>
            © {new Date().getFullYear()} SMK Unggulan. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'YouTube'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-green-600 transition font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
