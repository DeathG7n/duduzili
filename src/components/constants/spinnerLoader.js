import React from "react";
import {Rings} from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0 0 0/ 0.7)",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "10",
        alignItems: "center",
        display: "flex",
        justifyContent:"center",
      }}
    >
      {/* <div style={{}}> */}
        <Rings
          type="Puff"
          color="#29bb89"
          height={100}
          width={100}
        //   timeout={3000}
        />

      {/* </div> */}
    </div>
  );
};

export default SpinnerLoader;
