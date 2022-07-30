import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default class Scrollbar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderView({ style, ...props }) {
    const viewStyle = {
      backgroundColor: `transparent`,
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `#424242`,
      borderRadius: 5,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  }

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        {...this.props}
      />
    );
  }
}
