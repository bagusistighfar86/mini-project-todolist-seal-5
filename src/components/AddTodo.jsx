import React, { useState, useEffect } from 'react';
import {
  HStack,
  useToast,
  VStack,
  Spacer,
  Heading,
  Box,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import jwt from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'reducer/userReducer';
import CreateTask from './Modal/createTask';
import Filter from './Modal/filter';

function AddTodo({ todos }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const toast = useToast();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const newToken = jwt(`${localStorage.getItem('user')}`);
    dispatch(setToken(newToken));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setContent('');
  }

  if (!todos.length) {
    return (
      <VStack>
        <Box height="170px" />
        <VStack
          borderColor="gray.100"
          borderWidth="2px"
          p="7"
          borderRadius="lg"
          alignItems="center"
        >
          <HStack align="stretch">
            <VStack align="center" spacing={1}>
              <HStack spacing={1}>
                <Heading as="h4" size="md">Welcome</Heading>
                <Heading as="h4" size="md">{token?.user?.name}</Heading>
              </HStack>
              <Box height="7px" />
              <Text fontSize="xs">Data is empty</Text>
              <Text fontSize="xs">Do you want to create new list??</Text>
              <Box height="7px" />
              <CreateTask />

            </VStack>

          </HStack>
        </VStack>

      </VStack>

    );
  }

  return (
    <VStack
      w="100%"
      spacing={5}
      align="stretch"
    >
      <Box p={2} />
      <Heading as="h3" size="lg">TODO List</Heading>

      <form onSubmit={handleSubmit}>
        <HStack>
          <Filter />
          <Spacer />
          <CreateTask />
        </HStack>
        <Box p={2} />
        <SimpleGrid columns={2} spacing={150}>

          <Box align="center" size="xs" p={1} borderRadius="md" bg="gray.100" color="black" width="90px" height="25px">
            <Text fontSize="xs">Uncomplete</Text>
          </Box>

          <Box align="center" size="xs" p={1} borderRadius="md" bg="orange.100" color="#FFBA00" width="90px" height="25px">
            <Text fontSize="xs">Complete</Text>
          </Box>

        </SimpleGrid>
      </form>

    </VStack>
  );
}

export default AddTodo;
