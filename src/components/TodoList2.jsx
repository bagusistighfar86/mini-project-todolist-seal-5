import React, { useEffect, useState } from 'react';
import { CalendarIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Text,
  Spacer,
  Heading,
  Progress,
} from '@chakra-ui/react';
import dateFormat, { masks } from 'dateformat';
import DeleteTaskConfirmation from './Modal/deleteTaskConfirmation';

function TodoList2({ fetchTask, tasks }) {
  masks.formatDate = 'ddd, d mmmm yyyy ';

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState('');
  useEffect(() => {
    fetchTask();
    setToken(JSON.parse(localStorage.getItem('user')));
  }, []);

  if (tasks !== null) {
    return (
      tasks.map((task) => {
        if (task.status === true) {
          return (
            <VStack
              key={task.id}
              w="100%"
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
                    <VStack align="stretch" w="100%" spacing={3}>

                      <Heading as="h4" size="md">{task.name}</Heading>
                      <Text fontSize="xs">{task.desc}</Text>
                      <Text />
                      <Heading as="h6" size="xs">Progres</Heading>
                      <Progress
                        colorScheme="schemeYellow"
                        size="lg"
                        w="100%"
                        value={20}
                      />
                      <HStack>
                        <CalendarIcon w={4} h={4} color="#FFBA00" />
                        <Text fontSize="xs" color="#FFBA00">{dateFormat(task.due_date, 'formatDate')}</Text>
                      </HStack>

                    </VStack>
                    <Spacer />

                    <DeleteTaskConfirmation taskId={task.id} />
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          );
        }
        return null;
      })
    );
  }
}

export default TodoList2;
