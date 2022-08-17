import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';

function DeleteTaskConfirmation({ taskId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = JSON.parse(localStorage.getItem('user'));
  const deleteTask = async () => {
    await axios.delete(`task/${taskId}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then(() => {
      onClose();
    });
  };

  return (

    <Box>
      <Button
        variant="outline"
        color="border.red"
        borderColor="border.red"
        _hover={{
          color: 'text.white',
          bg: 'button.red',
        }}
        onClick={onOpen}
      >
        <DeleteIcon />
      </Button>

      <Modal closeOnOverlayClick={false} blockScrollOnMount={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent position="relative" py={8} px={10}>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <Heading color="black" fontWeight="700" mb={6} textAlign="center">Delete</Heading>
            <Text color="black" fontWeight="500" mb={10} textAlign="center" fontSize="2xl">Are you sure want to delete?</Text>
            <Flex gap={3} w="100%">
              <Button
                w="full"
                bg="button.secondary"
                color="black"
                variant="solid"
                _hover={{
                  bg: 'button.secondaryHover',
                }}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                w="full"
                bg="button.primary"
                color="text.white"
                variant="solid"
                _hover={{
                  bg: 'button.primaryHover',
                }}
                onClick={deleteTask}
              >
                Delete
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default DeleteTaskConfirmation;
