import "./App.css";
import { Person } from "./Components/Person";
import { IsLogged } from "./Components/IsLogged";

function App() {
  return (
    <>
      <Person name="sushant" age={22} />
      <IsLogged name="sushant" age={22} isLoggedin={true} />
    </>
  );
}

export default App;
