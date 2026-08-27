import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../pages/product/product"; 

import { Login } from "../pages/login"; 
//import Cadastro from "../pages/Cadastro";
//import Termos from "../pages/Termos";
//import Privacidade from "../pages/Privacidade";
//import Wishlist from "../pages/Wishlist";
//import Carrinho from "../pages/Carrinho";
//import { Perfil } from "../pages/perfil";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;