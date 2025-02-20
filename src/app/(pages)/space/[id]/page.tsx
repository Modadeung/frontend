"use client";

import arrowBackIcon from "@/assets/icons/arrowBackIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import spaceDetailCore1 from "@/assets/icons/spaceDetailCore1.svg";
import spaceDetailCore2 from "@/assets/icons/spaceDetailCore2.svg";
import spaceDetailCore3 from "@/assets/icons/spaceDetailCore3.svg";
import spaceDetailCore4 from "@/assets/icons/spaceDetailCore4.svg";
import { StarRating } from "@/components/space/StarRating";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function SpaceDetailPage() {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots custom-dots", // 커스텀 클래스 추가
    };

    const images = [
        "https://i.ibb.co/G3BctN01/cutedog.jpg",
        "https://i.ibb.co/39hychr4/Kakao-Talk-Photo-2025-02-12-12-14-40.png",
    ];

    const coreKeywords = [
        "원두/티백 제품 only",
        "20·30 여성 인기",
        "아늑한",
        "매대 크기 - 상",
    ];

    const coreKeywordIcons = [
        spaceDetailCore1,
        spaceDetailCore2,
        spaceDetailCore3,
        spaceDetailCore4,
    ];

    const description = "가게 소개개개ㅐ개개객";

    const note =
        "유의사항유의사항유의사항유의사항유의사항유의사항유의사항유의사항유의사항유의사항유의사항유의사항";

    const scope = 2.5;

    const review =
        "후기후기후기후기 후기후기 후기후기 후기후기후기 후기후기후기후기 후기후기후기 후기후기후기후기 후기후기후기";

    const minPrice = 4000;

    const maxPrice = 6000;

    return (
        <>
            <style jsx global>{`
                /* 선택되지 않은 dot 스타일 */
                .custom-dots li button:before {
                    color: #d1d1d1; /* 회색 */
                    opacity: 1; /* 투명도 100% */
                    font-size: 10px; /* dot 크기 */
                }

                /* 선택된 dot 스타일 */
                .custom-dots li.slick-active button:before {
                    color: #ff9d00; /* 주황색 */
                    opacity: 1; /* 투명도 100% */
                }

                /* dots 위치 조정 추가 */
                .custom-dots {
                    bottom: 22px !important; /* 기본값 덮어쓰기 위해 !important 사용 */
                }
            `}</style>

            <div className="flex flex-col pb-[104px]">
                <Image
                    src={arrowBackIcon}
                    alt="arrowBackIcon"
                    onClick={router.back}
                    className="ml-[19px] mt-[18px] cursor-pointer"
                />

                {/* 이미지 슬라이드 */}
                <div className="w-full h-350 relative mt-[18px]">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="w-350 h-350 relative">
                                <Image
                                    src={image}
                                    alt={`image ${index + 1}`}
                                    fill
                                    className="] object-fill"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <p className="mt-[30px] font-medium text-[24px] ml-[19px] mr-[19px]">
                    한라봉 카페 판매대
                </p>

                <div className="grid grid-cols-2 ml-[19px] mr-[19px] mt-[34px]">
                    {coreKeywords.length > 0 &&
                        coreKeywords.map((coreKeyword, index) => (
                            <div key={index} className="flex gap-[11px]">
                                <Image
                                    src={coreKeywordIcons[index]}
                                    alt={`spaceDetailCore${index + 1}`}
                                    width={13}
                                    height={13}
                                />
                                <span>{coreKeyword}</span>
                            </div>
                        ))}
                </div>

                <p className="font-bold ml-[19px] mt-[40px]">가게 소개</p>

                <p className="mt-[22px] font-normal ml-[19px] mr-[19px]">
                    {description}
                </p>

                <p className="font-bold ml-[19px] mt-[40px]">유의 사항</p>

                <p className="mt-[22px] font-normal ml-[19px] mr-[19px]">
                    {note}
                </p>

                <p className="font-bold ml-[19px] mt-[40px]">이용 후기</p>

                <div className="w-full px-[19px] mt-[22px] flex gap-[11px]">
                    <StarRating rating={scope} />
                    <span>{scope}</span>
                </div>

                <p className="font-bold ml-[19px] mt-[40px]">
                    AI로 정리한 후기는 다음과 같아요
                </p>

                <p className="mt-[22px] font-normal ml-[19px] mr-[19px]">
                    {review}
                </p>

                <p className="font-bold ml-[19px] mt-[40px]">예약 일정</p>

                <div className="flex flex-col ml-[19px] mr-[19px] mt-[10px]">
                    <label className="font-medium text-[16px]">시작 날짜</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        className="border border-gray-300 rounded-md p-2 mt-2"
                        placeholderText="날짜 선택"
                    />
                    <label className="font-medium text-[16px] mt-4">
                        끝 날짜
                    </label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate || undefined}
                        dateFormat="yyyy-MM-dd"
                        className="border border-gray-300 rounded-md p-2 mt-2"
                        placeholderText="날짜 선택"
                    />
                </div>
            </div>

            <div className="w-390 h-94 fixed bottom-0 flex items-center justify-between px-[20px] bg-white bg-opacity-90 backdrop-blur-xl">
                <div className="flex flex-col">
                    <div className="flex gap-2 font-medium text-[20px]">
                        <span>₩ {formatNumber(minPrice)}</span>
                        <span>~</span>
                        <span>{formatNumber(maxPrice)}</span>
                    </div>
                    <p className="text-[13px]">(10cm² 당, 1일)</p>
                </div>
                <Button className="w-135 h-48 bg-[#FF9D00] text-white">
                    예약하기
                </Button>
            </div>
        </>
    );
}
