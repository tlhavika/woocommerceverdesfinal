"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import AppContext from "../components/AppContext";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import { getProductsData } from "../../src/utils/products";

const DynamicComponent = dynamic(() => import("../components/header"), {
  ssr: false,
});
const FooterComponent = dynamic(() => import("../../pages/footer"), {
  ssr: false,
});
export default function RootLayout({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [todosProdutos, setTodosProdutos] = useState([]);
  async function teste() {
    const { data: products } = await getProductsData();
    setTodosProdutos(products);
  }
  useEffect(() => {
    teste();
    var qantVolatel = 0;
    // localStorage.clear();
    var students = JSON.parse(localStorage.getItem("listCard")) || [];
    students.forEach(function (o) {
      qantVolatel += parseInt(o[0].quantity2);
    });
    setQuantity(qantVolatel);
  }, []);
  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={{ quantity, setQuantity, todosProdutos }}>
          <DynamicComponent />
          <div>{children}</div>
          <FooterComponent />
        </AppContext.Provider>
      </body>
    </html>
  );
}
