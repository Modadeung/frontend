"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import on from "@/assets/images/on.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import sm from "@/assets/images/sm.png";
import isolation from "@/assets/images/Isolation_Mode.png";
import { useEffect, useState } from "react";

export default function StartPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [slideUp, setSlideUp] = useState(false); // 위로 이동할 상태
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setSlideUp(true); // 위로 이동 애니메이션 시작
        }, 1000);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const router = useRouter();
    const handleRouting = () => {
        router.replace("/start/role");
    };

    // 슬라이드별 텍스트 매핑
    const slideTexts = [
        <>
            버려지는 공간에 판매대를 두어, <br /> 저렴한 가격으로 대여해요
        </>,
        <>
            사업 확장 비용, 마케팅 비용이 <br /> 부담스러운 소상공인을 도와요
        </>,
        <>
            소상공인의 매출증가,
            <br /> 자영업자의 부수입원을 늘려요
        </>,
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dotsClass: "slick-dots custom-dots", // 커스텀 클래스 추가
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        afterChange: (current: any) => setCurrentSlide(current),
    };

    return (
        <>
            <style jsx global>{`
                .slide-up {
                    transform: translateY(-100%);
                    transition: transform 0.5s ease-in-out;
                }
                /* 선택되지 않은 dot 스타일 */
                .custom-dots li button:before {
                    color: #d1d1d1;
                    opacity: 1;
                    font-size: 10px;
                }
                /* 선택된 dot 스타일 */
                .custom-dots li.slick-active button:before {
                    color: #ff9d00;
                    opacity: 1;
                }
                /* dots 위치 조정 추가 */
                .custom-dots {
                    bottom: 500px !important;
                }
            `}</style>
            <>
                <div className="w-full h-screen flex flex-col items-center">
                    <p className="mt-151 font-bold text-[24px] px-20 text-center">
                        {slideTexts[currentSlide]}
                    </p>
                    <div className="w-252 h-328 mt-53">
                        <Slider {...settings} className="w-full h-full">
                            <div className="relative w-252 h-328">
                                <Image
                                    src={onboarding1}
                                    alt="Slide 1"
                                    fill
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={sm}
                                    alt="Slide 2"
                                    fill
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={isolation}
                                    alt="Slide 3"
                                    fill
                                    className="rounded-lg object-contain"
                                />
                            </div>
                        </Slider>
                    </div>
                    <Button
                        className="mt-172 w-[350px] h-[48px] rounded-lg bg-[#FF9D00] text-white font-medium cursor-pointer"
                        onClick={handleRouting}
                    >
                        시작하기
                    </Button>
                </div>
            </>
            {isLoading && (
                <div
                    className={`absolute w-screen h-screen inset-0 flex items-center justify-center overflow-hidden ${
                        slideUp ? "slide-up" : ""
                    }`}
                >
                    <Image
                        src={on}
                        alt="onboarding"
                        fill
                        className="object-fill"
                    />
                </div>
            )}
        </>
    );
}
