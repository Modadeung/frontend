export interface SpaceSmallKeywordProps {
    keyword: string;
}

export default function SpaceSmallKeyword({ keyword }: SpaceSmallKeywordProps) {
    return (
        <div className=" bg-[#FFEFD6] px-[6px] py-[1px] flex items-center justify-center rounded-[999px]">
            <span className="font-medium text-[12px] text-[#FF9D00]">
                #{keyword}
            </span>
        </div>
    );
}
