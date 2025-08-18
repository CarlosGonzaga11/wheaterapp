import { CiTempHigh } from "react-icons/ci";

type WheatherCardProps = {
  clima_info: string;
  clima_dados?: string | number;
};
export default function CardDetails({
  clima_info,
  clima_dados,
}: WheatherCardProps) {
  return (
    <div className="bg-[#F6F9FB] rounded flex gap-1">
      <div className="text-[#81BDFC] flex items-center">
        <CiTempHigh />
      </div>
      <div className="flex items-baseline flex-col">
        <p className="text-[#D9D9D9]">{clima_info}</p>
        <p className="text-[#000]">{clima_dados}</p>
      </div>
    </div>
  );
}
