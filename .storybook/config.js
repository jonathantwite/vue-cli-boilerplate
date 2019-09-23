import { addParameters, configure } from '@storybook/vue';

// import { themes } from '@storybook/theming';
import vTheme from './vTheme';
// import css here

addParameters({options: {
    theme: vTheme
}});

const req = require.context('../stories/', true, /\.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);