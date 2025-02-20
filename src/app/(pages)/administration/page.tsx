import AdministrationCard from "@/components/administration/AdministrationCard";
import Navbar from "@/components/navbar";

export default function AdministrationPage(): JSX.Element {
  return (
    <>
      <div className="pt-77 px-20 h-750 overflow-y-scroll scrollbar-hide">
        <div className="pb-33">
          <span className="text-[20px] font-bold align-top leading-[100%]">
            판매대 내역
          </span>
        </div>
        <div className="flex flex-col gap-y-50">
          <AdministrationCard />
        </div>
      </div>
      <Navbar />
    </>
  );
}
