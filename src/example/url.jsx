import React from "react";

export default class Url extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructing");
    this.state = {
      site: "aaasd"
    };
  }

  async componentWillMount() {
    const site = await chrome.runtime.getURL("popup-content.html");
    console.log("site: ", site);
    this.setState({
      site
    });
  }

  handleClick() {
    console.log("clicked");
    this.setState({
      site: "clicked"
    });
  }

  render() {
    console.log("Render: ", this.state.site);
    return (
      <div
        id="site-label"
        onCLick={() => {
          this.handleClick();
        }}
      >
        {this.state.site}
      </div>
    );
  }
}
