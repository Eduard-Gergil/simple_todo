import { useContext } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { TodoContext } from './providers/Todo';

const App = () => {
  const { todoList, addTodo, changeTodo, removeTodo, toggleTodo } = useContext(TodoContext)

  return (
    <Center minH='100vh'>
      <Box w='400px' h='500px' >
        <Box
          textAlign={'center'}
          fontSize={'64px'}
          fontWeight={'700'}
          color='#000'
        >
          todo
        </Box>

        <Box p='10px' bg='#fff' borderRadius={'10px'}>
          <TodoInput addTodo={addTodo} />

          {!!todoList.length && (
            <Box mt='10px'>
              {todoList.map(({ text, isDone }, i) => {
                return (
                  <TodoItem
                    text={text}
                    isChecked={isDone}
                    toggleTodo={toggleTodo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                    i={i}
                    key={i}
                  />
                )
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Center >
  )
}

export default App