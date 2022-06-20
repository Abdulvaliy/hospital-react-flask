import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Text,
  Button, Flex
} from "@chakra-ui/react";

function Login() {
  return (
    <Container rounded="2xl" p={10} mt="12" bgColor="#EDF2F7" maxW="xl" >
   <form action="/log_in">
   <br />
      <Container>
        <Text textAlign="center" fontSize="5xl">
          Login
        </Text>
      </Container>
      <br />
      <br />
      <FormControl>
        <FormLabel color="#4A5568" htmlFor="email">
          Email address
        </FormLabel>
        <Input color="#4A5568" id="email" type="email" />
        <FormHelperText color="#4A5568">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel color="#4A5568" htmlFor="Password">
          Password
        </FormLabel>
        <Input color="#4A5568" id="Password" type="password" />
        <FormHelperText color="#4A5568">
          We'll never share your Password.
        </FormHelperText>
      </FormControl>
      <br />
      <Flex justifyContent="center">
        <Button colorScheme="blue">Login</Button>
      </Flex>
   </form>
    </Container>
  );
}

export default Login;
