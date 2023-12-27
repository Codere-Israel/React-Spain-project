import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  convertToZuluTime,
  countriesGloabalData,
  validate,
  validators,
} from "../App";
import MyCalendar from "./MyCalendar";
import { ClipLoader, ClockLoader } from "react-spinners";

export default function AddBanner({
  country,
  confirmFlag,
  setConfirmFlag,
  setShowToast,
  setToastMessage,
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const curCountry = country.split("-")[0].toLocaleLowerCase();
  // console.log(curCountry);
  // const countryData = ;

  // useEffect(() => {f
  //   console.log("confirmFlag >>");
  //   console.log(confirmFlag);
  // }, [confirmFlag]);

  const [bannerName, setBannerName] = useState("");
  const [imageExtention, setImageExtention] = useState("jpg");
  const [ctaUrl, setCtaURL] = useState(
    countriesGloabalData[curCountry].ctaURLs[0].url
  );
  const [ctaText, setCtaText] = useState(
    countriesGloabalData[curCountry].ctaURLs[0].name
  );

  const [tycTitle, setTycTitle] = useState("");
  const [tycType, setTycType] = useState("");
  const [scheduled, setScheduled] = useState(false);

  // Dates
  const curDate = new Date();
  const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;

  const [startDate, setStartDate] = useState(
    convertToZuluTime(curDate, curTime)
  );
  const [endDate, setEndDate] = useState(convertToZuluTime(curDate, curTime));
  const [startTime, setStartTime] = useState(curTime);
  const [endTime, setEndTime] = useState(curTime);

  useEffect(() => {
    setShowAddForm(false);
    // setCtaText(countriesGloabalData[curCountry].ctaURLs[0].name);
    // setCtaURL(countriesGloabalData[curCountry].ctaURLs[0].url);
    resetFields();
  }, [country]);

  const confirmation = () => {
    setConfirmFlag(true);

    const obj = {
      image: `${countriesGloabalData[curCountry].imagePrefix}/${bannerName}-xxx.${imageExtention}`,
      banner_name: bannerName,
      ctaText: ctaText,
      ctaURL: ctaUrl,
      tycType: tycType,
      tycTitle: tycTitle,
      scheduled: scheduled,
      startDate: scheduled ? convertToZuluTime(startDate, startTime) : "",
      endDate: scheduled ? convertToZuluTime(endDate, endTime) : "",
    };

    // console.log(obj);

    if (scheduled) {
      validators.push("startDate");
      validators.push("endDate");
    }

    let val = validate(obj, validators);

    if (!val.length) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/${country
            .split("-")[0]
            .toLocaleLowerCase()}`,
          {
            banner: obj,
          }
        )
        .then((res) => {
          setShowToast(true);
          console.log(res.data.status);
          setToastMessage({
            code: "success",
            action: "create",
            message: `${bannerName} has been added! thank you`,
          });

          setShowAddForm(false);
          resetFields();
        })
        .catch((err) => {
          // console.log(err);
          setShowToast(true);
          setToastMessage({
            code: "fail",
            action: "create",
            message: `${bannerName} cannot be added. ${err.response.data.error}!`,
          });
        });
    } else {
      setShowToast(true);
      console.log(val);
      setToastMessage({
        code: "fail",
        action: "create",
        message: `please fill all inputs!`,
      });
    }
    setConfirmFlag(false);
  };

  const resetFields = () => {
    setBannerName("");
    setImageExtention("jpg");
    setCtaText(countriesGloabalData[curCountry].ctaURLs[0].name);
    setCtaURL(countriesGloabalData[curCountry].ctaURLs[0].url);
    setTycTitle("");
    setTycType("");
    setScheduled(false);
  };

  const scheduleHandler = (e) => {
    if (e.target.value === "1") setScheduled(true);
    else setScheduled(false);
  };

  const ctaHandler = (e) => {
    let value = e.target.value;
    let temp = countriesGloabalData[curCountry].ctaURLs;

    switch (value) {
      case "0":
        setCtaText(temp[0].name);
        setCtaURL(temp[0].url);
        break;
      case "1":
        setCtaText(temp[1].name);
        setCtaURL(temp[1].url);
        break;
      case "2":
        setCtaText(temp[2].name);
        setCtaURL(temp[2].url);
        break;
    }

    console.log(ctaUrl);
  };
  const tycTypeHandler = (e) => {
    let value = e.target.value;
    switch (value) {
      case "0":
        setTycType("");
        break;
      case "1":
        setTycType("sport");
        break;
      case "2":
        setTycType("casino");
        break;
      case "3":
        setTycType("special");
        break;
    }
  };

  const extentionHandler = (e) => {
    let value = e.target.value;

    switch (value) {
      case "1":
        setImageExtention("jpg");
        break;
      case "2":
        setImageExtention("webp");
        break;
      case "3":
        setImageExtention("png");
        break;
      case "4":
        setImageExtention("avif");
        break;
    }
  };

  return (
    <div className="mt-5">
      <Button
        className="gui-btn mt-5"
        onClick={() => {
          setShowAddForm(!showAddForm);
          setConfirmFlag(false);
        }}
      >
        <span className={`bi bi-${!showAddForm ? "plus" : "slash-circle"}`} />{" "}
        {!showAddForm ? "Add Banner" : "Hide"}
      </Button>
      <Button onClick={() => window.location.reload()} className="gui-btn mt-5">
        <span className="bi bi-arrow-clockwise" /> Refresh
      </Button>

      {showAddForm && (
        <Container className="mt-3 data-form">
          <Form>
            <InputGroup>
              <FloatingLabel controlId="floatingInput" label="Banner Name">
                <Form.Control
                  type="text"
                  value={bannerName}
                  placeholder="."
                  onChange={(e) => setBannerName(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Extention"
                placeholder="a"
              >
                <Form.Select onChange={extentionHandler} defaultValue={"1"}>
                  <option value="1">jpg</option>
                  <option value="2">webp</option>
                  <option value="3">png</option>
                  <option value="4">avif</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="CTA Text">
                <Form.Select onChange={ctaHandler} defaultValue={"0"}>
                  {countriesGloabalData[curCountry].ctaURLs.map((cta, k) => (
                    <option key={k} value={k}>
                      {cta.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="CTA URL">
                <Form.Control
                  disabled
                  type="text"
                  value={ctaUrl}
                  placeholder="."
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="TyC Type"
                placeholder="a"
              >
                <Form.Select onChange={tycTypeHandler} defaultValue={"0"}>
                  <option value="0">No TYC</option>
                  <option value="1">Sport</option>
                  <option value="2">Casino</option>
                  <option value="3">Special</option>
                </Form.Select>
              </FloatingLabel>

              {tycType && (
                <FloatingLabel controlId="floatingInput" label="TyC Title">
                  <Form.Control
                    onChange={(e) => setTycTitle(e.target.value)}
                    type="text"
                    value={tycTitle}
                    placeholder="."
                  />
                </FloatingLabel>
              )}

              <FloatingLabel
                controlId="floatingInput"
                label="Is Scheduled?"
                placeholder="2"
              >
                <Form.Select onChange={scheduleHandler} defaultValue={"2"}>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </FloatingLabel>

              <Button
                disabled={confirmFlag}
                className="confirm-btn"
                onClick={confirmation}
              >
                {confirmFlag ? <ClipLoader /> : "Confirm"}
              </Button>
            </InputGroup>
          </Form>
          {scheduled && (
            <MyCalendar
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          )}
        </Container>
      )}
    </div>
  );
}
