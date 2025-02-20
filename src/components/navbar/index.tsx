import Link from "next/link";
import homeIcon from "@/assets/icons/homeIcon.svg";
import listIcon from "@/assets/icons/listIcon.svg";
import tableIcon from "@/assets/icons/tableIcon.svg";
import Image from "next/image";

const navItems = [
    { href: "/", label: "성장판" },
    { href: "/space", label: "공간" },
    { href: "/administration", label: "관리" },
];

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="flex flex-col items-center gap-[10px]">
            {label === "성장판" && (
                <Image src={homeIcon} alt="homeIcon" width={24} height={24} />
            )}

            {label === "공간" && (
                <Image src={tableIcon} alt="tableIcon" width={24} height={24} />
            )}

            {label === "관리" && (
                <Image src={listIcon} alt="listIcon" width={24} height={24} />
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
            <div className="flex gap-[82px]">
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
