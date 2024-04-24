import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import Nosotros from "./components/Nosotros";
import Seguros from "./components/Seguros";
import Contacto from "./components/Contacto";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Hero />
        <Nosotros />
        <Seguros />
        <Contacto />
      </ChakraProvider>
    </>
  );
}
