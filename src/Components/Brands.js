import React from "react";
import { Heading, Box, List, ListItem, ListIcon, VStack, Image } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons";
import ControlledCarousel from "./ControlledCarousel";
import Section from "./Section";
import { Fade } from "react-reveal";
import { FormattedMessage } from "react-intl";

const firmLogo = () => require("../images/tisse-logo.png")

const brands = [
    {
        title: "Hayal Tepe",
        link: "http://hayaltepe.com/",
        imageSrc : () => require("../images/hayaltepe-logo.jpeg"),
    },
    {
        title: "Salta",
        link: "http://saltaboatsandyachts.com",
        imageSrc : () => require("../images/salta-logo.jpg"),
    },
    {
        title: "Sapa",
        link: "http://sapacampertrailers.com",
        imageSrc : () => require("../images/sapa-logo.jpg"),
    },
];

const Brands = () => {
    return(
        <Section
            id="brands-section"
            marginTop={50}
        >
            <ControlledCarousel brands={brands}/>
            <Box
                marginTop={-10}
                width="99vw"
                height={100}
                backgroundColor="black"
            >
            </Box>
                <Fade bottom>
                    <Box
                        width={["85vw", "75vw"]}
                        minHeight="50vh"
                        color="black"
                        borderRadius="xl"
                        boxShadow="dark-lg"
                        backgroundColor="#F6F1F1"
                        marginTop={8}
                    > 
                        <VStack p={3}>
                            <Box
                                p={5}
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="center"
                                gap={2}
                            >
                                <Image w={150} h={50} src={firmLogo()} />
                                <Heading p={3} size="100vw" color="black"><FormattedMessage id="services"/></Heading>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={5}
                                flexWrap="wrap"
                            >
                                <Box
                                    backgroundColor="#F6F1F1"
                                    minWidth={60}
                                >
                                    <List fontSize={[20, 25]} spacing={3}>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service1" />
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service2" />
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service3" />
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service4" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box
                                    minWidth={60}
                                    backgroundColor="#F6F1F1"
                                >
                                    <List fontSize={[20, 25]} spacing={3}>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service5" />                
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service6" />
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service7" />
                                        </ListItem>
                                        <ListItem color="black">
                                            <ListIcon as={CheckCircleIcon} color="green.500"/>
                                            <FormattedMessage id="service8" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </VStack>
                    </Box>
                </Fade>
        </Section>
    );
}

export default Brands;