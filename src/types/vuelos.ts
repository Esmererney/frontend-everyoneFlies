export interface Vuelo {
    id_vuelo: number;
    cod_vuelo: string;
    aerolinea: string;
    origen_aeropuerto: string;
    destino_aeropuerto: string;
    fecha_salida: string;
    fecha_llegada: string;
    duracion: number;
    total_asientos: number;
    asientos_disponibles: number;
    estado_vuelo: string;
    precio_base_vuelo: number;
}