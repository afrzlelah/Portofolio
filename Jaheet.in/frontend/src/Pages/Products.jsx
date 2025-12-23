import { useNavigate, useState, useEffect } from "react";
import NavToko from "../components/NavToko";

const Products = () => {
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

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/toko")
      .then((res) => res.json())
      .then((hasil) => {
        setData(hasil.payload.datas);
        console.log(hasil.payload.datas);
      }).catch;
  }, []);

  const handleSearch = (nama) => {
    fetch(`http://localhost:3001/toko/find?nama=${nama}`)
      .then((res) => res.json())
      .then((hasil) => {
        setData(hasil.payload.datas);
        console.log(hasil.payload.datas);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavToko onSearch={handleSearch} />
      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-600 pl-3">
            Semua produk kami ada di depan anda😊
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
                      console.log(e);
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
    </>
  );
};

export default Products;
