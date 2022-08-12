import React from 'react';
import { Box } from '@chakra-ui/react';
import EditTask from 'components/Modal/editTask';
import CreateTask from 'components/Modal/createTask';
import LogoutConfirmation from 'components/Modal/logoutConfirmation';
import DeleteTaskConfirmation from 'components/Modal/deleteTaskConfirmation';
import Filter from '../components/Modal/filter';

function TestModal() {
  return (
    <Box>
      <EditTask />
      <CreateTask />
      <LogoutConfirmation />
      <DeleteTaskConfirmation />
      <Filter />
    </Box>
  );
}

export default TestModal;
