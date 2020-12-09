import React, { Component } from 'react'
import "../css/app.css"

export default class Button extends Component {


  handleClick() {
    const { disabled, onClick } = this.props;
    if (onClick && !disabled) this.props.onClick();
  }

  render() {
    const cssButtonClass = this.props.disabled ? "button disabled" : "button";
    return (
      <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    )
  }
}
