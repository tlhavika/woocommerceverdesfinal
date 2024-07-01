import { getProductsData } from "../utils/products";
export async function getStaticProps() {
    const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
    const { data: products } = await getProductsData();
    var categorias = [];
    products.map((product) => {
      if (categorias.includes(product.categories[0].name)) {
      } else {
        categorias.push(product.categories[0].name);
      }
    });
  console.log(products);
    return {
      props: {
        headerFooter: headerFooterData?.data ?? {},
        products: products ?? {},
        categorias: categorias ?? {},
      },
  
      /**
       * Revalidate means that if a new request comes to server, then every 1 sec it will check
       * if the data is changed, if it is changed then it will update the
       * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
       */
      revalidate: 1,
    };
  }