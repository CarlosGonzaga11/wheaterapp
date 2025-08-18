import { CiTempHigh } from "react-icons/ci";
export default function CardDetails() {
  return (
    <div className="bg-[#F6F9FB] rounded flex gap-1">
      <div className="text-[#81BDFC] flex items-center">
        <CiTempHigh />
      </div>
      <div className="flex items-baseline flex-col">
        <p className="text-[#D9D9D9]">Sensação</p>
        <p className="text-[#000]">24ºC</p>
      </div>
    </div>
  );
}
