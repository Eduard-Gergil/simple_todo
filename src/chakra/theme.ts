import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(45deg, #a8edea, #fed6e3)",
        color: "black",
      },
      "*:before, *:after": {
        boxSizing: "border-box",
      },
    },
  },
});

export default theme;
