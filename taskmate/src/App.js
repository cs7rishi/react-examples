import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css"

//Use State with Variables
export const App = () => {
    return (
        <div className="App">
            <Header/>
            <TaskList title= "Random"/>
        </div>
    );
}

// export default function App(){
//     return React.createElement("h1", {className: "active"}, "Rishi")
// }


