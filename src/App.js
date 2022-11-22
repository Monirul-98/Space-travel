import { Route, Routes } from "react-router-dom";
import "./App.css";

import Design from "./Components/Design";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Space-travel/Home/Home";

function App() {
  return (
    <div className="container body">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/design" element={<Design></Design>}></Route>
      </Routes>
    </div>
  );
}

export default App;
