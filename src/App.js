import "./App.css";
import HoverCounter from "./HOCex/HoverCounter";
import ClickCounter from "./HOCex/Counter";
import HookEx from "./component/HookEx";
//import Login from "./containers/Login";
function App(props) {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <HookEx/>
     {/* <Login/>*/}
    </div>
  );
}

export default App;
