---
order: 5
title: 自定义
description: 自定义样式。
---

```js
import React from 'react';
import {Skeleton} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Skeleton height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
          {/* Pure SVG */}
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </Skeleton>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
