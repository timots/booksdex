import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ChakraProvider, Box } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box
      bgGradient='linear(to-r, gray.300, gray.600, gray.400)'
      // width='100vw'
      maxWidth='2500px'
      justifyContent='center'
      alignItems='center'
      // marginX='auto'
      minHeight='100vh'
      >
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
