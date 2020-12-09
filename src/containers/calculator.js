import React, { Component } from 'react'
import Display from '../components/display'
import Button from '../components/button'

export default class Calculator extends Component {

  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    operator2: 1,
    isSum: false,
    isMult: false,
  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  putValue = (value) => {
    const lastValue = this.state.operator === 1 ? this.state.firstValue : this.state.secondValue;
    switch (this.state.operator) {
      case 1: this.setState({
        firstValue: (lastValue * 10) + value
      })
        break;
      case 2: this.setState({
        secondValue: (lastValue * 10) + value
      })
        break;
    }
  }

  getValue = () => {
    const { firstValue, secondValue, isSum, operator, isMult, operator2 } = this.state

    console.log(operator2)

    switch (operator) {
      case 1: return firstValue;
      case 2: return secondValue;
      case 3: switch (operator2) {
        case 1: return isSum ? firstValue + secondValue : firstValue - secondValue;
        case 2: return isMult ? firstValue * secondValue : firstValue / secondValue;
        case 3: return firstValue * firstValue;
        default:
          return null;
      }

      default:
        return null;
    }

  }

  pickOperation = (isSum, isMult) => {
    this.setState({
      operator: 2,
      isSum: isSum,
      isMult: isMult,
      operator2: isSum ? 1 : 2
    })
  }

  execOperation = () => {
    this.setState({
      operator: 3
    })
  }

  clear = () => {
    this.setState(this.initialState);
  }

  squared = () => {
    this.setState({
      operator: 3,
      operator2: 3
    })
  }

  render() {
    const { operator } = this.state;
    return (
      <div className={"calculator"}>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={"buttonsContainer"}>
          <Button display={"1"} onClick={() => this.putValue(1)} disabled={operator === 3} />
          <Button display={"2"} onClick={() => this.putValue(2)} disabled={operator === 3} />
          <Button display={"3"} onClick={() => this.putValue(3)} disabled={operator === 3} />
          <Button display={"4"} onClick={() => this.putValue(4)} disabled={operator === 3} />
          <Button display={"5"} onClick={() => this.putValue(5)} disabled={operator === 3} />
          <Button display={"6"} onClick={() => this.putValue(6)} disabled={operator === 3} />
          <Button display={"7"} onClick={() => this.putValue(7)} disabled={operator === 3} />
          <Button display={"8"} onClick={() => this.putValue(8)} disabled={operator === 3} />
          <Button display={"9"} onClick={() => this.putValue(9)} disabled={operator === 3} />
          <Button display={"0"} onClick={() => this.putValue(0)} disabled={operator === 3} />
          <Button display={"+"} onClick={() => this.pickOperation(true, false)} disabled={operator !== 1} />
          <Button display={"-"} onClick={() => this.pickOperation(false, false)} disabled={operator !== 1} />
          <Button display={"x"} onClick={() => this.pickOperation(false, true)} disabled={operator !== 1} />
          <Button display={"÷"} onClick={() => this.pickOperation(false, false)} disabled={operator !== 1} />
          <Button display={"x²"} onClick={() => this.squared()} disabled={operator !== 1} />
          <Button display={"="} onClick={() => this.execOperation()} disabled={operator === 1} />
          <Button display={"C"} onClick={() => this.clear()} />
        </div>
      </div>
    )
  }
}
