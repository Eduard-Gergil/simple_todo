import { act, renderHook } from "@testing-library/react";
import { ActionType, TodoList } from "../../../types";
import useTodoListReducer from "./useTodoListReducer";

describe("useTodoListReducer", () => {
  it("Should add tasks", () => {
    const { result } = renderHook(useTodoListReducer);

    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 1" },
      });
    });
    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: " " },
      });
    });
    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: " task 3 " },
      });
    });

    const resultData: TodoList = [
      {id: 1, text: "task 1", isDone: false },
      {id: 3, text: "task 3", isDone: false },
    ];

    expect(result.current.state).toEqual(resultData);
  });

  it("Should delete task", () => {
    const { result } = renderHook(useTodoListReducer);

    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 1" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 2" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 3" },
      });
      
      result.current.dispach({
        type: ActionType.REMOVE,
        payload: { id: 1 },
      });
    });

    const resultData: TodoList = [
      {id: 1, text: "task 1", isDone: false },
      {id: 2, text: "task 3", isDone: false },
    ];

    expect(result.current.state).toEqual(resultData);
  });

  it("Should change task", () => {
    const { result } = renderHook(useTodoListReducer);

    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 1" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 2" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 3" },
      });
      
      result.current.dispach({
        type: ActionType.CHANGE,
        payload: { id: 3, text: ' CHANGED TASK ' },
      });
    });

    const resultData: TodoList = [
      {id: 1, text: "task 1", isDone: false },
      {id: 2, text: "task 2", isDone: false },
      {id: 3, text: "CHANGED TASK", isDone: false },
    ];

    expect(result.current.state).toEqual(resultData);
  });

  it("Should toggle task", () => {
    const { result } = renderHook(useTodoListReducer);

    act(() => {
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 1" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 2" },
      });
      result.current.dispach({
        type: ActionType.ADD,
        payload: { text: "task 3" },
      });
      
      result.current.dispach({
        type: ActionType.TOGGLE,
        payload: { id: 1 },
      });
    });

    const resultData: TodoList = [
      {id: 1, text: "task 1", isDone: true },
      {id: 2, text: "task 2", isDone: false },
      {id: 3, text: "task 3", isDone: false },
    ];

    expect(result.current.state).toEqual(resultData);
  });
});
