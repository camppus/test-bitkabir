import CategoryBar from "@/components/CategoryBar";
import { FactoryCard } from "@/components/FactoryCard";
import { FeaturedFactoryCard } from "@/components/FeaturedFactoryCard";
import Header from "@/components/Header";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" flex flex-col gap-20 pb-10">
      <Header />

      <span className="p-5 lg:mt-0 mt-10 flex flex-col gap-5 bg-[#FAFAFA] rounded-[12px] place-self-center lg:w-[90%]">
        <span className="flex justify-between items-center">
          <h1 className="scroll-m-20 pb-2 text-[22px] font-semibold text-[#353535]  first:mt-0">
            Fabricas em destaques
          </h1>
          <div className="flex items-center text-[#353535] text-[16px] gap-2 ">
            <small className="flex items-center text-[#353535] text-[14px] ">
              Ver todos
            </small>
            <ChevronRight size={16} />
          </div>
        </span>
        <div className="grid lg:grid-cols-3 gap-5 ">
          <FeaturedFactoryCard
            cover="/Group 2861.png"
            name="Luz Kabir"
            thumbs={["/Rectangle 124.png", "/Frame 1000006277.png"]}
            key={"332"}
          />
          <FeaturedFactoryCard
            cover="/Group 2861.png"
            name="Luz Kabir"
            thumbs={["/Rectangle 124.png", "/Frame 1000006277.png"]}
            key={"222"}
          />
          <FeaturedFactoryCard
            cover="/Group 2861.png"
            name="Luz Kabir"
            thumbs={["/Rectangle 124.png", "/Frame 1000006277.png"]}
            key={"www"}
          />
        </div>
      </span>

      <div className="w-[90%] flex -mt-10 place-self-center ">
        <CategoryBar />
      </div>
      <div className="grid lg:grid-cols-2 -mt-10  md:grid-cols-2 gap-7  lg:px-25 px-4">
        <FactoryCard
          name="Luz Kabir"
          cover="/Rectangle 124.png"
          products={[
            "/Rectangle 123.png",
            "/Group 2586.png",
            "/Rectangle 126.png",
            "/Rectangle 123.png",
          ]}
        />

        <FactoryCard
          name="Biocom"
          favicon="/Rectangle 134.png"
          cover="/Rectangle 133.png"
          products={[
            "/Rectangle 129.png",
            "/Rectangle 132.png",
            "/Rectangle 131.png",
            "/Rectangle 130.png",
          ]}
        />
        <FactoryCard
          name="Textang ll"
          cover="/Rectangle 140.png"
          products={[
            "/Rectangle 136.png",
            "/Rectangle 139.png",
            "/Rectangle 138.png",
            "/Rectangle 137.png",
          ]}
          favicon="/Rectangle 141.png"
        />

        <FactoryCard
          name="Cimangola"
          cover="/Rectangle 147.png"
          products={[
            "/Rectangle 146.png",
            "/Rectangle 145.png",
            "/Rectangle 144.png",
            "/Rectangle 143.png",
          ]}
          favicon="/Rectangle 148.png"
        />
      </div>
    </div>
  );
}
