import React, { useEffect } from 'react';
import {
  Image, Button, Box, Spacer, Heading, VStack, HStack, Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,

} from '@chakra-ui/react';
import jwt from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'reducer/userReducer';
import logo from '../assets/logo-seal.png';
import LogoutConfirmation from './Modal/logoutConfirmation';

function Navbar() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const newToken = jwt(`${localStorage.getItem('user')}`);
    dispatch(setToken(newToken));
  }, []);

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
              <Button bgColor="white"><Heading as="h6" size="sm">{token?.user?.name}</Heading></Button>
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
