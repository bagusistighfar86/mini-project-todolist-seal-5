import React from 'react';
import {
  Image, Box, Spacer, Heading, Text, VStack, HStack, StackDivider,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <VStack
      divider={<StackDivider />}
      w="100%"
    >
      <Box w="97%" p={2}>
        <HStack>
          <Image src="logo-seal.png" width="30" height="10" />
          <Spacer />
          <Heading as="h6" size="sm">Daffa Wijaya</Heading>
        </HStack>

      </Box>
      <Text as="sup" />
    </VStack>

  );
}

export default Navbar;
