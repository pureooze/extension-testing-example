import Main from "src/example/index.jsx";
import { render } from "preact-render-spy";
import { h } from "preact";

describe("Main component ", () => {
  it("should rendered", () => {
    const props = {};
    const mainComponentRender = render(<Main {...props} />);
  });
});
