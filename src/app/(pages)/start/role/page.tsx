"use client";

import { useRouter } from "next/navigation";

export default function RolePage() {
    const router = useRouter();

    const handelRouteSm = () => {
        router.push("/start/role/sm");
    };

    const handelRouteLg = () => {
        router.push("/start/role/lg");
    };

    return (
        <div className="w-full h-844 flex flex-col items-center ">
            <p className="font-bold text-[24px] mt-[195px]">
                기업 형태가 어떻게 되시나요?
            </p>

            <div className="mt-[72px] flex gap-[12px]">
                <div
                    className="flex flex-col items-center gap-[18px] cursor-pointer"
                    onClick={handelRouteSm}
                >
                    {/* 이미지가 들어갈 */}
                    <div className="w-136 h-227 bg-gray-300 rounded-[36px]"></div>
                    <span>소상공인</span>
                </div>

                <div
                    className="flex flex-col items-center gap-[18px] cursor-pointer"
                    onClick={handelRouteLg}
                >
                    {/* 이미지가 들어갈 */}
                    <div className="w-136 h-227 bg-gray-300 rounded-[36px]"></div>
                    <span>자영업자</span>
                </div>
            </div>
        </div>
    );
}
