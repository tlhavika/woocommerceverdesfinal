"use client";
import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import axios from "axios";
import { isEmpty } from "lodash";
import { CART_ENDPOINT } from "../src/utils/constants/endpoints";
const FilterProductsComponent = dynamic(() => import("./filterProducts"), {
  ssr: false,
});
const AddToCart2Component = dynamic(() => import("../src/components/addToCart"), {
  ssr: false,
});
const ProductsComponent = ({ listaTodosProdutos }) => {
  const [list, setList] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [categoria, setCategoria] = useState("");
  useEffect(() => {
    var listaConProdutos = [];
    var listaConProdutosTemp = [];
    var listaNomesTemp = [];
    var contagem = 0;
    const init = async (req, res) => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
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

    const viewCart2 = async () => {
      const addOrViewCartConfig = getApiCartConfig();
      await axios
        .get(CART_ENDPOINT, addOrViewCartConfig)
        .then((res) => {
          res.data.map((item) => {
            listaNomesTemp.push(item.data.name);
          });
          setListCart(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
      listaTodosProdutos.map((it) => {
        if (listaNomesTemp.includes(it.name)) {
          listCart.map((tf) => {
            if (it.name === tf.data.name) {
              listaConProdutosTemp.push({
                id: it.id,
                name: it.name,
                sale_price: it.sale_price,
                images: it.images[0].src || "",
                stock_status: it.stock_status,
                categories: it.categories,
                quantity: tf.quantity,
                cartKey: tf.key,
                slug: it.slug,
                status: true,
              });
            }
          });
        } else {
          listaConProdutosTemp.push({
            id: it.id,
            name: it.name,
            sale_price: it.sale_price,
            images: it.images[0].src || "",
            stock_status: it.stock_status,
            categories: it.categories,
            quantity: "0",
            cartKey: "",
            slug: it.slug,
            status: false,
          });
        }
      });
      setList(listaConProdutosTemp);
      console.log(listaConProdutosTemp);
    };

    init();
    viewCart2();
  }, [listaTodosProdutos, listCart]);
  return (
    <>
      {" "}
      {list?.length > 0 && (
        <>
          <FilterProductsComponent setCategoria={setCategoria} list={list} />
          <div className="container mx-auto py-4 min-h-50vh">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4">
              {list?.map(
                ({
                  id,
                  name,
                  sale_price,
                  images,
                  stock_status,
                  categories,
                  slug,
                  status,
                  quantity,
                  cartKey,
                }) => (
                  <React.Fragment key={id}>
                    {categoria === "" ? (
                      <>
                        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                          <div
                            className="relative overflow-hidden bg-cover bg-no-repeat"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            <Image
                              width={400}
                              height={400}
                              className="rounded-t-lg"
                              src={images}
                              alt=""
                            />
                            <a href={`/detalhesProduto/${slug}`}>
                              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          <div className="p-6 text-surface dark:text-white">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                              {name || ""}
                            </h5>
                            <p className="mb-4 text-base text-blue-600 font-extrabold">
                              {Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "MZN",
                              }).format(sale_price || "")}
                            </p>
                            <h2 className="mb-4 text-base">
                              {stock_status === "outofstock" ? (
                                <p className="text-base text-red-600 font-extrabold text-center">
                                  Esgotado
                                </p>
                              ) : (
                                <></>
                              )}
                            </h2>
                            {stock_status === "outofstock" ? (
                              <></>
                            ) : (
                              <div className="mt-2">
                                <AddToCart2Component
                                  id={id}
                                  status={status}
                                  quantity2={quantity}
                                  cartKey={cartKey}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {categoria === categories[0].name && (
                          <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                            <div
                              className="relative overflow-hidden bg-cover bg-no-repeat"
                              data-twe-ripple-init
                              data-twe-ripple-color="light"
                            >
                              <Image
                                width={400}
                                height={400}
                                className="rounded-t-lg"
                                src={images}
                                alt=""
                              />
                              <a href={`/detalhesProduto/${slug}`}>
                                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                              </a>
                            </div>
                            <div className="p-6 text-surface dark:text-white">
                              <h5 className="mb-2 text-xl font-medium leading-tight">
                                {name || ""}
                              </h5>
                              <p className="mb-4 text-base text-blue-600 font-extrabold">
                                {Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "MZN",
                                }).format(sale_price || "")}
                              </p>
                              <h2 className="mb-4 text-base">
                                {stock_status === "outofstock" ? (
                                  <p className="text-base text-red-600 font-extrabold text-center">
                                    Esgotado
                                  </p>
                                ) : (
                                  <></>
                                )}
                              </h2>
                              {stock_status === "outofstock" ? (
                                <></>
                              ) : (
                                <div className="mt-2">
                                  <AddToCart2Component
                                    id={id}
                                    status={status}
                                    quantity2={quantity}
                                    cartKey={cartKey}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ProductsComponent;
