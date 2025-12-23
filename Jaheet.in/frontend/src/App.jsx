import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import LoginPage from "./Pages/LoginPage";
import Products from "./Pages/Products";
import Toko from "./Pages/Toko";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/Login"} element={<LoginPage />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/toko"} element={<Toko />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
