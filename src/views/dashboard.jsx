import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import TodoList from 'components/TodoList';
import TodoList2 from 'components/TodoList2';
import AddTodo from 'components/AddTodo';
import Navbar from 'components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setRefresh } from 'reducer/userReducer';

function Dashboard() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('user'));
  const [tasks, setTasks] = useState(null);
  const refresh = useSelector((state) => state.user.refresh);

  const fetchTask = () => {
    axios.get('task', {
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then((res) => {
      setTasks(res.data.task);
      dispatch(setRefresh());
    });
  };

  useEffect(() => {
    fetchTask();
  }, [refresh]);

  return (
    <Box textAlign="left" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={3}>
          <Navbar />
          <VStack w="70%" spacing={3}>
            <AddTodo fetchTask={fetchTask} tasks={tasks} />
            <SimpleGrid columns={2} spacing={150} w="100%">
              <VStack>
                <TodoList fetchTask={fetchTask} tasks={tasks} />
              </VStack>
              <VStack>
                <TodoList2 fetchTask={fetchTask} tasks={tasks} />
              </VStack>
            </SimpleGrid>
          </VStack>
        </VStack>
      </Grid>
    </Box>
  );
}
export default Dashboard;
