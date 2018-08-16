import { h } from "preact";
import { render, cleanup } from "preact-testing-library";
import Main from "@/example/index";
import chrome from "sinon-chrome"; // from 'sinon-chrome'

window.chrome = chrome;

test("should render Main component", () => {
  const getUrl = function() {
    return chrome.runtime.getURL("popup-content.html");
  };

  chrome.runtime.getURL.returns("http://localhost:1234/index.html");
  const { container } = render(<Main getUrl={getUrl} />);
  expect(container).toMatchSnapshot();
});
