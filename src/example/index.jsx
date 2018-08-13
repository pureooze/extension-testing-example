import { Component, h } from "preact";
import Url from "./url.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // let changeColor = document.getElementById("changeColor");
    // chrome.storage.sync.get("color", function(data) {
    //   changeColor.style.backgroundColor = data.color;
    //   changeColor.setAttribute("value", data.color);
    // });
  };

  handleClick = () => {
    let color = "fafafa";
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.executeScript(tabs[0].id, {
    //     code: 'document.body.style.backgroundColor = "' + color + '";'
    //   });
    // });
  };

  render() {
    return (
      <div>
        <button id="changeColor" onClick={this.handleClick} />
        <Url getTopSites={this.props.getTopSites} />
      </div>
    );
  }
}
