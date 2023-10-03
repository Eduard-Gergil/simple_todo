import { Flex, Input, Button, FlexProps } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"
import { AddTodoFunc } from "../../types"

const TodoInput = (props: TodoInput) => {
  const { addTodo, style } = props
  const [value, setValue] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onAddTodo = () => {
    addTodo(value)
    setValue('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTodo()
    }
  }

  return (
    <Flex
      pos='relative'
      {...style}
    >
      <Input
        h='50px'
        pr='110px'
        border={'2px solid'}
        borderColor='black'
        _hover={{
          borderColor: 'black'
        }}
        // border={'unset'}
        // _focusVisible={{
        //   border: 'unset'
        // }}
        value={value}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      
      <Button
        minW={'unset'}
        h='100%'
        px='20px'
        bg='unset'
        color={'black'}
        pos='absolute'
        right='0'
        zIndex={1}
        fontSize={'18px'}
        _hover={{
          color: '#8d8d8d',
          bg: 'unset'
        }}
        onClick={onAddTodo}
      >
        Добавить
      </Button>
    </Flex>
  )
}

export default TodoInput

type TodoInput = {
  addTodo: AddTodoFunc
  style?: FlexProps
}
