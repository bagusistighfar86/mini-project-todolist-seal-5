import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box, Button, Checkbox, IconButton, CheckboxGroup, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack,
} from '@chakra-ui/react';
import DeleteTaskConfirmation from './deleteTaskConfirmation';

function EditTask({ taskId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              >
                Edit Task
              </Button>
              <DeleteTaskConfirmation taskId={taskId} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditTask;
