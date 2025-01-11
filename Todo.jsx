

// import { useEffect, useState } from "react";
// import { MdDelete, MdCheckBox } from "react-icons/md";
// import "./Todo.css";

// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [task, setTask] = useState([]);
//     const [dateTime, setDateTime] = useState("");

//     const inputHandler = (value) => {
//         return setInputValue(value);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (!inputValue) return;
//         if (task.includes(inputValue)) {
//             return setInputValue("");
//         }

//         setTask((prevdata) => [...prevdata, inputValue]);
//         setInputValue("");
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const now = new Date();
//             const formattedDate = now.toLocaleDateString();
//             const formattedTime = now.toLocaleTimeString();
//             setDateTime(`${formattedDate} and ${formattedTime}`);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleDeleteTodo = (value) => {
//         console.log(task);
//         console.log(value);
//         const updatedTask = task.filter((curTask) => curTask !== value);
//         setTask(updatedTask);
//     }

//     const handleClearTodoData = () => {
//         setTask([]);
//     }

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <h2 className="date-time">{dateTime}</h2>
//             </header>

//             <section className="form">
//                 <form action="" onSubmit={handleFormSubmit}>

//                     <div>
//                         <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(e) => inputHandler(e.target.value)} />
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn"> Add Task</button>
//                     </div>
//                 </form>
//             </section>

//             <section className="myUnOrdList">
//                 <ul>
//                     {task.map((curTask, index) => {
//                         return (
//                             <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn"><MdCheckBox /></button>
//                                 <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}><MdDelete /></button>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </section>

//             <section>
//                 <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
//             </section>
//         </section>
//     );
// };







import { useState } from "react";
import "./Todo.css";
// import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { TodoFormAgain } from "./TodoFormAgain";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";




export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());

   

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        // To check if the input feild is empty or not
        if (!inputValue) return;
        // To check if the data is already existing or not
        // if (task.includes(inputValue))  return; in the form of array we use this & in the form of object we dont use .includes method.

        // we use array with an object like this we create new const variable

        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);

    };
    // todo add data to localStorage with the setItem /or getItem
    setLocalStorageTodoData(task);



    // Todo Handle delete Todo Function
    const handleDeleteTodo = (value) => {
        console.log(task)
        console.log(value)
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask)
    }
    // Todo Handle to Clear All DATA Functionality....
    const handleClearTodoData = () => {
        setTask([]);
    }

    //  Todo Handle Checked Functionality with turnary opoerator with the help of CSS(...spread operator)
    const handleCheckTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {


                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;

            }
        });
        setTask(updatedTask);
    }

    return (
        <section className="todo-container">
            <header>
                <h1 >Todo List</h1>
                <TodoDate />
            </header>

            {/* <TodoForm onAddTodo ={handleFormSubmit} /> */}
            <TodoFormAgain onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {

                        return (
                            <TodoList
                                key={curTask.id}
                                data={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckTodo={handleCheckTodo}
                            />

                        );

                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
};

