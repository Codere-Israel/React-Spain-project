import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const Toastify = ({ showToast, setShowToast, toastMessage }) => {
  return (
    <>
      {toastMessage && (
        <Toast
          className={toastMessage.code === "fail" ? "err" : "suc"}
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={4000} // Delay in milliseconds
          autohide
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1,
          }}
        >
          <Toast.Header>
            <strong className="me-auto">
              {toastMessage.code === "fail"
                ? "Oops! Error"
                : "Great, Thank you!"}
            </strong>
          </Toast.Header>
          <Toast.Body>{toastMessage.message}</Toast.Body>
        </Toast>
      )}
    </>
  );
};

export default Toastify;
