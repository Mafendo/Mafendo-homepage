"use client";
import { extendTheme ,useColorModeValue,} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Custom breakpoints for responsiveness
const breakpoints = {
  sm: "30em",  // 480px
  md: "48em",  // 768px
  lg: "62em",  // 992px
  xl: "80em",  // 1280px
  "2xl": "96em" // 1536px
};

// Chakra UI config options
const config = {
  initialColorMode: 'dark',  // Default color mode
  useSystemColorMode: false,   // Allow system color mode
};

// Custom color palette
const colors = {
  brand: {
  
    // ... other colors
  },
  beige: {
    100: "#f5f5dc",
    200: "#f5f5dc",
    300: "#f5f5dc",
    400: "#f5f5dc",
    500: "#f5f5dc",
    600: "#f5f5dc",
    700: "#f5f5dc",
    800: "#f5f5dc",
    900: "#f5f5dc",
  },
  violet: {
    100: "#e0bbff",
    200: "#d1a3ff",
    300: "#c28bff",
    400: "#b373ff",
    500: "#a45bff",
    600: "#9443ff",
    700: "#832bff",
    800: "#7313ff",
    900: "#6200ff",
  },
  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
};

// Extend the default Chakra UI theme with custom configuration and colors
const theme = extendTheme({
  config,
  breakpoints,
  colors,
  styles: {
    
    global: () => ({
      body: {
        bg: useColorModeValue('#f0e7db', '#202023'),
          body: "'Open Sans', sans-serif"
         
      },
      
    }),
  },
});

export default theme;