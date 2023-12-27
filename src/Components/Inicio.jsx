import "@fontsource/roboto";
import "@fontsource/roboto-condensed";

import { Helmet } from "react-helmet";
import MySwiper from "./parts/MySwiper";
import Games from "./parts/Games";
import Content from "./parts/Content";

function Inicio(props) {
  const json1 = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "codere",
    alternateName: [
      "codere españa",
      "codere.es",
      "codere es",
      "codere spain",
      "codere online",
      "codere sa",
      "codere s.a.",
    ],
    legalName: "Codere Online, SAU",
    url: "https://www.codere.es/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Codere_Logo.svg",
    foundingDate: "2008",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[913432950]",
      email: "apuestas@codere.com",
    },
    description:
      "El juego responsable está en Codere, la casa de apuestas deportivas online líder en España. Juega blackjack, ruletas o tragaperras en el Casino #1 🥇",
    sameAs: [
      "https://www.facebook.com/CodereApuestas/",
      "https://twitter.com/Codereapuestas",
      "https://www.youtube.com/channel/UCnHiADE4Tfzg94iTGKx9WOQ",
      "https://www.instagram.com/codereapuestas/",
      "https://apps.apple.com/es/app/codere-apuestas-deportivas/id917178660",
      "https://es.wikipedia.org/wiki/Codere",
      "https://play.google.com/store/apps/details?id=spain.codere.apuestas",
      "https://www.wikidata.org/wiki/Q2918415",
      "https://www.crunchbase.com/organization/codere",
      "https://play.google.com/store/apps/details?id=spain.codere.casino",
      "https://www.google.com/search?kgmid=/g/121c515_",
    ],
  };
  const json2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo puedo crear una cuenta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deberás pinchar en la pestaña “Registrarse” para escribir tus datos personales (datos del DNI), datos de contacto y datos de usuario con los que crear tu perfil. Recuerda que para poder optar a promociones deberás estar registrado de más de 30 días y tener los documentos verificados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo mirar los pronósticos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Antes de realizar tus apuestas deportivas en Codere, tienes la opción de ayudarte con nuestras estadísticas o pronósticos. Pincha en el evento deportivo sobre el que quieras apostar y entra a uno de los partidos. Una vez dentro, verás que se abrirá un panel lateral con todo tipo de ayudas. Contarás con información sobre ambos equipos, el estadio donde se juega, horas que quedan para el inicio, árbitro, goles marcados esta temporada, máximos goleadores, etc. Además, habrá otras pestañas en la que podrás ver los enfrentamientos anteriores entre ambos, la probabilidad de victoria de cada uno, la clasificación y las alineaciones probables en el caso del fútbol.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo ver el estado de mis apuestas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando realizas una apuesta deportiva en Codere esta se sitúa en el apartado “Mis apuestas”. Esto se encuentra entrando en tu perfil de usuario de Codere, pinchando en la pestaña te aparecerán todas tus apuestas y el estado en el que se encuentran: pendientes, ganadas o perdidas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los tipos de apuestas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existen infinidad de mercados para realizar apuestas deportivas. Pero por encima de todos hay unos cuantos que son los más usados por parte de los usuarios de Codere. Entre ellos destacan: Ganador del partido, Más o menos goles, Primer equipo en marcar, Goleadores, Hándicap e incluso mercados especiales para apostar al ganador de una competición.",
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>
          Casa de Apuestas Deportivas y Casino Online » +18 | Codere®
        </title>
        <meta
          name="description"
          content="El juego responsable está en Codere, la casa de apuestas deportivas online líder en España. Juega blackjack, ruletas o tragaperras en el Casino #1 🥇"
        />
        <script type="application/ld+json">{JSON.stringify(json1)}</script>
        <script type="application/ld+json">{JSON.stringify(json2)}</script>

        <link rel="canonical" href="https://www.codere.es/" />
      </Helmet>
      <div className="inicio">
        <MySwiper device={props.flag} />

        <Games />

        <Content />
      </div>
    </>
  );
}

export default Inicio;
