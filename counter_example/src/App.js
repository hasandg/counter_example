
import './App.css';
import CounterButtons from "./components/CounterButtons";
import Count from "./components/Count";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(1);

    return (
        <div className="App">
            <Count count={count}/>
            <CounterButtons count={count} setCount={setCount}/>
        </div>
    );
}

export default App;
