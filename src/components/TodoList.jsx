import React, { useEffect } from 'react';
import { CheckIcon, CalendarIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  Spacer,
  // Box,
  Heading,
  Progress,
  Stack,
} from '@chakra-ui/react';
import EditTask from './Modal/editTask';

function TodoList({ fetchTask, tasks }) {
  useEffect(() => {
    fetchTask();
  }, []);

  if (tasks === null) {
    return 'Loading...';
  }
  if (tasks.length < 1) {
    return (
      <Text>Koshongg</Text>
    );
  }
  if (tasks.length > 0) {
    return (
      tasks.map((task) => {
        console.log(task);
        return (
          <div key={task.id}>
            <VStack
              spacing={3}
              align="stretch"
            >
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

                      <Heading as="h4" size="md">{task.name}</Heading>
                      <Text fontSize="xs">{task.desc}</Text>
                      <Text />
                      <Heading as="h6" size="xs">Progres</Heading>
                      <Stack spacing={5}>
                        <Progress colorScheme="schemeYellow" size="lg" value={20} />
                      </Stack>
                      <HStack>
                        <CalendarIcon w={4} h={4} color="#FFBA00" />
                        <Text fontSize="xs" color="#FFBA00">{task.due_date}</Text>
                      </HStack>

                    </VStack>
                    <Spacer />
                    <VStack>
                      <IconButton
                        icon={<CheckIcon />}
                        isRound="true"
                      />
                      <Spacer />
                      <EditTask />
                    </VStack>

                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </div>
        );
      })

    );
  }
}

export default TodoList;
