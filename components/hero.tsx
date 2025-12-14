'use client';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;

      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-[#FCF8F1] bg-opacity-30 pt-24 pb-10 sm:py-16 lg:py-24 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="text-base font-semibold tracking-wider text-green-600 uppercase">Platform komunitas ngaji</p>

              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl leading-tight">Ngaji bareng, tumbuh bareng,</h1>

              <p className="mt-4 text-base text-black/80 lg:mt-8 sm:text-xl">Wadah belajar Al-Qur’an, diskusi keislaman, dan membangun ukhuwah dalam satu komunitas yang hangat dan modern.</p>

              <a href="#" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-green-700 rounded-full transition-all duration-300 hover:bg-green-800 lg:mt-16">
                Gabung Komunitas
                <svg className="w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8" />
                </svg>
              </a>

              <p className="mt-5 text-gray-600">
                Sudah jadi bagian dari kami?{' '}
                <a href="#" className="text-green-700 font-semibold hover:underline">
                  Masuk sekarang
                </a>
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img ref={imgRef} className="w-full max-w-md mx-auto lg:max-w-full transition-transform duration-300 ease-out" src="/online.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
