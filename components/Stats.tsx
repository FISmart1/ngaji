import { NumberTicker } from './ui/number-ticker';

export default function Stats() {
  return (
    <section className="w-full flex justify-center bg-[#FCF8F1] px-4 py-12">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-3xl px-6 py-10">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          
          {/* Item */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600">
              <NumberTicker value={100} />
            </h1>
            <p className="mt-2 text-gray-700">Anggota</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600">
              <NumberTicker value={100} />
            </h1>
            <p className="mt-2 text-gray-700">Kategori Pelajaran</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600">
              <NumberTicker value={100} />
            </h1>
            <p className="mt-2 text-gray-700">Asal Anggota Berbeda</p>
          </div>

        </div>
      </div>
    </section>
  );
}
