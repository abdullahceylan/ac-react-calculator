import React, { PureComponent } from 'react';
import Screen from '../Screen';
import LastOperation from '../LastOperation';
import Button from '../Button';
import {
  CalculatorWrapper,
  ButtonList,
  Row,
  Left,
  Right,
  ButtonContainer,
} from './Calculator.styles';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: '0',
      operatorFlag: false,
      decimalFlag: false,
      animateNumber: false,
      lastProcess: '',
    }
  }

  getButtonValues = (type = 'left') => {
    const colors = {
      orange: '#ff8d3a',
      orangeLinear: 'linear-gradient(to bottom, #ff8d3a, #fd6c1b)',
      pink: '#fd2283',
      pinkLinear: 'linear-gradient(to bottom, #fd2283, #fb0f4c)',
      red: '#fb155D', 
    };
  
    const values = {
      top: [
        { id: 'clear', value: 'C', isOval: true, backgroundColor: '#fff', textColor: colors.red },
        { id: 'percentage', value: '%', isOval: true, backgroundColor: colors.orange, backgroundImage: colors.orangeLinear },
        { id: 'divide', value: '/', isOval: true, backgroundColor: colors.orange, backgroundImage: colors.orangeLinear },
        { id: 'multiply', value: '*', display: 'x', isOval: true, backgroundColor: colors.orange, backgroundImage: colors.orangeLinear },
      ],
      left: [
        { id: 'one', value: '1' },
        { id: 'two', value: '2' },
        { id: 'three', value: '3' },
        { id: 'four', value: '4' },
        { id: 'five', value: '5' },
        { id: 'six', value: '6' },
        { id: 'seven', value: '7' },
        { id: 'eight', value: '8' },
        { id: 'nine', value: '9' },
        { id: 'remove', value: '←', isOval: true, backgroundColor: '#34386A' },
        { id: 'zero', value: '0' },
        { id: 'decimal', value: '.' },
      ],
      right: [
        { id: 'add', value: '+', isOval: true, backgroundColor: colors.orange, backgroundImage: colors.orangeLinear },
        { id: 'subtract', value: '-', isOval: true, backgroundColor: colors.orange, backgroundImage: colors.orangeLinear },
        { id: 'equals', value: '=', isLong: true, backgroundColor: colors.pink, backgroundImage: colors.pinkLinear },
      ],
    };

    return values[type];
  }

  handleButtonClick = (buttonValue) => {
		console.log("​Calculator -> handleButtonClick -> button", buttonValue)
    // const buttonValue = button.value;
    let lastOperation = this.state.lastOperation;
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;
    let decimalFlag = this.state.decimalFlag;
    let animateNumber = false;
  
    // console.log('buttonValue', buttonValue);
    switch (buttonValue) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9': {
        if (this.state.currentNumber !== '0') {
          currentNumber += buttonValue;
          operatorFlag = false;
        } else {
          currentNumber = buttonValue;
        }
        break;
      }
      case '*':
      case '+':
      case '-':
      case '/':
      case '%': {
        if (!this.state.operatorFlag) {
          currentNumber += buttonValue;
          operatorFlag = buttonValue;
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length-1);
          currentNumber = newNumber + buttonValue;
        }
        break;
      }
      case 'C':
        lastOperation = '';
        currentNumber = '0';
        break;
      case '=':
        lastOperation = currentNumber;
        currentNumber = currentNumber.includes('.') ? eval(currentNumber).toFixed(2) : eval(currentNumber);
        
        break;
      case '.':
        if (!this.state.decimalFlag) {
          currentNumber += '.';
          decimalFlag = true;
        }
        break;
      case '←':
        const newNumber = currentNumber.length > 1 ? currentNumber.slice(0, currentNumber.length-1) : '0';
        currentNumber = newNumber;
        // lastOperation = currentNumber === '0' ? '' : lastOperation;
        break;
      default:
        break;
    }

    animateNumber = true;
    
    this.setState({ currentNumber, operatorFlag, decimalFlag, animateNumber, lastOperation });

  }
  
  render() {
    return (
      <CalculatorWrapper>
        <LastOperation operation={this.state.lastOperation} />
        <Screen currentNumber={this.state.currentNumber} isAnimated={this.state.animateNumber} />
        <ButtonList>
          <Row>
            <ButtonContainer>
              { this.getButtonValues('top').map(b => (
                <Button key={b.id} {...b} onClick={() => this.handleButtonClick(b.value)} />
              ))}
            </ButtonContainer>
          </Row>
          <Row>
            <Left>
              <ButtonContainer>
                { this.getButtonValues('left').map(b => (
                  <Button key={b.id} {...b} onClick={() => this.handleButtonClick(b.value)} />
                ))}
              </ButtonContainer>
            </Left>
            <Right marginLeft="11px">
              <ButtonContainer>
                { this.getButtonValues('right').map(b => (
                  <Button key={b.id} {...b} onClick={() => this.handleButtonClick(b.value)} noMargin />
                ))}
              </ButtonContainer>
            </Right>
          </Row>
        </ButtonList>
      </CalculatorWrapper>
    )
  }
}

export default Calculator;
