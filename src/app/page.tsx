import Image from "next/image";
import top from "@/assets/images/main1.svg";
import middle from "@/assets/images/main2.svg";

const spaceNames = [
  "공간 이름1",
  "공간 이름22312",
  "공간 이름3123",
  "공간 이름4131",
  "공간 이름5",
];

function SpaceItem({ name }: { name: string }) {
  return (
    <div className="flex flex-col">
      <div className="w-130 h-130 rounded-19 bg-[#d9d9d9]"></div>
      <div className="w-100 h-24 pt-4">
        <span className="text-[12px] leading-24 tracking-[-0.1] text-center align-top">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="px-20 pt-45 border-1">
      <span className="text-[18px] font-bold leading-[100%] align-top">
        NAME
      </span>
      <div className="pt-35 pb-29">
        <Image src={top} alt="서비스 이미지" width={350} height={254} />
      </div>
      <span className="text-[16px] font-medium leading-[100%] align-top">
        나의 성장
      </span>
      <div className="pt-14 pb-32">
        <Image src={middle} alt="성장 그래프" width={350} height={206} />
      </div>
      <span className="text-[16px] font-medium leading-[100%]">
        추천하는 성장 공간
      </span>
      <div className="pt-14 flex gap-x-19 overflow-x-scroll scrollbar-hide overflow-y-hidden">
        {spaceNames.map((name, index) => (
          <SpaceItem key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
