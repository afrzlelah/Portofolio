import { useNavigate } from "react-router-dom";
import CardService from "./Cards";

const Content = () => {
  const navigate = useNavigate();
  const serviceSpace = () => {
    const element = document.getElementById("serviceSpace");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const why = () => {
    const element = document.getElementById("why");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div id="contentSpace" className="tanah pt-36 h-auto">
        <div className="rumah1 py-10 sm:mx-10 min-h-1/2 m-3 rounded-xl flex flex-col  ">
          <div className="perabot h-auto min-h-1/2 m-3 rounded-xl flex justify-center text-4xl md:text-5xl font-bold text-slate-900 px-15 py-0 sm:py-5 mt-0 ">
            <h1 className={"text-center"}>
              Jahit.in: Kualitas Jahit Premium Tanpa Ribet
            </h1>
          </div>
          <div className="paragrap  flex justify-center ">
            <p className="text-center px-5 md:w-3xl">
              Layanan Profesional untuk semua kebutuhan produk custom anda, dari
              kemeja, seragam hingga jas, kami siap melayani
            </p>
          </div>
          <div className="btn mt-10 flex justify-center gap-3">
            <button
              onClick={() => navigate("/toko")}
              className=" p-5 bg-primary text-white rounded-full font-medium cursor-pointer hover:bg-indigo-200 hover:text-slate-900 transition "
            >
              Masuk ke Toko Kami
            </button>
            <button
              onClick={() => why()}
              className="px-4 bg-indigo-100 rounded-full text-sm  font-medium cursor-pointer hover:bg-primary hover:text-white"
            >
              Mengenal Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Content2 = () => {
  return (
    <>
      <section
        id="tentang"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-5"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center mx-0 md:mx-5  bg-secondary p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="text-3xl font-bold  mb-10 text-slate-900">
              Tentang Kami
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Kami percaya bahwa setiap orang berhak mengenakan pakaian yang
              dibuat khusus untuk mereka. Didirikan pada tahun 2015, "Jaheet.in"
              telah mendedikasikan diri untuk seni jahit kustom, menggabungkan
              teknik tradisional dengan tren mode terkini.
            </p>
            <p className="text-lg leading-relaxed">
              Fokus kami adalah pada detail, mulai dari pemilihan bahan
              berkualitas tinggi hingga hasil akhir yang sempurna. Kepuasan
              klien adalah prioritas utama kami.
            </p>
          </div>
          {/* <!-- Placeholder Gambar Sejarah --> */}
          <img
            src="https://placehold.co/500x300/a5b4fc/ffffff?text=Studio+Jahit"
            alt="Studio Jahit Kustom"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white hover:bg-primary hover:text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-primary  rounded-full flex  items-center justify-center mb-4 text-indigo-600 ">
      <Icon color="white" className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold  mb-2">{title}</h3>
    <p className="text-sm leading-relaxed">{description}</p>
  </div>
);
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Award,
  Clock,
  Users,
} from "lucide-react";
const Why = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Kualitas Terjamin",
      description:
        "Material premium dengan kontrol kualitas yang sangat ketat.",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      description: "Optimasi alur kerja untuk hasil yang tepat waktu.",
    },
    {
      icon: HeartHandshake,
      title: "Layanan Personal",
      description: "Solusi yang disesuaikan khusus untuk kebutuhan Anda.",
    },
    {
      icon: Award,
      title: "Tim Profesional",
      description: "Dikelola tenaga ahli berpengalaman lebih dari 10 tahun.",
    },
    {
      icon: Clock,
      title: "Dukungan 24/7",
      description: "Tim bantuan kami siap sedia kapanpun Anda butuhkan.",
    },
    {
      icon: Users,
      title: "Terpercaya",
      description: "Lebih dari 5.000 pelanggan aktif dengan kepuasan tinggi.",
    },
  ];
  return (
    <>
      <section id="why" className="py-20 bg-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman terbaik melalui dedikasi
              dan integritas di setiap layanan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {reasons.map((reason, index) => (
              <FeatureCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Layanan = () => {
  const services = [
    {
      title: "Jasa Menjahit Custom",
      description:
        "Membuat pakaian sesuai desain dan ukuran spesifik Anda (gaun, kemeja, celana).",
      features: ["Pola digital", "Konsultasi bahan", "Fitting 2 kali"],
    },
    {
      title: "Pembuatan Baju Seragam",
      description:
        "Produksi seragam dalam jumlah besar untuk kantor, sekolah, atau komunitas (PDH, Batik, Olahraga).",
      features: [
        "Diskon kuantitas",
        "Bordir/Sablon logo",
        "Jadwal produksi cepat",
      ],
    },
    {
      title: "Tailoring Jas & Blazer",
      description:
        "Layanan khusus untuk jas, blazer, dan pakaian formal lainnya dengan teknik tailoring terbaik.",
      features: [
        "Bahan premium wool",
        "Full canvas construction",
        "Garansi fitting",
      ],
    },
    {
      title: "Reparasi & Alterasi",
      description:
        "Memperbaiki, mengecilkan, atau membesarkan pakaian lama Anda agar pas sempurna.",
      features: ["Pengerjaan cepat", "Jahitan rapi", "Harga terjangkau"],
    },
  ];

  return (
    <div
      id="serviceSpace"
      className="container bg-secondary rounded-2xl mx-auto max-w-7xl px-4 py-8 mt-15"
    >
      <h1
        id="serviceSpaceMobile"
        className="text-4xl font-extrabold text-center text-slate-900 "
      >
        Layanan Kami
      </h1>
      <p className="text-black justify-center align-center flex mb-10 bg-black max-w-15 h-1 mx-auto mt-2 "></p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <CardService key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const Maps = () => {
  return (
    <>
      <div className="kat flex justify-center mt-20 ">
        <h1 className="font-bold text-slate-900 text-4xl">
          Kunjungi Kami disini
        </h1>
      </div>
      <div className="maps mt-10 bg-sec m-20 rounded-2xl h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2666927376963!2d110.39593499444273!3d-7.095054999811334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70890035618ac9%3A0x19d49caa2c350afb!2sJaheet.in!5e0!3m2!1sid!2sid!4v1764388576570!5m2!1sid!2sid"
          className="border:0 h-full w-full p-1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

const Portofolio = () => {
  const navigate = useNavigate();
  const q = 5;
  const TA = ({ index, image }) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden shadow-lg cursor-pointer 
       hover:scale-110 hover transition duration-300 hover:shadow-lg hover:shadow-gray-500  "
    >
      <img
        src={image}
        alt="Gaun Pesta Malam"
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="p-3 bg-white">
        <h1 className="text-sm font-bold bg-secondary rounded-xl w-20 p-2">
          Product {index}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
      </div>
    </div>
  );

  return (
    <>
      <section className="max-w-screen bg-sec ">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mx-auto">
          <h2
            id="productSpace"
            className="text-4xl font-extrabold text-center mb-9 text-slate-900 pt-10"
          >
            Produk Unggulan Kami
          </h2>
          <p className="bg-primary text-slate-100 max-w-15 max-h-1 mx-auto mb-10 -mt-5 flex justify-center">
            __
          </p>

          {/* <!-- Galeri Portofolio --> */}
          <div className="portfolio-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* <!-- Item 1 --> */}
            {[...Array(q)].map((_, index) => {
              return <TA key={index} index={index} image="/vite.svg" />;
            })}
          </div>
          <div className="mt-10 flex justify-end">
            <button
              onClick={() => navigate("/toko/products")}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white
            hover:bg-primary animate-bounce hover:animate-none"
            >
              Jelajahi Produk
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

Content.Content2 = Content2;
Content.Why = Why;
Content.Layanan = Layanan;
Content.Portofolio = Portofolio;
Content.Maps = Maps;

export default Content;
