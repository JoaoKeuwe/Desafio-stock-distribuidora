import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../src/components/SignUp";
import Infos from "./components/Infos";
import Confirm from "./components/Confirm";
import Error from "./components/Error";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/more-info" element={<Infos />} />
          <Route path="/confirmation" element={<Confirm />} />
          <Route path="/error" element={<Error />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
