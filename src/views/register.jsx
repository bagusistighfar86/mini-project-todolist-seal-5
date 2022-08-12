import { Box } from '@chakra-ui/react';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <Box bg="white">
      <Box mx="auto" maxW="430px" minH="100vh">
        <RegisterForm />
      </Box>
    </Box>
  );
}

export default Register;
