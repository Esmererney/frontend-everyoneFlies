import React from 'react';
import { Box, Flex, HStack, IconButton, Text, VStack, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={8}>
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="start"
        wrap="wrap"
        gap={8}
      >
        {/* Columna 1: Links */}
        <VStack align="start" gap={4}>
          <Text fontWeight="bold" fontSize="xl">Enlaces</Text>
          <Link href="/contact" color="white" _hover={{ textDecoration: 'underline' }}>Contáctenos</Link>
          <Link href="/login" color="white" _hover={{ textDecoration: 'underline' }}>Inicio de sesión</Link>
        </VStack>

        {/* Columna 2: Iconos de redes sociales */}
        <VStack align="start" gap={4}>
          <Text fontWeight="bold" fontSize="xl">Redes Sociales</Text>
          <HStack gap={4}>
            <Link href="https://facebook.com">
                <IconButton
                as="a"
                aria-label="Facebook"
                colorScheme="facebook"
                >
                    {<FaFacebook />}
                </IconButton>
            </Link>
            <Link href="https://twitter.com">
                <IconButton
                as="a"
                aria-label="Twitter"
                colorScheme="twitter"
                >
                    {<FaTwitter />}
                </IconButton>
            </Link>
            <Link href="https://instagram.com">
                <IconButton
                as="a"
                aria-label="Instagram"
                colorScheme="teal"
                >
                    {<FaInstagram />}
                </IconButton>
            </Link>
          </HStack>
        </VStack>

        {/* Columna 3: Información adicional */}
        <VStack align="start" gap={4}>
          <Text fontWeight="bold" fontSize="xl">Información</Text>
          <HStack gap={2}>
            <FaPhone />
            <Text>+1 234 567 890</Text>
          </HStack>
          <Text fontSize="sm" textAlign="center" mt={4}>
            Powered by Ney Barbosa
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
