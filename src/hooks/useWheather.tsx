import { GetWheater } from "../api/api.tsx";
import { useQuery } from "@tanstack/react-query";

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
async function fetchWeather(city: string): Promise<IDataProps> {
  const data = await GetWheater(city);
  console.log("data", data);
  return data;
}

export function useWeatherquery(city: string) {
  return useQuery<IDataProps>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
  });
}

// export function useWheater(city: string) {
//   const [data, setData] = useState<IDataProps>();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData(city: string) {
//       try {
//         setIsLoading(true);
//         const result = await GetWheater(city);
//         console.log("meu result no hook", result);

//         setData(result);
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       } catch (err) {
//         setError("Não foi possivel carregar os dados");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData(city);
//   }, [city]);
//   return { data, isLoading, error };
// }
