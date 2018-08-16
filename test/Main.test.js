import { h } from "preact";
import { render, cleanup } from "preact-testing-library";
import Main from "@/example/index";
import chrome from "sinon-chrome"; // from 'sinon-chrome'

window.chrome = chrome;

test("should render Main component", () => {
  const { container } = render(<Main />);
  expect(container).toMatchSnapshot();
});
