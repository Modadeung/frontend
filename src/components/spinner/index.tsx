interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps): JSX.Element {
  return (
    <div className={className}>
      {/* TODO: gif 또는 video로 적용 */}
      <div className="w-146 h-146 bg-black"></div>
      <span className="text-center pt-36 text-[16px] font-medium leading-24">
        정보를 바탕으로 <br />
        최적의 협업 파트너를 <br />
        찾고 있어요!
      </span>
    </div>
  );
}
