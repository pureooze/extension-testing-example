import chrome from "./mocks.js";
import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Main from "../src/example/url.jsx";
import { Adapter } from "enzyme-adapter-preact";

configure({ adapter: new Adapter() });

test("should render", () => {
  chrome.runtime.getURL.returns("http://localhost/popup-content.html");
  const wrapper = mount(<Main />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
