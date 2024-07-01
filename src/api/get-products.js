const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: "ck_eb14623dae032df2f6307175e446d6ac703dcf4c",
  consumerSecret: "cs_e34ea7d4dc2d3f66b6b767874684fda5b341d26c",
  version: "wc/v3",
  queryStringAuth: true,
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
export default async function DadosPro(req, res) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });
    console.log(data);
    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {}
}
