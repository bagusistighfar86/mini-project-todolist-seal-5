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
        <Button colorScheme="orange" bg='#FFBA00' size="sm" type='submit'>
          Create
        </Button>
      </HStack>
      <Box p={2}>
      </Box>
      <SimpleGrid columns={2} spacing={150}>


      <Box align='center' size='xs' p={1} borderRadius='md' bg='gray.100' color='black' width='90px' height='25px'>
      <Text fontSize='xs'>Uncomplete</Text>
      </Box>

      <Box align='center' size='xs' p={1} borderRadius='md' bg='orange.100' color='#FFBA00' width='90px' height='25px'>
      <Text fontSize='xs'>Complete</Text>
      </Box>

</SimpleGrid>
    </form>
    
    </VStack>
  );
}

export default AddTodo;
