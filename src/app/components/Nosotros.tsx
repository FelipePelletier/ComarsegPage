import React from "react";

const features = [
  {
    name: "¿Quiénes somos?",
    description:
      "Somos una compañía de capitales nacionales fundada en agosto de 2009 dedicada, en sus comienzos, a riesgos de personas. En 2022, a partir de un fuerte respaldo de accionistas líderes en diferentes rubros de la industria nacional de bienes y servicios, la actual administración tomó el control de las operaciones y amplió la cartera de productos de la compañía. A los seguros de personas se sumaron diversos ramos de seguros patrimoniales. Comarseg cuenta con un equipo Directivo y Gerencial con más de 30 años de experiencia en la industria aseguradora y reaseguradora nacional e internacional.",
    icon: "",
  },
  {
    name: "Nuestra misión",
    description:
      "Acompañar el crecimiento de nuestros clientes a partir del cuidado y la protección de su patrimonio y capital humano.  Nuestra razón de ser consiste en generar relaciones virtuosas de largo plazo partiendo de un profundo conocimiento de tu actividad, de las necesidades de tu negocio y el diseño de coberturas a su medida.",
    icon: "",
  },
];

const Nosotros = () => {
  return (
    <div>
      {features.map((features) => (
        <div>
          <div>
            <img src={features.icon} />
          </div>
          <div>
            <h3>{features.name}</h3>
          </div>
          <div>{features.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Nosotros;
