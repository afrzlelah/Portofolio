import Navbar from "../components/NavbarMain";
import Content from "../Molecules/content";
import Footer from "../components/FooterMain";

const Main = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Content.Content2 />
      <Content.Why />
      <Content.Layanan />
      <Content.Portofolio />
      <Content.Maps />
      <Footer />
    </>
  );
};

export default Main;
