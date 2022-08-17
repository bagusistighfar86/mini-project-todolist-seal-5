import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Login from './views/login';
import Register from './views/register';
import Token from './views/token';
import theme from './style/theme';
import PrivateRoutes from './utils/PrivateRoute';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Token />} path="token" />
          <Route path="/" element={<Dashboard />} />

        </Route>
      </Routes>
    </ChakraProvider>
  );
}
export default App;
