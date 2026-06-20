import CategoryBar from "@/components/CategoryBar";
import { FactoryCard } from "@/components/FactoryCard";
import { FeaturedFactoryCard } from "@/components/FeaturedFactoryCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" flex flex-col gap-20 pb-10">
      <Header />

      <span className="lg:px-20 px-4 flex flex-col gap-5">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Fabricas em destaques
        </h1>
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

      <div className="w-[90%] flex place-self-center ">
        <CategoryBar />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-3 lg:px-20 px-4">
        <FactoryCard
          name="Luz Kabir"
          cover="/Rectangle 124.png"
          products={[
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
          ]}
        />
        <FactoryCard
          name="Luz Kabir"
          cover="/Rectangle 124.png"
          products={[
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
          ]}
        />

        <FactoryCard
          name="Biocom"
          cover="/Rectangle 124.png"
          products={[
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
          ]}
        />
        <FactoryCard
          name="Biocom"
          cover="/Rectangle 124.png"
          products={[
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
            "/Group 2861.png",
          ]}
        />
      </div>
    </div>
  );
}
