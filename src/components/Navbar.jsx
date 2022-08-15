<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
>>>>>>> main
import {
  Image, Button, Box, Text, Spacer, Heading, VStack, HStack, Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
<<<<<<< HEAD
import jwt from 'jwt-decode';
=======
import LogoutConfirmation from './Modal/logoutConfirmation';

import logo from '../assets/logo-seal.png';
>>>>>>> main

function Navbar() {
  const [name, setName] = useState('');

  useEffect(() => {
    const user = jwt(`${localStorage.getItem('user')}`);
    setName(user.user.name);
  });
  return (
    <VStack
      w="100%"
    >
      <Box w="97%" p={2}>
        <HStack>
          <Image src={logo} alt="Logo Seal" width="30" height="10" />
          <Spacer />
<<<<<<< HEAD
          <Heading as="h6" size="sm">{name}</Heading>
        </HStack>
=======
          <Popover>
            <PopoverTrigger>
              <Button bgColor="white"><Heading as="h6" size="sm">Daffa Wijaya</Heading></Button>
            </PopoverTrigger>
            <PopoverContent align="center" width="105px">
>>>>>>> main

              <PopoverBody p={0}>
                <LogoutConfirmation />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Box>
      <Divider />
    </VStack>

  );
}

export default Navbar;
