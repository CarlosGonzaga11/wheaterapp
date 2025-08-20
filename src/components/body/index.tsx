import CardDetails from "../card";
import WeekTemp from "../weekTemp";
import "../loader/loader.css";
import { useWheater } from "../../hooks/useWheather";

const dataWeek = [
  { id: 1, day: "Seg", dayNumber: 16, max: 30, min: 20 },
  { id: 2, day: "Ter", dayNumber: 17, max: 28, min: 18 },
  { id: 3, day: "Qua", dayNumber: 18, max: 26, min: 17 },
  { id: 4, day: "Qui", dayNumber: 19, max: 25, min: 16 },
  { id: 5, day: "Sex", dayNumber: 20, max: 27, min: 19 },
  { id: 6, day: "Sáb", dayNumber: 21, max: 29, min: 21 },
  { id: 7, day: "Dom", dayNumber: 22, max: 31, min: 22 },
];
interface BodyProps {
  city: string;
}
export default function Body({ city }: BodyProps) {
  const { data, isLoading } = useWheater(city);
  const timestamp = data?.location.localtime_epoch;

  const date = timestamp ? new Date(timestamp) : null;

  return (
    <div className="h-full bg-gradient-to-r from-[#E8F7FF] to-[#BEDBFD] p-4">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 max-w-6xl mx-auto">
        <div className="bg-white flex flex-col p-4 rounded shadow">
          {isLoading ? (
            <div className="loader flex items-center justify-center"></div>
          ) : (
            <>
              {" "}
              <span className="opacity-60 text-sm">Agora em</span>
              <span className="font-black text-lg sm:text-xl">
                {data?.location.name}, {data?.location.country}
              </span>
            </>
          )}

          <div className="flex flex-col mt-2">
            <div className="flex items-center gap-2 text-[#81BDFC] text-2xl sm:text-3xl">
              <img src={data?.current.condition.icon} />
              <span>{data?.current.temp_c}º</span>
            </div>
            <span className="pl-8 text-[10px] sm:text-xs text-[#D9D9D9] pb-2">
              {data?.current.condition.text}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <CardDetails
              clima_info="Umidade"
              clima_dados={data?.current?.humidity}
            />
            <CardDetails
              clima_info="Sensação"
              clima_dados={data?.current?.feelslike_c}
            />
            <CardDetails
              clima_info="Vento"
              clima_dados={data?.current?.wind_mph}
            />
            <CardDetails
              clima_info="Direção do vento"
              clima_dados={data?.current?.wind_dir}
            />
            <CardDetails
              clima_info="Horário"
              clima_dados={date?.toLocaleTimeString()}
            />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-2">
          <span className="text-sm sm:text-base">Próximos 7 dias</span>
          <div className="flex flex-col gap-1">
            {dataWeek.map((temp) => (
              <WeekTemp
                key={temp.id}
                day={temp.day}
                dayNumber={temp.dayNumber}
                min={temp.min}
                max={temp.max}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
