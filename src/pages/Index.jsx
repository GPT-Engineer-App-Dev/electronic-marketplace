import { Box, Container, Flex, Heading, Text, VStack, Image, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">ElectroShop</Heading>
            <Flex>
              <Link href="#" mx={2}>Home</Link>
              <Link href="#" mx={2}>Products</Link>
              <Link href="#" mx={2}>About Us</Link>
              <Link href="#" mx={2}>Contact Us</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="start" spacing={4} maxW="lg">
              <Heading as="h2" size="xl">Discover the Latest in Electronics</Heading>
              <Text fontSize="lg">Find the best deals on the latest gadgets and electronics. Shop now and save big!</Text>
              <Button colorScheme="blue" size="lg">Shop Now</Button>
            </VStack>
            <Image src="https://via.placeholder.com/500" alt="Featured Product" boxSize="500px" objectFit="cover" />
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={8}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 1</Heading>
                <Text mt={4}>Description of product 1.</Text>
                <Button mt={4} colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 2</Heading>
                <Text mt={4}>Description of product 2.</Text>
                <Button mt={4} colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 3</Heading>
                <Text mt={4}>Description of product 3.</Text>
                <Button mt={4} colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex>
              <Link href="#" mx={2}><FaFacebook /></Link>
              <Link href="#" mx={2}><FaTwitter /></Link>
              <Link href="#" mx={2}><FaInstagram /></Link>
            </Flex>
            <Flex>
              <Link href="#" mx={2}>Terms of Service</Link>
              <Link href="#" mx={2}>Privacy Policy</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;