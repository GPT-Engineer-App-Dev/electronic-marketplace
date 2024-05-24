import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex maxW="container.lg" mx="auto" justify="space-between" align="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Flex>
            <Link href="#" mx={2}>Home</Link>
            <Link href="#" mx={2}>Products</Link>
            <Link href="#" mx={2}>About Us</Link>
            <Link href="#" mx={2}>Contact Us</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box flex="1" mb={{ base: 5, md: 0 }}>
              <Heading as="h2" size="xl" mb={4}>Featured Product: Ultra HD 4K TV</Heading>
              <Text fontSize="lg" mb={4}>Experience the best quality in entertainment with our latest Ultra HD 4K TV. Perfect for your home theater setup.</Text>
              <Button colorScheme="blue" size="lg">Shop Now</Button>
            </Box>
            <Box flex="1">
              <Image src="https://via.placeholder.com/500" alt="Featured Product" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading as="h3" size="lg" mb={6}>Our Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of product 1.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of product 2.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of product 3.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" mb={4}>
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex>
              <Link href="#" mx={2}><FaFacebook /></Link>
              <Link href="#" mx={2}><FaTwitter /></Link>
              <Link href="#" mx={2}><FaInstagram /></Link>
            </Flex>
          </Flex>
          <Flex justify="center">
            <Link href="#" mx={2}>Terms of Service</Link>
            <Link href="#" mx={2}>Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;