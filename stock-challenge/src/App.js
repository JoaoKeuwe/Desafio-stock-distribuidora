import "./App.css";
import SignUp from "../src/components/SignUp";
import Infos from "./components/Infos";
import Confirm from "./components/Confirm";
import Error from "./components/Error";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Infos />
      <Confirm />
      <Error />
      <Success />
    </div>
  );
}

export default App;
