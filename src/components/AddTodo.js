import {
  Button, HStack, Input, useToast,
  VStack,
  Spacer,
  Heading,
  Box,
  Text, SimpleGrid
} from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();

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

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <VStack
      w="70%"
      spacing={5}
      align="stretch"
    >
    <Box p={2}>
    </Box>
      <Heading as="h3" size="lg">TODO List</Heading>
      
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          size='sm'
          htmlSize={4}
          width='auto'
          textAlign='center'
          placeholder="Filter"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Spacer />
        <Button colorScheme="orange" size="sm" type='submit'>
          Create
        </Button>
      </HStack>
    </form>
    
    </VStack>
  );
}

export default AddTodo;
