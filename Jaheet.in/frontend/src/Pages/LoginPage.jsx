import AuthLayouts from "../Templates/AuthLayouts";

const loginPage = () => {
  return (
    <>
      <AuthLayouts
        mode={"login"}
        titleBanner={"Login"}
        descriptionBanner={
          "Silahkan masukan detail akun Anda untuk melanjutkan."
        }
        titleUiForm={"Wujudkan Pakaian\n Impian Anda."}
        descriptionUiForm={
          " Bergabunglah dengan ribuan pelanggan yang mempercayakan gaya mereka pada penjahit profesional kami."
        }
        footerWordsUiForm={
          "Telah dipercaya oleh banyak pecinta fashion di seluruh Indonesia."
        }
      />
    </>
  );
};

export default loginPage;
