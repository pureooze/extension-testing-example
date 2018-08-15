import { Component, h } from "preact";

export default class Url extends Component {
  constructor(props) {
    super(props);

    this.state = {
      site: "aaasd"
    };
  }

  componentWillMount() {
    const site = this.props.getUrl();
    this.setState({
      site
    });
  }

  handleClick() {
    this.setState({
      site: "clicked"
    });
  }

  render() {
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
