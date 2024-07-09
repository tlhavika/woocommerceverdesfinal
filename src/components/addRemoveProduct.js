import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../src/components/AppContext";
import dynamic from "next/dynamic";

const SomaSubComponent = dynamic(() => import("../../pages/somaSub"), {
  ssr: false,
});

const AddRemoveProduct = ({ quantity2, id, cartKey, setIsAddedToCart }) => {
  const { quantity, setQuantity } = useContext(AppContext);
  const [clearCartProcessing, setClearCartProcessing] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(true);
  var students = JSON.parse(localStorage.getItem("listCard")) || [];
  var novaLista = [];
  function deleteCardItem() {
    var qantVolatel = 0;
    students.forEach(function (o) {
      o = o.filter((s) => o[0].id != cartKey);

      if (o.length === 0) {
      } else {
        novaLista.push(o);
      }
    });
    localStorage.setItem("listCard", JSON.stringify(novaLista));
    setIsAddedToCart(false);
    novaLista.forEach(function (o) {
      qantVolatel += parseInt(o[0].quantity2);
    });
    setQuantity(qantVolatel);
  }
  var cartListVolatel = [];
  return (
    <div className="flex flex-col w-full">
      {isAddingToCart ? (
        <>
          {removingProduct ? (
            <>Removendo...</>
          ) : (
            <>
              <SomaSubComponent
                cartKey={cartKey}
                setQuantity={setQuantity}
                quantity2={quantity2}
                setIsAddedToCart={setIsAddedToCart}
              />
              <button
                type="button"
                className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out  hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() => deleteCardItem()}
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
