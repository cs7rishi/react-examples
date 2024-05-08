import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import "./App.css"

export default function App(){
    let name = "Rishi"
    return (
        <div className='App'>
            <Header/>
            <h1>{name}</h1>
            <h2>Heading 2</h2>
            <Footer/>
        </div>
    )
}

// export default function App(){
//     return React.createElement("h1", {className: "active"}, "Rishi")
// }


