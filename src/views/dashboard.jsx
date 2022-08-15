import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import TodoList2 from 'components/TodoList2';

function Dashboard() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [todos2, setTodos2] = useState(
    () => JSON.parse(localStorage.getItem('todos2')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos2', JSON.stringify(todos2));
  }, [todos2]);

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
        <VStack spacing={3}>

          <Navbar />
          <VStack w="70%">
            <AddTodo addTodo={addTodo} />
            <SimpleGrid columns={2} spacing={150}>
              <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
              <TodoList2 todos={todos} deleteTodo={deleteTodo} />
            </SimpleGrid>
          </VStack>

        </VStack>
      </Grid>
    </Box>
  );
}
export default Dashboard;
