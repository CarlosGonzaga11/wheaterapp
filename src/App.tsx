import { useState } from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import TempChart from "./components/graph";
import Header from "./components/header";

function App() {
  const [city, setCity] = useState<string>("");
  return (
    <>
      <Header setCity={setCity} />
      <Body city={city} />
      <TempChart />
      <Footer />
    </>
  );
}

export default App;
