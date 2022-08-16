import React, { useState } from 'react';
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
import CreateTask from './Modal/createTask';
import Filter from './Modal/filter';

function AddTodo() {
  const [content, setContent] = useState('');
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
    }
    setContent('');
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
          {/* <Input
          size='sm'
          htmlSize={4}
          width='auto'
          textAlign='center'
          placeholder="Filter"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /> */}
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
