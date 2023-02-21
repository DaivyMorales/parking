import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { ListParking } from "./Components/ListParking";
import { FormParking } from "./Components/FormParking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListParking />}>
          <Route path="/list/form" element={<FormParking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
