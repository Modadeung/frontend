import Image from "next/image";
import top from "@/assets/images/cutedog.jpeg";

export default function AdministrationCard(): JSX.Element {
  return (
    <div className="w-349 h-477 rounded-10 opacity-100 shadow-md">
      <Image
        src={top}
        alt="서비스 이미지"
        width={349}
        height={187}
        className="rounded-t-10"
      />
      <div className="w-full h-291 p-20">
        <p className="text-[20px] font-bold leading-24 align-top pb-12">
          한라봉 카페
        </p>
        <p className="text-[14px] leading-24 font-bold align-top">상품 관리</p>
        <p className="text-[14px] font-medium leading-24 pl-12">
          재고 현황: 30개 <br />
          예상 도매 일정: 10일 후
        </p>

        <p className="text-[14px] leading-24 font-bold align-top pt-16">
          결제 관리
        </p>
        <p className="text-[14px] font-medium leading-24 pl-12">
          남은 구독 기간: 6일 / 20일 <br />
          결제 금액: 80,000원 <br />
          결제 방법: 자동 이체 (카카오페이)
        </p>
      </div>
    </div>
  );
}
