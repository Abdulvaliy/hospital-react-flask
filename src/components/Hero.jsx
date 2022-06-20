import React from "react";
import { Container, Flex, Text, Input, Button, Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { FaSearchengin } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { SimpleGrid } from "@chakra-ui/react";
function Hero() {
  return (
    <Container bg="" my={25} maxW="4xl">
      <Text
        bgGradient="linear(to-l, #833ab4, #fd1d1d, #fcb045)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        textTransform="capitalize"
      >
        Book in-person consultations with your doctor now
      </Text>
      <br />
      <br />
      <SimpleGrid gap={5} columns={{ base: 1, md: 3,  }}>
        <Box justifyContent="">
          <Flex>
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
            <Input ml="3" placeholder="Search Doctors" />
          </Flex>
        </Box>
        <Box  justifyContent="">
          <Flex>
            <IconButton aria-label="Search database" icon={<GrLocation />} />
            <Input ml="3" placeholder="Choose Location" />
          </Flex>
        </Box>
        <Box>
          <Button colorScheme="linkedin">
            <FaSearchengin /> Find A Doctor
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Hero;
