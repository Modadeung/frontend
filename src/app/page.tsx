"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import grow from "@/assets/images/grow.svg";
import circle from "@/assets/images/circle.svg";
import stamp from "@/assets/images/stamp.svg";
import right from "@/assets/icons/rightbtn.svg";
import Navbar from "@/components/navbar";
import Spinner from "@/components/spinner";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserUUID = async () => {
      const userUUID = localStorage.getItem("유저 UUID");

      if (!userUUID) {
        router.replace("/start");
      }

      setLoading(false);
    };

    checkUserUUID();
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner message={null} />
      </div>
    );
  }

  return (
    <>
      <div className="px-20 pt-37 h-750 overflow-y-scroll scrollbar-hide">
        <div className="flex justify-between">
          <p className="text-[16px] font-bold leading-[100%] align-top">
            나의 성장
          </p>
          <Link href={"/"}>
            <Image
              src={right}
              alt="상세보기"
              width={16}
              height={16}
              className="pt-4"
            />
          </Link>
        </div>
        <div className="pt-11 pb-41">
          <Image src={grow} alt="서비스 이미지" width={350} height={254} />
        </div>

        <div className="flex justify-between">
          <p className="text-[16px] font-bold leading-[131%] align-top">
            동종업계의 다른 사장님은 <br />
            이곳과 협업해요
          </p>
          <button>
            <Link href={"/"}>
              <Image
                src={right}
                alt="상세보기"
                width={16}
                height={16}
                className="pt-4"
              />
            </Link>
          </button>
        </div>
        <div className="pt-14 pb-32">
          <Image src={circle} alt="성장 그래프" width={345} height={130} />
        </div>
        <p className="text-[16px] font-bold leading-[100%]">성장한 날 스탬프</p>
        <div className="pt-20 pb-32">
          <Image src={stamp} alt="성장 그래프" width={350} height={274} />
        </div>
      </div>
      <Navbar />
    </>
  );
}
