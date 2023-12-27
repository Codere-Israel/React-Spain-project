import axios from "axios";
import { useEffect, useState } from "react";
import divider from "../assets/divider.png";
import {
  Button,
  ButtonGroup,
  Container,
  FloatingLabel,
  Form,
  Modal,
} from "react-bootstrap";
import Preview from "./Preview";
import Toastify from "./Toastify";
import myData from "../mobX/Store";
import { observer } from "mobx-react";
import Banner from "./Banner";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Tab from "./Tab";
import AddBanner from "./AddBanner";
import { toJS } from "mobx";
import { ClockLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

const Main = observer(() => {
  const location = useLocation();

  const [navPos, setNavPos] = useState("0");
  const [country, setCountry] = useState(location.pathname.substring(1));

  const [data, setData] = useState(null);
  const [currentList, setCurrentList] = useState([]);
  const [device, setDevice] = useState(false);
  const [confirmFlag, setConfirmFlag] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  // Preview Section \\
  const [display, setDisplay] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");

  const [showList, setShowList] = useState(
    Array(currentList.length).fill(false)
  );

  const [editList, setEditList] = useState(
    Array(currentList.length).fill(false)
  );

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShowNavbar =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;
      setNavPos(currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShow = (index) => {
    let counter = 0;
    editList.forEach((item) => {
      if (item) counter++;
    });
    if (counter >= 1) {
      alert("please finish other changes first");
      return;
    }

    const updatedShowList = [...showList];
    updatedShowList[index] = true;
    setShowList(updatedShowList);
  };

  const handleClose = (index) => {
    const updatedShowList = [...showList];
    updatedShowList[index] = false;
    setShowList(updatedShowList);
  };

  const displayHandler = () => {
    setDisplay(!display);
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scrolls to the bottom of the page
      behavior: "smooth", // Adds smooth scrolling behavior
    });
  };

  const publish = () => {
    if (
      confirmInput ===
      `${country.split("-")[0].substring(0, 2).toUpperCase()}-CONFIRM`
    ) {
      // alert("good");
      axios
        .post(
          `${process.env.REACT_APP_SERVER}/${country
            .split("-")[0]
            .toLowerCase()}/publish`,
          { bannerList: toJS(myData.dataObj).slide_list }
        )
        .then((res) => {
          console.log(res.data);
          alert("thank you");
          window.location.reload();
        })
        .catch((err) => console.log(err));
      setShowPublishModal(false);
      setConfirmInput("");
    } else {
      alert("bad");
      setConfirmInput("");
    }
  };

  const editableHandler = (index) => {
    const updatedEditableList = [...editList];
    // setEdit(true);

    if (editList[index]) {
      updatedEditableList[index] = !updatedEditableList[index];
      setEditList(updatedEditableList);
      return;
    }

    let counter = 0;
    editList.forEach((item) => {
      if (item) counter++;
    });
    if (counter >= 1) {
      alert("please finish other changes first");
      return;
    }

    updatedEditableList[index] = !updatedEditableList[index];
    setEditList(updatedEditableList);
  };

  const deleteFromDB = (banner_name) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/${country
          .split("-")[0]
          .toLocaleLowerCase()}/del`,
        {
          bannerToDelete: banner_name,
        }
      )
      .then((res) => {
        setShowToast(true);
        setToastMessage({
          code: "success",
          action: "delete",
          message: `${banner_name} has been deleted. thank you`,
        });
        console.log(res);
      })
      .catch((err) => {
        setShowToast(true);
        setToastMessage({
          code: "fail",
          action: "delete",
          message: `${banner_name} was not deleted...`,
        });
      });
  };

  const fetchFromDB = () => {
    setShowSpinner(true);
    axios
      .get(
        `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/${country
          .split("-")[0]
          .toLocaleLowerCase()}`
      )
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);

        myData.updateData(res.data[0]);
        setShowSpinner(false);
      })
      .catch((err) => {
        console.log(err);
        setShowSpinner(false);
      });
  };

  const updateDB = (data) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/${country
          .split("-")[0]
          .toLocaleLowerCase()}/update`,
        {
          updatedObject: data,
        }
      )
      .then((res) => {
        setToastMessage({
          code: "success",
          message: "Database has been successfully updated!",
        });
        setShowToast(true);
      })
      .catch((err) => {
        setToastMessage({
          code: "fail",
          message: "Failed to update Database...!",
        });

        setShowToast(true);
        console.log(err);
      });
  };

  useEffect(() => {
    myData.updateCountry(country);

    if (country) fetchFromDB();
    console.log(toJS(myData.dataObj.slide_list));
  }, [country, confirmFlag]);

  useEffect(() => {
    // console.log("data changed >>");
    // console.log(data);
    if (data) {
      // setCurrentList(
      //   !device ? [...data.desktop_slide_list] : [...data.mobile_slide_list]
      // );

      setCurrentList([...data.slide_list]);
    } else setCurrentList([]);
  }, [data, country, device]);

  // Functions

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const reorderedItems = Array.from(data.slide_list);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setCurrentList(reorderedItems);
    const obj = {
      slide_list: reorderedItems,
    };

    setData({ ...obj });
    myData.updateData(obj);
    updateDB(obj);
  };

  const generateForm = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {currentList.map((cur_banner, k) => (
                <Draggable
                  key={cur_banner.banner_name}
                  draggableId={cur_banner.banner_name}
                  index={k}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="form-line">
                        <Form key={k}>
                          {/* <h1>{cur_banner.banner_name}</h1> */}
                          <Banner
                            index={k}
                            device={device}
                            editable={editList}
                            setEditList={setEditList}
                            banner={cur_banner}
                            country={country}
                            setShowToast={setShowToast}
                            setToastMessage={setToastMessage}
                          />
                        </Form>
                        {!editList[k] && (
                          <ButtonGroup>
                            <button
                              className="help-button"
                              onClick={() => editableHandler(k)}
                            >
                              <span className="bi bi-pencil-square"></span>
                              <span className="help-text">Edit</span>
                            </button>

                            <button
                              className="help-button"
                              onClick={() => handleShow(k)}
                            >
                              <span className="bi bi-trash3"></span>
                              <span className="help-text">Remove</span>
                            </button>
                          </ButtonGroup>
                        )}
                      </div>
                      <Modal show={showList[k]} onHide={() => handleClose(k)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Wait a Second !!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you're going to delete{" "}
                          {cur_banner.banner_name}
                          ?!
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              deleteFromDB(cur_banner.banner_name);
                              fetchFromDB();
                              handleClose(k);
                            }}
                          >
                            Yes, Ido
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => handleClose(k)}
                          >
                            No, Take me back!
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  useState(() => {
    console.log(navPos);
  }, [navPos]);

  return (
    <>
      <div className="main-comp">
        <div
          className={"anav-up"}
          style={{ color: "#fff", transform: `translateY(-${navPos}px)` }}
        >
          <Tab setCountry={setCountry} editList={editList} />
          <div className="avner" />
        </div>

        {country.length > 1 ? (
          <div>
            <AddBanner
              country={country}
              confirmFlag={confirmFlag}
              setConfirmFlag={setConfirmFlag}
              display={display}
              setShowToast={setShowToast}
              setToastMessage={setToastMessage}
            />
            <hr />
            {showSpinner ? (
              <div>
                <ClockLoader cssOverride={{ margin: "auto" }} color="#39474b" />
              </div>
            ) : (
              <Container className="form-cont mt-3">
                {currentList.length > 0 && <>{generateForm()}</>}
              </Container>
            )}
          </div>
        ) : (
          <div className="mt-5">
            <h1>Welcome!</h1>
            <h3>Select the Country you seek to edit </h3>
            <h5>Have fun! </h5>
          </div>
        )}
        {currentList && country.length > 1 && (
          <div className={display ? "display-on" : "display-off"}>
            <ButtonGroup className="mt-5">
              {currentList.length > 0 ? (
                <Button className="gui-btn" onClick={() => displayHandler()}>
                  <span className={`bi bi-eye${display ? "-slash" : ""}`} />{" "}
                  {display ? "Hide" : "Preview"}
                </Button>
              ) : (
                <h2>No Banners to diaplay, add one to start</h2>
              )}
              {display && (
                <Button
                  onClick={() => setShowPublishModal(true)}
                  className="gui-btn publish-btn"
                >
                  Publish {country.split("-")[0]}
                </Button>
              )}
            </ButtonGroup>
            <Preview
              country={country}
              device={device}
              setDevice={setDevice}
              display={display}
            />
            <Modal
              centered
              show={showPublishModal}
              onHide={() => setShowPublishModal(false)}
              contentClassName="confirm-modal"
            >
              <Modal.Header closeButton>
                <span
                  className={`modal-flag fi fi-${country.split("-")[1]}`}
                ></span>

                <Modal.Title>Publish {country.split("-")[0]}!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p>
                    Are you absolutely sure and <b>ready</b> for publish?
                  </p>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Insert CONFIRM in order to go live!"
                    className="mb-3"
                  >
                    <Form.Control
                      value={confirmInput}
                      type="text"
                      onChange={(e) => setConfirmInput(e.target.value)}
                      placeholder="."
                    />
                  </FloatingLabel>
                  <p>
                    if you ready, please insert{" "}
                    <b>
                      {country.split("-")[0].substring(0, 2).toUpperCase()}
                      -CONFIRM
                    </b>
                    , then click publish
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={publish} className="modal-confirm-btn">
                  Publish {country}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
      <Toastify
        showToast={showToast}
        setShowToast={setShowToast}
        toastMessage={toastMessage}
      />
    </>
  );
});

export default Main;
