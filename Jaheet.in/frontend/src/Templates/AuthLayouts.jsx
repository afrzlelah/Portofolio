import { useState } from "react";
import SocialLogin from "../Molecules/Form/SocialLogin";
import Banner from "../Molecules/Form/Banner";
import InputFieldPageLogin from "../Molecules/Form/InputFieldPageLogin";
import InputFieldPageRegister from "../Molecules/Form/InputFieldPageRegister";
import UiForm from "../Molecules/UiForm";
import AnotherLogin from "../Molecules/Form/AnotherLogin";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";

const AuthLayouts = ({
  mode,
  titleBanner,
  descriptionBanner,
  titleUiForm,
  descriptionUiForm,
  footerWordsUiForm,
}) => {
  const inputMode =
    mode === "login" ? <InputFieldPageLogin /> : <InputFieldPageRegister />;
  const isLogin = mode === "login" ? <SocialLogin /> : "";
  const linkAnotherLogin = mode === "login" ? "/register" : "/login";

  return (
    <div className="min-h-screen bg-[#fdfdff] flex items-center justify-center p-4 font-sans selection:bg-indigo-100">
      {/* Container Utama dengan Glassmorphism halus */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100 overflow-hidden border border-white">
        {/* Sisi Kiri: Visual/Branding (Tersembunyi di Mobile) */}
        <UiForm
          color={"bg-linear-to-br from-[#818cf8] to-[#6366f1]"}
          title={titleUiForm}
          description={descriptionUiForm}
          footerWordsUiForm={footerWordsUiForm}
        />
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <Banner title={titleBanner} description={descriptionBanner} />
          {inputMode}
          {isLogin}
          <AnotherLogin link={linkAnotherLogin} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
