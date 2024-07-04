"use client";
import React, { useState, useEffect, useRef } from "react";
var listaVolatel = [];

const FilterProductsComponent = ({ list, setCategoria }) => {
  const [listCategorias, setListCategorias] = useState([]);
  useEffect(() => {
    listaVolatel = [];
    list.map(({ categories }) => {
      if (listaVolatel.includes(categories[0].name)) {
      } else {
        listaVolatel.push(categories[0].name);
      }
    });
    setListCategorias(listaVolatel);
    const init = async () => {
      const { Collapse, Dropdown, Ripple, initTWE } = await import(
        "tw-elements"
      );
      initTWE({ Collapse, Dropdown, Ripple });
    };
    init();
  }, [list]);

  return (
    <nav
      className="relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start"
      data-twe-navbar-ref
    >
      <div className="px-6">
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-twe-collapse-item
        >
          <ul className="me-auto flex flex-row" data-twe-navbar-nav-ref>
            <li className="static" data-twe-nav-item-ref data-twe-dropdown-ref>
              <a
                className="flex items-center whitespace-nowrap py-2 pe-2 text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                type="button"
                id="dropdownMenuButtonX"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
                data-twe-nav-link-ref
              >
                Categorias
                <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <div
                className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding shadow-lg data-[twe-dropdown-show]:block dark:bg-neutral-700"
                aria-labelledby="dropdownMenuButtonX"
                data-twe-dropdown-menu-ref
              >
                {listCategorias.map((categories) => (
                  <div
                    key={categories}
                    onClick={() => setCategoria(categories)}
                  >
                    <div className="px-6 py-5 lg:px-8">
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="cursor-pointer">{categories}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FilterProductsComponent;
