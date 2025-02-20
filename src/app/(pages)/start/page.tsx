"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import cuteDog from "../../../assets/images/cutedog.jpeg";
import onboarding from "@/assets/images/onboarding.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import sm from "@/assets/images/sm.png";
import { useEffect, useState } from "react";

export default function StartPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [slideUp, setSlideUp] = useState(false); // 위로 이동할 상태

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dotsClass: "slick-dots custom-dots", // 커스텀 클래스 추가
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
                    bottom: 500px !important; /* 기본값 덮어쓰기 위해 !important 사용 */
                }
            `}</style>
            <>
                <div className="w-full h-screen flex flex-col items-center">
                    <p className="mt-151 font-bold text-[24px] px-20 text-center">
                        버려지는 공간에 판매대를 두어, <br /> 저렴한 가격으로
                        대여해요
                    </p>
                    <div className="w-252 h-328 mt-53">
                        <Slider {...settings} className="w-full h-full">
                            <div className="relative w-252 h-328">
                                <Image
                                    src={onboarding1}
                                    alt="Slide 1"
                                    fill
                                    className="rounded-lg  object-contain"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={sm}
                                    alt="Slide 2"
                                    fill
                                    className="rounded-lg  object-contain"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={cuteDog}
                                    alt="Slide 3"
                                    fill
                                    className="rounded-lg  object-contain"
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
                        src={onboarding}
                        alt="onboarding"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            )}
        </>
    );
}
