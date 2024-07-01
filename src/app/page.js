import dynamic from "next/dynamic";
import { getProductsData } from "../../src/utils/products";
const SlydeComponent = dynamic(() => import("../../pages/slayd"), {
  ssr: false,
});

const ProductsHomePageComponent = dynamic(
  () => import("../../pages/productsHomePage"),
  {
    ssr: false,
  }
);
const VideoComponent = dynamic(() => import("../../pages/videoComponent"), {
  ssr: false,
});
const { data: products } = await getProductsData();
const Home = () => {
  return (
    <>
      <SlydeComponent />
      <ProductsHomePageComponent listaTodosProdutos={products} />
      <VideoComponent />
    </>
  );
};
export default Home;
