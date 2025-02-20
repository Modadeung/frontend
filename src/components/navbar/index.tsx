import Link from "next/link";

const navItems = [
    { href: "/", label: "홈" },
    { href: "/space", label: "공간" },
    { href: "/administration", label: "관리" },
];

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="flex flex-col items-center">
            <div className="w-27 h-27 rounded-full bg-[#d9d9d9]"></div>
            <span className="text-[12px] leading-24 tracking-[-0.1] h-24 flex items-center font-medium">
                {label}
            </span>
        </Link>
    );
}

export default function Navbar(): JSX.Element {
    return (
        <div className="w-390 h-94 fixed bottom-0  flex justify-center items-center bg-white bg-opacity-90 backdrop-blur-xl">
            <div className="flex gap-x-82 w-245">
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
