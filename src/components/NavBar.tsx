import { Box, Button, Flex, HStack, IconButton, VStack } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"; // Usa los iconos de Chakra UI
import { useState } from "react"; // Asegúrate de importar useState
import { Avatar } from "@/components/ui/avatar";

const links = [
  { name: "Home", href: "#" },
  { name: "Reserva", href: "#" },
  { name: "Tickets", href: "#" },
  { name: "Contáctenos", href: "#" },
  { name: "Quienes Somos", href: "#" },
  { name: "Login", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <Box bg="white.500" px={4} color="black">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          
          aria-label="Toggle navigation"
          display={{ md: 'none' }}
          onClick={onToggle}
        >
          
        </IconButton>
        <HStack gap={8} alignItems="center">
          <Box fontWeight="bold" fontSize="xl" bg="green.600" color="white">
            Sitio
            <Avatar src="../images/logo/logo_aerolinea.jpg" />
            
          </Box>
          <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <a key={link.name} href={link.href} style={{ color: 'black' }}>
                {link.name}
              </a>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            colorScheme="orange"
            bg="orange.500"
            size="sm"
            _hover={{ bg: 'orange.400' }}
          >
            Login
          </Button>
        </Flex>
      </Flex>

      {open && (
        <Box pb={4} display={{ md: 'none' }}>
          <VStack as="nav" gap={4}>
            {links.map((link) => (
              <a key={link.name} href={link.href} style={{ color: 'white' }}>
                {link.name}
              </a>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
