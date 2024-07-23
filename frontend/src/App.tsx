import TodoItem from "./components/TodoItem/TodoItem"
import Header from "./components/Header/Header"
import InputForm from "./components/InputForm/InputForm";
import { useState } from "react"


function App() {
    const [showForm, setShowForm] = useState(false);

    function setShowFormCallback() {
        setShowForm(prev => !prev)
    }

    return (
        <div className="main-flex-div">
            {showForm && <InputForm callback={setShowFormCallback}/>}
            <Header callback={setShowFormCallback}/>
            <main>
                <div className="todo-list-container">
                    <ul className="todo-list">
                        <TodoItem id={0} name={"Test Test"} completed={false} description={"Aaaaaaaaaaaaaaaaaaaa"}/>
                        <TodoItem id={0} name={"Test Test"} completed={false} description={"Aaaaaaaaaaaaaaaaaaaa"}/>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default App
