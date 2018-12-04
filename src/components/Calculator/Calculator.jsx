import React, { PureComponent } from 'react';
import Screen from '../Screen';
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
  state = {
    currentNumber: '0',
  }

  getButtonValues = (type = 'left') => {
    const colors = {
      orange: '#ff8d3a',
      pink: '#fd2283',
      red: '#fb155D', 
    };
  
    const values = {
      top: [
        { id: 'clear', value: 'C', isOval: true, backgroundColor: '#fff', textColor: colors.red },
        { id: 'percentage', value: '%', isOval: true, backgroundColor: colors.orange },
        { id: 'divide', value: '/', isOval: true, backgroundColor: colors.orange },
        { id: 'multiply', value: 'x', isOval: true, backgroundColor: colors.orange },
      ],
      left: [
        { id: 'zero', value: '0' },
        { id: 'one', value: '1' },
        { id: 'two', value: '2' },
        { id: 'three', value: '3' },
        { id: 'four', value: '4' },
        { id: 'five', value: '5' },
        { id: 'six', value: '6' },
        { id: 'seven', value: '7' },
        { id: 'eight', value: '8' },
        { id: 'nine', value: '9' },
        { id: 'decimal', value: '.' },
      ],
      right: [
        { id: 'add', value: '+', isOval: true, backgroundColor: colors.orange },
        { id: 'subtract', value: '-', isOval: true, backgroundColor: colors.orange },
        { id: 'equals', value: '=', isLong: true, backgroundColor: colors.pink },
      ],
    };

    return values[type];
  }

  handleButtonClick = (e) => {
    
  }
  
  render() {
    return (
      <CalculatorWrapper>
        <Screen currentNumber={this.state.currentNumber} />
        <ButtonList>
          <Row>
            <ButtonContainer>
              { this.getButtonValues('top').map(b => (
                <Button key={b.id} {...b} onClick={this.handleButtonClick} />
              ))}
            </ButtonContainer>
          </Row>
          <Row>
            <Left>
              <ButtonContainer>
                { this.getButtonValues('left').map(b => (
                  <Button key={b.id} {...b} onClick={this.handleButtonClick} />
                ))}
              </ButtonContainer>
            </Left>
            <Right marginLeft="11px">
              <ButtonContainer>
                { this.getButtonValues('right').map(b => (
                  <Button key={b.id} {...b} onClick={this.handleButtonClick} noMargin />
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
