import Link from "next/link";
import analysisIcon from "@/assets/icons/analysisIcon.svg";
import sell from "@/assets/icons/sell.svg";
import checklist from "@/assets/icons/checklist.svg";
import Image from "next/image";

const navItems = [
    { href: "/", label: "성장판" },
    { href: "/space", label: "판매대" },
    { href: "/administration", label: "내역" },
];

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="flex flex-col items-center ">
            {label === "성장판" && (
                <Image
                    src={analysisIcon}
                    alt="homeIcon"
                    width={24}
                    height={24}
                />
            )}
            {label === "판매대" && (
                <Image src={sell} alt="tableIcon" width={24} height={24} />
            )}
            {label === "내역" && (
                <Image src={checklist} alt="listIcon" width={24} height={24} />
            )}

            <span className="text-[12px] leading-24 tracking-[-0.1] h-24 flex items-center font-medium">
                {label}
            </span>
        </Link>
    );
}

export default function Navbar(): JSX.Element {
    return (
        <div className="w-390 h-94 sticky bottom-0 flex justify-center items-center bg-white bg-opacity-90 backdrop-blur-xl">
            <div className="flex gap-x-82 items-center justify-center">
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
}
