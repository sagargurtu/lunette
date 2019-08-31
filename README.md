<h1 align="center">
  <a href="https://sagargurtu.github.io/lunette/" target="_blank">
    <img src="https://github.com/sagargurtu/lunette/blob/master/src/assets/images/logo.png" width=200/>
  </a>
</h1>

<p align="center">
  A UI toolkit with configurable and modern components for building React apps and websites.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/lunette">
    <img alt="npm" src="https://img.shields.io/npm/v/lunette/latest.svg" />
  </a>
  <a href="https://github.com/sagargurtu/lunette/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/sagargurtu/lunette.svg" />
  </a>
  <a href="https://github.com/sagargurtu/lunette/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/sagargurtu/lunette.svg" />
  </a>
</p>

## Getting started

Lunette is still in early development stages. New components are being continuously added.

### Demo

[Click here](https://sagargurtu.github.io/lunette/storybook/) to explore all UI components using Storybook.

### Installation

Lunette is available as an [npm package](https://www.npmjs.com/package/lunette).

```
// npm
npm install lunette

// yarn
yarn add lunette
```

### Usage

Here is a quick example to get you started:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { WeatherCard } from 'lunette';

function App() {
  return <WeatherCard 
          temperature={70}
          unit='f'
          mode='dark'
          forecast='haze'
          timeofday='night'
          location='Current Location'
          datetime='July 4th, 10:00PM'
          style={{
            'height': '170px',
            'width': '300px',
            'fontSize': '16px'
          }} />
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Contributing

For any issues, enhancements or new component requests, please use our [issue tracker](https://github.com/sagargurtu/lunette/issues).

### Attributions

Weather icons made by [iconixar](https://www.flaticon.com/authors/iconixar) from [Flaticon](www.flaticon.com).

## License

This project is licensed under the terms of the [MIT](https://github.com/sagargurtu/lunette/blob/master/LICENSE) License.
