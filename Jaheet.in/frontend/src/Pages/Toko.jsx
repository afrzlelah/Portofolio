import React from "react";
import { useEffect, useState } from "react";
import NavToko from "../components/NavToko";

// --- FUNGSI UTILITY SVG ICON (LUCIDE SIMULATION) ---

const SearchIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ShoppingCartIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.72a2 2 0 0 0 2-1.58L23 5H6" />
  </svg>
);

const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// --- KOMPONEN UTAMA APLIKASI ---
const Toko = () => {
  useEffect(() => {
    fetch("http://localhost:3001/toko")
      .then((res) => res.json())
      .then((hasil) => {
        setData(hasil.payload.datas);
      });
  }, []);

  const [data, setData] = useState([]);

  const handleSearch = (isiSearch) => {
    fetch(`http://localhost:3001/toko/find?nama=${isiSearch}`)
      .then((res) => res.json())
      .then((hasil) => {
        setData(hasil.payload.datas);
      })
      .catch();
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* HEADER (Sticky - Warna Biru Shopee Aesthetic) */}
      <NavToko onSearch={handleSearch} />
      {/* Konten Utama (Main Content) */}
      <main className="container mx-auto px-4 py-6">
        {/* Banner Promosi */}
        <section className="mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-indigo-300">
          <div className="relative bg-linear-to-r from-indigo-500 to-blue-500 p-6 sm:p-10 md:p-12 text-white">
            <div className="md:w-3/4">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
                Flash Sale Biru Hari Ini!
              </h2>
              <p className="text-indigo-100 mb-6 text-lg">
                Dapatkan diskon hingga 70% untuk semua koleksi produk biru
                eksklusif. Jangan sampai kehabisan!
              </p>
              <a
                href="/toko/products"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
              >
                Belanja Sekarang
              </a>
            </div>
            {/* Placeholder untuk ilustrasi (misalnya, ikon keranjang besar atau bentuk geometris) */}
            <div className="absolute right-0 top-0 h-full w-1/4 flex items-center justify-center opacity-30  md:flex">
              <ShoppingCartIcon className="w-24 h-24 text-white rotate-12" />
            </div>
          </div>
        </section>

        {/* Produk Terlaris / Rekomendasi */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-600 pl-3">
            Rekomendasi Terbaik Minggu Ini
          </h2>

          {/* Grid Produk Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {data.map((items) => (
              <div
                key={items.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                {/* Gambar Produk */}
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={`${items.img}`}
                    alt={items.namaBarang}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    // Fallback jika gambar gagal dimuat
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/400x400/ccc/000?text=NO+IMAGE";
                    }}
                  />
                </div>

                {/* Detail Produk */}
                <div className="p-3">
                  <h3
                    className="text-sm font-medium text-gray-700 truncate mb-1"
                    title={items.namaBarang}
                  >
                    {items.namaBarang}
                  </h3>
                  <p className="text-lg font-bold text-indigo-600 mb-1">
                    Rp{items.harga}
                  </p>

                  {/* Rating dan Terjual */}
                  <div className="flex items-center text-xs text-gray-500">
                    <StarIcon className="w-3 h-3 text-yellow-400 mr-1" />
                    <span>{items.rating}</span>
                    <span className="mx-2">|</span>
                    <span>Terjual {items.jumlahTerjual}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer (Sederhana) */}
      <footer className="bg-gray-800 text-white mt-8 py-4">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} TokoBiru. Dibuat dengan Tailwind &
          React.
        </div>
      </footer>
    </div>
  );
};

export default Toko;
