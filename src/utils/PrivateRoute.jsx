import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
  const auth = { token: !!localStorage.getItem('user') };
  return (
    auth.token ? <Outlet /> : <Navigate to="login" />
  );
}
export default PrivateRoutes;
