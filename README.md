# runkit-embed-react

> Runkit Embed on react

[![NPM](https://img.shields.io/npm/v/runkit-embed-react.svg)](https://www.npmjs.com/package/runkit-embed-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Install the package using npm or yarn.

```bash
npm install --save runkit-embed-react
yarn add runkit-embed-react
```

Add the Runkit embed script to your page.

```html
<head>
  <script src="https://embed.runkit.com"></script>
</head>
```

## Usage

```jsx
import React from 'react';

import Embed from 'runkit-embed-react';

class Example extends React.Component {
  render() {
    return <Embed source={`console.log("Hello World!")`} />;
  }
}
```

## Docs

Check out the [RunKit embed docs](https://runkit.com/docs/embed#options).

## License

MIT © [archieherbias](https://github.com/archieherbias)
