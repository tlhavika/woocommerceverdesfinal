import dynamic from "next/dynamic";
import { getProductsData } from "../../utils/products";
const ProductsComponent = dynamic(() => import("../../../pages/products"), {
  ssr: false,
});
const { data: products } = await getProductsData();
const TodosProdutosComponent = () => {
  return (
    <>
      <div className="container mx-auto py-4 min-h-50vh">
        <ProductsComponent listaTodosProdutos={products} />
      </div>
    </>
  );
};

export default TodosProdutosComponent;
