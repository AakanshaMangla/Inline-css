//Inline CSS Styling(used because it is flexible at making changes)
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  border: "1px solid black",
  fontSize: "20px" //since JS therefore used camelcasing and initialized everything as string
};

//made Javascript object and done css like this

customStyle.color = "blue";
//whenever sometime in future we want to make some changes in inline css we can simply do like this for eg here we changed color

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
