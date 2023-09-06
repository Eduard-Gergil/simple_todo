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

    return (
        <Flex {...style}>
            <Input
                mr='5px'
                value={value}
                onChange={onInputChange}
            />
            <Button
                bg='#3182ce'
                color={'white'}
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
