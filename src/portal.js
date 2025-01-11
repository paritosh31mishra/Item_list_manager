import { HashRouter, Routes, Route } from "react-router-dom";
import Itemlist from "./Dashboard";
import Header from "./header";


const Portal = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
       <Route exact path="/" element={<Itemlist />} />
       
      </Routes>
    </HashRouter>
  );
};

export default Portal;
