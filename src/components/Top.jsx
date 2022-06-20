import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";

import React from "react";
import Hospital from "./Hospital";

function Top() {
  return (
    <Container p={10} my="20" bg="#C4F1F9" maxW="xxl">
      {/* minChildWidth='120px' spacing='40px' */}
      <Flex justifyContent={"center"} fontSize={"5xl"} textAlign={"center"}>
        <FaRegHospital color="#00B4DB" />
      </Flex>
      <Text
        bgGradient="linear(to-l, #00B4DB, #0083B0)"
        bgClip="text"
        fontWeight="extrabold"
        fontSize={"2xl"}
        textAlign={"center"}
      >
        Our Top Hospitals
      </Text>
      <br />
      <br />
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        <Hospital
          img_link="https://news.med.virginia.edu/medicinematters/files/2017/09/uvahospbedtower_header_3-2.jpg"
          hospital_name="UVA hospital"
          hospital_description="lorem ipsum dollar emit"
        />

        <Hospital
          img_link="https://www.karolinska.se/4929e8/contentassets/dd40730f24e24413ba22fd63fb9a9f1d/solna_sallsynta_upplyst.jpg"
          hospital_name="UVA hospital"
          hospital_description="Karolinska University Hospital, illuminated with a grand display of color. "
        />

        <Hospital
          img_link="https://www.universitymagazine.ca/wp-content/uploads/2020/12/karolinska-universitetssjukhuset.jpg"
          hospital_name="UVA hospital"
          hospital_description="View your doctor’s real-time availability and select a time that
        works for you."
        />
      </SimpleGrid>
    </Container>
  );
}

export default Top;
// https://www.universitymagazine.ca/wp-content/uploads/2020/12/karolinska-universitetssjukhuset.jpg
