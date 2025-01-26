"use client";
import { useEffect, useState} from "react";
import { 
  ChakraProvider, 
  ColorModeScript, 
  Spinner, 
  Flex,
  useColorModeValue 
} from "@chakra-ui/react";
import theme from "./theme";

export default function ChakraWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return (
       
    
         
      <Flex className="loading"
        justify="center" 
        align="center" 
        height="100vh" 
        
        
      > 
        <Spinner 
          thickness='4px' 
          speed='0.65s' 
         
      
          w={'200px'}
          h={'200px'}
        />
      </Flex>
     
    );
  }

  return (
    <ChakraProvider theme={theme}>
       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}