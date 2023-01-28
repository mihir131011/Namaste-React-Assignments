import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div style={{ height: "50px", width: "100vw", backgroundColor: "#292929" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={require("./images/react.png")}
          alt="logo"
          style={{ height: "30px", width: "30px", margin: "20px" }}
        />

        <input
          type="text"
          placeholder="Search"
          style={{
            width: "200px",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            height: "70%",
          }}
        />

        <img
          src={require("./images/user.png")}
          alt="logo"
          style={{ height: "30px", width: "30px", margin: "20px" }}
        ></img>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
