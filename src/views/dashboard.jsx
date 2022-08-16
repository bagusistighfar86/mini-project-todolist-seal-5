import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import TodoList2 from 'components/TodoList2';
import Navbar from 'components/Navbar';

function Dashboard() {
  const token = JSON.parse(localStorage.getItem('user'));
  const [tasks, setTasks] = useState(null);
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );
  const fetchTask = () => {
    axios.get('task', {
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then((res) => {
      setTasks(res.data.task);
    });
  };
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
        <VStack spacing={3}>

          <Navbar />
          <VStack w="70%" spacing={3}>
            <AddTodo addTodo={addTodo} />
            <SimpleGrid columns={2} spacing={150}>
              <TodoList fetchTask={fetchTask} tasks={tasks} />
              <TodoList2 todos={todos} deleteTodo={deleteTodo} />
            </SimpleGrid>
          </VStack>

        </VStack>
      </Grid>
    </Box>
  );
}
export default Dashboard;
