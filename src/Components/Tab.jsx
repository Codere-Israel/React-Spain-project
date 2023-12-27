import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
export default function Tab({ setCountry, editList }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [editDisabled, setEditDisabled] = useState(false);

  const coutriesList = [
    "Spain-es",
    "Panama-pa",
    "Colombia-co",
    "Argentina-ar",
    "Mexico-mx",
  ];

  function getDefaultCountry() {
    return (
      coutriesList.findIndex(
        (temp) => temp === location.pathname.substring(1)
      ) + 1
    );
  }

  useEffect(() => {
    let hasTruthy = editList.filter((truthy) => truthy === true).length;
    if (hasTruthy) setEditDisabled(true);
    else setEditDisabled(false);
  }, [editList]);

  const disabledTabHandler = () => {
    if (editDisabled) {
      alert("please exit edit mode");
    }
  };

  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey={getDefaultCountry()}
      className="countries-tab"
      onClick={disabledTabHandler}
    >
      {coutriesList.map((country, k) => (
        <Nav.Item key={k} onClick={() => navigate(`/${country}`)}>
          <Nav.Link
            checked={1}
            eventKey={k + 1}
            disabled={editDisabled}
            onClick={() => setCountry(country)}
          >
            <span className={`fi fi-${country.split("-")[1]}`}></span>
            <p>{country.split("-")[0]}</p>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
