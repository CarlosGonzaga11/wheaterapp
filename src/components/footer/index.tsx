import { FiMapPin } from "react-icons/fi";
import { CiSettings, CiCircleInfo } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#E8F7FF] to-[#BEDBFD] text-xs sm:text-sm py-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <FiMapPin />
              <p>Localização</p>
            </div>
            <div className="flex items-center gap-1">
              <CiSettings />
              <p>Configuração</p>
            </div>
            <div className="flex items-center gap-1">
              <CiCircleInfo />
              <p>Sobre</p>
            </div>
          </div>
          <div className="text-right">Unidade: C F</div>
        </div>
        <p className="opacity-80 text-center text-xs">
          @2025 Tempo Agora. Dados meteorológicos atualizados em tempo real.
        </p>
      </div>
    </footer>
  );
}
