import React, { useState, useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import {
  useToast, Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, HStack, Spacer, Heading, Checkbox,
} from '@chakra-ui/react';
import { setRefresh } from 'reducer/userReducer';
import { useDispatch } from 'react-redux';

function CreateTask() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [due, setDue] = useState('');
  const [isStep, setIsStep] = useState(false);
  const [step, setStep] = useState([]);
  const [stepIdx, setStepIdx] = useState(null);
  const [checked, setChecked] = useState([]);
  const [input, setInput] = useState('');

  const token = JSON.parse(localStorage.getItem('user'));

  const handleCloseModal = () => {
    setIsStep(false);
    setStep([]);
    setChecked([]);
    setInput('');
    onClose();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleDueChange = (e) => {
    setDue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      desc,
      due_date: due,
    };

    const subData = {
      name,
      desc,
      due_date: due,
      taskId: 5,
      // subtasks:
    };

    const postTask = await axios.post('task', data, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    const postSubtask = await axios.put('subtask', subData, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    axios.all([postTask, postSubtask])
      .then(() => {
        dispatch(setRefresh(true));
        onClose();
        toast({
          title: 'List created',
          duration: 3000,
          status: 'success',
          isClosable: true,
        });
        setName('');
        setDesc('');
        setDue('');
      }).catch((err) => {
        console.log(err);
        toast({
          title: 'List failed to create',
          duration: 3000,
          status: 'error',
          isClosable: true,
        });
      });
  };

  const handleChangeCheckbox = (stepList) => {
    console.log(stepList);
    setChecked((prev) => {
      if (prev.includes(stepList.id)) {
        return prev.filter((item) => item.id !== stepList.id);
      }
      return [...prev, stepList];
    });
  };

  const handleAddStep = (e) => {
    e.preventDefault();
    if (stepIdx === null) {
      const newStep = [{
        id: 0,
        name: input,
        status: false,
      }];
      setStep([newStep]);
      console.log(newStep);
      setStepIdx(0);
      setIsStep(true);
    } else if (stepIdx === 0) {
      const step0 = {
        id: 0,
        name: input,
        status: false,
      };
      setStep([step0]);
      setStepIdx(stepIdx + 1);
      setInput('');
    } else {
      const newStep = {
        id: step.length,
        name: input,
        status: false,
      };
      console.log(newStep);
      setStep((prev) => [...prev, newStep]);
      setStepIdx(stepIdx + 1);
    }
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  console.log(input);
  useEffect(() => {
    console.log(step);
  }, [step]);
  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (

    <Box>
      <Button
        rightIcon={<AddIcon />}
        colorScheme="orange"
        bg="#FFBA00"
        size="sm"
        type="submit"
        onClick={onOpen}
        _hover={{
          bg: 'button.primaryHover',
        }}
      >
        Create
      </Button>

      <Modal closeOnOverlayClick={false} onClose={handleCloseModal} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent position="relative" py={3} px={1}>
          <ModalHeader color="text.secondary">Create Task</ModalHeader>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <form>
              <FormControl color="text.secondary" my={3}>
                <FormLabel>Nama</FormLabel>
                <Input type="text" value={name} onChange={handleNameChange} />
              </FormControl>
              <FormControl color="text.secondary" my={3}>
                <FormLabel>Deskripsi</FormLabel>
                <Input type="text" value={desc} onChange={handleDescChange} />
              </FormControl>
              <FormControl color="text.secondary" my={3}>
                <FormLabel>Tanggal & Waktu</FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={due}
                  onChange={handleDueChange}
                />
              </FormControl>
              {!isStep
                ? (
                  <Button
                    my={3}
                    color="text.primary"
                    variant="solid"
                    onClick={handleAddStep}
                  >
                    Create Step Task
                  </Button>
                )
                : (
                  <Box>
                    <HStack>
                      <Heading color="text.yellow" fontSize="xl">Task Step</Heading>
                      <Spacer />
                      <Button
                        color="text.yellow"
                        fontSize="3xl"
                        variant="link"
                        _hover={{
                          cursor: 'pointer',
                        }}
                        onClick={handleAddStep}
                      >
                        +
                      </Button>
                    </HStack>
                    {step.map((item) => (
                      <HStack key={item.id}>
                        <Checkbox
                          size="md"
                          onChange={() => handleChangeCheckbox(item)}
                          value={step.id}
                          bg={
                            checked.includes(item.option)
                              ? 'text.yellow'
                              : '#F2F2F2F2'
                            }
                        />
                        <Input
                          variant="flushed"
                          value={step[stepIdx]?.name}
                          onChange={handleChangeInput}
                        >
                          {step[stepIdx]?.name}
                        </Input>
                      </HStack>
                    ))}

                  </Box>
                )}
            </form>
          </ModalBody>
          <ModalFooter>
            <Flex gap={3} w="100%">
              <Button
                w="full"
                bg="button.primary"
                color="text.white"
                variant="solid"
                onClick={handleSubmit}
                disabled={!name || !desc || !due}
                _hover={{
                  bg: 'button.primaryHover',
                }}
              >
                Create Task
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CreateTask;
