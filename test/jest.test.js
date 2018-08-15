import chrome from "./mocks.js";
import { h } from "preact";
import {
  render,
  fireEvent,
  flushPromises,
  cleanup
} from "preact-testing-library";
import Main from "../src/example/index.jsx";

afterEach(cleanup);

test("should allow clicking button ", async () => {
  const EXPECTED_URL = "http://localhost/popup-content.html";
  const getUrl = function getUrl() {
    return chrome.runtime.getURL("popup-content.html");
  };

  chrome.runtime.getURL.returns(EXPECTED_URL);
  const { container, debug, getByText } = render(<Main getUrl={getUrl} />);
  expect(getByText("Click Button")).toMatchSnapshot();
  fireEvent.click(getByText("Click Button"), "click");
  await flushPromises();

  expect(container).toMatchSnapshot();
});
