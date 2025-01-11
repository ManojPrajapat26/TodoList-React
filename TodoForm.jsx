import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
     const [inputValue, setInputValue] = useState();


     const inputHandler = (value) => {
        return setInputValue(value);
    }
    // ;{id:value,content: value, Checked:false}
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue)
        setInputValue([]);
    }

   return (
   <section className="form">
                    <form action="" onSubmit={(e) => handleFormSubmit(e)}>
    
                        <div>
                            <input 
                            type="text" 
                            className="todo-input" 
                            autoComplete="off" 
                            value={inputValue} 
                            onChange={(e) => inputHandler(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" className="todo-btn"> Add Task</button>
                        </div>
                    </form>
    
                </section>
   )
}