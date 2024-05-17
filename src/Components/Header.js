import React, {useEffect, useRef} from "react";
import {Box, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const Header = (props) => {
    const logoSrc = () => require("../images/tisse-logo.png");

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      const headRef = useRef();
      let prevPos = window.scrollY;
      const handleScroll = () => {
        const boxElement = headRef.current;
        if (window.scrollY > prevPos) {
          boxElement.style.transform = "translateY(-100%)"
        } else {
          boxElement.style.transform = "translateY(0)";
        }
        prevPos = window.scrollY
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [prevPos]);

    return(
        <Box
            ref={headRef}
            position="fixed"
            zIndex={10}
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#F6F1F1"
            shadow="md"
        >
            <Box color="#000000" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={6}
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <nav>
                        <HStack pl={8} pb={2}>
                            <Image w={202} h={57} src={logoSrc()} alt="tisse-logo" />
                        </HStack>
                    </nav>
                    <nav display="flex" justifyContent="space-evenly">
                        <HStack spacing={[4, 8]}>
                            <a href="./#brands" onClick={handleClick("brands")}><FormattedMessage id="header-brands"/></a>
                            <a href="./#about" onClick={handleClick("about")}><FormattedMessage id="header-about"/></a>
                            <a href="./#contact" onClick={handleClick("contact")}><FormattedMessage id="header-contact"/></a>
                            <VStack><Text marginBottom={-1}>TR/EN</Text>{props.sw}</VStack>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;