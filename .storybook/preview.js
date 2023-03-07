import { muiTheme } from 'storybook-addon-material-ui5'
import {theme} from "../src/themes/primary";

export const decorators = [
  muiTheme([theme]),
  (storyFn) => <div style={{minHeight: 80}}>{storyFn()}</div>
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#13111E',
      },
    ],
  },
}