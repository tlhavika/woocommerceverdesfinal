"use client";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CART_ENDPOINT } from "../../utils/constants/endpoints";
import { isEmpty } from "lodash";
import AppContext from "../../components/AppContext";
import dynamic from "next/dynamic";

const ClearCartComponent = dynamic(() => import("../../components/clearCart"), {
  ssr: false,
});
const AddRemoveProductComponent = dynamic(
  () => import("../../components/addRemoveProduct"),
  {
    ssr: false,
  }
);

const SolicitarProdutoComponent = () => {
  const { quantity, setQuantity } = useContext(AppContext);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  
  const qnt = parseInt(quantity);
  
  
  useEffect(() => {
    var listaProdutoVolatel = [];
    var totalVolatel = 0;
    const getSession = () => {
      return localStorage.getItem("x-wc-session");
    };
    const getApiCartConfig = () => {
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
    const viewCart2 = () => {
      const addOrViewCartConfig = getApiCartConfig();
  
      axios
        .get(CART_ENDPOINT, addOrViewCartConfig)
        .then((res) => {
          listaProdutoVolatel = [];
          totalVolatel = 0;
          res.data.map((item) => {
            totalVolatel += parseFloat(item.line_total);
            listaProdutoVolatel.push({
              quantity: item.quantity,
              line_total: item.line_total,
              name: item.data.name,
              src: item.data.images[0].src || "",
            });
          });
          setList(listaProdutoVolatel);
          setTotal(totalVolatel);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    viewCart2();
    const init = async () => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
    init();
  }, []);
  return (
    <div className="container mx-auto py-4 min-h-50vh">
      {qnt === 0 ? (
        <>
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
            NENHUM PRODUTO SELECCIONADO
          </h5>
        </>
      ) : (
        <>
          {" "}
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
            SOLICITAR PRODUTOS(S)
          </h5>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
              <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
                Nota
              </h5>
              <div className="p-4">
                <div className="flex flex-row gap-4">
                  <div>
                    <p className="mb-4 text-base">
                      Seu Pedido será enviado para o nosso WhatsApp! Entraremos
                      em contacto para dar seguimento a sua compra!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface col-span-2">
              <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
                Seu Pedido
              </h5>
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <p className="mb-4 text-base font-bold ">Produto</p>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <p className="mb-4 text-base font-bold"></p>
                    </div>
                    <div>
                      <p className="mb-4 text-base font-bold">Sub Total</p>
                    </div>
                  </div>
                </div>

                {list.map((product) => (
                  <>
                    {" "}
                    <div
                      className="flex justify-between mb-4"
                      key={product.name}
                    >
                      <div className="flex flex-row gap-2 w-1/2">
                        <Image
                          width={150}
                          height={150}
                          src={product.src}
                          className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                          style={{ height: "150px" }}
                          alt="..."
                        />
                        <div className="flex flex-col mt-12">
                          <p className="mb-4 text-base font-bold">
                            {product.name}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-4 text-base font-bold">
                          <AddRemoveProductComponent
                            quantity2={product.quantity}
                          />
                        </p>
                      </div>
                      <div>
                        <p className="mb-4 text-base font-bold">
                          {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "MZN",
                          }).format(product.line_total || "")}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
                <div className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
                  <div className="flex justify-between">
                    <div>Total</div>
                    <div>
                      {" "}
                      {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "MZN",
                      }).format(total || "")}
                    </div>
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
                      Finalizar Pedido
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

export default SolicitarProdutoComponent;
