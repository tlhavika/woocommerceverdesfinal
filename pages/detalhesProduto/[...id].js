import dynamic from "next/dynamic";
import { getProductsData } from "../../src/utils/products";
import { useRouter } from "next/router";

const ProdutoSelectedComponent = dynamic(() => import("../productoSelected"), {
  ssr: false,
});
const ProductsRalacionadosComponent = dynamic(
  () => import("../produtosRalacionados"),
  {
    ssr: false,
  }
);
const RootLayout = dynamic(() => import("../../src/app/layout"), {
  ssr: false,
});
const { data: products } = await getProductsData();
const DetalhesProdutoComponent = () => {
  const router = useRouter();
  const { query } = router;
  const parameter2 = query.id;

 

  return (
    <RootLayout>
      <ProdutoSelectedComponent selectedProduct2={products} />
      <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4 mt-12">
        Produtos Relacionados
      </h5>
      <ProductsRalacionadosComponent
        selectedProduct={products}
        param={parameter2}
      />
    </RootLayout>
  );
};

export default DetalhesProdutoComponent;
