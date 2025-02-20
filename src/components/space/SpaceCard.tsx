"use client";

import { formatNumber } from "@/lib/utils";
import SpaceSmallKeyword from "./SpaceSmallKeyword";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export interface SapaceCardProps {
    images: string[];
    keywords: string[];
    title: string;
    description: string;
    startPrice: number;
    endPrice: number;
}

export default function SapaceCard({
    images,
    keywords,
    title,
    description,
    startPrice,
    endPrice,
}: SapaceCardProps) {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots custom-dots", // 커스텀 클래스 추가
    };

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
            <div className="flex flex-col w-350 relative">
                {/* 이미지 슬라이드 */}
                <div className="w-350 h-350 relative">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="w-350 h-350 relative">
                                <Image
                                    src={image}
                                    alt={`image ${index + 1}`}
                                    fill
                                    className="rounded-lg shadow-md object-fill"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* 키워드들 */}
                <div className="flex gap-[8px] mt-[22px]">
                    {keywords.map((keyword, index) => (
                        <div key={index}>
                            <SpaceSmallKeyword keyword={keyword} />
                        </div>
                    ))}
                </div>

                <p className="mt-[7px]">{title}</p>
                <p className="mt-[7px] text-[14px] text-[#6E6E6E]">
                    {description}
                </p>

                <div className="flex gap-[2px] mt-[7px]">
                    <span>₩{formatNumber(startPrice)}</span>
                    <span>~</span>
                    <span>{formatNumber(endPrice)}</span>
                </div>
            </div>
        </>
    );
}
