import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketball,
  faBaseball,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigations(props) {
  const [active, setActive] = useState(props.index);

  const navs = [
    {
      icon: faBasketball,
      title: "Baloncesto",
      url: "/eventos-deportivos/apuestas-mundial-baloncesto",
    },
    {
      icon: faBaseball,
      title: "Grand Slam",
      url: "/eventos-deportivos/apuestas-grand-slam",
    },
    {
      icon: faFlagCheckered,
      title: "Grand Prix",
      url: "/eventos-deportivos/apuestas-grand-prix",
    },
  ];

  return (
    <div
      style={{
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "2rem",
      }}
    >
      {navs.map((n, k) => (
        <Link
          onClick={() => setActive(k + 1)}
          to={n.url}
          style={{ color: "#fff", textDecoration: "none" }}
          key={k}
        >
          <FontAwesomeIcon
            icon={n.icon}
            style={
              active === k + 1
                ? { color: "#79c000", fontSize: "2rem" }
                : { fontSize: "2rem" }
            }
          />
          <h4 style={active === k + 1 ? { color: "#79c000" } : {}}>
            {n.title}
          </h4>
        </Link>
      ))}
    </div>
  );
}
