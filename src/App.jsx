import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'views/dashboard';
import TestModal from './views/modal';
import Login from './views/login';
import Register from './views/register';
import theme from './style/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="testModal" element={<TestModal />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
