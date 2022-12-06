import "./App.css";
import HoverCounter from "./HOCex/HoverCounter";
import ClickCounter from "./HOCex/Counter";
import HookEx from "./component/HookEx";
function App(props) {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <HookEx/>
    </div>
  );
}

export default App;
