import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card';
import {Footer} from './components/Footer';
 
function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Card />
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
