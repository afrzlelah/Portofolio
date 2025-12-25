import AuthLayouts from "../Templates/AuthLayouts";

const RegisterPage = () => {
  return (
    <>
      <AuthLayouts
        mode={"register"}
        titleBanner={"Memulai membuat akun Anda."}
        descriptionBanner={"Silahkan isi formulir dibawah"}
        titleUiForm={"Bergabung Bersama Kami"}
        descriptionUiForm={
          "Wujudkan pakaian impian anda sejak dulu.\nBergabunglah dengan ribuan pelanggan yang mempercayakan gaya mereka pada penjahit profesional kami."
        }
        footerWordsUiForm={"1.000.000 orang telah bersama kami"}
      />
    </>
  );
};

export default RegisterPage;
