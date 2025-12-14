'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full z-[1000]">
      <header className="bg-[#FCF8F1]/80 backdrop-blur-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {['Beranda', 'Profil', 'Program', 'Kontak'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base text-black/80 hover:text-black transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#"
              className="hidden lg:inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-full transition hover:bg-green-700"
            >
              Gabung Sekarang
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md hover:bg-black/5 transition"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-6 flex flex-col gap-6">
              {['Beranda', 'Profil', 'Program', 'Kontak'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-black text-base hover:text-green-600 transition"
                >
                  {item}
                </a>
              ))}

              <a
                href="#"
                className="mt-4 inline-flex justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
