module.exports = {
  "stories": [
    "../projects/**/*.stories.@(md|mdx)",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    'storybook-addon-themes'
    
  ],
  "framework": "@storybook/angular",
  "staticDirs": [{"from": './assets', "to": '/assets'}],
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "storyStoreV7": false,
    "previewMdx2": true
  }
}