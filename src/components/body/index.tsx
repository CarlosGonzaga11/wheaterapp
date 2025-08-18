import { IoCloudyOutline } from "react-icons/io5";
import CardDetails from "../card";
import WeekTemp from "../WeekTemp";

export default function Body() {
  return (
    <div className="h-full bg-gradient-to-r from-[#E8F7FF] to-[#BEDBFD] p-4">
      {/* Grid adaptável: 1 coluna no mobile, 2 colunas a partir do md */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 max-w-6xl mx-auto">
        
        {/* Coluna esquerda */}
        <div className="bg-white flex flex-col p-4 rounded shadow">
          <span className="opacity-60 text-sm">Agora em</span>
          <span className="font-black text-lg sm:text-xl">São Paulo, SP</span>

          <div className="flex flex-col mt-2">
            <div className="flex items-center gap-2 text-[#81BDFC] text-2xl sm:text-3xl">
              <IoCloudyOutline />
              <span>24º</span>
            </div>
            <span className="pl-8 text-[10px] sm:text-xs text-[#D9D9D9] pb-2">
              Parcialmente Nublado
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-2">
          <span className="text-sm sm:text-base">Próximos 7 dias</span>
          <div className="flex flex-col gap-1">
            <WeekTemp />
            <WeekTemp />
            <WeekTemp />
            <WeekTemp />
            <WeekTemp />
            <WeekTemp />
            <WeekTemp />
          </div>
        </div>
        
      </div>
    </div>
  );
}
