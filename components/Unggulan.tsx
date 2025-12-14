'use client';

export default function MapelUnggulan() {
  const data = [
    {
      title: 'FIQIH',
      tag: 'Islam',
      img: '/mapelunggulan/kitab.jpeg',
      desc: 'Mempelajari hukum-hukum Islam dalam kehidupan sehari-hari secara mendalam dan aplikatif.',
      bg: 'bg-green-600',
    },
    {
      title: 'TAFSIR',
      tag: 'Islam',
      img: '/mapelunggulan/qori.jpg',
      desc: 'Memahami makna dan kandungan Al-Qur’an dengan pendekatan ilmiah dan kontekstual.',
      bg: 'bg-yellow-400',
    },
    {
      title: 'TAJWID',
      tag: 'Islam',
      img: '/mapelunggulan/tahsin.jpg',
      desc: 'Mempelajari kaidah membaca Al-Qur’an dengan benar, tartil, dan sesuai makhraj.',
      bg: 'bg-blue-600',
    },
    {
      title: 'AKHLAK',
      tag: 'Islam',
      img: 'https://heroui.com/images/card-example-2.jpeg',
      desc: 'Menanamkan nilai adab, etika, dan karakter mulia dalam kehidupan sehari-hari.',
      bg: 'bg-gray-800',
    },
  ];

  return (
    <section className="w-full bg-[#FCF8F1] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* KIRI — CARD */}
          <div className="grid grid-cols-12 gap-6">
            {data.map((item, i) => (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 lg:col-span-6 h-[300px]"
              >
                {/* Perspective */}
                <div className="relative w-full h-full [perspective:1200px]">

                  {/* Flip Card */}
                  <div
                    className="relative w-full h-full duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    hover:[transform:rotateY(180deg)]
                    active:[transform:rotateY(180deg)]"
                  >

                    {/* DEPAN */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg
                      [backface-visibility:hidden]"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40" />

                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs uppercase opacity-70">
                          {item.tag}
                        </p>
                        <h3 className="text-base font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* BELAKANG */}
                    <div
                      className={`absolute inset-0 rounded-2xl text-white
                      flex flex-col justify-center items-center text-center px-6
                      ${item.bg}
                      [transform:rotateY(180deg)]
                      [backface-visibility:hidden]`}
                    >
                      <h3 className="text-xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN — JUDUL */}
          <div>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
              Mata Pelajaran <br />
              <span className="text-green-600">Unggulan</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
              Mata pelajaran unggulan dirancang untuk membekali santri dengan
              pemahaman keislaman yang kuat, akhlak mulia, serta kemampuan
              menerapkan nilai Islam dalam kehidupan modern.
            </p>

            <button
              className="mt-8 px-7 py-3 bg-green-600 text-white rounded-full
              hover:bg-green-700 transition duration-300 shadow-md"
            >
              Lihat Selengkapnya
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
