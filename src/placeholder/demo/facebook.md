---
order: 0
title: Facebook Style
description:
---

```js
import React from 'react';
import {Placeholder} from '@jdcfe/lrc-m';
const {FacebookStyle} = Placeholder;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <FacebookStyle />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```