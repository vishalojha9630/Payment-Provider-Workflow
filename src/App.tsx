import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Workflow } from 'Workflow';

const App = () => {
  return (
    <ChakraProvider>
      <Workflow />
    </ChakraProvider>
  );
}

export default App;
