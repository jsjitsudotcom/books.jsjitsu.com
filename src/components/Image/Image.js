import { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ProgressiveImage extends PureComponent {
  state = {
    loading: false,
    error: false
  };

  componentDidMount() {
    this.setState({ loading: true });

    const Img = new Image(100, 200);

    Img.onerror = () => {
      this.setState({ error: true, loading: false });
      this.props.onError();
    };

    Img.onload = () => {
      this.setState({ loading: false });
    };

    Img.src = this.props.src;
  }

  render() {
    return this.props.children(
      this.props.src,
      this.state.loading,
      this.state.error
    );
  }
}

ProgressiveImage.propTypes = {
  src: PropTypes.string,
  onError: PropTypes.func
};

ProgressiveImage.defaultProps = {
  onError: () => false,
  children: () => false
};
