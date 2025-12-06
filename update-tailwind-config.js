const fs = require('fs');
const antdTheme = require('antd/dist/theme');

const themeVariables = antdTheme.getThemeVariables();

fs.writeFileSync('./tailwind.config.js', `
module.exports = {
  theme: {
    extend: {
      colors: {
        ...${JSON.stringify(themeVariables, null, 2)}
      },
    },
  },
  plugins: [],
};
`);

console.log('Tailwind config updated with antd theme variables.');
