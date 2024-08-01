import TodoItem from "./components/TodoItem/TodoItem"
import Header from "./components/Header/Header"
import InputForm from "./components/InputForm/InputForm";
import { useState, useEffect } from "react"
import { useGetAllTasksQuery } from "./services/tasks";


function App() {
    const [showForm, setShowForm] = useState(false);
    const { data, error, isLoading } = useGetAllTasksQuery();

    function setShowFormCallback() {
        setShowForm(prev => !prev)
    }

    return (
        <div className="main-flex-div">
            {showForm && <InputForm callback={setShowFormCallback} />}
            <Header callback={setShowFormCallback} />
            <main>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="todo-list-container">
                        <ul className="todo-list">
                            {data?.data.tasks.map((item) => (
                                <TodoItem
                                    key={item._id}
                                    _id={item._id}
                                    name={item.name}
                                    completed={item.completed}
                                    description={item.description}
                                    deadline={item.deadline}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App
