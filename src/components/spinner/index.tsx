import RiseLoader from "react-spinners/RiseLoader";

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps): JSX.Element {
  return (
    <div className={`border-1 ${className}`}>
      <RiseLoader color="#ff9d00" />
      <span className="text-center pt-50 text-[16px] font-medium leading-24">
        정보를 바탕으로 <br />
        최적의 협업 파트너를 <br />
        찾고 있어요!
      </span>
    </div>
  );
}
