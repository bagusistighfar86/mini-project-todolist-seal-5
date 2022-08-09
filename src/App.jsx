import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'views/dashboard';
import TestModal from './views/modal';
import theme from './style/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="testModal" element={<TestModal />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
