import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Box bg="white">
      <Box mx="auto" maxW="430px" minH="100vh">
        <LoginForm />
      </Box>
    </Box>
  );
}

export default Login;
