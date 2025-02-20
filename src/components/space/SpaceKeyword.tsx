export interface SpaceKeywordProps {
    keyword: string;
}

export default function SpaceKeyword({ keyword }: SpaceKeywordProps) {
    return (
        <div className=" bg-[#FFEFD6] px-[12px] py-[5px] flex items-center justify-center rounded-[999px]">
            <span className="font-medium text-[14px] text-[#FF9D00]">
                #{keyword}
            </span>
        </div>
    );
}
