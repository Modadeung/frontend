"use client";

import Navbar from "@/components/navbar";
import SpaceKeyword from "@/components/space/SpaceKeyword";
import Image from "next/image";
import plusIcon from "@/assets/icons/plusIcon.svg";
import { useState } from "react";
import SpaceCard from "@/components/space/SpaceCard";

export default function SpacePage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const handleCategoryOpen = () => {
        setIsCategoryOpen((prev) => !prev);
    };

    const data = [
        {
            images: [
                "https://i.ibb.co/G3BctN01/cutedog.jpg",
                "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
            ],
            keywords: ["키워드", "키워드", "키워드"],
            title: "한라봉 카페 판매대",
            description:
                "감성 가득한 플라워 디자인 스튜디도 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
            startPrice: 206777,
            endPrice: 306777,
        },

        {
            images: [
                "https://i.ibb.co/G3BctN01/cutedog.jpg",
                "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
            ],
            keywords: ["키워드", "키워드", "키워드"],
            title: "한라봉 카페 판매대",
            description:
                "감성 가득한 플라워 디자인 스튜디도 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
            startPrice: 206777,
            endPrice: 306777,
        },
    ];

    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
                <p className="mt-[51px]">AI를 통해 추천된 가게</p>
                <div className="flex gap-[11px] mt-[13px]">
                    <SpaceKeyword keyword="의류&패션" />
                    <SpaceKeyword keyword="의류&패션" />
                    <SpaceKeyword keyword="의류&패션" />
                    <div
                        className="w-32 h-32 flex items-center justify-center rounded-[999px] bg-[#FF9D00] cursor-pointer"
                        onClick={handleCategoryOpen}
                    >
                        <Image
                            src={plusIcon}
                            width={13}
                            height={13}
                            alt="plus icon"
                        />
                    </div>
                </div>
                <div className="mt-[32px] flex flex-col gap-[43px] pb-[104px]">
                    {data &&
                        data.map((d, index) => (
                            <SpaceCard key={index} {...d} />
                        ))}
                </div>
            </div>
            <Navbar />
        </>
    );
}
