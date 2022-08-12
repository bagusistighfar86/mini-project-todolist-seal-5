import React, { useState } from 'react';
import {
  Image,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button,

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-seal.png';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify({ email, password }));
  };
  const emailError = email === '';
  const passwordError = password === '' || password.length < 8;

  return (
    <div>
      <VStack>
        <Image src={logo} alt="Logo Seal" w="336px" mt="165px" mb="97px" />
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={emailError} w="430px">
            <FormLabel color="#425466">E-mail</FormLabel>
            <Input focusBorderColor="#FFBA00" type="email" color="black" borderRadius="6px" boxShadow="0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)" value={email} onChange={handleEmailChange} />
            {/* {!emailError ? (
              <FormHelperText />
            ) : (
              <FormErrorMessage color="red">Email is required.</FormErrorMessage>
            )} */}
          </FormControl>

          <FormControl isInvalid={passwordError} mt="30px">
            <FormLabel color="#425466">Password</FormLabel>
            <Input focusBorderColor="#FFBA00" type="password" color="black" borderRadius="6px" boxShadow="0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)" value={password} onChange={handlePasswordChange} />
            {!passwordError ? (
              <FormHelperText />
            ) : (
              <FormErrorMessage color="#718096">Must be 8 characters at least</FormErrorMessage>
            )}
          </FormControl>

          <Button disabled={!email || !password || password.length < 8} mb="43px" mt="30px" type="submit" colorScheme="orange" color="white" w="full">Login</Button>

        </form>
        <Text color="#718096">
          Doesnt Have an account ?
          <Link to="/register">
            {' '}
            <Text as="span" color="#FFBA00">
              Register
            </Text>

          </Link>
        </Text>

      </VStack>

    </div>
  );
}

export default RegisterForm;
