import React from 'react';
import { Box } from '@chakra-ui/react';
import EditTask from 'components/Modal/editTask';
import CreateTask from 'components/Modal/createTask';

function TestModal() {
  return (
    <Box>
      <EditTask />
      <CreateTask />
    </Box>
  );
}

export default TestModal;
