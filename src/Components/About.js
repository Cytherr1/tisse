import React from "react";
import { Box, Heading, Text} from "@chakra-ui/react"
import { FormattedMessage } from "react-intl";
import Section from "./Section";
import { Fade } from "react-reveal";


const About = () => {
    return(
        <Section 
            id="about-section"
            bgPos="center"
        >   
            <Fade bottom>
                <Box
                    width={["85vw", "75vw"]}
                    minHeight="25vh"
                    color="black"
                    borderRadius="xl"
                    p={10}
                    boxShadow="dark-lg"
                    backgroundColor="#F6F1F1"
                >
                    <Heading py={3} size="xl" color="#146C94" ><FormattedMessage id="whoAreWe"/></Heading>
                    <Text fontSize="xl">
                        <FormattedMessage id="about" />
                    </Text>
                </Box>
            </Fade>
        </Section>
    );

}

export default About;