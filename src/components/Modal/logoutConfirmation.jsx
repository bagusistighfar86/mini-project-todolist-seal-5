import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box, Button, Center, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure,
} from '@chakra-ui/react';

function LogoutConfirmation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button leftIcon={<ArrowBackIcon />} onClick={onOpen} bg="ffffff" width="90px" height="25px" size="sm" color='red'>
            Logout
          </Button>

      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent position="relative" py={8} px={10}>
          <ModalCloseButton bg="#9d9d9d" color="text.white" borderRadius="50px" position="absolute" top="-10px" right="-10px" _hover={{ bg: '#9d9d9d' }} />
          <ModalBody>
            <Heading color="black" fontWeight="700" mb={6} textAlign="center">Logging Out</Heading>
            <Text color="black" fontWeight="500" mb={10} textAlign="center" fontSize="2xl">Are you sure want to log out?</Text>
            <Flex gap={3} w="100%">
              <Button
                w="full"
                bg="button.secondary"
                color="black"
                variant="solid"
                _hover={{
                  bg: 'button.secondaryHover',
                }}
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
              >
                Logout
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default LogoutConfirmation;
