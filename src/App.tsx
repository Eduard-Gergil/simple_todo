import { useContext, useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import TodoInput from './components/TodoInput';
import { TodoContext } from './providers/Todo';
import { TodoList as TodoListType } from './types';
import TodoList from './components/TodoList';
import TodoLogo from './components/TodoLogo';
import ToggleStatusButton from './components/ToggleStatusButton';

const App = () => {
  const { todoList, addTodo, changeTodo, removeTodo, toggleTodo } = useContext(TodoContext)
  const [filters, setFilters] = useState<FiltersState>({ status: 'allTasks' })

  if (!todoList) return

  const setStatusFilter = (status: AvailableFiltersStatuses) => {
    setFilters((prev) => { return { ...prev, status } })
  }

  const filterTasks = (tasks: TodoListType) => {
    return tasks.filter((task) => {
      if (filters.status === 'allTasks') {
        return true
      }

      if (filters.status === 'activeTasks') {
        if (!task.isDone) {
          return true
        }
      }

      if (filters.status === 'completedTasks') {
        if (task.isDone) {
          return true
        }
      }

      return false
    })
  }

  const onSetActiveFilter = () => {
    setStatusFilter('activeTasks')
  }

  const onSetAllFilter = () => {
    setStatusFilter('allTasks')
  }

  const onSetCompletedFilter = () => {
    setStatusFilter('completedTasks')
  }

  const transformedTodoList = filterTasks(todoList)

  return (
    <Flex minH='100vh' py='120px' justify={'center'}>
      <Box w='400px' >
        <TodoLogo />

        <Box p='10px' bg='#fff' borderRadius={'10px'}>
          <TodoInput addTodo={addTodo} />

          <Flex justify={'stretch'} mt='10px'>
            <ToggleStatusButton
              text={'All'}
              isActive={filters.status === 'allTasks'}
              onClick={onSetAllFilter}
            />
            <ToggleStatusButton
              text={'Active'}
              isActive={filters.status === 'activeTasks'}
              onClick={onSetActiveFilter}
            />
            <ToggleStatusButton
              text={'Completed'}
              isActive={filters.status === 'completedTasks'}
              onClick={onSetCompletedFilter}
            />
          </Flex>

          <TodoList
            todoList={transformedTodoList}
            toggleTodo={toggleTodo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        </Box>
      </Box>
    </Flex >
  )
}

export default App

type AvailableFiltersStatuses = 'activeTasks' | 'completedTasks' | 'allTasks'

type FiltersState = {
  status: AvailableFiltersStatuses
}