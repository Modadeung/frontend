"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreateUserResponse } from "@/types/User.types";
import { createUser } from "@/services/user";
import Image from "next/image";
import sm from "@/assets/images/sm.png";
import lg from "@/assets/images/lg.png";

export default function RolePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRoleSelection = async (role: string) => {
        try {
            setLoading(true);
            const response: CreateUserResponse = await createUser({ role });

            if (response?.id) {
                localStorage.setItem("유저 UUID", response.id);
                router.push(`/start/role/${role === "소상공인" ? "sm" : "lg"}`);
            } else {
                throw new Error("유효한 UUID가 없습니다.");
            }
        } catch (error) {
            console.error("유저 생성에 실패했습니다.:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-844 flex flex-col items-center">
            <p className="font-bold text-[24px] mt-[195px]">
                기업 형태가 어떻게 되시나요?
            </p>

            <div className="mt-[72px] flex gap-[12px]">
                <button
                    className={`flex flex-col items-center gap-[18px] cursor-pointer ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => handleRoleSelection("소상공인")}
                    disabled={loading}
                >
                    <Image
                        src={sm}
                        alt="소상공인"
                        className="w-136 h-227 rounded-[36px]"
                    />
                    <span>소상공인</span>
                </button>

                <button
                    className={`flex flex-col items-center gap-[18px] cursor-pointer ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => handleRoleSelection("자영업자")}
                    disabled={loading}
                >
                    <Image
                        src={lg}
                        alt="자영업자"
                        className="w-136 h-227 rounded-[36px]"
                    />
                    <span>자영업자</span>
                </button>
            </div>
        </div>
    );
}
