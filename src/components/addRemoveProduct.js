import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../src/components/AppContext";
import { deleteCartItem } from "../../src/utils/products";
import dynamic from "next/dynamic";

const SomaSubComponent = dynamic(() => import("../../pages/somaSub"), {
  ssr: false,
});

const AddRemoveProduct = ({ quantity2, id, cartKey }) => {
  const { quantity, setQuantity } = useContext(AppContext);
  const [clearCartProcessing, setClearCartProcessing] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col w-full">
      {isAddedToCart ? (
        <>
          {removingProduct ? (
            <>Removendo...</>
          ) : (
            <>
              <SomaSubComponent
                cartKey={cartKey}
                setQuantity={setQuantity}
                quantity2={quantity2}
              />
              <button
                type="button"
                className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out  hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() =>
                  deleteCartItem(cartKey, setQuantity, setRemovingProduct)
                }
              >
                Remover
              </button>
            </>
          )}
        </>
      ) : (
        <>Adicionando...</>
      )}
    </div>
  );
};

export default AddRemoveProduct;
