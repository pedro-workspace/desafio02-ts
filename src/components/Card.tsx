import { Input, Box, Center, Text } from '@chakra-ui/react';
import { login } from '../services/login';
import { Button } from './Button';

export const Card = () => {
  const handleLogin = () => {
    login();
  };

  return (
    <Box margin={'auto'} width={300} backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <Text fontSize='xl' fontWeight='bold'>Faça o login</Text>
      </Center>
      <Box marginTop='20px'>
        <Input placeholder="email" marginBottom='10px' />
        <Input placeholder="password" type='password' marginBottom='15px' />
        <Button onClick={handleLogin}>
          Entrar
        </Button>
      </Box>
    </Box>
  );
};