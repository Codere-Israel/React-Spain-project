import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  FloatingLabel,
  Form,
  Modal,
} from "react-bootstrap";
// import myData from "../mobX/Store";
// import { toJS } from "mobx";
import { observer } from "mobx-react";

import MySwiper from "./MySwiper";
import axios from "axios";
import { toJS } from "mobx";
import myData from "../mobX/Store";

const Preview = observer(({ country, device, setDevice, display }) => {
  return (
    <>
      {display && (
        <Form>
          <Form.Check
            className="device-switch mt-4 mb-3"
            type="switch"
            checked={device}
            label={device ? "Mobile" : "Desktop"}
            onChange={() => setDevice(!device)}
          ></Form.Check>
        </Form>
      )}

      {display && <MySwiper device={device} />}
    </>
  );
});
export default Preview;
