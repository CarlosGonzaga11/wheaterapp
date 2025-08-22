import { useState } from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import TempChart from "./components/graph";
import Header from "./components/header";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/useQuery";

function App() {
  const [city, setCity] = useState<string>("");
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header setCity={setCity} />
        <Body city={city} />
        <TempChart />
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;
