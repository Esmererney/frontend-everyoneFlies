// VueloFormulario.tsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input, Stack, createListCollection, Button } from "@chakra-ui/react";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";

interface VueloFormularioProps {
    onSearch: (searchParams: { origen: string; destino: string; fecha: string }) => void;
}

const VueloFormulario: React.FC<VueloFormularioProps> = ({ onSearch }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        // Asegúrate de que onSearch esté siendo llamado correctamente
        if (data) {
            onSearch({
                origen: data.origen,  // Asegúrate de mapear los campos correctos
                destino: data.destino,
                fecha: data.fecha,
            });
        } else {
            alert("There is an error");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="4">
                <SelectRoot key="origen" size="md" collection={destinos} {...register("origen", {
                    required: true,
                })}>
                    <SelectLabel>Origen</SelectLabel>
                    <SelectTrigger>
                        <SelectValueText placeholder="Seleccione un Origen" />
                    </SelectTrigger>
                    <SelectContent>
                        {destinos.items.map((place) => (
                            <SelectItem item={place} key={place.value}>
                                {place.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>

                <SelectRoot key="destino" size="md" collection={destinos} {...register("destino", {
                    required: true,
                })}>
                    <SelectLabel>Destino</SelectLabel>
                    <SelectTrigger>
                        <SelectValueText placeholder="Seleccione un Destino" />
                    </SelectTrigger>
                    <SelectContent>
                        {destinos.items.map((place) => (
                            <SelectItem item={place} key={place.value}>
                                {place.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>

                <label htmlFor="date">Fecha</label>
                <Input
                    placeholder="Fecha"
                    id="fecha"
                    type="date"
                    {...register("fecha", {
                        required: true,
                    })}
                />
            </Stack>
            <Button
                colorScheme="orange"
                bg="green.600"
                size="sm"
                type="submit"
                top="4"
                _hover={{ bg: 'green.400' }}
            >
            Buscar
          </Button>
        </form>
    );
};


const destinos = createListCollection({
    items: [
        { label: "Barranquilla - Ernesto Cortissoz", value: "Ernesto Cortissoz" },
        { label: "Cartagena - Rafael Nuñez", value: "Rafael Nuñez" },
        { label: "Bogotá - El Dorado", value: "El Dorado" },
        { label: "Medellin - Jose Maria Corboda", value: "Jose Maria Corboda" },
    ],
});

export default VueloFormulario;
