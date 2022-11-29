import Products from "./Pages/Products";
import "./App.css";
import Header from "./Pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
