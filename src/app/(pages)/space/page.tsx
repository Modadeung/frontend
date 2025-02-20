"use client";

import Navbar from "@/components/navbar";
import SpaceKeyword from "@/components/space/SpaceKeyword";
import Image from "next/image";
import categotyAddIcon from "@/assets/icons/categoryAddIcon.svg";
import { useEffect, useState } from "react";
import SpaceCard from "@/components/space/SpaceCard";
import modalReactangle from "@/assets/icons/modalRectangle.svg";
import { Button } from "@/components/ui/button";
import { GetUserKeywordsResponse } from "@/types/User.types";
import { getUserKeywords } from "@/services/user";
import { getStoreList } from "@/services/store";
import { GetStoreListResponse } from "@/types/Store.types";
import plusIcon from "@/assets/icons/plusIcon.svg";
import filter from "@/assets/icons/filter.svg";

export default function SpacePage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [storeList, setStoreList] = useState<GetStoreListResponse[]>([]);
    // 각 그룹당 반드시 하나씩 선택하도록 초기값 설정
    const [selectedCategories, setSelectedCategories] = useState<{
        field: string;
        feature: string;
        person: string;
    }>({
        field: "",
        feature: "",
        person: "",
    });

    const fetchStoreList = async (keywords: string[]) => {
        if (keywords.length === 0) return; // 빈 배열이면 API 호출 안 함
        try {
            const response = await getStoreList({ keywordList: keywords });
            setStoreList(response);
            console.log("Fetched store list:", response);
        } catch (error) {
            console.error("Error fetching store list:", error);
        }
    };

    useEffect(() => {
        const keywords = convertSelectedCategoriesToArray();
        fetchStoreList(keywords);
    }, [selectedCategories]);

    useEffect(() => {
        const fetchKeyword = async () => {
            const userUUID = localStorage.getItem("유저 UUID");
            if (userUUID) {
                const response: GetUserKeywordsResponse = await getUserKeywords(
                    { userId: userUUID }
                );

                if (response.length === 3) {
                    setSelectedCategories({
                        field: response[0] ?? "",
                        feature: response[1] ?? "",
                        person: response[2] ?? "",
                    });
                }

                console.log("response", response);
            } else {
                console.error("User UUID is null");
            }
        };

        fetchKeyword();
    }, []);

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

    // 선택된 카테고리들을 string[] 형태로 변환하는 함수
    const convertSelectedCategoriesToArray = () => {
        return [
            selectedCategories.field,
            selectedCategories.feature,
            selectedCategories.person,
        ].filter(Boolean);
    };

    return (
        <>
            <div className="w-full h-full flex flex-col items-center px-[20px] relative">
                <div className="h-750 overflow-y-scroll scrollbar-hide">
                    <p className="mt-[51px] flex justify-center">
                        AI를 통해 추천된 가게
                    </p>
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

                    <div className="w-full flex justify-end mt-[15px] ">
                        <Image
                            src={filter}
                            alt={filter}
                            className="cursor-pointer"
                        />
                    </div>

                    <div className="mt-[22px] flex flex-col gap-[43px] pb-[104px]">
                        {storeList.length > 0 &&
                            storeList.map((store, index) => (
                                <SpaceCard key={index} {...store} />
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
                                    <Image
                                        src={modalReactangle}
                                        alt="modalReactangle"
                                    />
                                </div>

                                <p className="font-bold text-[18px] mt-[16px]">
                                    키워드 추가 선택
                                </p>

                                <div className="mt-[25px] space-y-6">
                                    {/* 분야 카테고리 */}
                                    <div>
                                        <p className="mb-2 font-semibold">
                                            분야
                                        </p>
                                        <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                                            {fieldCategories.map((category) => (
                                                <Button
                                                    key={category}
                                                    onClick={() =>
                                                        handleSelect(
                                                            "field",
                                                            category
                                                        )
                                                    }
                                                    className={`px-[16px] py-[16px] text-[14px] ${
                                                        selectedCategories.field ===
                                                        category
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
                                        <p className="mb-2 font-semibold mt-[20px]">
                                            특징
                                        </p>
                                        <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                                            {featureCategories.map(
                                                (category) => (
                                                    <Button
                                                        key={category}
                                                        onClick={() =>
                                                            handleSelect(
                                                                "feature",
                                                                category
                                                            )
                                                        }
                                                        className={`px-[16px] py-[16px] text-[14px] ${
                                                            selectedCategories.feature ===
                                                            category
                                                                ? "bg-[#FF9D00] text-white"
                                                                : "bg-[#EFEFF6] text-[#A4A4A4]"
                                                        }`}
                                                    >
                                                        {category}
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* 사람 카테고리 */}
                                    <div>
                                        <p className="mb-2 font-semibold mt-[20px]">
                                            사람
                                        </p>
                                        <div className="flex flex-wrap gap-x-[12px] gap-y-[24px]">
                                            {personCategories.map(
                                                (category) => (
                                                    <Button
                                                        key={category}
                                                        onClick={() =>
                                                            handleSelect(
                                                                "person",
                                                                category
                                                            )
                                                        }
                                                        className={`px-[16px] py-[16px] text-[14px] ${
                                                            selectedCategories.person ===
                                                            category
                                                                ? "bg-[#FF9D00] text-white"
                                                                : "bg-[#EFEFF6] text-[#A4A4A4]"
                                                        }`}
                                                    >
                                                        {category}
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="absolute right-[20px] bottom-[114px] cursor-pointer w-[50px] h-[50px] bg-[#FF9D00] rounded-[999px] flex items-center justify-center">
                    <Image
                        src={plusIcon}
                        alt={plusIcon}
                        width={22}
                        height={22}
                    />
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
