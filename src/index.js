import _ from "lodash";
import "./style.css";
import Forest from "./forest.png";
import Data from "./data.xml";
import Notes from "./data.csv";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myPhoto = new Image();
  myPhoto.src = Forest;
  element.appendChild(myPhoto);

  console.log(Data);
  console.log(Notes);

  return element;
};

document.body.appendChild(component());
