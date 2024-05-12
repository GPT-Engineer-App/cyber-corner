import { Container, VStack, Text, Box, Link, Image, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4} centerContent>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU0NDQyMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" mb={4} />
        <Text fontSize="2xl" fontWeight="bold">
          John Doe
        </Text>
        <Text fontSize="md" color="gray.500">
          Software Developer | React Specialist
        </Text>
        <Text mt={4} fontSize="md" color="gray.600">
          Passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
        </Text>
        <Box my={4}>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <Button colorScheme="blue" leftIcon={<FaLinkedin />} mr={2}>
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <Button colorScheme="gray" leftIcon={<FaGithub />} mr={2}>
              GitHub
            </Button>
          </Link>
          <Link href="mailto:johndoe@example.com">
            <Button colorScheme="teal" leftIcon={<FaEnvelope />}>
              Email Me
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
