import React, { useState, useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';
import jwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Token() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleLogout = () => {
    // localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const user = jwt(`${localStorage.getItem('user')}`);
    setName(user.user.name);
  }, []);
  return (
    <div>
      <Text>
        {name}
      </Text>

      <Button onClick={handleLogout}>
        LOJOT
      </Button>
    </div>
  );
}

export default Token;
