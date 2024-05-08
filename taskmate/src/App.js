import { useState } from "react";
import "./App.css"

export default function App(){
    let [count, setCount] = useState(0);

    function handleAdd(){
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    function handleSub(){
        setCount(count-1);
    }

    function handleReset(){
        setCount(0);
    }

    return (
        <div className='App'>
            <div className="box">
                <p>{count}</p>
                <button className="add" onClick={handleAdd}>ADD</button>
                {/* <button className="add" onClick={() => count+=1}>ADD</button> */}
                <button className="sub" onClick={handleSub}>SUB</button>
                <button className="reset" onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

// export default function App(){
//     return React.createElement("h1", {className: "active"}, "Rishi")
// }


