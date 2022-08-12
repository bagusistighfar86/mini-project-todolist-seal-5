import React from 'react';
import { CheckIcon, CloseIcon, CalendarIcon } from '@chakra-ui/icons'
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Box,
  Heading,
  SimpleGrid,
  Progress,
  Stack
} from '@chakra-ui/react';


function TodoList2({ todos, deleteTodo }) {
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

      spacing={3}
      align="stretch"
    >

//bagi 2 duls

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
          <HStack key={todo.id} align='stretch'>
            <VStack align='stretch' spacing={3}>
            
            <Heading as='h4' size='md'>{todo.body}</Heading>
            <Text fontSize='xs'>Membuat UI/UX design untuk website todo list app untuk hari kamis</Text>
            <Text></Text>
            <Heading as='h6' size='xs'>Progres</Heading>
            <Stack spacing={5}>
              <Progress colorScheme='orange' size='lg' value={20} />
            </Stack>
            <HStack>
            <CalendarIcon w={4} h={4} color='#FFBA00'/>
            <Text fontSize='xs' color='#FFBA00'>12 Oktober 2022</Text>
            </HStack>
            
            </VStack>
            
            <Spacer />
            <IconButton
              icon={<CheckIcon />}
              isRound="true"
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
          </VStack>
        ))}
  </VStack >

//bagi 2 duls
    </VStack>

  );
}

export default TodoList2;
