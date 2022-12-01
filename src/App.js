import './App.css';
import StateEx from './component/StateEx';

function App(props) {
  return (
    <div className="App">
     {props.name}
     <StateEx/>
    </div>
  );
}

export default App;
