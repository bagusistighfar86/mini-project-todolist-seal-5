import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import {
  Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from '@chakra-ui/react';

function CreateTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent position="relative" py={3} px={1}>
          <ModalHeader color="text.secondary">Create Task</ModalHeader>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <FormControl color="text.secondary">
              <FormLabel>Nama</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl color="text.secondary">
              <FormLabel>Deskripsi</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl color="text.secondary">
              <FormLabel>Tanggal & Waktu</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </FormControl>
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
