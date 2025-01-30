import React from "react";

// Definimos el tipo de props
interface SaludoProps {
  nombre: string;
}

// Componente funcional con TypeScript
const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>Hola, {nombre} 👋</h1>;
};

export default Saludo;
