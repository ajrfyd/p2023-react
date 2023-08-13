import react, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import lenis from "./utils/lenis";
import link from "./utils/link";


const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  )
};


export default App;