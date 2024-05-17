import React, { useState } from "react";
import { 
    Box,
    VStack, 
    Heading,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
    HStack,
    Checkbox,
    Link,
    useDisclosure,
    Modal,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    useToast,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, TriangleDownIcon, InfoIcon } from "@chakra-ui/icons";
import Section from "./Section";
import Policy from "./Policy";
import * as Yup from "yup";
import { Fade } from "react-reveal";
import { useFormik } from "formik";
import { send } from "@emailjs/browser";
import { FormattedMessage } from "react-intl";

const Contact = (props) => {
    const [check, setCheck] = useState(false);
    const [load, setLoad] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const sendEmail = (object) => {
        setLoad(true);
        send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , object, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                setLoad(false);
                feedback("success");
                console.log(result.text);
            }, (error) => {
                setLoad(false);
                feedback("error");
                console.log(error.text)
            })
    }

    const toastMessages = {
        en: {
            fbTitleSuccess: "Success!",
            fbTitleError: "Oops!",
            fbDescSuccess: "We got your message.",
            fbDescError: "Something went wrong, please try again later."
        },
        tr: {
            fbTitleSuccess: "Başarılı!",
            fbTitleError: "Hay aksi!",
            fbDescSuccess: "Mesajınız bize ulaştı.",
            fbDescError: "Bir şeyler ters gitti, lütfen daha sonra tekrar deneyiniz."
        }
    }
    
    const feedback = (status) => {
        const messages = props.locale === "tr" ? toastMessages.tr : toastMessages.en
        toast({
            position: "top",
            title: (status === "success" ? messages.fbTitleSuccess : messages.fbTitleError),
            description: (status === "success" ? messages.fbDescSuccess : messages.fbDescError),
            status: status,
            duration: 7000,
            isClosable: true,
        })
    }

    const info = {
        adress: "Yeşilüzümlü Mh. 375/2 Sk. No:9 Fethiye Muğla",
        email: "info@tisse.net",
        tel: "+90 541 487 5978",
        mersis: "0845030259000017",
        kep: "tisse@hs01.kep.tr",
    }

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          comment: "",
        },
        onSubmit: (values) => {
            sendEmail(values);
            formik.resetForm();
            setCheck(false);
        },
        validationSchema: Yup.object({
          name: Yup.string().required(<FormattedMessage id="required" />),
          email: Yup.string().email(<FormattedMessage id="email-err" />).required(<FormattedMessage id="required" />),
          comment: Yup.string().min(25, <FormattedMessage id="comm" />).required(<FormattedMessage id="required" />),
        }),
        
    });

    return(
        <Section id="contact-section">
            <Box
                display="flex"
                flexWrap="wrap"
                gap={100}
                alignItems="center"
                justifyContent="space-around"
            >
                <Fade bottom>
                    <Box
                        width="30vw"
                        minW={350}
                        boxShadow="dark-lg"
                        backgroundColor="#F6F1F1"
                        borderRadius="xl"
                    >
                        <VStack p={5}>
                            <Heading p={5} color="#146C94"><FormattedMessage id="contact" /></Heading>
                            <Box
                                width={300}
                            >
                                <HStack p={5}>
                                    <TriangleDownIcon color="#146C94" />
                                    <Heading pl={2} size="md">{info.adress}</Heading>
                                </HStack>
                                <HStack p={5}>
                                    <EmailIcon color="#146C94" />
                                    <Heading pl={2} size="md">{info.email}</Heading>
                                </HStack>
                                <HStack p={5}>
                                    <PhoneIcon color="#146C94" />
                                    <Heading pl={2} size="md">{info.tel}</Heading>
                                </HStack>
                                <HStack p={5}>
                                    <InfoIcon color="#146C94" />
                                    <Heading pl={2} size="md">Mersis No: {info.mersis}</Heading>
                                </HStack>
                                <HStack p={5}>
                                    <InfoIcon color="#146C94" />
                                    <Heading pl={2} size="md">Kep: {info.kep}</Heading>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                </Fade>
                <Box
                    width="25vw"
                    minW={350}
                    p={30}
                    color="black"
                    borderRadius="xl"
                    boxShadow="dark-lg"
                    backgroundColor="#F6F1F1"
                >
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                            <FormLabel htmlFor="name"><FormattedMessage id="form-name" /></FormLabel>
                            <Input
                            id="name"
                            name="name"
                            {...formik.getFieldProps("name")}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                            id="email"
                            name="email"
                            type="email"
                            {...formik.getFieldProps("email")}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                            <FormLabel htmlFor="comment"><FormattedMessage id="form-com" /></FormLabel>
                            <Textarea
                            id="comment"
                            name="comment"
                            minHeight={200}
                            maxHeight={200}
                            {...formik.getFieldProps("comment")}
                            />
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>
                        <Checkbox onChange={(e) => setCheck(e.target.checked)} isChecked={check}>
                            {props.locale === "tr" && 
                            <Link onClick={onOpen} color="blue.500">
                                <FormattedMessage id="kvkk"/>
                            </Link>
                            }
                            <FormattedMessage id="read" />
                            {props.locale === "en" && 
                            <Link onClick={onOpen} color="blue.500">
                                <FormattedMessage id="kvkk"/>
                            </Link>
                            }
                        </Checkbox>
                        <Button type="submit" colorScheme="blue" width="full" isDisabled={!check} isLoading={load}>
                            <FormattedMessage id="form-button" />
                        </Button>
                        </VStack>
                    </form>
                </Box>
            </Box>
            <Box>
                <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader><FormattedMessage id="privacy-policy-title"/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Policy />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            <FormattedMessage id="modal-close" />
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Section>
    );
}

export default Contact;