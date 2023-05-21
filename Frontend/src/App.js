import "./App.css";
import { Chartvis } from "./Components/Chartvis";
import { Filters } from "./Components/Filters";
import { Linechart } from "./Components/Linechart";
import { Piechart } from "./Components/Piechart";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chartvis />
      <Linechart />
      <Piechart />
      <Filters />
    </div>
  );
}

export default App;
