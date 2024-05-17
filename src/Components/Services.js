import React from "react";
import { Heading, Box, List, ListItem, ListIcon, VStack } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons";

const Services = () => {
    return(
        <Box
            marginTop={-2}
            p={5}
            w="50vw"
            backgroundColor="black"
            borderBottomRadius="xl"
            boxShadow="xl"
        >   
            <VStack p={3}>
                <Heading pb={3} size="md" color="white">Tisse olarak sunduğumuz hizmetler: </Heading>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <Box
                        backgroundColor="black"
                        minWidth={60}
                    >
                        <List spacing={3}>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Makina Tasarımı
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Mekanizma Tasarımı
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Mekatronik ve Servo Motor Uygulamaları
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Enerji Tasarruf Uygulamaları
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                        minWidth={60}
                        backgroundColor="black"
                    >
                        <List spacing={3}>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Yazılım Geliştirme ve Otomasyon                            
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Fabrika Otomasyonu
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                ERP / MRP Entegrasyonu
                            </ListItem>
                            <ListItem color="white">
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                Pelet Üretim Hatları
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default Services;