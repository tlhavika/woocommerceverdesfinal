"use client";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
var listaVolatel = [];
var listaIds = [];
const ProductsRalacionadosComponent = ({ selectedProduct, param }) => {
  const [list, setList] = useState([]);
  const [selectedProd, setSelectedProd] = useState("");
  const router = useRouter();
  const { query } = router;
  const parameter2 = query.id;
  useEffect(() => {
    listaVolatel = [];
    listaIds = [];
    param?.map((lss) => setSelectedProd(lss));
    const init = async (req, res) => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
      selectedProduct.map((product) => {
        if (selectedProd === product.slug) {
          listaIds.push(product.related_ids);
        }
      });
      listaIds.map((id) => {
        selectedProduct.map((product) => {
          for (let index = 0; index < id.length; index++) {
            const element = id[index];
            if (element === product.id) {
              listaVolatel.push(product);
            }
          }
        });
      });

      setList(listaVolatel);
    };
    init();
  }, [selectedProduct, param, selectedProd]);

  return (
    <div className="container mx-auto py-4 min-h-50vh">
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
        {list.map(({ id, name, sale_price, images, stock_status, slug }) => (
          <>
            <React.Fragment key={id}>
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
                  <h5 className="mb-2 text-lg font-medium leading-tight">
                    {name || ""}
                  </h5>
                  <h2 className="mb-4 text-base">
                    {stock_status === "outofstock" ? (
                      <p className="text-base text-red-600 font-extrabold text-center">
                        Esgotado
                      </p>
                    ) : (
                      <></>
                    )}
                  </h2>
                </div>
              </div>
            </React.Fragment>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductsRalacionadosComponent;
