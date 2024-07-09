import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import Link from "next/link";
import dynamic from "next/dynamic";
import cx from "classnames";
const AddRemoveProductComponent = dynamic(() => import("./addRemoveProduct"), {
  ssr: false,
});
const AddToCart2 = ({
  id,
  status,
  quantity2,
  cartKey,
  listCart,
  setListCart,
  setGatilho,
}) => {
  const { quantity, setQuantity } = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(status);
  const [loading, setLoading] = useState(false);

  var cardVolatel = [];
  function addCard() {
    setIsAddedToCart(true);
    cardVolatel.push({ id: id, quantity2: "1" });
    setListCart([...listCart, cardVolatel]);
    localStorage.setItem("listCard", JSON.stringify(listCart));
    setGatilho("b");
  }
  useEffect(() => {
    localStorage.setItem("listCard", JSON.stringify(listCart));
  }, [listCart]);
  return (
    <div className="flex flex-col">
      {isAddedToCart ? (
        <>
          {isAddedToCart && !loading ? (
            <>
              <Link
                href="#"
                className="mt-2 flex flex-row justify-center w-full"
              >
                <AddRemoveProductComponent
                  quantity2={quantity2}
                  id={id}
                  cartKey={cartKey}
                  setIsAddedToCart={setIsAddedToCart}
                  setGatilho={setGatilho}
                />
              </Link>
            </>
          ) : null}
        </>
      ) : (
        <>
          <button
            type="button"
            className="inline-block rounded bg-stone-600 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            key={id}
            onClick={() => addCard()}
          >
            {loading ? "Adicionando..." : "Adicionar"}
          </button>
        </>
      )}
    </div>
  );
};

export default AddToCart2;
