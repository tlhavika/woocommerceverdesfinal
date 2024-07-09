"use client";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { CART_ENDPOINT } from "../../utils/constants/endpoints";
import { isEmpty } from "lodash";
import AppContext from "../../components/AppContext";
const AddRemoveProductComponent = dynamic(
  () => import("../../components/addRemoveProduct"),
  {
    ssr: false,
  }
);

const ClearCartComponent = dynamic(() => import("../../components/clearCart"), {
  ssr: false,
});
const CarrinhoComponent = () => {
  const { quantity, setQuantity, todosProdutos } = useContext(AppContext);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  const [gatilho, setGatilho] = useState("a");
  const [isAddedToCart, setIsAddedToCart] = useState(true);
  const qnt = parseInt(quantity);

  useEffect(() => {
    var listaVolatel = [];
    var totalVolatel = 0;
    var students = JSON.parse(localStorage.getItem("listCard")) || [];
    todosProdutos.map((todo) => {
      students.forEach(function (o) {
        if (o[0].id === todo.id) {
          console.log(o[0].quantity2);
          totalVolatel +=
            parseFloat(todo.sale_price) * parseFloat(o[0].quantity2);
          listaVolatel.push({
            quantity: o[0].quantity2,
            line_total:
              parseFloat(todo.sale_price) * parseFloat(o[0].quantity2),
            name: todo.name,
            sale_price: todo.sale_price,
            id: todo.id,
            cartKey: todo.id,
            src: todo.images[0].src || "",
          });
        }
      });
    });
    setList(listaVolatel);
    setTotal(totalVolatel);
    setGatilho("b");
    const init = async () => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
    init();
  }, [quantity, todosProdutos]);
  return (
    <div className="h-screen container mx-auto py-4 min-h-50vh">
      {qnt === 0 ? (
        <>
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
            CARRINHO VAZIO
          </h5>
        </>
      ) : (
        <>
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
            CARRINHO
          </h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
              <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
                Produto(s)
              </h5>
              {list.map((product) => (
                <div
                  className="border-b-2 border-neutral-100 px-6 py-3 leading-tight dark:border-white/10"
                  key={product.name}
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex justify-center">
                      <Image
                        width={150}
                        height={150}
                        src={product.src}
                        className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                        style={{ height: "150px" }}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 text-xl leading-tight">
                        {product.name}
                      </h5>
                      <p>
                        Preço Unitário:{" "}
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "MZN",
                        }).format(
                          parseFloat(product.line_total) /
                            parseFloat(product.quantity) || ""
                        )}
                      </p>
                      <p>Quantidade: {product.quantity}</p>
                    </div>
                    <div className="mt-2">
                      <AddRemoveProductComponent
                        quantity2={product.quantity}
                        id={product.id}
                        cartKey={product.cartKey}
                        setIsAddedToCart={setIsAddedToCart}
                        setGatilho={setGatilho}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
              <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
                Total
              </h5>
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="mb-4 text-base">Quantidade({qnt})</p>
                  </div>
                  <div>
                    <p className="mb-4 text-base">
                      {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "MZN",
                      }).format(total || "")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <ClearCartComponent />
                  <a href="/form">
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      Solicitar Produto(s)
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarrinhoComponent;
