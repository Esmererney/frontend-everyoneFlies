// Home.tsx
import { useQuery } from "react-query";
import Cards from "./Cards";
import { Vuelo } from "../types/vuelos";
import { Flex } from "@chakra-ui/react";

// Cambiar obtVuelos para aceptar parámetros de búsqueda
const obtVuelos = async (searchParams: { origen: string; destino: string; fecha: string }): Promise<Vuelo[]> => {
    const { origen, destino, fecha } = searchParams;
    const response = await fetch(`http://localhost:3000/api/v1/vuelos/buscar`, {
        method: "POST", // Cambiar de GET a POST
        headers: {
            "Content-Type": "application/json", // Especificar que estamos enviando JSON
        },
        body: JSON.stringify({
            origen, // Origen
            destino, // Destino
            fecha,   // Fecha
        })
    });
    return response.json();
};

const Home = ({ searchParams }: { searchParams: { origen: string; destino: string; fecha: string } }) => {
    const { data, status } = useQuery(
        ['vuelos', searchParams], // Incluimos searchParams como parte de la clave de la query
        () => obtVuelos(searchParams),
        { enabled: !!searchParams.origen && !!searchParams.destino && !!searchParams.fecha } // Deshabilitar la consulta si no hay criterios
    );

    if (status === 'loading') {
        return <p>Recuperando los vuelos...</p>;
    }

    return (
        <Flex gap="4">
            {data?.vuelos.map((vuelo) => (
                <Cards vuelo={vuelo} key={vuelo.id_vuelo} />
            ))}
        </Flex>
    );
};

export default Home;
