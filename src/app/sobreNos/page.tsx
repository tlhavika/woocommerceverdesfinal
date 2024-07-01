"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const ProductsRalacionadosComponent = dynamic(
  () => import("../../../pages/produtosRalacionados"),
  {
    ssr: false,
  }
);
const SobreNosComponent = () => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
    init();
  }, []);
  return (
    <div className="container mx-auto py-4 min-h-50vh mt-24">
      <div className="grid grid-cols-1">
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
            Sobre Nós
          </h5>
          <div className="p-4">
            <div className="flex flex-row gap-4">
              <div>
                <p className="mb-4 text-base text-justify">
                  Nossa empresa está no mercado especializada no fornecimento de
                  soluções energéticas renováveis, com foco especializado em
                  painéis solares e equipamentos relacionados. Estamos
                  comprometidos em impulsionar a transição global para uma
                  economia de baixo carbono, fornecendo produtos e serviços de
                  alta qualidade que capacitam indivíduos, empresas e
                  comunidades a adotarem fontes de energia limpa e sustentável.
                </p>
                <p className="mb-4 text-base text-justify">
                  Nosso maior objetivo é a satisfação total do cliente, desde a
                  negociação até o suporte, para isso, contamos com uma equipe
                  dedicada e sistemas de alta tecnologia para oferecer o melhor
                  da energia solar fotovoltaica, sempre com transparência, foco
                  no resultado e eficiência de nossas instalações.
                </p>
                <p className="mb-4 text-base text-justify font-bold">
                  Para empresas e domicílios oferecemos:
                </p>
                <div className="flex flex-row">
                  <p className="mb-4 text-base text-justify font-bold">
                    Produtividade
                  </p>
                  <p className="mb-4 text-base text-justify">
                    &nbsp; - Equipamentos, como iluminação, caixas registradoras
                    e refrigeradores, sempre ligados e seguros.
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="mb-4 text-base text-justify font-bold">
                    Economia
                  </p>
                  <p className="mb-4 text-base text-justify">
                    &nbsp; - Economia na sua factura de energia.
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="mb-4 text-base text-justify font-bold">
                    Conectividade
                  </p>
                  <p className="mb-4 text-base text-justify">
                    &nbsp; - Controle a energia do seu negócio pelo seu celular,
                    de onde estiver.
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="mb-4 text-base text-justify font-bold">
                    Conforto
                  </p>
                  <p className="mb-4 text-base text-justify">
                    &nbsp; - Autonomia que mantém a iluminação, refrigeradores,
                    ares-condicionados, TVs e electros ligados.
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="mb-4 text-base text-justify font-bold">
                    Tecnologia
                  </p>
                  <p className="mb-4 text-base text-justify">
                    &nbsp; - Você no controle da sua própria energia, consumindo
                    e economizando quanto quiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosComponent;
