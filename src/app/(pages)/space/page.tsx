"use client";

import Navbar from "@/components/navbar";
import SpaceKeyword from "@/components/space/SpaceKeyword";
import Image from "next/image";
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

  // 각 그룹별 카테고리 배열
  const fieldCategories = [
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
  const featureCategories = [
    "귀여운",
    "심플한",
    "감성적인",
    "전통적인",
    "유니크한",
    "실용적인",
    "고급스러운",
  ];
  const personCategories = [
    "학생",
    "20‧30 여성",
    "20‧30 남성",
    "가족",
    "연인",
    "중장년",
  ];

  // 각 그룹당 반드시 하나씩 선택하도록 초기값 설정
  const [selectedCategories, setSelectedCategories] = useState<{
    field: string;
    feature: string;
    person: string;
  }>({
    field: fieldCategories[0] ?? "", // 예: "공예&소품"
    feature: featureCategories[0] ?? "", // 예: "귀여운"
    person: personCategories[0] ?? "", // 예: "학생"
  });

  const data = [
    {
      imageUrlList: [
        "https://i.ibb.co/G3BctN01/cutedog.jpg",
        "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
      ],
      keywordList: ["키워드", "키워드", "키워드"],
      store_name: "한라봉 카페 판매대",
      store_description:
        "감성 가득한 플라워 디자인 스튜디오 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
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
        "감성 가득한 플라워 디자인 스튜디오 '배민 플라워' 입니다. 20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한 꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀 공부했어요.",
      store_min_price: 206777,
      store_max_price: 306777,
    },
  ];

  // 그룹과 해당 카테고리를 인자로 받아서 업데이트 (이미 선택된 항목은 변경하지 않음)
  const handleSelect = (
    group: "field" | "feature" | "person",
    category: string
  ) => {
    if (selectedCategories[group] === category) return; // 이미 선택된 항목은 취소되지 않음
    setSelectedCategories({
      ...selectedCategories,
      [group]: category,
    });
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center px-[20px]">
        <div className="h-750 overflow-y-scroll scrollbar-hide">
          <p className="mt-[51px] flex justify-center">AI를 통해 추천된 가게</p>
          {/* 현재 선택된 카테고리들을 보여주는 영역 */}
          <div className="flex justify-center flex-wrap gap-[11px] mt-[13px]">
            <SpaceKeyword keyword={selectedCategories.field} />
            <SpaceKeyword keyword={selectedCategories.feature} />
            <SpaceKeyword keyword={selectedCategories.person} />
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
            {data.map((d, index) => (
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

              <div className="relative flex flex-col w-full h-[564px] bg-white rounded-t-[26px] px-[20px] py-[9px] animate-slide-up">
                <div className="mx-auto">
                  <Image src={modalReactangle} alt="modalReactangle" />
                </div>

                <p className="font-bold text-[18px] mt-[16px]">
                  키워드 추가 선택
                </p>

                <div className="mt-[25px] space-y-6">
                  {/* 분야 카테고리 */}
                  <div>
                    <p className="mb-2 font-semibold">분야</p>
                    <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                      {fieldCategories.map((category) => (
                        <Button
                          key={category}
                          onClick={() => handleSelect("field", category)}
                          className={`px-[16px] py-[16px] text-[14px] ${
                            selectedCategories.field === category
                              ? "bg-[#FF9D00] text-white"
                              : "bg-[#EFEFF6] text-[#A4A4A4]"
                          }`}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* 특징 카테고리 */}
                  <div>
                    <p className="mb-2 font-semibold mt-[20px]">특징</p>
                    <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                      {featureCategories.map((category) => (
                        <Button
                          key={category}
                          onClick={() => handleSelect("feature", category)}
                          className={`px-[16px] py-[16px] text-[14px] ${
                            selectedCategories.feature === category
                              ? "bg-[#FF9D00] text-white"
                              : "bg-[#EFEFF6] text-[#A4A4A4]"
                          }`}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* 사람 카테고리 */}
                  <div>
                    <p className="mb-2 font-semibold mt-[20px]">사람</p>
                    <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                      {personCategories.map((category) => (
                        <Button
                          key={category}
                          onClick={() => handleSelect("person", category)}
                          className={`px-[16px] py-[16px] text-[14px] ${
                            selectedCategories.person === category
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
              </div>
            </div>
          )}
        </div>
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
