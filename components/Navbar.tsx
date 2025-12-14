export default function Navbar() {
  return (
    <div className="fixed w-full z-[1000]">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex">
                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                Beranda
              </a>
              <a href="#" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                Profil
              </a>
              <a href="#" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                Program
              </a>
              <a href="#" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                Kontak
              </a>
            </div>

            {/* CTA */}
            <a href="#" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black">
              Gabung Sekarang
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
