import './App.css';
import { Greet } from './components/greet';
// import {useReducer} from 'react';
// import { Personlist } from './components/personlist';
import { Status } from './components/status';

function App() {
  return (
    <div className="App">
8   <Greet  name="Hsn"/>
   <Status status='success'/>
     
    </div>
  );
}

export default App;

function app() {
  const personName = {
    First : "Bruce",
    Last : "Wayne",
  }
}
const nameList = [
  {
    first: "Bruce",
    last: "Wayne"
  },
  {
    first: "Clark",
    last : "kent"
  },
    
]
// return (
//  <div>
//   <Personlist names={nameList} />
//   </div>
// )
// interface State {
//   count: number 
// };

// type CounterAction =
//  | { type: "reset" }
//  | { type: "setCount"; value: State["count"] }

// const initialState: State = { count: 0 };

// function stateReducer(state: State, action: CounterAction): State {
//  switch (action.type) {
//    case "reset":
//      return initialState;
//    case "setCount":
//      return { ...state, count: action.value };
//    default:
//      throw new Error("Unknown action");
//  }
// }

// export default function App() {
//  const [state, dispatch] = useReducer(stateReducer, initialState);

//  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
//  const reset = () => dispatch({ type: "reset" });

//  return (
//    <div>
//      <h1>Welcome to my counter</h1>

//      <p>Count: {state.count}</p>
//      <button onClick={addFive}>Add 5</button>
//      <button onClick={reset}>Reset</button>
//    </div>
//  );
// }

 
 
