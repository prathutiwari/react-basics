import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="heading" tabIndex="5">
    Namaste React🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading2">Here is our Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
