import React from 'react';
import Navbar from 'components/Navbar';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Spacer,
  Image,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './style/theme';


function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
          <Navbar/>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
