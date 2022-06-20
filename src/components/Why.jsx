import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";

import React from "react";

function Why() {
  return (
    <Container p={10} my="20" bg="#C4F1F9" maxW="xxl">
      {/* minChildWidth='120px' spacing='40px' */}
      <Text fontSize={"4xl"} textAlign={"center"}>
        Why Us?
      </Text>
      <br />
      <br />
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              height="150"
              width={150}
              rounded="full"
              justifyContent="center"
              alignItems="center"
              bgGradient="linear(to-l, #00B4DB, #0083B0)"
            >
              <Text fontSize="6xl" color="#ffff">
                <AiFillThunderbolt />
              </Text>
            </Flex>
            <br />
            <Container>
              <Text
                textAlign={"center"}
                wordBreak={"break"}
                fontWeight="extrabold"
                fontSize="4xl"
              >
                Book Instantly
              </Text>
            </Container>
            <br />
            <Text
              textAlign={"center"}
              wordBreak={"break"}
              fontWeight="extrabold"
              fontSize="1xl"
            >
              View your doctor’s real-time availability and select a time that
              works for you.
            </Text>
          </Flex>
        </Box>
        {/* second */}
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              height="150"
              width={150}
              rounded="full"
              justifyContent="center"
              alignItems="center"
              bgGradient="linear(to-l, #00B4DB, #0083B0)"
            >
              <Text fontSize="6xl" color="#ffff">
                <BsFillCalendarDateFill />
              </Text>
            </Flex>
            <br />
            <Container>
              <Text
                textAlign={"center"}
                wordBreak={"break"}
                fontWeight="extrabold"
                fontSize="4xl"
              >
                Change Anytime
              </Text>
            </Container>
            <br />
            <Text
              textAlign={"center"}
              wordBreak={"break"}
              fontWeight="extrabold"
              fontSize="1xl"
            >
              Reschedule or cancel your appointments, without making a phone
              call.
            </Text>
          </Flex>
        </Box>
        {/* third */}
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              height="150"
              width={150}
              rounded="full"
              justifyContent="center"
              alignItems="center"
              bgGradient="linear(to-l, #00B4DB, #0083B0)"
            >
              <Text fontSize="6xl" color="#ffff">
                <AiFillSafetyCertificate />
              </Text>
            </Flex>
            <br />
            <Container>
              <Text
                textAlign={"center"}
                wordBreak={"break"}
                fontWeight="extrabold"
                fontSize="4xl"
              >
                Book Instantly
              </Text>
            </Container>
            <br />
            <Text
              textAlign={"center"}
              wordBreak={"break"}
              fontWeight="extrabold"
              fontSize="1xl"
            >
              Booking your appointment with Okadoc comes with no additional
              charges.
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Why;
