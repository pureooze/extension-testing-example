import chrome from "./mocks.js";
import { render, mount } from "enzyme";
import { deep as deepPreact } from "preact-render-spy";
import { Component, h } from "preact";
import Main from "src/example/index.jsx";
import jasmineEnzyme from "jasmine-enzyme";

describe("Main component ", () => {
  beforeEach(() => {
    chrome.flush();
    jasmineEnzyme();
  });

  //   it("should rendered", async () => {
  //     chrome.runtime.getURL.returns("http://localhost/popup-content.html");
  //     const mainComponentRender = await mount(<Main />);
  //     mainComponentRender.forceUpdate();
  //     mainComponentRender.update();
  //     expect(mainComponentRender.text()).toContain("asdsad");
  //   });

  it("lets you do cool things with preact components", async () => {
    chrome.runtime.getURL.returns("http://localhost/popup-content.html");
    const context = deepPreact(<Main />);
    await context.rerender();

    context.find("[onClick]").simulate("click");

    expect(context.state()).toEqual({
      site: "http://localhost/popup-content.html"
    });
    expect(context.text()).toContain("asdsad");
  });

  //   it("MySharona", async () => {
  //     class MySharona extends Component {
  //       constructor(props) {
  //         super(props);
  //         this.state = { mounted: false };
  //       }
  //       componentDidMount() {
  //         this.setState({ mounted: true });
  //       }
  //       render() {
  //         return <div>{this.state.mounted ? "a" : "b"}</div>;
  //       }
  //     }

  //     const mainComponentRender = await mount(<MySharona />);
  //     await mainComponentRender.update();
  //     expect(mainComponentRender.find("div").text()).toEqual("a");
  //     expect(mainComponentRender.state("mounted")).toEqual("a");
  //   });

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });
});
