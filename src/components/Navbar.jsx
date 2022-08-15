import React, { useState, useEffect } from 'react';
import {
  Image, Button, Box, Spacer, Heading, VStack, HStack, Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,

} from '@chakra-ui/react';
import jwt from 'jwt-decode';
import LogoutConfirmation from './Modal/logoutConfirmation';

import logo from '../assets/logo-seal.png';

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
          <Popover>
            <PopoverTrigger>
              <Button bgColor="white"><Heading as="h6" size="sm">{name}</Heading></Button>
            </PopoverTrigger>
            <PopoverContent align="center" width="105px">
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
