```js
import React from 'react';
import ReactDom from 'react-dom';
import { Block } from 'zdw-biz';

ReactDom.render(
  <Block title="momo" subTitle="你好" withLine extra={<div>你好</div>}>
    <div>你好</div>
  </Block>, document.getElementById('root'));
```
