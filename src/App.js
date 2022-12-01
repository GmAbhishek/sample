import './App.css';
//import StateEx from './component/StateEx';
import ListEx from './component/ListEx';

function App(props) {
  return (
    <div className="App">
     {props.name}
     <ListEx/>
    </div>
  );
}

export default App;
