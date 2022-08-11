import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Box,
  Spacer,
  Badge,
  Heading,
  Button,
  SimpleGrid
} from '@chakra-ui/react';

import { FaTrash } from 'react-icons/fa';


function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        <Text>TODO List Kosong!</Text>
      </Badge>
    );
  }

  return (
    <VStack
      w="70%"
      spacing={5}
      align="stretch"
    >

//bagi 2 duls
<SimpleGrid columns={2} spacing={200}>

  <VStack
  align='stretch'>

{todos.map((todo) => (
            <VStack 
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            alignItems="stretch"
            >
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
          </VStack>
        ))}
  </VStack >


  <VStack
  align='stretch'>

          {todos.map((todo) => (
            <VStack 
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            alignItems="stretch"
            >
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
          </VStack>
        ))}
      
  </VStack>

</SimpleGrid>
//bagi 2 duls
    </VStack>

  );
}

export default TodoList;
