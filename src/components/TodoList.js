import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  Heading,
  Button,
} from '@chakra-ui/react';

import { FaTrash} from 'react-icons/fa';

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No Todos, yay!!!
      </Badge>
    );
  }

  return (
    <VStack w='70%'
    spacing={5}
    align='stretch'>

      <Heading as='h3' size='lg'>TODO List</Heading>
      <HStack >
        <Button colorScheme='gray' variant='outline' size='sm'>
        Filter
        </Button>
        <Spacer/>
        <Button colorScheme='orange' variant='solid' size='sm'>
        Create
        </Button>
        
      </HStack>
      <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      alignItems='stretch'
    > 

      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
    </VStack>
    
  );
}

export default TodoList;