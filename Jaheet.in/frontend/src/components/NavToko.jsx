import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavToko = ({ onSearch }) => {
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
  const navigate = useNavigate();
  const [isiSearch, setIsiSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nama Brand */}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-2xl font-black text-white cursor-pointer select-none"
          >
            <span className="bg-white text-indigo-600 px-2 rounded-lg mr-1">
              Jaheet
            </span>
            .in
          </button>

          {/* Search Bar (Tengah) */}
          <div className="grow max-w-lg mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={isiSearch}
                onChange={(e) => {
                  setIsiSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch(isiSearch);
                  }
                }}
                placeholder="Cari produk impianmu di sini..."
                className="w-full py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white focus:ring-white transition duration-150"
              />
              <button
                onClick={() => {
                  onSearch(isiSearch);
                }}
                className="absolute right-0 top-0 h-full px-3 bg-gray-200 rounded-r-lg text-gray-600 hover:bg-gray-300 transition duration-150"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Ikon Aksi (Kanan) */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-indigo-200 transition duration-150 relative p-1.5 rounded-full hover:bg-indigo-700">
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full">
                3
              </span>
            </button>
            <button
              onClick={() => navigate("/toko/add")}
              className="hidden sm:block text-white hover:text-indigo-200 transition duration-150 p-1.5 rounded-full hover:bg-indigo-700"
            >
              <UserIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavToko;
