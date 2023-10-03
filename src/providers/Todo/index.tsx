import { createContext, useContext, useEffect } from "react";
import { TodoList, ActionType, AddTodoFunc, ChangeTodoFunc, RemoveTodoFunc, ToggleTodoFunc } from "../../types";
import useTodoListReducer from "./hooks/useTodoListReducer";

export const TodoContext = createContext<TodoContextType>(null!)
export const useTodoContext = () => useContext(TodoContext)

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { state, dispach } = useTodoListReducer()

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state));
  }, [state]);

  const addTodo: AddTodoFunc = (text) => {
    dispach({ type: ActionType.ADD, payload: { text } })
  }
  const changeTodo: ChangeTodoFunc = (text, id) => {
    dispach({ type: ActionType.CHANGE, payload: { text, id } })
  }
  const removeTodo: RemoveTodoFunc = (id) => {
    dispach({ type: ActionType.REMOVE, payload: { id } })
  }
  const toggleTodo: ToggleTodoFunc = (id) => {
    dispach({ type: ActionType.TOGGLE, payload: { id } })
  }

  return (
    <TodoContext.Provider value={{ todoList: state, addTodo, changeTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

export type TodoContextType = {
  todoList: TodoList
  addTodo: AddTodoFunc
  changeTodo: ChangeTodoFunc
  removeTodo: RemoveTodoFunc
  toggleTodo: ToggleTodoFunc
}