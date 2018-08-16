import { Component, h } from "preact";
export default class Url extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: ""
    };
  }
  async componentWillMount() {
    const site = await this.props.getTopSites();
    this.setState({
      site
    });
  }
  render() {
    chrome.extension.getBackgroundPage().console.log(this.state.site);
    return <b>{this.state.site}</b>;
  }
}
