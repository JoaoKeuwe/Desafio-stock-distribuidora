import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/PageSignUp/SignUp";
import Infos from "./components/PageMoreInfo/Infos";
import Confirm from "./components/PageConfirm/Confirm";
import Error from "./components/PageError/Error";
import Success from "./components/PageSucces/Success";

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
