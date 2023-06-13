import "./style.css";
import "./images/1.jpg";

const getComponent = async () => {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
};

getComponent().then((component) => {
  document.body.appendChild(component);
});
