import React, { useState } from 'react';
import {
  useToast,
  Image,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Text,
  Button,

} from '@chakra-ui/react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-seal.png';

function RegisterForm() {
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.value = !checkbox);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      email,
      password,
    };

    await axios.post('user/register/', data).then(
      () => {
        toast({
          title: 'Account created.',
          description: 'User Created',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
        setName('');
        setEmail('');
        setPassword('');
      },
    ).catch((err) => {
      console.log(err);
      setIsLoading(false);
      toast({
        title: 'Email has been taken',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const nameError = name === '';
  const emailError = email === '';
  const passwordError = password === '' || password.length < 8;

  return (
    <div>
      <VStack>
        <Image src={logo} alt="Logo Seal" w="336px" mt="165px" mb="97px" />
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={nameError}>
            <FormLabel color="#425466">Your name</FormLabel>
            <Input focusBorderColor="#FFBA00" type="text" color="black" borderRadius="6px" boxShadow="0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)" value={name} onChange={handleNameChange} />
            {/* {!nameError ? (
              <FormHelperText />
            ) : (
              <FormErrorMessage color="red">Name is required.</FormErrorMessage>
            )} */}
          </FormControl>

          <FormControl isInvalid={emailError} my="30px">
            <FormLabel color="#425466">E-mail</FormLabel>
            <Input focusBorderColor="#FFBA00" type="email" color="black" borderRadius="6px" boxShadow="0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)" value={email} onChange={handleEmailChange} />
            {/* {!emailError ? (
              <FormHelperText />
            ) : (
              <FormErrorMessage color="red">Email is required.</FormErrorMessage>
            )} */}
          </FormControl>
          <FormControl isInvalid={passwordError}>
            <FormLabel color="#425466">Password</FormLabel>
            <Input focusBorderColor="#FFBA00" type="password" color="black" borderRadius="6px" boxShadow="0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)" value={password} onChange={handlePasswordChange} />
            {!passwordError ? (
              <FormHelperText />
            ) : (
              <FormErrorMessage color="#718096">Must be 8 characters at least</FormErrorMessage>
            )}
          </FormControl>
          <Checkbox mb="30px" mt="5px" colorScheme="orange" value={checkbox} onChange={handleCheckboxChange} color="#425466">
            <Text mt="20px">
              By creating an account means you agree to the
              {' '}
              <Text as="span" fontWeight="700">
                {' '}
                Terms and Conditions,
                {' '}
              </Text>
              and our
              {' '}
              <Text as="span" fontWeight="700">
                Privacy Policy
              </Text>
            </Text>
          </Checkbox>

          <Button
            isLoading={isLoading}
            disabled={!name || !email || !password || password.length < 8 || !checkbox}
            type="submit"
            colorScheme="schemeYellow"
            color="white"
            w="full"
          >
            Register

          </Button>

        </form>
        <Text color="#718096" pt="6">
          Already have an account?
          <Link to="/login">
            {' '}
            <Text as="span" color="#FFBA00">
              Login here
            </Text>

          </Link>

        </Text>
      </VStack>

    </div>
  );
}

export default RegisterForm;
