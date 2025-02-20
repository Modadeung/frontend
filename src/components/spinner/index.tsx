import RiseLoader from "react-spinners/RiseLoader";

interface SpinnerProps {
  className?: string;
  message?: string | null;
}

export default function Spinner({
  className,
  message = "정보를 바탕으로 \n 최적의 협업 파트너를 \n 찾고 있어요!",
}: SpinnerProps): JSX.Element {
  return (
    <div className={`border-1 flex flex-col items-center ${className}`}>
      <RiseLoader color="#ff9d00" />
      {message && (
        <span className="text-center pt-50 text-[16px] font-medium leading-24">
          {message.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </span>
      )}
    </div>
  );
}
