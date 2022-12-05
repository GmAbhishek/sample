import './App.css';
import HoverCounter from './HOCex/HoverCounter';
import ClickCounter from './HOCex/Counter';
function App(props) {
  return (
   <div className="App">
  <ClickCounter/>
  <HoverCounter/>
    </div>
  );
}

export default App;
