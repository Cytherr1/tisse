import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Box, Heading, Image, Button, VStack } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
            <Box
                width="99vw"
                minHeight="30vh"
                color="black"
                backgroundColor="white"
                justifyContent="center"
                display="flex"
                p={5}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <VStack alignItems="flex-start" justifyContent="center" height={350}>
                  <Heading py={2} width={["85vw", "50vw"]} size="xl" color="#146C94"><FormattedMessage id="hayal-desc1"/>,</Heading>
                  <Heading py={2} width={["85vw", "50vw"]} size="md"><FormattedMessage id="hayal-desc2"/></Heading>
                  <Button as="a" href={props.brands[0].link}><FormattedMessage id="car-button"/></Button>
                </VStack>
                <Image p={2} boxSize={300} src={props.brands[0].imageSrc()} />
              </Box>
            </Box>
      </Carousel.Item>
      <Carousel.Item>
            <Box
                width="99vw"
                minHeight="30vh"
                color="black"
                backgroundColor="white"
                justifyContent="center"
                display="flex"
                p={5}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <VStack alignItems="flex-start" justifyContent="center" height={350}>
                  <Heading py={2} width={["85vw", "50vw"]} size="xl" color="#146C94"><FormattedMessage id="salta-desc1"/>,</Heading>
                  <Heading py={2} width={["85vw", "50vw"]} size="md"><FormattedMessage id="salta-desc2"/></Heading>
                  <Button as="a" href={props.brands[1].link}><FormattedMessage id="car-button"/></Button>
                </VStack>
                <Image p={2} boxSize={300} src={props.brands[1].imageSrc()} />
              </Box>
            </Box>
      </Carousel.Item>
      <Carousel.Item>
            <Box
                width="99vw"
                minHeight="30vh"
                color="black"
                backgroundColor="white"
                justifyContent="center"
                display="flex"
                p={5}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <VStack alignItems="flex-start" justifyContent="center" height={350}>
                  <Heading py={2} width={["85vw", "50vw"]} size="xl" color="#146C94"><FormattedMessage id="sapa-desc1"/>,</Heading>
                  <Heading py={2} width={["85vw", "50vw"]} size="md"><FormattedMessage id="sapa-desc2"/></Heading>
                  <Button as="a" href={props.brands[2].link}><FormattedMessage id="car-button"/></Button>
                </VStack>
                <Image p={2} boxSize={300} src={props.brands[2].imageSrc()} />
              </Box>
            </Box>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;