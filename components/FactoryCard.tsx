type FactoryCardProps = {
  name: string;
  products: string[];
  cover: string;
};

import fc from "@/assets/icons/Frame 1000005086.png";
import Image from "next/image";

import elipse from "@/assets/icons/Rectangle 122.png";
import { Star } from "lucide-react";
export function FactoryCard({ name, products, cover }: FactoryCardProps) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="flex gap-3">
          <Image src={elipse} className="h-15" alt="Elipse" />

          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="bg-amber-200/30 rounded-full flex justify-center items-center lg:w-[30%] md:w-[40%] w-[50%] mt-1">
              <Image src={fc} alt="V" />
            </div>

            <div className="text-xs text-gray-500 mt-2  gap-3 flex lg:w-[80%] flex-wrap">
              <span>4 anos</span>
              <span>90 funcionários</span>
              <span>Capacidade de Produnção: 200(t)</span>
              <span>Tempo de resposta: 3h</span>
            </div>
          </div>
        </div>

        <span className="lg:flex-col flex-row-reverse flex lg:gap-1 gap-4 lg:mt-0 mt-5">
          <button className="bg-linear-90 lg:w-[160px] w-[50%] from-green-600 to-cyan-500 text-white rounded-lg px-4 h-9">
            Ir para conversa
          </button>
          <span className="flex text-sm opacity-70 mt-2">
            <Star className="text-amber-300 fill-amber-300" size={15} />
            4.5 (20+ avaliações)
          </span>
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-3 mt-4">
        {/* Grid dos produtos */}
        <div className="grid grid-cols-2 gap-2 order-2 lg:order-1">
          {products.map((p, i) => (
            <div key={i}>
              <img src={p} className="rounded h-44 object-cover w-full" />

              <p className="text-xs mt-1">Cerâmica</p>
            </div>
          ))}
        </div>

        {/* Imagem grande */}
        <img
          src={cover}
          className="order-1 lg:order-2 h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
