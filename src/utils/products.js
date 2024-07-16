const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { CART_ENDPOINT } from "../utils/constants/endpoints";
import axios from "axios";
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: "ck_eb14623dae032df2f6307175e446d6ac703dcf4c",
  consumerSecret: "cs_e34ea7d4dc2d3f66b6b767874684fda5b341d26c",
  version: "wc/v3",
  queryStringAuth: true,
});
import { isEmpty } from "lodash";
/**
 * Add To Cart Request Handler.
 *
 * @param {int} productId Product Id.
 * @param {int} qty Product Quantity.
 * @param {Function} setCart Sets The New Cart Value
 * @param {Function} setIsAddedToCart Sets A Boolean Value If Product Is Added To Cart.
 * @param {Function} setLoading Sets A Boolean Value For Loading State.
 */
/**
 * View Cart Request Handler
 *
 * @param {Function} setCart Set Cart Function.
 * @param {Function} setProcessing Set Processing Function.
 */
export const storeSession = (session) => {
  if (isEmpty(session)) {
    return null;
  }

  localStorage.setItem("x-wc-session", session);
};
export const getApiCartConfig = () => {
  const config = {
    headers: {
      "X-Headless-CMS": true,
    },
  };

  const storedSession = getSession();

  if (!isEmpty(storedSession)) {
    config.headers["x-wc-session"] = storedSession;
  }

  return config;
};

export const getSession = () => {
  return localStorage.getItem("x-wc-session");
};
/**
 * Get Products.
 *
 * @return {Promise<void>}
 */
export const getProductsData = async (perPage = 50) => {
  return await api.get("products", { 
    per_page: perPage || 50,
  });
};

/**
 * Get Single Product By Slug.
 *
 * @return {Promise<void>}
 */
export const getProductBySlug = async (productSlug = "") => {
  return await api.get("products", {
    slug: productSlug,
  });
};
export const viewCart = (
  setQuantity,
  setProcessing = () => {},
  setRemovingProduct
) => {
  const addOrViewCartConfig = getApiCartConfig();
  var qty = 0;
  axios
    .get(CART_ENDPOINT, addOrViewCartConfig)
    .then((res) => {
      console.log(res);
      res.data.map((item) => {
        qty += item.quantity;
      });
      setQuantity(qty);
      localStorage.setItem("next-cart", `${qty}`);
      setProcessing(false);
      setRemovingProduct(false);
    })
    .catch((err) => {
      console.log("err", err);
      setProcessing(false);
    });
};
export const addToCart = (
  productId,
  qty = 1,
  setQuantity,
  setIsAddedToCart,
  setLoading
) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getApiCartConfig();
  setIsAddedToCart(false);
  setLoading(true);

  axios
    .post(
      CART_ENDPOINT,
      {
        product_id: productId,
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then((res) => {
      storeSession(res?.headers?.["x-wc-session"]);
      setIsAddedToCart(true);
      setLoading(false);
      viewCart(setQuantity);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

/**
 * Clear Cart Request Handler
 *
 * @param {Function} setQuantity Set Cart
 * @param {Function} setClearCartProcessing Set Clear Cart Processing.
 */
export const clearCart = async (setQuantity, setClearCartProcessing) => {
  setClearCartProcessing(true);

  const addOrViewCartConfig = getApiCartConfig();

  try {
    const response = await axios.delete(CART_ENDPOINT, addOrViewCartConfig);
    viewCart(setQuantity, setClearCartProcessing);
  } catch (err) {
    console.log("err", err);
    setClearCartProcessing(false);
  }
};

/**
 * Delete a cart item Request handler.
 *
 * Deletes all products in the cart of a
 * specific product id ( by its cart key )
 * In a cart session, each product maintains
 * its data( qty etc ) with a specific cart key
 *
 * @param {String} cartKey Cart Key.
 * @param {Function} setQuantity SetCart Function.
 * @param {Function} setRemovingProduct Set Removing Product Function.
 */
export const deleteCartItem = (cartKey, setQuantity, setRemovingProduct) => {
  const addOrViewCartConfig = getApiCartConfig();
  console.log(cartKey);
  setRemovingProduct(true);

  axios
    .delete(`${CART_ENDPOINT}${cartKey}`, addOrViewCartConfig)
    .then((res) => {
      viewCart(setQuantity, setRemovingProduct);
    })
    .catch((err) => {
      console.log("err", err);
      setRemovingProduct(false);
    });
};

/**
 * Update Cart Request Handler
 */
export const updateCart = (
  cartKey,
  qty = 1,
  setQuantity,
  setUpdatingProduct
) => {
  const addOrViewCartConfig = getApiCartConfig();

  setUpdatingProduct(true);

  axios
    .put(
      `${CART_ENDPOINT}${cartKey}`,
      {
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then((res) => {
      viewCart(setQuantity, setUpdatingProduct);
    })
    .catch((err) => {
      console.log("err", err);
      setUpdatingProduct(false);
    });
};
