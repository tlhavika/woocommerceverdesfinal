import React, { useState, useEffect, useContext, useRef } from "react";
import { updateCart } from "../src/utils/products";
import { isEmpty } from "lodash";

const SomaSub = ({ quantity2, setQuantity, cartKey, setIsAddedToCart }) => {
  const [productCount, setProductCount] = useState(quantity2);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  if (typeof window !== 'undefined') {
    var students = JSON.parse(localStorage.getItem("listCard")) || [];
  }  
  var novaLista = [];
  var qantVolatel = 0;
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;

    // When component is unmounted, set isMounted.current to false.
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleQtyChange = (event, cartKey, type) => {
    qantVolatel = 0;
    console.log(cartKey);
    event.stopPropagation();
    let newQty;

    if (!isEmpty(type)) {
      newQty =
        "increment" === type
          ? parseInt(productCount) + 1
          : parseInt(productCount) - 1;

      if (parseInt(newQty) <= 0) {
        setIsAddedToCart(false);
        students.forEach(function (o) {
          o = o.filter((s) => o[0].id != cartKey);

          if (o.length === 0) {
          } else {
            novaLista.push(o);
          }
        });
      } else {
        setIsAddedToCart(true);
        students.forEach(function (o) {
          if (o[0].id === cartKey) {
            o = o.filter((s) => o[0].id != cartKey);
            novaLista.push([
              {
                id: cartKey,
                quantity2: newQty,
              },
            ]);
            if (o.length === 0) {
            } else {
              novaLista.push(o);
            }
          }
        });
        novaLista.forEach(function (o) {
          qantVolatel += parseInt(o[0].quantity2);
        });
      }
    } else {
      // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
      newQty = event.target.value ? parseInt(event.target.value) : 1;
    }

    // Set the new qty in state.
    setProductCount(newQty);
    console.log(novaLista);
    setQuantity(qantVolatel);
    if (typeof window !== 'undefined') {
      localStorage.setItem("listCard", JSON.stringify(novaLista));
    }
    
  };
  return (
    <div>
      <div className="flex flex-row mb-2 gap-4 justify-center">
        <button
          type="button"
          className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out  hover:shadow-primary-2 "
          data-twe-ripple-init
          data-twe-ripple-color="light"
          onClick={(event) => handleQtyChange(event, cartKey, "decrement")}
        >
          -
        </button>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-14 p-1.5 text-center"
          type="text"
          min="1"
          style={{
            textAlign: "center",
            width: "50px",
            paddingRight: "0",
          }}
          data-cart-key={cartKey}
          value={productCount}
          onChange={(event) => handleQtyChange(event, cartKey, "")}
        />
        <button
          type="button"
          className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out  hover:shadow-primary-2"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          onClick={(event) => handleQtyChange(event, cartKey, "increment")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SomaSub;
