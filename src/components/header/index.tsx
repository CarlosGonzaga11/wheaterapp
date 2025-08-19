import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

interface HeaderProps {
  setCity: (city: string) => void;
}

export default function Header({ setCity }: HeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current) {
      setCity(inputRef.current.value); // pega o valor correto
      console.log(inputRef.current.value);
    }
  };

  return (
    <header className="bg-[#F2F9FD] p-6 flex w-full m-0 items-center justify-between h-[40px] mx-auto max-w-6xl ">
      <span className="text-[#6BB1FB] text-m">Tempo Agora</span>
      <div className="relative w-72">
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 opacity-55 " />
        <input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="placeholder:text-sm w-full pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BB1FB]"
          placeholder="Buscar cidade..."
        ></input>
      </div>
      <IoMoonOutline className="text-[#65758B] hover:text-[#404D60] transition-all" />
    </header>
  );
}
