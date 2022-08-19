import React, { useState } from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box, Button, Checkbox, IconButton, CheckboxGroup, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack, useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRefresh } from 'reducer/userReducer';
import DeleteTaskConfirmation from './deleteTaskConfirmation';

function EditTask({ task }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(task.name);
  const [desc, setDesc] = useState(task.desc);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(task.status);
  const [due, setDue] = useState(task.due_date.slice(0, task.due_date.length - 8));
  const token = JSON.parse(localStorage.getItem('user'));

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleDueChange = (e) => {
    console.log(e.target.value);
    setDue(e.target.value);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      desc,
      status,
      due_date: due,
    };

    await axios.put(`task/${task.id}`, data, {
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then(() => {
      dispatch(setRefresh(true));
      onClose();
      toast({
        title: 'List has been edited',
        duration: 3000,
        status: 'success',
        isClosable: true,
      });
      setName('');
      setDesc('');
      setDue('');
    }).catch(() => {
      toast({
        title: 'List has been failed to edit',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    });
  };

  return (
    <Box>
      <IconButton
        onClick={onOpen}
        icon={<EditIcon w={4} h={4} />}
        isRound="true"
        bg="white"
        h={7}
      />

      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent py={3} px={1}>
          <ModalHeader color="text.secondary">Edit Task</ModalHeader>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <FormControl color="text.secondary">
              <FormLabel>Nama</FormLabel>
              <Input
                type="text"
                defaultValue={task.name}
                onChange={handleNameChange}
              />
            </FormControl>
            <FormControl color="text.secondary">
              <FormLabel>Deskripsi</FormLabel>
              <Input
                type="text"
                defaultValue={task.desc}
                onChange={handleDescChange}
              />
            </FormControl>
            <FormControl color="text.secondary">
              <FormLabel>Tanggal & Waktu</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                defaultValue={task.due_date.slice(0, task.due_date.length - 8)}
                onChange={handleDueChange}
              />
            </FormControl>
            <Heading size="md" color="text.yellow" my={5}>+ Next Step</Heading>
            <VStack spacing={5}>
              <CheckboxGroup size="md" colorScheme="schemeYellow">
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox value="1">Tugas 1</Checkbox>
                  <DeleteIcon
                    fontSize="xl"
                    color="text.transparent"
                    _hover={{
                      color: 'text.red',
                      cursor: 'pointer',
                    }}
                  />
                </Flex>
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox value="2">Tugas 2</Checkbox>
                  <DeleteIcon
                    fontSize="xl"
                    color="text.transparent"
                    _hover={{
                      color: 'text.red',
                      cursor: 'pointer',
                    }}
                  />
                </Flex>
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox value="3">Tugas 3</Checkbox>
                  <DeleteIcon
                    fontSize="xl"
                    color="text.transparent"
                    _hover={{
                      color: 'text.red',
                      cursor: 'pointer',
                    }}
                  />
                </Flex>
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox value="4">Tugas 4</Checkbox>
                  <DeleteIcon
                    fontSize="xl"
                    color="text.transparent"
                    _hover={{
                      color: 'text.red',
                      cursor: 'pointer',
                    }}
                  />
                </Flex>
              </CheckboxGroup>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Flex gap={3} w="100%">
              <Button
                w="full"
                bg="button.primary"
                color="text.white"
                variant="solid"
                _hover={{
                  bg: 'button.primaryHover',
                }}
                onClick={handleEdit}
              >
                Edit Task
              </Button>
              <DeleteTaskConfirmation taskId={task.id} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditTask;
