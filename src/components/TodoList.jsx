/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CheckIcon, CalendarIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  Spacer,
  Heading,
  Progress,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import dateFormat, { masks } from 'dateformat';

import EditTask from './Modal/editTask';

function TodoList({ fetchTask, tasks }) {
  const toast = useToast();

  const [token, setToken] = useState('');
  useEffect(() => {
    fetchTask();
    setToken(JSON.parse(localStorage.getItem('user')));
  }, []);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState(false);
  const [due, setDue] = useState('');
  const [taskId, setTaskId] = useState(0);
  const [readyDone, setReadyDone] = useState(false);

  const handleDone = () => {
    axios.put(
      `task/${taskId}`,
      {
        name,
        desc,
        status,
        due,
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      },
    ).then(() => {
      toast({
        title: 'List has been edited',
        duration: 3000,
        status: 'success',
        isClosable: true,
      });
      setReadyDone(false);
    }).catch(() => {
      toast({
        title: 'List has been failed to edit',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    });
  };

  const putDone = (task) => {
    setName(task.name);
    setDesc(task.desc);
    setStatus(true);
    setDue(task.due_date);
    setTaskId(task.id);
    setReadyDone(true);
  };

  useEffect(() => {
    if (readyDone) {
      handleDone();
    }
  }, [readyDone]);

  masks.formatDate = 'ddd, d mmmm yyyy ';

  if (tasks !== null) {
    return (
      tasks.map((task) => {
        if (task.status === false) {
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
                    <VStack>
                      <IconButton
                        icon={<CheckIcon />}
                        isRound="true"
                        onClick={() => putDone(task)}
                      />
                      <Spacer />
                      <EditTask task={task} />
                    </VStack>

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

export default TodoList;
