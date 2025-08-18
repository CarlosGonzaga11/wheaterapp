import { CiTempHigh } from "react-icons/ci";
export default function WeekTemp() {
  return (
    <div className="bg-[#F6F9FB] rounded flex gap-1 h-[40px] text-[12px] justify-between hover:bg-[#eff0f0] transition">
      <div className="text-[#81BDFC] flex items-center gap-2 pl-2 ">
        <CiTempHigh className="text-[16px]"/>
        <div className="flex items-baseline flex-col">
          <p className="text-[#D9D9D9]">Hoje</p>
          <p className="text-[#000]">16 ago</p>
        </div>
      </div>
      <div className="flex  items-center justify-center text-[10px] gap-6">
        <p className="text-[#000] pr-2">16º</p>
        <p className="text-[#000] pr-2 opacity-75">4º</p>
      </div>
    </div>
  );
}
