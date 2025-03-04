"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import { createUserKeywords } from "@/services/user";

// 분야 카테고리
const firstCategories = [
  ["공예&소품", "문구&팬시", "미용"],
  ["의류&패션", "도서", "생활용품"],
  ["원두&티백", "빵&디저트", "기타"],
];

// 특징 카테고리
const secondCategories = [
  ["귀여운", "심플한", "감성적인"],
  ["전통적인", "유니크한", "실용적인"],
  ["고급스러운"],
];

// 사람 카테고리
const thirdCategories = [
  ["학생", "20‧30 여성", "20‧30 남성"],
  ["가족", "연인", "중장년"],
];

// 소상공인
export default function SmallPage(): JSX.Element {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [finalSelections, setFinalSelections] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSelect = (category: string) => {
    setSelected((prev) => {
      if (step === 1) {
        return prev.includes(category) ? [] : [category];
      } else {
        if (prev.includes(category)) {
          return prev.filter((item) => item !== category);
        } else if (prev.length < 2) {
          return [...prev, category];
        }
        return prev;
      }
    });
  };

  const handleNext = async () => {
    const selectedData = selected.at(-1) ?? "";
    const updatedSelections = [...finalSelections, selectedData];

    setFinalSelections(updatedSelections);

    if (step === 1) {
      setStep(2);
      setSelected([]);
    } else if (step === 2) {
      setStep(3);
      setSelected([]);
    } else {
      console.log("최종 선택 데이터:", updatedSelections);

      const userId = localStorage.getItem("유저 UUID");

      if (!userId) {
        console.error("유저 UUID가 없습니다.");
        return;
      }

      try {
        setLoading(true);
        await createUserKeywords({
          userId,
          keyWordList: updatedSelections,
        });
        console.log("키워드 전송 성공:", updatedSelections);

        setTimeout(() => {
          router.push("/");
          setLoading(false)
        }, 1500);
      } catch (error) {
        console.error("키워드 전송 실패:", error);
      }
    }
  };

  if (loading) {
    return <Spinner className="flex flex-col items-center py-313" />;
  }

  return (
    <div className="w-full h-full border-1 rounded-30 relative">
      {/* 프로그레스바 */}
      <div className="flex gap-x-7 w-350 m-auto pt-66">
        <div
          className={`w-111 h-4 rounded-2 ${
            selected.length > 0 || step > 1 ? "bg-[#ff9d00]" : "bg-[#d9d9d9]"
          }`}
        />
        <div
          className={`w-111 h-4 rounded-2 ${
            step > 1 && (selected.length > 0 || step > 2)
              ? "bg-[#ff9d00]"
              : "bg-[#d9d9d9]"
          }`}
        />
        <div
          className={`w-111 h-4 rounded-2 ${
            step > 2 && selected.length > 0 ? "bg-[#ff9d00]" : "bg-[#d9d9d9]"
          }`}
        />
      </div>

      <div className="pt-151 px-84 flex flex-col items-center">
        {step === 1 ? (
          <>
            <p className="text-[24px] font-bold">판매를 원하시는 분야는</p>
            <p className="text-[24px] font-bold">무엇인가요?</p>
          </>
        ) : step === 2 ? (
          <>
            <p className="text-[24px] font-bold">주요 물품의 특징은</p>
            <p className="text-[24px] font-bold">무엇인가요?</p>
            <span className="text-[12px] font-normal text-gray-500">
              *최대 2개
            </span>
          </>
        ) : (
          <>
            <p className="text-[24px] font-bold">어떤 사람에게</p>
            <p className="text-[24px] font-bold">매력적인 물품인가요?</p>
            <span className="text-[12px] font-normal text-gray-500">
              *최대 2개
            </span>
          </>
        )}
      </div>

      <div className="flex flex-col gap-y-24 pt-69 w-283 m-auto">
        {(step === 1
          ? firstCategories
          : step === 2
          ? secondCategories
          : thirdCategories
        ).map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-x-12">
            {row.map((category) => (
              <Button
                key={category}
                onClick={() => handleSelect(category)}
                className={`h-40 px-16 ${
                  selected.includes(category)
                    ? "bg-[#FF9D00] text-white"
                    : "bg-[#efeff6] text-[#a4a4a4]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute bottom-58 left-20">
        <Button
          onClick={handleNext}
          disabled={(step === 2 || step === 3) && selected.length < 1}
          className={`text-white w-350 h-48 ${
            (step === 1 && selected.length > 0) ||
            (step === 2 && selected.length >= 1) ||
            (step === 3 && selected.length >= 1)
              ? "bg-[#FF9D00]"
              : "bg-[#E1E1E8] opacity-50"
          }`}
        >
          {step === 3 ? "완료" : "다음"}
        </Button>
      </div>
    </div>
  );
}
