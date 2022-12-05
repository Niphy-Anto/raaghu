import'../projects/libs/themes/src/styles/default.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
 
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true
  },

    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'theme-light', color: '#F8F8F8', default:true  },
        { name: 'dark', class: 'theme-dark', color: '#333333' }
      ],
    },
  };
