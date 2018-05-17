---
order: 4
title: BulletList Style
description:
---

```js
import React from 'react';
import {Placeholder} from '@jdcfe/lrc-m';
const {BulletListStyle} = Placeholder;

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <BulletListStyle />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```