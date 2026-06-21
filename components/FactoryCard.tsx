type FactoryCardProps = {
  name: string;
  products: string[];
  cover: string;
  favicon?: string;
};

import fc from "@/assets/icons/Frame 1000005086.png";
import message from "@/assets/icons/Message.png";
import Image from "next/image";

import elipse from "@/assets/icons/Rectangle 122.png";
import { Star } from "lucide-react";
export function FactoryCard({
  name,
  products,
  cover,
  favicon,
}: FactoryCardProps) {
  return (
    <div className="bg-[#E9EBF8]/25 border border-blue-100/50 rounded-[12px] p-3">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="flex gap-2">
          {favicon ? (
            <img src={favicon} className="h-14 w-14 " />
          ) : (
            <Image src={elipse} className="h-14 w-14 " alt="Elipse" />
          )}

          <div className="flex flex-col">
            <span className=" flex gap- items-center">
              <h3 className="text-[20px] font-semibold text-[#353535]">
                {name}
              </h3>
              <Image src={fc} alt="V" className="h-8" />
            </span>

            <div className="text-[12px] font-medium text-gray-500 mt-2 gap-x-5 gap-y-0.5  grid grid-cols-2 ">
              <span>Anos de atuação: 4 </span>
              <span>Nº de funcionários: 90 </span>
              <span>Capacidade de Produnção: 200(t)</span>
              <span>Tempo de resposta: 3h</span>
            </div>
          </div>
        </div>

        <span className="lg:flex-col  flex lg:gap-1 gap-4 lg:mt-0 mt-5">
          <button
            className=" text-white rounded-lg px-3 flex items-center gap-2 font-bold  bg-linear-100
          from-[#5FC099]
          to-[#4294D0] lg:w-full h-[39px]"
          >
            <Image src={message} alt="message" className="h-5 w-6" />
            Ir para conversa
          </button>
          <span className="flex text-sm opacity-70 mt-2 gap-1">
            <Star className="text-amber-300 fill-amber-300" size={15} />
            <strong>4.5 </strong> (20+ avaliações)
          </span>
        </span>
      </div>
      <div className="flex lg:flex-row flex-col gap-3 justify-between my-5">
        <div className="grid lg:w-[50%] grid-cols-2 gap-2 order-2 lg:order-1">
          {products.map((p, i) => (
            <div key={i}>
              <img src={p} className="rounded h-[114px] w-full " />
              <p className="text-[12px] font-semibold mt-2 text-[#353535]">
                Cerâmica
              </p>
            </div>
          ))}
        </div>

        <img
          src={cover}
          className="order-1 lg:order-2 h-[258px] lg:w-[50%] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
