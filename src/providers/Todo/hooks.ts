import { useReducer } from "react";
import { TodoList, Action, ActionType } from "../../types";
import { getStorageData } from "./helpers";

export const useTodoListReducer = () => {
    const todoReducer = (state: TodoList, action: Action): TodoList => {
        switch (action.type) {
            case ActionType.ADD: {
                const trimedText = action.payload.text.trim()
                if (!trimedText) return state
    
                return [
                    ...state,
                    { text: action.payload.text, isDone: false }
                ];
            };
            case ActionType.CHANGE: {
                const trimedText = action.payload.text.trim()
                if (!trimedText) return state
    
                const newState = [...state]
                newState.splice(action.payload.i, 1, { ...state[action.payload.i], text: action.payload.text })
    
                return newState;
            };
            case ActionType.REMOVE: {
                const newState = [...state]
                newState.splice(action.payload.i, 1)
    
                return newState
            }
            case ActionType.TOGGLE: {
                const newState = [...state];
                newState.splice(action.payload.i, 1, { ...state[action.payload.i], isDone: !state[action.payload.i].isDone });
    
                return newState;
            };
            case ActionType.SET: {
                return action.payload.list;
            };
            default: throw new Error('Unexpected action');
        }
    };

    const initialData = getStorageData()
    const [state, dispach] = useReducer<React.Reducer<TodoList, Action>>(todoReducer, initialData)

    return { state, dispach }
}