import React, { useState, useEffect } from 'react';
import {
  Image, Box, Spacer, Heading, Text, VStack, HStack, StackDivider,
} from '@chakra-ui/react';
import jwt from 'jwt-decode';

function Navbar() {
  const [name, setName] = useState('');

  useEffect(() => {
    const user = jwt(`${localStorage.getItem('user')}`);
    setName(user.user.name);
  });
  return (
    <VStack
      divider={<StackDivider />}
      w="100%"
    >
      <Box w="97%" p={2}>
        <HStack>
          <Image src="logo-seal.png" width="30" height="10" />
          <Spacer />
          <Heading as="h6" size="sm">{name}</Heading>
        </HStack>

      </Box>
      <Text as="sup" />
    </VStack>

  );
}

export default Navbar;
