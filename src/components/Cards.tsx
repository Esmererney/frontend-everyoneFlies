import { Button, Card, Stack, Text, Box, Flex} from "@chakra-ui/react";
import { Vuelo } from "../types/vuelos";

interface CardsProps {
  vuelo: Vuelo;
}

const Cards: React.FC<CardsProps> = ({ vuelo }) => {
  return (
    <Flex display="flex" flexWrap="wrap">
        <Card.Root
        key={vuelo.id_vuelo}
        maxW="lg"
        display="flex"
        flexDirection="column"
        height="auto"
        margin="1rem"  // Opcional: espacio entre tarjetas
    >
        <Card.Header>
        <Card.Title fontSize="xl">{vuelo.cod_vuelo}</Card.Title>
        <Card.Description fontSize="sm">
            Aerolínea: {vuelo.aerolinea}
        </Card.Description>
        </Card.Header>
        <Card.Body flexGrow={1}>
        <Stack gap="4" w="full">
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Origen:
            </Text>
            <Text fontSize="xs">{vuelo.origen_aeropuerto}</Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Destino:
            </Text>
            <Text fontSize="xs">{vuelo.destino_aeropuerto}</Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Salida:
            </Text>
            <Text fontSize="xs">
                {new Date(vuelo.fecha_salida).toLocaleString()}
            </Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Llegada:
            </Text>
            <Text fontSize="xs">
                {new Date(vuelo.fecha_llegada).toLocaleString()}
            </Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Duración:
            </Text>
            <Text fontSize="xs">{vuelo.duracion} horas</Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Asientos Disponibles:
            </Text>
            <Text fontSize="xs">{vuelo.asientos_disponibles}</Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Precio Base:
            </Text>
            <Text fontSize="xs">${vuelo.precio_base_vuelo}</Text>
            </Box>
            <Box>
            <Text fontWeight="bold" fontSize="sm">
                Estado:
            </Text>
            <Text fontSize="xs">{vuelo.estado_vuelo}</Text>
            </Box>
        </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
        <Button variant="solid" colorScheme="blue">
            Reservar
        </Button>
        </Card.Footer>
        </Card.Root>
    </Flex>
  );
};

export default Cards;
