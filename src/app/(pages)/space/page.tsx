"use client";

import Navbar from "@/components/navbar";
import SpaceKeyword from "@/components/space/SpaceKeyword";
import Image from "next/image";
// import plusIcon from "@/assets/icons/plusIcon.svg";
import categotyAddIcon from "@/assets/icons/categoryAddIcon.svg";
import { useState } from "react";
import SpaceCard from "@/components/space/SpaceCard";
import modalReactangle from "@/assets/icons/modalRectangle.svg";
import { Button } from "@/components/ui/button";

export default function SpacePage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const handleCategoryOpen = () => {
        setIsCategoryOpen((prev) => !prev);
    };

    const categories = [
        "공예&소품",
        "문구&팬시",
        "미용",
        "의류&패션",
        "도서",
        "생활용품",
        "원두&티백",
        "빵&디저트",
        "기타",
    ];

    const [selectedCategories, setSelectedCategories] = useState<string[]>([
        "공예&소품",
        "문구&팬시",
        "미용",
    ]);

    const data = [
        {
            imageUrlList: [
                "https://i.ibb.co/G3BctN01/cutedog.jpg",
                "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
            ],
            keywordList: ["키워드", "키워드", "키워드"],
            store_name: "한라봉 카페 판매대",
            store_description:
                "감성 가득한 플라워 디자인 스튜디도 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
            store_min_price: 206777,
            store_max_price: 306777,
        },
        {
            imageUrlList: [
                "https://i.ibb.co/G3BctN01/cutedog.jpg",
                "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
            ],
            keywordList: ["키워드", "키워드", "키워드"],
            store_name: "한라봉 카페 판매대",
            store_description:
                "감성 가득한 플라워 디자인 스튜디도 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
            store_min_price: 206777,
            store_max_price: 306777,
        },
    ];

    const handleSelect = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <>
            <div className="w-full h-full flex flex-col items-center px-[20px]">
                <p className="mt-[51px]">AI를 통해 추천된 가게</p>
                <div className="flex flex-wrap gap-[11px] mt-[13px]">
                    {selectedCategories &&
                        selectedCategories.map((selectedCategory) => (
                            <SpaceKeyword keyword={selectedCategory} />
                        ))}
                    <div
                        className="w-32 h-32 flex items-center justify-center rounded-[999px] bg-[#FF9D00] cursor-pointer"
                        onClick={handleCategoryOpen}
                    >
                        <Image
                            src={categotyAddIcon}
                            width={13}
                            height={13}
                            alt="plus icon"
                        />
                    </div>
                </div>
                <div className="mt-[32px] flex flex-col gap-[43px] pb-[104px]">
                    {data &&
                        data.map((d, index) => (
                            <SpaceCard
                                store_id={""}
                                store_scope={0}
                                store_review={""}
                                key={index}
                                {...d}
                            />
                        ))}
                </div>

                {isCategoryOpen && (
                    <div className="fixed w-390 mx-auto inset-0 z-50 flex flex-col justify-end">
                        <div
                            className="absolute inset-0 bg-black bg-opacity-70"
                            onClick={() => setIsCategoryOpen(false)}
                        ></div>

                        <div className="relative flex flex-col w-full h-[444px] bg-white rounded-t-[26px] px-[20px] py-[9px] animate-slide-up">
                            <div className="mx-auto">
                                <Image
                                    src={modalReactangle}
                                    alt="modalReactangle"
                                />
                            </div>

                            <p className="font-bold text-[18px] mt-[16px]">
                                키워드 추가 선택
                            </p>

                            <div className="mt-[25px] flex flex-wrap gap-x-[12px] gap-y-[24px]">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        onClick={() => handleSelect(category)}
                                        className={`px-[16px] py-[16px] text-[14px] ${
                                            selectedCategories.includes(
                                                category
                                            )
                                                ? "bg-[#FF9D00] text-white"
                                                : "bg-[#EFEFF6] text-[#A4A4A4]"
                                        }`}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <Navbar />
            </div>

            <style jsx>{`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
