const todokey = "reactTodo";

export const getLocalStorageTodoData = () => {
    
    const rawTodos = localStorage.getItem(todokey);
    if (!rawTodos)  return [];
         
    return JSON.parse(rawTodos)
    
};
export const setLocalStorageTodoData = (task) => {

    // todo add data to localStorage with the setItem /or getItem
    return localStorage.setItem("todoykey", JSON.stringify(task));

};