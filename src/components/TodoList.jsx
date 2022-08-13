import React from 'react';
import EditTask from './Modal/editTask';
import { CheckIcon, EditIcon, CalendarIcon } from '@chakra-ui/icons';
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
  Stack,
} from '@chakra-ui/react';

function TodoList({ todos, addTodo }) {
  if (!todos.length) {
    return (
      <VStack spacing={140}>
        <Box />

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
        align="stretch"
      >

          <VStack
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            alignItems="stretch"
          >
            <HStack align="stretch">
              <VStack align="stretch" spacing={3}>

                <Heading as="h4" size="md">Membuat UI/UX Design untuk SEAL</Heading>
                <Text fontSize="xs">Membuat UI/UX design untuk website todo list app untuk hari kamis</Text>
                <Text />
                <Heading as="h6" size="xs">Progres</Heading>
                <Stack spacing={5}>
                  <Progress colorScheme="schemeYellow" size="lg" value={20} />
                </Stack>
                <HStack>
                  <CalendarIcon w={4} h={4} color="#FFBA00" />
                  <Text fontSize="xs" color="#FFBA00">12 Oktober 2022</Text>
                </HStack>

              </VStack>
              <Spacer />
              <VStack>
                <IconButton
                icon={<CheckIcon />}
                isRound="true"
                onClick={() => addTodo(todo)}
              />
              <Spacer/>
              <EditTask/>
              </VStack>
              
            </HStack>
          </VStack>
      </VStack>

      //bagi 2 duls
    </VStack>

  );
}

export default TodoList;
