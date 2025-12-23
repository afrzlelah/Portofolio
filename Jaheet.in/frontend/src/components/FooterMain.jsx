const Footer = ({ serviceSpace }) => {
  return (
    <footer id="contactSpace" className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-400">
            Jahit.in
          </h3>
          <p className="text-sm text-gray-400">
            Solusi jahit dan produk custom terbaik Anda.
          </p>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li
              onClick={() => homeSpace()}
              className={"cursor-pointer hover:underline "}
            >
              Home
            </li>
            <li
              onClick={() => {
                serviceSpace;
              }}
              className={"cursor-pointer hover:underline"}
            >
              Service
            </li>
            <li
              onClick={() => productSpace()}
              className={"cursor-pointer hover:underline"}
            >
              Products
            </li>
            <li onClick={() => contactSpace()} className={"cursor-pointer"}>
              Contact
            </li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <p className="text-sm text-gray-400">
            Gang Janjung Kelurahan Pakintelan, Kec. Gunungpati, Semarang
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Email: afrzlelah@gmail.com
          </p>
          <p className="text-sm text-gray-400">Telp: (+62) 83878749603</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Jam Kerja</h3>
          <p className="text-sm text-gray-400">Senin - Jumat: 06:00 - 17:00</p>
          <p className="text-sm text-gray-400">Sabtu: 07:00 - 17:00</p>
          <p className="text-sm text-gray-400">Minggu: Tutup</p>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-gray-900 text-gray-500">
        &copy; 2025 Jahit.in. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
