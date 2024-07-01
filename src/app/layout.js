"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import AppContext from "../../pages/AppContext";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const DynamicComponent = dynamic(() => import("../../pages/header"), {
  ssr: false,
});
const FooterComponent = dynamic(() => import("../../pages/footer"), {
  ssr: false,
});
export default function RootLayout({ children }) {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    let cartData = localStorage.getItem("next-cart");
    console.log(cartData);
    cartData = null !== cartData ? JSON.parse(cartData) : "";
    setQuantity(cartData);
  }, []);
  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={{ quantity, setQuantity }}>
          <DynamicComponent />
          <div>{children}</div>
          <FooterComponent />
        </AppContext.Provider>
      </body>
    </html>
  );
}
