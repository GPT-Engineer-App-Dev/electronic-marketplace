import { Box, Container, VStack, Text, Image, Flex, Heading, Button, SimpleGrid, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>About Us</Link>
          <Link href="#" p={2}>Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={4}>Discover the latest in electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>High-quality electronic product</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>High-quality electronic product</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>High-quality electronic product</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook size="24" /></Link>
          <Link href="#" mx={2}><FaTwitter size="24" /></Link>
          <Link href="#" mx={2}><FaInstagram size="24" /></Link>
        </Flex>
        <Text mb={2}>© 2023 ElectroShop. All rights reserved.</Text>
        <Flex justifyContent="center">
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Privacy Policy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;