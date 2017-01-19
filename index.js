module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

const foregroundColor = '#fff';
const backgroundColor = 'rgba(31, 43, 49, .40)';
const overlap = 'rgba(28, 40, 46, .20)';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#fefe7a';
const blue = '#57b7ff';
const magenta = '#ff6ac1';
const cyan = '#98edff';
const white = '#fff';

exports.decorateConfig = (config) => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: overlap,
  cursorColor: white,
  colors: {
    black: backgroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack: '#686868',
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: foregroundColor
  },
  css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${overlap} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      border: 0;
    }
    .tab_textActive {
      border-bottom: 2px solid ${green};
    }
  `
});
