import { Flex, Checkbox, Input, Box } from "@chakra-ui/react"
import { ToggleTodoFunc, ChangeTodoFunc, RemoveTodoFunc, TodoID, Todo } from "../../types"
import { useEffect, useState } from "react"
import { acceptIcon, cancleIcon, editIcon, removeIcon } from "../../icons"
import TodoItemButton from "./components/Button"

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTodo, changeTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    setInputValue(task.text)
  }, [isEditing])

  const onCheck = () => {
    toggleTodo(task.id)
  }
  const onRemove = () => {
    removeTodo(task.id)
  }
  const onEditStart = () => {
    setIsEditing(true)
  }
  const onEditApprove = () => {
    changeTodo(inputValue, task.id)
    setIsEditing(false)
  }
  const onEditCancle = () => {
    setIsEditing(false)
  }

  const onMouseOver = () => {
    setIsMouseOver(true)
  }
  const onMouseOut = () => {
    setIsMouseOver(false)
  }

  return (
    <Flex
      align={'center'}
      p='12px'
      bg='#fff'
      borderBottom={'1px solid rgba(34, 60, 80, 0.2)'}
      pos='relative'
      _hover={{ bg: '#f5f5f5' }}
      _last={{ borderColor: 'transparent' }}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      <Box w='100%' mr='5px'>
        {isEditing ? (
          <Input
            value={inputValue}
            onChange={(elem) => setInputValue(elem.target.value)}
          />
        ) : (
          <Checkbox
            isChecked={task.isDone}
            w='100%'
            wordBreak={'break-all'}
            alignItems={'flex-start'}
            sx={{
              '.chakra-checkbox__control': {
                mt: '4px'
              }
            }}
            onChange={onCheck}
            {...task.isDone && {
              textDecoration: 'line-through'
            }}
          >
            {task.text}
          </Checkbox>
        )}
      </Box>

      {isEditing ? (
        <Flex>
          <TodoItemButton
            icon={acceptIcon}
            onClick={onEditApprove}
          />
          <TodoItemButton
            icon={cancleIcon}
            onClick={onEditCancle}
          />
        </Flex>
      ) : isMouseOver && (
        <Flex pos='absolute' right='10px'>
          <TodoItemButton
            icon={editIcon}
            onClick={onEditStart}
          />
          <TodoItemButton
            icon={removeIcon}
            onClick={onRemove}
          />
        </Flex>
      )}
    </Flex>
  )
}

export default TodoItem

type TodoItemProps = {
  task: Todo
  toggleTodo: ToggleTodoFunc
  changeTodo: ChangeTodoFunc
  removeTodo: RemoveTodoFunc
}