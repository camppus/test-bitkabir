"use client";

import { useState } from "react";
import {
  Menu,
  Wrench,
  Monitor,
  ShoppingBag,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const categories = [
  { id: "all", label: "Todas as categorias", icon: Menu },
  { id: "electronics", label: "Aparelhos Electrónicos", icon: Monitor },
  { id: "bags", label: "Bagagem, Bolsas e Malas", icon: ShoppingBag },
  { id: "electric", label: "Materiais Eléctricos", icon: Lightbulb },
  { id: "tools", label: "Ferramentas e materiais de construção", icon: Wrench },
];



const moreCategories = ["Indústria", "Agricultura", "Têxtil", "Metalúrgica"];

export default function CategoryBar() {
  const [active, setActive] = useState("all");
  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="relative w-full border-b-2 border-gray-200">
      <div className=" flex justify-evenly gap-3 py-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`
                  flex
                  gap-2
                  py-3
                  border-b-2
                  transition
                  w-full
                  text-start
                  ${
                    active === category.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500"
                  }
                `}
            >
              <Icon size={18} />

              <span className="text-sm whitespace-nowrap">
                {category.label}
              </span>
            </div>
          );
        })}

        <div className="relative hidden lg:block   w-full">
          <button
            onClick={() => setOpenMore(!openMore)}
            className="
              px-5
              py-2
              border
              rounded-xl
              flex
              items-center
              gap-2
              hover:bg-gray-50 border-blue-200/70 place-self-end
            "
          >
            Ver mais
            <ChevronDown
              size={18}
              className={openMore ? "rotate-180 transition" : "transition"}
            />
          </button>

          {openMore && (
            <div
              className="
              absolute
              right-0
              top-full
              mt-2
              w-56
              bg-white
              rounded-xl
              shadow-lg
              border
              z-50
            "
            >
              {moreCategories.map((item) => (
                <button
                  key={item}
                  className="
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    hover:bg-gray-100
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative lg:hidden py-2 place-self-end   w-full ">
          <button
            onClick={() => setOpenMore(!openMore)}
            className="
              px-5
              py-2
              border
              rounded-xl
              flex
              items-center
              gap-2
              hover:bg-gray-50
            "
          >
            Ver mais
            <ChevronDown
              size={18}
              className={openMore ? "rotate-180 transition" : "transition"}
            />
          </button>

          {openMore && (
            <div
              className="
              absolute
              right-0
              top-full
              mt-2
              w-56
              bg-white
              rounded-xl
              shadow-lg
              border
              z-50
            "
            >
              {moreCategories.map((item) => (
                <button
                  key={item}
                  className="
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    hover:bg-gray-100
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
