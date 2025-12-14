"use client";
import { useEffect, useRef } from "react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#FCF8F1] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* CTA Card */}
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-green-600
          px-8 py-20 sm:px-14 lg:px-20
          text-white shadow-2xl
          opacity-0 translate-y-10 transition-all duration-1000"
        >
          {/* Ornamen Cahaya */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

          {/* Garis Islami Halus */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.06)_50%,transparent_75%)] opacity-20" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-green-200 font-semibold">
                Mulai Perjalananmu
              </p>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
                Siap Mendalami <br />
                <span className="text-green-200">
                  Ilmu & Akhlak?
                </span>
              </h2>

              <p className="mt-8 text-green-100 max-w-xl leading-relaxed text-base sm:text-lg">
                Bergabunglah bersama kami untuk mempelajari ilmu agama secara
                mendalam, terstruktur, dan relevan dengan kehidupan masa kini.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 lg:justify-end">

              {/* Primary */}
              <button
                className="group px-9 py-4 bg-white text-green-700 font-semibold rounded-full
                transition-all duration-300 shadow-lg
                hover:-translate-y-1 hover:shadow-xl"
              >
                Lihat Kurikulum
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Secondary */}
              <button
                className="px-9 py-4 border border-white/70 text-white rounded-full
                transition-all duration-300
                hover:bg-white/10 hover:-translate-y-1"
              >
                Daftar Sekarang
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
