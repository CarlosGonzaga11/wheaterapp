type WheatherCardProps = {
  clima_info: string;
  clima_dados?: string | number;
  icon: React.ReactNode;
};
export default function CardDetails({
  clima_info,
  clima_dados,
  icon,
}: WheatherCardProps) {
  return (
    <div className="bg-[#F6F9FB] rounded flex gap-2 text-xl">
      <div className="text-[#81BDFC] flex items-center pl-2">{icon}</div>
      <div className="flex items-baseline flex-col">
        <p className="text-[#D9D9D9]">{clima_info}</p>
        <p className="text-[#000]">{clima_dados}</p>
      </div>
    </div>
  );
}
