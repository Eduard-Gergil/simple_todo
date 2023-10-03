import { Box } from '@chakra-ui/react'
import TodoItem from '../TodoItem'
import { ToggleTodoFunc, TodoList as TodoListType, ChangeTodoFunc, RemoveTodoFunc } from '../../types'

const TodoList: React.FC<Props> = ({ todoList, toggleTodo, changeTodo, removeTodo }) => {
  if (!todoList.length) return

  return (
    <Box mt='10px'>
      {todoList.map((task) => {
        return (
          <TodoItem
            task={task}
            toggleTodo={toggleTodo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
            key={task.id}
          />
        )
      })}
    </Box>
  )
}

export default TodoList

type Props = {
  todoList: TodoListType
  toggleTodo: ToggleTodoFunc
  changeTodo: ChangeTodoFunc
  removeTodo: RemoveTodoFunc
}