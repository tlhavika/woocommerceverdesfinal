"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useContext } from "react";
import { TEAlert } from "tw-elements-react";
import AppContext from "../../components/AppContext";
import axios from "axios";
import { useRouter } from 'next/navigation'
const ProductsRalacionadosComponent = dynamic(
  () => import("../../../pages/produtosRalacionados"),
  {
    ssr: false,
  }
);
const FormComponent = () => {
  const { quantity, setQuantity, todosProdutos } = useContext(AppContext);
  const router = useRouter()
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [contacto, setContacto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isDangerAlert, setIsDangerAlert] = useState(false);
  const [isSucessAlert, setIsSucessAlert] = useState(false);
  const [isSedingAlert, setIsSedingAlert] = useState(false);
  var mesndagem = "";
  var novaLista = [];
  useEffect(() => {
    const init = async () => {
      const { Ripple, Input, initTWE } = await import("tw-elements");
      initTWE({ Ripple, Input });
    }; 
    init();
  }, []);
  async function enviar(e) {
    var students = JSON.parse(localStorage.getItem("listCard")) || [];
    e.preventDefault()
    if (nomeCompleto === "" || endereco === "" || email === "" || contacto === "") {
      var delayInMilliseconds = 10000; //10 seconds
      setIsDangerAlert(true);
      setTimeout(function() {
        setIsDangerAlert(false);
      }, delayInMilliseconds);
    } else {
      setIsDangerAlert(false);
      // var delayInMilliseconds = 5000; //5 seconds
      // setIsSucessAlert(true);
      // setTimeout(function() {
      //   setIsSucessAlert(false);
      // }, delayInMilliseconds);
      mesndagem += `Nome do cliente: ${nomeCompleto} \n Endereço: ${endereco} \n Email: ${email}\n Contacto: ${contacto}\n\n`;
      mesndagem += `Lista do(s) produtos requisitado(s)\n`;
      todosProdutos.map((todo) => {
        students.forEach(function (o) {
          if (o[0].id === todo.id) {
            console.log(o[0].quantity2);
            console.log(todo.sale_price);
            console.log(todo.name);           
            mesndagem += `Nome do produto: ${todo.name} \n Quantidade: ${o[0].quantity2} \n Preço: ${todo.sale_price}\n\n`;
          }
        });
      });
      const data = {
        menssagem: mesndagem,
      };
      await axios
      .post("https://desktop-api-4f850b3f9733.herokuapp.com/whatsappMessage", data)
      .then((response) => {
        localStorage.setItem("listCard", JSON.stringify(novaLista));
        var delayInMilliseconds = 5000; //5 seconds
        setIsSedingAlert(true);
        router.push("/")
        setTimeout(function() {
          setIsSedingAlert(false);
        }, delayInMilliseconds);
      })
      .catch((err) => {
      });
      
    }
  }
  return (
    <div className="container mx-auto py-4 min-h-50vh">
      <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10 mb-4">
        FORMULÁRIO
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface col-span-2">
          <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-white/10">
            Nota
          </h5>
          <div className="p-4">
            <div className="flex flex-row gap-4">
              <div>
                <p className="mb-4 text-base">
                  Seu Pedido será enviado para o nosso WhatsApp! Entraremos em
                  contacto para dar seguimento a sua compra!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto block w-full rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
          <TEAlert staticAlert open={isDangerAlert} color="bg-danger-100 text-danger-700" className="text-center">
            Todos os campos devem ser preenchidos
          </TEAlert>
          <TEAlert staticAlert open={isSucessAlert} color="bg-success-100 text-success-700">
            Pedido enviado com sucesso
          </TEAlert>
          <TEAlert staticAlert open={isSedingAlert} color="bg-secondary-100 text-secondary-800">
            Enviando Pedido
          </TEAlert>
          <form>
            <div className="relative mb-3" data-twe-input-wrapper-init>
              <input
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Nome Completo"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Nome Completo
              </label>
            </div>
            <div className="relative mb-3" data-twe-input-wrapper-init>
              <input
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Endereço"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Endereço
              </label>
            </div>
            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <label
                htmlFor="exampleInputEmail1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
              >
                Email
              </label>
            </div>
            <div className="relative mb-6" data-twe-input-wrapper-init>
              <input
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputPassword1"
                placeholder="Contacto"
              />
              <label
                htmlFor="exampleInputPassword1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
              >
                Contacto
              </label>
            </div>
            <button
              onClick={(e) => enviar(e)}
              type="submit"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
