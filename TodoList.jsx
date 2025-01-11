import { MdCheckBox, MdDelete } from "react-icons/md"

export const TodoList = ({  
    data,
    checked,  
    onHandleDeleteTodo , 
    onHandleCheckTodo,
 }) => {
    
    return (
        <li  className="todo-item">
        <span className={ checked ? "checkList": "notCheckList"}>    {data}        </span>

        <button className="check-btn" onClick = { () => onHandleCheckTodo(data)}> <MdCheckBox/>  </button>

        <button className="delete-btn" onClick = { () => onHandleDeleteTodo(data)} > <MdDelete /></button>

    </li>
    )
}