import { Toaster as ToastMaker } from "react-hot-toast";

import React from "react";

const Toaster = () => {
  return (
    <ToastMaker
      toastOptions={{
        style: {
          fontSize: "14px",
        },
        success: {
          iconTheme: {
            primary: "#1447e6",
          },
        },
      }}
    />
  );
};

export default Toaster;
