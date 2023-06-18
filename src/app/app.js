import AlertService from "./alert.service";
import ComponentService from "./component.service";
import inputsAreValid from "./utils/inputs-are-valid";
import parseInputs from "./utils/parse-inputs";
import webpackImg from "../assets/webpack.svg";

const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

run(alertService, componentService);

const image = document.getElementById("webpackImg");
image.src = webpackImg;
image.alt = "webpack image";
