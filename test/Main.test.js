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

  it("should rendered", () => {
    const props = {};

    const mainComponentRender = render(<Main {...props} />);
  });

  afterAll(() => {
    browser.flush();
    delete global.browser;
  });
});
