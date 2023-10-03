import { Box, IconButton } from "@chakra-ui/react"

const TodoItemButton = (props: TodoItemButtonProps) => {
  const { icon, onClick } = props
  return (
    <IconButton
      aria-label=''
      icon={
        <Box
          boxSize={'20px'}
          bg={`url(${icon})`}
          bgSize='contain'
        />
      }
      bg='white'
      mr='5px'
      _last={{
        mr: 'unset'
      }}
      onClick={onClick}
    />
  )
}

export default TodoItemButton

type TodoItemButtonProps = {
  icon: any
  onClick: () => void
}