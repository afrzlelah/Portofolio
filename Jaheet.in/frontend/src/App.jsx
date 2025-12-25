import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import Toko from "./Pages/Toko";
import Form from "./components/Form";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/try"} element={<Form />} />
          <Route path={"/toko"} element={<Toko />} />
          <Route path={"/toko/products"} element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
