import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import axios from "axios";
import { isEmpty } from "lodash";
import { CART_ENDPOINT } from "../src/utils/constants/endpoints";
const AddToCart2Component = dynamic(() => import("../src/components/addToCart"), {
  ssr: false,
});
const ProdutoSelectedComponent = ({ selectedProduct2 }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [list, setList] = useState([]);
  const [listCart, setListCart] = useState([]);
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState("");
  const { query } = router;
  const parameter2 = query.id;
  useEffect(() => {
    var listaConProdutos = [];
    var listaConProdutosTemp = [];
    var listaNomesTemp = [];
    var contagem = 0;
    parameter2?.map((lss) => setSelectedProduct(lss));
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
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });

        selectedProduct2.map((it) => {          
          if (listaNomesTemp.includes(it.name)) {            
            listCart.map((tf) => {                           
              if (it.name === tf.data.name) {
                listaConProdutosTemp.push({
                  id: it.id,
                  name: it.name,
                  sale_price: it.sale_price,
                  images: it.images || "",
                  stock_status: it.stock_status,
                  categories: it.categories,
                  quantity: tf.quantity,
                  description: it.description,
                  short_description: it.short_description,
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
              images: it.images || "",
              stock_status: it.stock_status,
              description: it.description,
              short_description: it.short_description,
              categories: it.categories,
              quantity: "0",
              cartKey: "",
              slug: it.slug,
              status: false,
            });
          }
      });
      setList(listaConProdutosTemp);
    };
    const init = async (req, res) => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
    init();
    viewCart2();
  }, [selectedProduct2, parameter2,listCart]);
  function newImage(imge) {
    setSelectedImage(imge);
  }
  return (
    <div className="container mx-auto py-4 min-h-50vh">
      {list?.map(
        ({
          id,
          name,
          sale_price,
          images,
          short_description,
          quantity,
          description,
          slug,
          cartKey,
          status,
        }) => (
          <>
            {selectedProduct === slug && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" key={id}>
                  <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
                    <div className="border-b-2 border-neutral-100 px-4 py-3 text-xl font-medium leading-tight dark:border-white/10 flex justify-center items-center">
                      {selectedImage === "" ? (
                        <Image
                          src={images[0].src || ""}
                          width={400}
                          height={400}
                          className="h-auto max-w-sm rounded-lg transition duration-300 ease-in-out hover:scale-110"
                          style={{ height: "auto", width: "100%" }}
                          alt="..."
                        />
                      ) : (
                        <Image
                          src={selectedImage}
                          width={400}
                          height={400}
                          className="h-auto max-w-sm rounded-lg transition duration-300 ease-in-out hover:scale-110"
                          style={{ height: "auto", width: "100%" }}
                          alt="..."
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-4 gap-4">
                        {images.map(({ src }) => (
                          <div key={src}>
                            <Image
                              onClick={() => newImage(src)}
                              src={src}
                              width={400}
                    height={400}
                              className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                              style={{ height: "auto", width: "100%" }}
                              alt="..."
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface col-span-2">
                    <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-4xl font-medium leading-tight dark:border-white/10">
                      {name || ""}
                    </h5>
                    <div className="p-6">
                      <p className="text-blue-600 font-extrabold text-3xl">
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "MZN",
                        }).format(sale_price || "")}
                      </p>
                      <p className="mt-4 text-base font-bold">Detalhes</p>
                      <p className="mb-2 text-base">
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: description || "",
                          }}
                        />
                      </p>
                      <div className="flex flex-row gap-4">
                        <AddToCart2Component id={id}
                                  status={status}
                                  quantity2={quantity}
                                  cartKey={cartKey} />
                        {/* <button
                          type="button"
                          className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-primary-3 transition duration-150 ease-in-out hover:bg-white hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Carrinho
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-14 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Descrição
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: short_description || "",
                      }}
                    />
                  </p>
                </div>
              </>
            )}
          </>
        )
      )}
    </div>
  );
};

export default ProdutoSelectedComponent;
