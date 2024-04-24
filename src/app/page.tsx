import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Seguros from "./components/Seguros";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Inicio />
        <Nosotros />
        <Seguros />
        <Contacto />
      </ChakraProvider>
    </>
  );
}
