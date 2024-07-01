"use client";
import { useEffect } from "react";

const AboutComponent = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE } = await import("tw-elements");
      initTWE({ Tooltip });
    };
    init();
  }, []);

  return (
    <div className="container mx-auto py-4 min-h-50vh">
        <h5 className="border-b-2 border-neutral-100 py-3 text-xl font-bold leading-tight dark:border-white/10 mb-4">
            Sobre Nós
        </h5>
        <p className="text-justify mb-2">
        Nossa empresa está no mercado especializada no fornecimento de soluções energéticas renováveis, com foco especializado em painéis solares e equipamentos relacionados. Estamos comprometidos em impulsionar a transição global para uma economia de baixo carbono, fornecendo produtos e serviços de alta qualidade que capacitam indivíduos, empresas e comunidades a adotarem fontes de energia limpa e sustentável.
        </p>
        <p className="text-justify mb-4">
        Nosso maior objetivo é a satisfação total do cliente, desde a negociação até o suporte, para isso, contamos com uma equipe dedicada e sistemas de alta tecnologia para oferecer o melhor da energia solar fotovoltaica, sempre com transparência, foco no resultado e eficiência de nossas instalações.
        </p>
        <h5 className="border-b-2 border-neutral-100 py-3 text-lg font-bold leading-tight dark:border-white/10 mb-4">
        Para empresas e domicílios oferecemos:
        </h5>
        <div className="flex flex-row">
            <p className="text-justify mb-2 font-bold">
            Produtividade &nbsp;
            </p>
            <p className="text-justify mb-2">
            - Equipamentos, como iluminação, caixas registradoras e refrigeradores, sempre ligados e seguros;
            </p>
        </div>
        <div className="flex flex-row">
            <p className="text-justify mb-2 font-bold">
            Economia &nbsp;
            </p>
            <p className="text-justify mb-2">
            - Economia na sua factura de energia;
            </p>
        </div>
        <div className="flex flex-row">
            <p className="text-justify mb-2 font-bold">
            Conectividade &nbsp;
            </p>
            <p className="text-justify mb-2">
            - Controle a energia do seu negócio pelo seu celular, de onde estiver;
            </p>
        </div>
        <div className="flex flex-row">
            <p className="text-justify mb-2 font-bold">
            Conforto &nbsp;
            </p>
            <p className="text-justify mb-2">
            - Autonomia que mantém a iluminação, refrigeradores, ares-condicionados, TVs e electros ligados;
            </p>
        </div>
        <div className="flex flex-row">
            <p className="text-justify mb-2 font-bold">
            Tecnologia &nbsp;
            </p>
            <p className="text-justify mb-2">
            - Você no controle da sua própria energia, consumindo e economizando quanto quiser.
            </p>
        </div>
    </div>
  );
};

export default AboutComponent;