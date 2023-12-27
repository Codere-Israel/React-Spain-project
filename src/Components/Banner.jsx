import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import MyCalendar from "./MyCalendar";
import {
  convertToZuluTime,
  countriesGloabalData,
  validate,
  validators,
} from "../App";
import axios from "axios";
import myData from "../mobX/Store";
import { toJS } from "mobx";

const Banner = observer(
  ({
    banner,
    editable,
    setEditList,
    index,
    country,
    setShowToast,
    setToastMessage,
  }) => {
    const curDate = new Date();
    const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;
    const curCountry = country.split("-")[0].toLocaleLowerCase();

    const [image, setImage] = useState("");
    const [curName, setCurName] = useState("");
    const [ctaText, setCtaText] = useState("");
    const [ctaUrl, setCtaURL] = useState("");
    const [tycTitle, setTycTitle] = useState("");
    const [tycType, setTycType] = useState("");
    const [scheduled, setScheduled] = useState(false);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState(curTime);
    const [endTime, setEndTime] = useState(curTime);

    const [showCalendar, setShowCalendar] = useState(false);

    const bannerDisabled = !editable[index];

    const cancel = () => {
      let list = [...editable];
      list[index] = false;
      setEditList([...list]);

      let temp = toJS(myData.dataObj).slide_list[index];
      rollbackBanner(temp);
    };

    const update = (e) => {
      let list = [...editable];

      // if (scheduled) {
      //   setStartDate(convertToZuluTime(startDate, startTime));
      //   setEndDate(convertToZuluTime(endDate, endTime));
      // }

      const obj = {
        image: `${countriesGloabalData[curCountry].imagePrefix}/${curName}-xxx.jpg`,
        banner_name: curName,
        ctaText: ctaText,
        ctaURL: ctaUrl,
        scheduled: scheduled,
        tycTitle: tycTitle,
        tycType: tycType,
        startDate: startDate,
        endDate: endDate,
      };
      let val = validate(obj, validators);

      if (!val.length) {
        setImage(
          `${countriesGloabalData[curCountry].imagePrefix}/${curName}-xxx.jpg`
        );

        axios
          .put(
            `${
              process.env.REACT_APP_SERVER || "http://localhost:5001"
            }/${country.split("-")[0].toLocaleLowerCase()}/${banner._id}`,
            {
              bannerToUpdate: obj,
            }
          )
          .then((res) => {
            setShowToast(true);
            setToastMessage({
              code: "success",
              message: "Perfect! The Changes has been saved!",
            });
            // console.log(res.data);
            myData.updateData(res.data);
            // setConfirmFlag(!confirmFlag);
            // resetFields();
          })
          .catch((err) => {
            setShowToast(true);
            setToastMessage({
              code: "error",
              message: "Error! The data couldn't be saved. please try again...",
            });
            console.log(err);
          });
      } else {
        alert("fuck yourself");
        console.log(val);
        e.preventDefault();
        return;
      }

      list[index] = false;
      setEditList([...list]);
      e.preventDefault();
    };

    function rollbackBanner(banner) {
      setCtaText(banner.ctaText);
      setCtaURL(banner.ctaUrl);
      setTycType(banner.tycType);
      setTycTitle(banner.tycTitle);
      setScheduled(banner.scheduled);
      setStartDate(banner.startDate);
      setEndDate(banner.endDate);
    }

    useEffect(() => {
      // Update state when props change
      setImage(banner.image || "");
      setCurName(banner.banner_name || "");
      setCtaText(banner.ctaText || "");
      setCtaURL(banner.ctaURL || "");
      setTycTitle(banner.tycTitle || "");
      setTycType(banner.tycType);
      setScheduled(banner.scheduled || false);
      setStartDate(banner.startDate || "");
      setEndDate(banner.endDate || "");
    }, [banner]);

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

      // console.log(ctaUrl);
    };

    const defaultTycType = () => {
      switch (banner.tycType) {
        case "":
        default:
          return "0";
        case "sport":
          return "1";
        case "casino":
          return "2";
        case "special":
          return "3";
      }
    };

    const tycTypeHandler = (e) => {
      let value = e.target.value;

      switch (value) {
        case "0":
          setTycType("");
          setTycTitle("");
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

    return (
      <>
        <InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="Image"
            className="mb-3"
          >
            <Form.Control disabled value={image || ""} type="text" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Banner name">
            <Form.Control
              disabled={bannerDisabled}
              value={curName}
              type="text"
              placeholder="."
              onChange={(e) => setCurName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="CTA Text">
            <Form.Select
              disabled={bannerDisabled}
              onChange={ctaHandler}
              value={ctaText.includes("strate") ? "0" : "1"}
            >
              {countriesGloabalData[curCountry].ctaURLs.map((cta, k) => (
                <option key={k} value={`${k}`}>
                  {cta.name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="CTA Url">
            <Form.Control disabled value={ctaUrl || ""} type="text" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="TyC Type">
            {!bannerDisabled ? (
              <Form.Select
                onChange={tycTypeHandler}
                defaultValue={defaultTycType()}
              >
                <option value="0">No TYC</option>
                <option value="1">Sport</option>
                <option value="2">Casino</option>
                <option value="3">Special</option>
              </Form.Select>
            ) : (
              <Form.Control
                disabled={bannerDisabled}
                value={tycType || "No TyC"}
                type="text"
                placeholder="."
                onChange={(e) => tycTypeHandler(e)}
              />
            )}
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Tyc Title">
            <Form.Control
              disabled={bannerDisabled || !tycType}
              value={tycTitle}
              type="text"
              placeholder="."
              onChange={(e) => setTycTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Is Scheduled?">
            {!bannerDisabled ? (
              <Form.Select
                onChange={(e) => {
                  setScheduled(e.target.value === "1");
                  if (e.target.value === "2") {
                    setStartDate("");
                    setEndDate("");
                  }
                }}
                defaultValue={scheduled ? "1" : "2"}
              >
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            ) : (
              <Form.Control
                disabled={bannerDisabled}
                value={scheduled}
                type="text"
                placeholder="."
                onChange={(e) => setScheduled(e.target.value)}
              />
            )}
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Start Date">
            <Form.Control
              disabled={bannerDisabled || !scheduled}
              value={startDate}
              type="text"
              placeholder="."
              onClick={() => setShowCalendar(!showCalendar)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="End Date">
            <Form.Control
              disabled={bannerDisabled || !scheduled}
              value={endDate}
              type="text"
              placeholder="."
              onClick={() => setShowCalendar(!showCalendar)}
            />
          </FloatingLabel>
          {/* {showCalendar && ( */}
          <Modal
            // backdrop="static"
            // keyboard={false}
            className="edit-modal"
            show={showCalendar}
            onHide={() => setShowCalendar(false)}
          >
            <Modal.Body>
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
            </Modal.Body>
            <Button
              disabled={!startDate || !endDate}
              onClick={() => {
                setStartDate(convertToZuluTime(startDate, startTime));
                setEndDate(convertToZuluTime(endDate, endTime));
                setShowCalendar(false);
              }}
            >
              Close
            </Button>
          </Modal>
          {!bannerDisabled && (
            <ButtonGroup>
              <button className="help-button" onClick={(e) => update(e)}>
                <span className="bi bi-pencil-square"></span>
                <span className="help-text">Update</span>
              </button>
              <button className="help-button" onClick={cancel}>
                <span className="bi bi-x-circle"></span>
                <span className="help-text">Cancel</span>
              </button>
            </ButtonGroup>
          )}
        </InputGroup>
      </>
    );
  }
);
export default Banner;
