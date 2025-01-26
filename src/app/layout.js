
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChakraWrapper from "./ChakraWrapper";
import theme from "./theme";
import { use } from "react";
import { ChakraProvider, ColorModeScript,useColorModeValue } from "@chakra-ui/react";



export default function RootLayout({ children }) {
 
  return (
    <html lang="sv" suppressHydrationWarning>
      <head></head>
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
