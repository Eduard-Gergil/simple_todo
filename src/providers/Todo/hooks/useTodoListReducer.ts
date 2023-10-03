import { useReducer } from "react";
import { TodoList, Action, ActionType } from "../../../types";
import { getStorageData } from "../helpers";

const trimText = (text: string): string => text.trim();

const addTask = (state: TodoList, text: string): TodoList => {
  const textToAdd = trimText(text);
  if (!textToAdd) return state;

  const lastTaskId = new Date().getTime();
  return [...state, { id: lastTaskId, text: textToAdd, isDone: false }];
};

const changeTask = (state: TodoList, id: number, text: string): TodoList => {
  const textToChange = trimText(text);
  if (!textToChange) return state;

  return state.map((task) =>
    task.id === id ? { ...task, text: textToChange } : task
  );
};

const removeTask = (state: TodoList, id: number): TodoList =>
  state.filter((task) => task.id !== id);

const toggleTask = (state: TodoList, id: number): TodoList =>
  state.map((task) =>
    task.id === id ? { ...task, isDone: !task.isDone } : task
  );

const todoReducer = (state: TodoList, action: Action): TodoList => {
  switch (action.type) {
    case ActionType.ADD:
      return addTask(state, action.payload.text);
    case ActionType.CHANGE:
      return changeTask(state, action.payload.id, action.payload.text);
    case ActionType.REMOVE:
      return removeTask(state, action.payload.id);
    case ActionType.TOGGLE:
      return toggleTask(state, action.payload.id);
    default:
      throw new Error("Unexpected action");
  }
};

const useTodoListReducer = (): TodoListReducer => {
  const initialData = getStorageData();
  const [state, dispach] = useReducer<React.Reducer<TodoList, Action>>(
    todoReducer,
    initialData
  );

  return { state, dispach };
};

export default useTodoListReducer;

type TodoListReducer = {
  state: TodoList;
  dispach: React.Dispatch<Action>;
};
