import { ChakraProvider, Input, Box, Center, Button, } from '@chakra-ui/react';
import { login } from './services/login';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder='email' marginTop='10px'/>
            <Input placeholder='password' marginTop='10px'/>
            <Center>
              <Button onClick={ login } colorScheme='teal' size='sm' width='100%' marginTop='10px'>Sign In</Button>
            </Center>
          </Box>
      </Box>
    </ChakraProvider>
    
  );
};

export default App;
