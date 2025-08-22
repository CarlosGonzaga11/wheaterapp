type WeekTempProps = {
  min: number;
  max: number;
  day: string;
  dayNumber: number;
  icon: React.ReactNode;
};
export default function WeekTemp({
  min,
  max,
  day,
  dayNumber,
  icon,
}: WeekTempProps) {
  return (
    <div className="bg-[#F6F9FB] rounded flex gap-1 h-[40px] text-[12px] justify-between hover:bg-[#eff0f0] transition">
      <div className="text-[#81BDFC] flex items-center gap-2 pl-2 ">
        {icon}
        <div className="flex items-baseline flex-col">
          <p className="text-[#4d4b4b]">{day}</p>
          <p className="text-[#000] opacity-40">{dayNumber} ago</p>
        </div>
      </div>
      <div className="flex  items-center justify-center text-[10px] gap-6">
        <p className="text-[#000] pr-2">{max}º</p>
        <p className="text-[#000] pr-2 opacity-75">{min}º</p>
      </div>
    </div>
  );
}
