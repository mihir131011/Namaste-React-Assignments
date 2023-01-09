import React from "react";
import ReactDOM from "react-dom/client";

const headingForReact1 = React.createElement(
  "h1",
  { id: "title", key: "1" },
  "Heading from Parcel"
);
const headingForReact2 = React.createElement(
  "h2",
  { id: "title", key: "2" },
  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  headingForReact1,
  headingForReact2,
]);

const rootForReact = ReactDOM.createRoot(
  document.getElementById("rootForReact")
);
rootForReact.render(container);
