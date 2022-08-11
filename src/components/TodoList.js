import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Button,
  Badge,
  Box,
  SimpleGrid
} from '@chakra-ui/react';

import { FaTrash } from 'react-icons/fa';


function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <VStack spacing={140}>
        <Box></Box>
        
        <Text>TODO List Kosong!</Text>

      </VStack>
      
    );
  }

  return (
    <VStack
      w="70%"
      spacing={3}
      align="stretch"
    >

//bagi 2 duls
<SimpleGrid columns={2} spacing={150}>

<VStack
align='stretch'>
<Box align='center' size='xs' p={1} borderRadius='md' bg='gray.100' color='black' width='90px' height='25px'>
<Text fontSize='xs'>Uncomplete</Text>
</Box>
</VStack >


<VStack
align='stretch'>
<Box align='center' size='xs' p={1} borderRadius='md' bg='orange.100' color='orange' width='90px' height='25px'>
<Text fontSize='xs'>Complete</Text>
</Box>
</VStack>

</SimpleGrid>
<SimpleGrid columns={2} spacing={150}>

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

      
  </VStack>

</SimpleGrid>
//bagi 2 duls
    </VStack>

  );
}

export default TodoList;
