import Main from "src/example/index.jsx";
import { render } from "preact-render-spy";
import { h } from "preact";

describe("SearchBar component ", () => {
  it("should be empty when no there is no search string provided", () => {
    const props = {};

    const searchBarRender = render(<Main {...props} />);
  });
});
