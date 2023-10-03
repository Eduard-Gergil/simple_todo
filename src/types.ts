export type TodoID = number

export type Todo = {
  id: TodoID;
  text: string;
  isDone: boolean;
};

export type TodoList = Todo[];

export type TodoDB = Omit<Todo, "id">;

export enum ActionType {
  ADD = "ADD",
  CHANGE = "CHANGE",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
}

export type Action =
  | {
      type: ActionType.ADD;
      payload: {
        text: string;
      };
    }
  | {
      type: ActionType.CHANGE;
      payload: {
        text: string;
        id: number;
      };
    }
  | {
      type: ActionType.REMOVE | ActionType.TOGGLE;
      payload: {
        id: number;
      };
    };

export type AddTodoFunc = (text: string) => void;
export type ChangeTodoFunc = (text: string, i: number) => void;
export type RemoveTodoFunc = (id: TodoID) => void;
export type ToggleTodoFunc = (id: TodoID) => void;
