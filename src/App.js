import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";

export function convertToZuluTime(dateString, timeString) {
  try {
    let day = String(dateString.getDate()).padStart(2, "0");
    let month = String(dateString.getMonth() + 1).padStart(2, "0");
    let year = dateString.getFullYear();

    let date = `${year}-${month}-${day}`;

    const combinedString = date + "T" + timeString + ":00";
    const localDate = new Date(combinedString);
    const utcDate = new Date(
      localDate.getTime() - localDate.getTimezoneOffset() * 60000
    );

    // console.log(utcDate);
    const zuluTimeString = utcDate.toISOString();
    // console.log(zuluTimeString);
    return zuluTimeString;
  } catch (error) {
    // console.log(error);
  }
}

export const countriesGloabalData = {
  panama: {
    imagePrefix: "https://www.codere.pa/assets/inicio-banners",
    ctaURLs: [
      {
        name: "Regístrate",
        url: "https://m.codere.pa/deportespanama/#/RegistroPAPage",
      },
      {
        name: "Encuentranos",
        url: "https://m.codere.pa/deportespanama/#/NearestLocalPage",
      },
    ],
  },
  spain: {
    imagePrefix: "https://www.codere.es/assets1/splash-banners",
    ctaURLs: [
      {
        name: "Regístrate",
        url: "https://m.apuestas.codere.es/deportes/#/RegistroESPage",
      },
    ],
  },
  colombia: {
    imagePrefix: "https://www.codere.com.co/Colombia/images/inisio",
    ctaURLs: [
      {
        name: "Regístrate",
        url: "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage",
      },
      {
        name: "Encuentranos",
        url: "https://m.codere.com.co/deportescolombia/#/NearestLocalPage",
      },
    ],
  },
  argentina: {
    imagePrefix: "https://www.codere.bet.ar/assets/splash-banners",
    ctaURLs: [
      {
        name: "Registrate",
        url: "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage",
      },
      { name: "Visitanos", url: "https://bingos.codere.bet.ar/" },
    ],
  },
  mexico: {
    imagePrefix: "https://www.codere.bet.ar/assets/splash-banners",
    ctaURLs: [
      {
        name: "Registrate",
        url: "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage",
      },
      { name: "Visitanos", url: "https://bingos.codere.bet.ar/" },
    ],
  },
};

export const validators = ["banner_name", "ctaText", "ctaURL", "scheduled"];

export function validate(obj, validators) {
  const failedValidators = [];

  validators.forEach((key) => {
    const value = key.split(".").reduce((acc, cur) => acc?.[cur], obj);

    if ([undefined, null, ""].includes(value)) {
      // console.log(key);
      failedValidators.push(key);
    }
  });
  // console.log(failedValidators);
  return failedValidators;
}

export function swapInList(list, i1, i2) {
  // Ensure indices are within bounds of the list
  if (i1 < 0 || i1 >= list.length || i2 < 0 || i2 >= list.length) {
    console.error("Indices are out of bounds.");
    return list;
  }

  // Create a copy of the list to avoid mutating the original array
  const updatedList = list;

  // Swap the objects at the specified indices
  const temp = updatedList[i1];
  updatedList[i1] = updatedList[i2];
  updatedList[i2] = temp;

  // console.log(updatedList);

  return updatedList;
}

function App() {
  return (
    <>
      <Router>
        <Main />
        <Footer />
        <div className="inside"></div>
      </Router>
    </>
  );
}

export default App;
