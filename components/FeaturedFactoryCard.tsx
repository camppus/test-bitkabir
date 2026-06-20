type Props = {
  name: string;
  cover: string;
  thumbs: string[];
};

import elipse from "@/assets/icons/Ellipse 9.png";
import Image from "next/image";
export function FeaturedFactoryCard({ name, cover, thumbs }: Props) {
  return (
    <div className="bg-white rounded-xl p-3 shadow">
      <div className="flex gap-3 mb-3">
        <Image src={elipse} alt="Elipse" />

        <div className="flex flex-col">
          <h3 className="font-semibold">{name}</h3>

          <img src="/Frame 1000006316.png" />
        </div>
      </div>

      <img src={cover} className="rounded-lg h-52 w-full object-cover" />
      <div className="grid grid-cols-2 gap-2 mt-2">
        {thumbs.map((img, i) => (
          <div key={i} className="h-40 overflow-hidden rounded">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
