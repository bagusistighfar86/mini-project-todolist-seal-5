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

function TodoListTittle({ todos, deleteTodo }) {

  return (
    <VStack
      w="70%"
      spacing={5}
      align="stretch"
    >

      <Heading as="h3" size="lg">TODO List</Heading>
      
      <HStack>
        <Button colorScheme="gray" color='gray' variant="outline" size="sm">
          Filter
        </Button>
        <Spacer />
        <Button colorScheme="orange" size="sm">
          Create
        </Button>
      </HStack>

//bagi 2 duls
<SimpleGrid columns={2} spacing={200}>

  <VStack
  align='stretch'>
  <Button
  size='xs'
  height='25px'
  width='90px'
>
  Uncomplete
</Button>
  </VStack >


  <VStack
  align='stretch'>
  <Button
  color='orange'
  variant='outline'
  borderColor='orange'
  border='1px'
  size='xs'
  height='25px'
  width='90px'
>
  Complete
</Button>
  </VStack>

</SimpleGrid>
//bagi 2 duls
    </VStack>

  );
}

export default TodoListTittle;
