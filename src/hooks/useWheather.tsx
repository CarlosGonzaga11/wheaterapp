import { useEffect, useState } from "react";
import { GetWheater } from "../api/api.tsx";

interface IDataProps {
  current: {
    humidity: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    wind_dir: string;
    wind_mph: number;
  };
  location: {
    name: string;
    country: string;
    localtime_epoch: Date;
  };
}
export function useWheater(city: string) {
  const [data, setData] = useState<IDataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData(city: string) {
      try {
        setIsLoading(true);
        const result = await GetWheater(city);
        console.log("meu result no hook", result);
        setData(result);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Não foi possivel carregar os dados");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(city);
  }, [city]);
  return { data, isLoading, error };
}
