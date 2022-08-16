import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
// import TodoList2 from 'components/TodoList2';
import Navbar from 'components/Navbar';

function Dashboard() {
  const token = JSON.parse(localStorage.getItem('user'));
  const [tasks, setTasks] = useState(null);

  const fetchTask = () => {
    axios.get('task', {
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then((res) => {
      setTasks(res.data.task);
    });
  };

  return (
    <Box textAlign="left" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={3}>

          <Navbar />
          <VStack w="70%" spacing={3}>
            <AddTodo fetchTask={fetchTask} tasks={tasks} />
            <SimpleGrid columns={2} spacing={150}>
              <TodoList fetchTask={fetchTask} tasks={tasks} />
              {/* <TodoList2 /> */}
            </SimpleGrid>
          </VStack>

        </VStack>
      </Grid>
    </Box>
  );
}
export default Dashboard;
