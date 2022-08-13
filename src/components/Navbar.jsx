import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import LogoutConfirmation from './Modal/logoutConfirmation';

import logo from '../assets/logo-seal.png';
import {
  Image, Button, Box, Text, Spacer, Heading, VStack, HStack, Divider,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <VStack
      w="100%"
    >
      <Box w="97%" p={2}>
        <HStack>
          <Image src={logo} alt="Logo Seal" width="30" height="10" />
          <Spacer />
          <Heading as="h6" size="sm">Daffa Wijaya</Heading>
        </HStack>
      </Box>
      <Divider />
      <HStack w="96%">
        <Text />
        <Spacer />
        
        <LogoutConfirmation />
      </HStack>
    </VStack>

  );
}

export default Navbar;
