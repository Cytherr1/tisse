import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
    return (
      <Box backgroundColor="#F6F1F1">
        <footer>
          <Flex
            pt="2vh"
            color="black"
            justifyContent="center"
            alignItems="center"
            height="10vh"
          >
            <p><FormattedMessage id="footer" /> 2024 © | tisse</p>
          </Flex>
        </footer>
      </Box>
    );
};

export default Footer;