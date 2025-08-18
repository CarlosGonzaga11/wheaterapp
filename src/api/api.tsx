const API_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function GetWheater(city: string) {
  const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&lang=pt`);
  if (!response.ok) throw new Error("Erro ao buscar dados");
  return response.json();
}
