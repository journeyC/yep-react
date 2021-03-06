---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import './demo.css';
import {NumberKeyboard, InputItem, Button, WhiteSpace} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      KeyboardStatus: false,
      theme: 'default',
      numberValue: '',
    };
  }

  inputValue = value => {
    let oriValue = this.state.numberValue;
    this.setState({
      numberValue: oriValue + value,
    });
  };

  deleteValue = () => {
    let oriValue = this.state.numberValue;
    this.setState({
      numberValue: oriValue.substring(0, oriValue.length - 1),
    });
  };

  showKeyboard = () => {
    document.addEventListener('click', this.hideKeyboard);
    this.setState({
      KeyboardStatus: true,
    });
  };

  hideKeyboard = () => {
    document.removeEventListener('click', this.hideKeyboard);
    this.setState({
      KeyboardStatus: false,
    });
  };

  showDefault = () => {
    this.setState({
      showTitle: false,
      theme: 'default',
    });
    this.showKeyboard();
  };

  showCustom = () => {
    this.setState({
      showTitle: false,
      theme: 'custom',
    });
    this.showKeyboard();
  };

  showPassword = () => {
    this.setState({
      showTitle: false,
      theme: 'password',
    });
    this.showKeyboard();
  };

  showTitle = () => {
    this.setState({
      showTitle: true,
    });
    this.showKeyboard();
  };

  render() {
    return (
      <div>
        <InputItem value={this.state.numberValue} editable={false} onClick={this.showKeyboard} />
        <div>
          <Button onClick={this.showDefault}>弹出默认键盘</Button>
          <WhiteSpace />
          <Button onClick={this.showPassword}>弹出密码键盘</Button>
          <WhiteSpace />
          <Button onClick={this.showCustom}>弹出自定义键盘</Button>
          <WhiteSpace />
          <Button onClick={this.showTitle}>弹出带标题键盘</Button>
        </div>
        <NumberKeyboard
          show={this.state.KeyboardStatus}
          theme={this.state.theme}
          input={value => {
            this.inputValue(value);
          }}
          delete={() => {
            this.deleteValue();
          }}
          confirm={() => {
            this.hideKeyboard();
          }}
          header={() => {
            if (this.state.showTitle) {
              return (
                <div className="keyboard-title">
                  <span
                    onClick={() => {
                      this.hideKeyboard();
                    }}
                  >
                    完成
                  </span>
                </div>
              );
            } else {
              return <div />;
            }
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
