import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
function Hospital(props) {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexDirection="column"
        p={5}
      >
        <Flex
          height="208"
          width={300}
          rounded="base"
          justifyContent="center"
          alignItems="end"
          bgGradient="linear(to-l, #833ab4, #fd1d1d, #fcb045)"
        >
          <img
            className="hoverImg"
            src={props.img_link}
          />
        </Flex>
        <br />
        <Container>
          <Text
            textAlign={"center"}
            wordBreak={"break"}
            fontWeight="extrabold"
            fontSize="4xl"
          >
            {props.hospital_name}
          </Text>
        </Container>
        <br />
        <Container>
          <Text
            textAlign={"center"}
            wordBreak={"break"}
            fontWeight="extrabold"
            fontSize="1xl"
          >
            {props.hospital_description}
          </Text>
        </Container>
      </Flex>
    </Box>
  );
}

export default Hospital;


// 