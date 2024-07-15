import Image from "next/image";
const VideoComponent = () => {
  return (
    <div className="container mx-auto py-4 min-h-50vh">
      <div className="font-bold text-center text-2xl my-10">
        <h5>Instalação Hidráulica Sustentável Com Painés Solares</h5>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <p className="lg:mb-4 text-base text-justify">
            Está cansado das altas contas de energia e quer contribuir para um
            mundo mais sustentavel? Apresentamos a solução ideal para você:
            nossa instalação Hidráulica com Painés Solares!
          </p>
          <p className="lg:mb-4 text-base text-justify">
            Imageine aproveitar a energia limpa e inesgotavel do Sol para
            equecer a sua água e alimenar o seu sistema Hidráulico. Com a nossa
            tecnoligia de ponta, você pode ter tudo isso e muito mais.
          </p>
          <p className="lg:mb-4 text-xl text-justify font-bold">
            Por Que Adoptar a Energia Solar!
          </p>
          <p className="lg:mb-4 text-base text-justify">
            <small className="lg:mb-4 text-base text-justify font-bold">
              Economia de Custos Operacionais
            </small>{" "}
            - Reduza sisgnificativamente suas dispesas com energia electrica,
            utilizando uma fonte de energia gratuita e abundante - o Sol!
          </p>
          <p className="lg:mb-4 text-base text-justify">
            <small className="lg:mb-4 text-base text-justify font-bold">
              Sustentabilidade Ambiental
            </small>{" "}
            - Contribua para a preservação do meio ambiente, diminuindo a
            emissão de Carbono e promovendo praticas ecológicas.
          </p>
          <p className="lg:mb-4 text-base text-justify">
            <small className="lg:mb-4 text-base text-justify font-bold">
              Autonomia e Confiabilidade
            </small>{" "}
            - Garanta a continuidade de suas operações mesmo em situações de
            falta de energia electrica, com um sistema que funciona de forma
            eficiente mesmo em dias nublados.
          </p>
        </div>
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <video className="w-full rounded-lg" autoPlay controls>
            <source
              src="https://tlhavika.systemsmanager.co.mz/wp-content/uploads/2024/06/TlhavikaMaputo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/design281.png"
            alt=""
          />
        </div>
        <div className="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface lg:col-span-2">
          <p className="mt-4 lg:mb-4 text-4xl text-center font-bold text-primary">
            Sistema de Geração de Energia Solar de 12KW!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">
                Caracteristicas:
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Inversor DEYE trifásico
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Potência
                </small>{" "}
                : 12 KW Trifásico
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Proteção
                </small>{" "}
                : IP 65
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Temperatura
                </small>{" "}
                : - 40 ºC à + 60 ºC
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 1 Inversor
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Bateria de Lítio
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Tensão
                </small>{" "}
                : 48 V
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Corrente
                </small>{" "}
                : 100 A
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Armazenamento
                </small>{" "}
                : 40 kW
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 8 Baterias
              </p>
            </div>
          </div>
          <div className="flex justify-end px-8">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid-cols-1 flex justify-center">
        <Image
            width={1200}
            height={700}
            className="rounded-t-lg"
            src="/melhor qualidade.png"
            alt=""
          />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
        <div className="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface lg:col-span-2">
          <p className="mt-4 lg:mb-4 text-4xl text-center font-bold text-primary">
            Sistema de Geração de Energia Solar de 12KW!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8">
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">
                Caracteristicas:
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Inversor DEYE trifásico
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Potência
                </small>{" "}
                : 12 KW Trifásico
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Proteção
                </small>{" "}
                : IP 65
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Temperatura
                </small>{" "}
                : - 40 ºC à + 60 ºC
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 1 Inversor
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Bateria de Lítio
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Tensão
                </small>{" "}
                : 48 V
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Corrente
                </small>{" "}
                : 100 A
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Armazenamento
                </small>{" "}
                : 40 kW
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 8 Baterias
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Painés Solares
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Pentência
                </small>{" "}
                :650 W
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 18 Painés
              </p>
            </div>
          </div>
          <div className="flex justify-start px-8">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/design41.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-12 grid-cols-1 flex justify-center">
        <Image
            width={1300}
            height={700}
            className="rounded-t-lg"
            src="/25 desconto.png"
            alt=""
          />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/design51.png"
            alt=""
          />
        </div>
        <div className="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface lg:col-span-2">
          <p className="mt-4 lg:mb-4 text-4xl text-center font-bold text-primary">
            Sistema de Geração de Energia Solar de 5KW!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8">
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">
                Caracteristicas:
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Inversor Growatt
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Potência
                </small>{" "}
                : 5000 W
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Proteção
                </small>{" "}
                : IP 65
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Temperatura
                </small>{" "}
                : - 40 ºC à + 60 ºC
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 1 Inversor
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Bateria de Lítio
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Tensão
                </small>{" "}
                : 48 V
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Corrente
                </small>{" "}
                : 100 A
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Armazenamento
                </small>{" "}
                : 40 kW
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 2 Baterias
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Painés Solares
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Pentência
                </small>{" "}
                :650 W
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 12 Painés
              </p>
            </div>
          </div>
          <div className="flex justify-end px-8">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid-cols-1 flex justify-center">
        <Image
            width={1300}
            height={700}
            className="rounded-t-lg"
            src="/whatsapp.png"
            alt=""
          />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
        <div className="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface lg:col-span-2">
          <p className="mt-4 lg:mb-4 text-4xl text-center font-bold text-primary">
            Sistema de Geração de Energia Solar de 5KW!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">
                Caracteristicas:
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Inversor Growatt
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Potência
                </small>{" "}
                : 5000 W
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Tensão
                </small>{" "}
                : 48 V
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Frequência
                </small>{" "}
                : 50 MHz / 60 MHz
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 1 Inversor
              </p>
            </div>
            <div>
              <p className="lg:mb-4 text-xl text-justify font-bold">.</p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Nome
                </small>{" "}
                : Bateria de Lítio
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Tensão
                </small>{" "}
                : 48 V
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Corrente
                </small>{" "}
                : 100 A
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Armazenamento
                </small>{" "}
                : 40 kW
              </p>
              <p className="lg:mb-4 text-base text-justify">
                <small className="lg:mb-4 text-base text-justify font-bold">
                  Quantidade
                </small>{" "}
                : 2 Baterias
              </p>
            </div>
          </div>
          <div className="flex justify-start px-8">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/design91.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
