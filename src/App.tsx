import VueloFormulario from "./components/formulario.tsx";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx'; // Ejemplo de una ruta

 const App = () => {
    const [searchParams, setSearchParams] = useState({
        origen: '',
        destino: '',
        fecha: ''
    });

    const [initialLoad, setInitialLoad] = useState(true); 

    const handleSearch = (params: { origen: string; destino: string; fecha: string }) => {
        setSearchParams(params);
    };

     // Ejecutar handleSearch solo una vez al cargar el componente
    useEffect(() => {
        if (initialLoad) {
            handleSearch({
                origen: 'N/A',  // Puedes establecer valores por defecto si lo deseas
                destino: 'N/A',
                fecha: 'N/A'
            });
            setInitialLoad(false);  // Marcar que ya se realizó la carga inicial
        }
    }, [initialLoad]);

    return (
        <Router>
            <Box bg="gray.100" minHeight="100vh">
            <Navbar />
            <Flex height="100vh">
                {/* Contenedor de la barra de navegación fija */}
                <Box
                width="30%"
                position="sticky"
                left="0"
                height="100hv" // Hacemos que el contenedor ocupe el 100% de la altura menos la altura del Navbar
                bg="white"
                color="black"
                p={4}
                overflowY="auto"
                >
                {/* { Contenedor dinaico de 30% } */}
                <VueloFormulario onSearch={handleSearch}/>
                </Box>

                {/* Contenedor del contenido dinámico, 70% */}
                <Box
                marginLeft="2%" // Para dejar espacio para el navbar
                width="70%"
                p={4}
                bg="white"
                overflow="auto"
                >
                <Routes>
                    <Route path="/" element={<Home  searchParams={searchParams}/>} />
                </Routes>
                </Box>
            </Flex>
            <Footer/>
            </Box>
        </Router>
    );
 }

 export default App;