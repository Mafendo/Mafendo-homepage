
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChakraWrapper from "./ChakraWrapper";
import theme from "./theme";
import { use } from "react";
import { ChakraProvider, ColorModeScript,useColorModeValue } from "@chakra-ui/react";
import './globals.css';


export default function RootLayout({ children }) {
 
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />


      </head>
      <body suppressHydrationWarning>
        
        <ChakraWrapper>
          <Navbar />
         
          <main>{children}</main>

          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
