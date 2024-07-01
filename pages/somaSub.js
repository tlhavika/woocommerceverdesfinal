import React, { useState, useEffect, useContext, useRef } from "react";
import { updateCart } from "../src/utils/products";
import { isEmpty } from "lodash";

const SomaSub = ({ quantity2, setQuantity, cartKey }) => {
  const [productCount, setProductCount] = useState(quantity2);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);

  /**
   * Do not allow state update on an unmounted component.
   *
   * isMounted is used so that we can set it's value to false
   * when the component is unmounted.
   * This is done so that setState ( e.g setRemovingProduct ) in asynchronous calls
   * such as axios.post, do not get executed when component leaves the DOM
   * due to product/item deletion.
   * If we do not do this as not subscription, we will get
   * "React memory leak warning- Can't perform a React state update on an unmounted component"
   *
   * @see https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i
   * @type {React.MutableRefObject<boolean>}
   */
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;

    // When component is unmounted, set isMounted.current to false.
    return () => {
      isMounted.current = false;
    };
  }, []);

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (event, cartKey, type) => {
    event.stopPropagation();
    let newQty;
    console.log(productCount);
    console.log(event);
    console.log(type);
    // If the previous cart request is still updatingProduct or removingProduct, then return.
    if (
      updatingProduct ||
      removingProduct ||
      ("decrement" === type && 1 === productCount)
    ) {
      return;
    }

    if (!isEmpty(type)) {
      newQty = "increment" === type ? productCount + 1 : productCount - 1;
    } else {
      // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
      newQty = event.target.value ? parseInt(event.target.value) : 1;
    }

    // Set the new qty in state.
    setProductCount(newQty);

    updateCart(cartKey, newQty, setQuantity, setUpdatingProduct);
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
