import React, { Component } from 'react'

class Display extends Component {
  render() {
    const cssDisplay = this.props.value !== Infinity ? "display" : "display infinity"
    return (
      <div className={cssDisplay}>
        {this.props.value}
      </div>
    )
  }
}

export default Display;