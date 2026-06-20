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
  { id: "all", label: "Todas", icon: Menu },
  { id: "tools", label: "Ferramentas", icon: Wrench },
  { id: "electronics", label: "Eletrônicos", icon: Monitor },
  { id: "bags", label: "Bolsas", icon: ShoppingBag },
  { id: "electric", label: "Elétricos", icon: Lightbulb },
];

const moreCategories = ["Indústria", "Agricultura", "Têxtil", "Metalúrgica"];

export default function CategoryBar() {
  const [active, setActive] = useState("all");
  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="relative w-full border-b border-gray-200">
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide flex-1">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`
                  flex-shrink-0
                  flex
                  items-center
                  gap-2
                  py-3
                  border-b-2
                  transition
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
              </button>
            );
          })}
        </div>

        <div className="relative hidden lg:block">
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

      <div className="relative lg:hidden py-2 place-self-end ">
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
  );
}
