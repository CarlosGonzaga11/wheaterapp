import { GetWheater } from "./api/api";
import Body from "./components/body";
import Footer from "./components/footer";
import TempChart from "./components/graph";
import Header from "./components/header";
function App() {
  // const [data, setData] = useState();
  // const api_url = "http://api.weatherapi.com/v1/current.json";
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `${api_url}?key=${import.meta.env.VITE_API_KEY}&q=London&aqi=no`
  //     );
  //     const result = await response.json();
  //     console.log(result);
  //   }
  //   fetchData();
  // });
  return (
    <>
      <Header />
      <Body />
      <TempChart />
      <Footer />
    </>
  );
}

export default App;
