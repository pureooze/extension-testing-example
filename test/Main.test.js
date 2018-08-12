const chrome = require("sinon-chrome/extensions");
import Main from "src/example/index.jsx";
import { render } from "preact-render-spy";
import { h } from "preact";

describe("Main component ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });

  it("should rendered", () => {
    const props = {};
    chrome.runtime.getURL.returns("http://localhost/popup-content.html");
    const mainComponentRender = render(<Main {...props} />);
  });

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });
});
