import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">ElectroShop</Heading>
            <HStack spacing={8}>
              <Link href="#">Home</Link>
              <Link href="#">Products</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Contact Us</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="start" spacing={4} maxW="lg">
              <Heading as="h2" size="xl">Discover the Latest in Electronics</Heading>
              <Text fontSize="lg">Find the best deals on the latest gadgets and devices.</Text>
              <Link href="#" color="blue.500" fontWeight="bold">Shop Now</Link>
            </VStack>
            <Image src="/images/hero-product.jpg" alt="Featured Product" boxSize="400px" objectFit="cover" />
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={8}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 1</Heading>
                <Text mt={4}>$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 2</Heading>
                <Text mt={4}>$399.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 3</Heading>
                <Text mt={4}>$499.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
            </HStack>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;