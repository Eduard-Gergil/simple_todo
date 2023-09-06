import { Flex, Checkbox, Input, Box } from "@chakra-ui/react"
import { ToggleTodoFunc, ChangeTodoFunc, RemoveTodoFunc } from "../../types"
import { useEffect, useState } from "react"
import { acceptIcon, cancleIcon, editIcon, removeIcon } from "../../icons"
import TodoItemButton from "./components/Button"

const TodoItem = (props: TodoItemProps) => {
    const { text, isChecked, toggleTodo, changeTodo, removeTodo, i } = props

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(text)
    }, [isEditing])

    const onCheck = () => {
        toggleTodo(i)
    }
    const onRemove = () => {
        removeTodo(i)
    }
    const onEditStart = () => {
        setIsEditing(true)
    }
    const onEditApprove = () => {
        changeTodo(inputValue, i)
        setIsEditing(false)
    }
    const onEditCancle = () => {
        setIsEditing(false)
    }

    const [isMouseOver, setIsMouseOver] = useState(false)

    const onMouseOver = () => {
        setIsMouseOver(true)
    }
    const onMouseOut = () => {
        setIsMouseOver(false)
    }

    return (
        <Flex
            align={'center'}
            minH='50px'
            px='10px'
            bg='#fff'
            borderBottom={'1px solid rgba(34, 60, 80, 0.2)'}
            _hover={{ bg: '#f5f5f5' }}
            _last={{ borderBottom: 'unset' }}
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
                        isChecked={isChecked}
                        w='100%'
                        wordBreak={'break-all'}
                        onChange={onCheck}
                        {...isChecked && {
                            textDecoration: 'line-through'
                        }}
                    >
                        {text}
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
                <Flex>
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
    text: string
    isChecked: boolean
    toggleTodo: ToggleTodoFunc
    changeTodo: ChangeTodoFunc
    removeTodo: RemoveTodoFunc
    i: number
}