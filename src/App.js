import './App.css';
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Countdown />
      <br />
      <br />
      <br />
      <span style={{fontSize: "small", color: "white"}}>With ❤️ from <a href="https://github.com/GrassettoFrancesco" target="_blank" rel="noreferrer">Francesco Grassetto</a></span>
      </div>
    </div>
  );
}

export default App;
