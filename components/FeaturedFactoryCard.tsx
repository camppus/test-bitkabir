type Props = {
  name: string;
  cover: string;
  thumbs: string[];
};

import elipse from "@/assets/icons/Ellipse 9.png";
import Image from "next/image";
export function FeaturedFactoryCard({ name, cover, thumbs }: Props) {
  return (
    <div className="  ">
      <div className="flex gap-3 mb-3">
        <Image src={elipse} alt="Elipse" className="h-14 w-14" />

        <div className="flex flex-col">
          <h3 className="font-semibold">{name}</h3>

          <img src="/Frame 1000006316.png" />
        </div>
      </div>

      <img src={cover} className=" w-135 h-56" />
      <div className="grid grid-cols-2 gap-2 mt-3">
        {thumbs.map((img, i) => (
          <div key={i} >
            <img
              src={img}
              alt=""
              className="w-full h-36 rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
