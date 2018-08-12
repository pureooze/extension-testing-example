const browser = require("sinon-chrome/webextensions");
import Main from "src/example/index.jsx";
import { render } from "preact-render-spy";
import { h } from "preact";

describe("SearchBar component ", () => {
  beforeAll(() => {
    global.browser = browser;
  });

  beforeEach(() => {
    browser.flush();
  });

  it("should be empty when no there is no search string provided", () => {
    const props = {};

    const searchBarRender = render(<Main {...props} />);
  });

  afterAll(() => {
    browser.flush();
    delete global.browser;
  });
});
