import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Grid,
} from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';


function Dashboard() {
//   const initialTodos = [
//     {
//       id: 1,
//       body: 'get bread',
//     },
//     {
//       id: 2,
//       body: 'get butter',
//     },
//   ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Box textAlign="left" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={5}>

          <Navbar />
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          
        </VStack>
      </Grid>
    </Box>
  );
}
export default Dashboard;