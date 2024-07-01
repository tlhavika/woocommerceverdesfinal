const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: "ck_56ea034f2bc2f7e102aec6454decd2dad95076ee",
  consumerSecret: "cs_b6fdddad8a4c179b24785dc8098b97bb9758b7bc",
  version: "wc/v3",
});

/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
  }
}
