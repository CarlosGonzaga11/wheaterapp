import axios from "axios";

const API_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = import.meta.env.VITE_API_KEY;

// export async function GetWheater(city: string) {
//   const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
//   if (!response.ok) throw new Error("Erro ao buscar dados");
//   return response.json();
// }

export async function GetWheater(city: string) {
  try {
    const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
