import { useNavigate } from "react-router-dom";

const AnotherLogin = ({ link }) => {
  const navigate = useNavigate();
  const marginTopTambahan = link === "/login" ? "mt-10" : "";
  return (
    <>
      <p className="text-center text-slate-500 text-sm">
        Belum punya akun?{" "}
        <button
          onClick={() => {
            navigate(link);
          }}
          className={`text-indigo-600 font-bold hover:underline underline-offset-4 ${marginTopTambahan} `}
        >
          Mulai Daftar
        </button>
      </p>
    </>
  );
};

export default AnotherLogin;
