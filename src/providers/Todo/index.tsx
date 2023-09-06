import { createContext, useContext, useEffect } from "react";
import { TodoList, ActionType, AddTodoFunc, ChangeTodoFunc, RemoveTodoFunc, ToggleTodoFunc } from "../../types";
import { useTodoListReducer } from "./hooks";

export const TodoContext = createContext<TodoContext>(null!)
export const useTodoContext = () => useContext(TodoContext)

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { state, dispach } = useTodoListReducer()

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state));
    }, [state]);

    const addTodo: AddTodoFunc = (text) => {
        dispach({ type: ActionType.ADD, payload: { text } })
    }
    const changeTodo: ChangeTodoFunc = (text, i) => {
        dispach({ type: ActionType.CHANGE, payload: { text, i } })
    }
    const removeTodo: RemoveTodoFunc = (i) => {
        dispach({ type: ActionType.REMOVE, payload: { i } })
    }
    const toggleTodo: ToggleTodoFunc = (i) => {
        dispach({ type: ActionType.TOGGLE, payload: { i } })
    }

    return (
        <TodoContext.Provider value={{ todoList: state, addTodo, changeTodo, removeTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider

export type TodoContext = {
    todoList: TodoList
    addTodo: AddTodoFunc
    changeTodo: ChangeTodoFunc
    removeTodo: RemoveTodoFunc
    toggleTodo: ToggleTodoFunc
}