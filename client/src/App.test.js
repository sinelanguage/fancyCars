import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("can add two numbers!", () => {
  expect(1 + 1).to.equal(2);
});
