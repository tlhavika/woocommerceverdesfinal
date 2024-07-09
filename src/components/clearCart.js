import { isEmpty } from "lodash";
import { clearCart } from "../../src/utils/products";
import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../src/components/AppContext";

const ClearCart2 = () => {
  const { quantity, setQuantity } = useContext(AppContext);
  const [clearCartProcessing, setClearCartProcessing] = useState(false);
  function clearCart() {
    localStorage.clear();
    setQuantity(0);
  }
  return (
    <div className="flex flex-col">
      {clearCartProcessing ? (
        <>
          <h3>Limpando Carrinho</h3>
        </>
      ) : (
        <>
          <button
            type="button"
            className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-primary-3 transition duration-150 ease-in-out hover:bg-white hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            onClick={() => clearCart()}
          >
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  );
};

export default ClearCart2;
