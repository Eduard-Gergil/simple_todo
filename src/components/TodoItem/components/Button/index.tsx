import { Button, Box } from "@chakra-ui/react"

const TodoItemButton = (props: TodoItemButtonProps) => {
    const { icon, onClick } = props
    return (
        <Button bg='unset' onClick={onClick}>
            <Box
                boxSize={'20px'}
                bg={`url(${icon})`}
                bgSize='contain'
            />
        </Button>
    )
}

export default TodoItemButton

type TodoItemButtonProps = {
    icon: any
    onClick: () => void
}