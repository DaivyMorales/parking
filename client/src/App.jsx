import "./App.css";
import "./Styles/main.scss";

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
          <Route path="/list/edit/:id" element={<FormParking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
