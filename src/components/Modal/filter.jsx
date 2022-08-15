import React from 'react';
import {
  Box, Button, Flex, FormControl, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from '@chakra-ui/react';

function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button bg="white" variant="outline" size="sm" type="submit" onClick={onOpen}>
        Filter
      </Button>

      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent position="relative" py={3} px={1}>
          <ModalHeader color="text.secondary">Filter</ModalHeader>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <Heading mb={6}>Tanggal</Heading>
            <FormControl color="text.secondary">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
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
                Save
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Filter;
