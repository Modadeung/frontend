"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import cuteDog from "../../../assets/images/cutedog.jpeg";
import { useEffect, useState } from "react";

export default function StartPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 50);
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

            {!isLoading && (
                <div className="w-full h-screen flex flex-col items-center">
                    <p className="mt-151 font-bold text-[24px]">
                        앱에 대한 설명입니다.
                    </p>
                    <div className="w-252 h-328 mt-53">
                        <Slider {...settings} className="w-full h-full">
                            <div className="relative w-252 h-328">
                                <Image
                                    src={cuteDog}
                                    alt="Slide 1"
                                    fill
                                    className="rounded-lg shadow-md object-fill"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={cuteDog}
                                    alt="Slide 2"
                                    fill
                                    className="rounded-lg shadow-md object-fill"
                                />
                            </div>
                            <div className="relative w-252 h-328">
                                <Image
                                    src={cuteDog}
                                    alt="Slide 3"
                                    fill
                                    className="rounded-lg shadow-md object-fill"
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
            )}
        </>
    );
}
