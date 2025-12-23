import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarMain = () => {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(false);

  useState(() => {
    const handleBtn = () => {
      setBtn(false);
    };
    window.addEventListener("scroll", handleBtn);
    return () => window.addEventListener("scroll", handleBtn);
  }, []);

  const serviceSpace = () => {
    const element = document.getElementById("serviceSpace");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const serviceSpaceMobile = () => {
    const element = document.getElementById("serviceSpaceMobile");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const homeSpace = () => {
    const element = document.getElementById("content1Space");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const productSpace = () => {
    const element = document.getElementById("productSpace");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const contactSpace = () => {
    const element = document.getElementById("contactSpace");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <header>
        <div className="bg-white fixed  flex justify-between items-center h-15 w-screen shadow-2xl/35 shadow-black">
          <div className="logo text-indigo-600 p-5 font-bold text-2xl">
            <h1>Jahit.in</h1>
          </div>
          <div className=" group">
            <ul
              className={
                "listMenu hidden text-black md:flex gap-8 p-5 list-none "
              }
            >
              <li
                onClick={() => homeSpace()}
                className={"cursor-pointer hover:underline "}
              >
                Home
              </li>
              <li
                onClick={() => serviceSpace()}
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
            {/* Tombol Menu mass */}
            <div
              className="btnMenu md:hidden ml-40"
              onClick={(e) => {
                setBtn(!btn);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className="login text-white">
            <button
              onClick={() => navigate("/login")}
              className={"bg-indigo-600 px-3 py-2  pr-7 rounded-bl-2xl"}
            >
              Login
            </button>
          </div>
        </div>
        {btn && (
          <div className=" bg-white/90 backdrop-blur-2xl shadow-2xl fixed top-15 w-screen h-auto py-10">
            <ul
              className={
                "listMenu  text-black flex flex-wrap gap-10 justify-center items-center  "
              }
            >
              <li
                onClick={() => homeSpace()}
                className={"cursor-pointer hover:underline "}
              >
                Home
              </li>
              <li
                onClick={() => serviceSpaceMobile()}
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
          </div>
        )}
      </header>
    </>
  );
};

export default NavbarMain;
