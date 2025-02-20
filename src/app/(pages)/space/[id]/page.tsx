"use client";

import arrowBackIcon from "@/assets/icons/arrowBackIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SpaceDetailPage() {
    const router = useRouter();

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

            <div className="flex flex-col ">
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

                <p className="mt-[22px] font-normal ml-[19px] mr-[19px]">
                    감성 가득한 플라워 디자인 스튜디도 '배민 플라워' 입니다.
                    20살 중반 꽃 하나만 바라보고 유학을 떠났어요. 싱싱한
                    꽃내음이 주는 매력에 매료되어, 매일매일 꽃에 파묻혀
                    공부했어요.
                </p>
            </div>
        </>
    );
}
