import Image from "next/image";
import { FC } from "react";
import emptyStar from "@/assets/icons/emptyStar.svg"; // 테두리만 있는 별
import halfStar from "@/assets/icons/halfStar.svg"; // 반만 채워진 별
import fullStar from "@/assets/icons/fullStar.svg"; // 꽉 찬 별

interface StarRatingProps {
    rating: number; // 원본 별점 (0 ~ 5)
}

export const StarRating: FC<StarRatingProps> = ({ rating }) => {
    // 0.5 단위로 반올림
    const roundedRating = Math.round(rating * 2) / 2;

    const stars = Array.from({ length: 5 }, (_, i) => {
        if (roundedRating >= i + 1) {
            return (
                <Image
                    key={i}
                    src={fullStar}
                    alt="full star"
                    width={24}
                    height={24}
                />
            );
        } else if (roundedRating >= i + 0.5) {
            return (
                <Image
                    key={i}
                    src={halfStar}
                    alt="half star"
                    width={24}
                    height={24}
                />
            );
        } else {
            return (
                <Image
                    key={i}
                    src={emptyStar}
                    alt="empty star"
                    width={24}
                    height={24}
                />
            );
        }
    });

    return <div className="flex gap-1">{stars}</div>;
};
