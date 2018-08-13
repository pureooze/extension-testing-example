import chrome from "./mocks.js";
import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { configure, mount, render, shallow } from "enzyme";
import Main from "../src/example/index.jsx";
import { Adapter } from "enzyme-adapter-preact";

configure({ adapter: new Adapter() });

test("should render", () => {
  chrome.runtime.getURL.returns("http://localhost/popup-content.html");
  const wrapper = mount(<Main />);
  expect(wrapper.children()).toBe();
});
