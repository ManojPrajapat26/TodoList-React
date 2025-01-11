import { useState } from "react";
export const TodoFormAgain = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});


    const inputHandler = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue)
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <section className="form">
            <form action="" onSubmit={(e) => handleFormSubmit(e)}>

                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(e) => inputHandler(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn"> Add Task</button>
                </div>
            </form>

        </section>
    )
}