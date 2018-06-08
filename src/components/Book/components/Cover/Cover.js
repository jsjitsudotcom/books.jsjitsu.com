import React, { Component } from "react";
import Style from "./Cover.scss";
import Image from "./../../../Image/Image";

const Wrapper = Children => ({ src = "" }) => (
  <div className={Style.cover} style={{ backgroundImage: `url(${src})` }}>
    <Children />
    <div className={Style.coverSize} />
  </div>
);

const Loading = Wrapper(() => <div>...loading</div>);
const Error = Wrapper(() => <div>...error</div>);
const Img = Wrapper(() => null);

class Cover extends Component {
  render() {
    return (
      <Image src={this.props.cover}>
        {(src, loading, error) =>
          error ? <Error /> : loading ? <Loading /> : <Img src={src} />
        }
      </Image>
    );
  }
}

export default Cover;
