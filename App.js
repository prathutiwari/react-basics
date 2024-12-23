/**
 *  <div id="parent">
 *        <div id="child">
 *             <h1>This is Child heading</h1>
 *        </div>
 *        <div id="child2">
 *             <h1>This is Child heading</h1>
 *        </div>
 *   </div>
 *
 */

const parent = React.createElement("div", { id: "parent" },
     [
        React.createElement("div", { id: "child" },
             [React.createElement("h1", {}, "This is Child heading1"), React.createElement("h2", {}, "This is Child heading 2")]),
             React.createElement("div", { id: "child2"},
                  [React.createElement("h1", {}, "This is Child heading1"), React.createElement("h2", {}, "This is Child heading 2")])
   ]
   );
   
   const heading = React.createElement(
     "h2",
     { id: "heading", class: "grid" },
     "Hello from React"
   );
   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   root.render(parent);
   