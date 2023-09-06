export type Todo = {
    text: string;
    isDone: boolean
}

export type TodoList = Todo[];

export enum ActionType {
    ADD = 'ADD',
    CHANGE = 'CHANGE',
    REMOVE = 'REMOVE',
    TOGGLE = 'TOGGLE',
    SET = 'SET'
}

export type Action = {
    type: ActionType.ADD,
    payload: {
        text: string,
    }
} | {
    type: ActionType.CHANGE,
    payload: {
        text: string,
        i: number
    }
} | {
    type: ActionType.REMOVE | ActionType.TOGGLE,
    payload: {
        i: number
    }
} | {
    type: ActionType.SET,
    payload: {
        list: TodoList
    }
}

export type AddTodoFunc = (text: string) => void
export type ChangeTodoFunc = (text: string, i: number) => void
export type RemoveTodoFunc = (i: number) => void
export type ToggleTodoFunc = (i: number) => void