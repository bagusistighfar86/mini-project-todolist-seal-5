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
            <CalendarIcon w={4} h={4} color='orange.500'/>
            <Text fontSize='xs' color='orange.500'>12 Oktober 2022</Text>
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
            <CalendarIcon w={4} h={4} color='orange.500'/>
            <Text fontSize='xs' color='orange.500'>12 Oktober 2022</Text>
            </HStack>
            </VStack>
            
            <Spacer />
            <IconButton
              icon={<CloseIcon />}
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
