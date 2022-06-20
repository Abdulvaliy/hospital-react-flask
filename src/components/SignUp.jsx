import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

// imports above

function SignUp() {
  return (
    <Container rounded="2xl" p={10} mt="15" bgColor="#EDF2F7" maxW="xl">
      <form action="/sign_up" method="post">
        <br />
        <Container>
          <Text textAlign="center" fontSize="5xl">
            Sign Up
          </Text>
        </Container>
        <br />
        <br />
        <FormControl>
          <FormLabel color="#4A5568" htmlFor="name">
            Name
          </FormLabel>
          <Input color="#4A5568" id="name" type="text" />
        </FormControl>
        <br />
        <FormLabel color="#4A5568" htmlFor="gender">
          Gender
        </FormLabel>
        <Select id="gender" placeholder="Choose a gender">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </Select>
        <br />
        <FormControl>
          <FormLabel color="#4A5568" htmlFor="email">
            Email address
          </FormLabel>
          <Input color="#4A5568" id="email" type="email" />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel color="#4A5568" htmlFor="Password">
            Password
          </FormLabel>
          <Input color="#4A5568" id="Password" type="password" />
        </FormControl>
        <br />
        <Flex justifyContent="center">
          <Button colorScheme="blue">Sign Up</Button>
        </Flex>
      </form>
    </Container>
  );
}

export default SignUp;
