"use client";

import { formatNumber } from "@/lib/utils";
import SpaceSmallKeyword from "./SpaceSmallKeyword";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { GetStoreListResponse } from "@/types/Store.types";
import { useRouter } from "next/navigation";

export default function SpaceCard({
  store_id,
  imageUrlList,
  keywordList,
  store_name,
  store_description,
  store_min_price,
  store_max_price,
}: GetStoreListResponse) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleRouting = (id: string) => {
    router.push(`/space/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

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

      {!isLoading && (
        <div
          className="flex flex-col w-350 relative cursor-pointer"
          onClick={() => {
            handleRouting(store_id);
          }}
        >
          {/* 이미지 슬라이드 */}
          <div className="w-350 h-262 relative">
            <Slider {...settings}>
              {imageUrlList.map((image, index) => (
                <div key={index} className="w-350 h-262 relative">
                  <img
                    src={image}
                    alt={`image ${index + 1}`}
                    width={350}
                    height={262}
                    className="rounded-lg shadow-md object-fill"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* 키워드들 */}
          <div className="flex gap-[8px] mt-[22px]">
            {keywordList.map((keyword, index) => (
              <div key={index}>
                <SpaceSmallKeyword keyword={keyword} />
              </div>
            ))}
          </div>

          <p className="mt-[7px]">{store_name}</p>
          <p className="mt-[7px] text-[14px] text-[#6E6E6E]">
            {store_description}
          </p>

          <div className="flex gap-[2px] mt-[7px]">
            <span>₩{formatNumber(store_min_price)}</span>
            <span>~</span>
            <span>{formatNumber(store_max_price)}</span>
          </div>
        </div>
      )}
    </>
  );
}
