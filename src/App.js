import './App.css';
import Countries from './Components/Countires/Countries';
import Nevigation from './Components/Nevigation/Nevigation';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nevigation></Nevigation>
      <Pricing></Pricing>
      {/* Chart with api data*/}
      <Countries></Countries>
    </div>
  );
}

export default App;
