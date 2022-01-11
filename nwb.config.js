module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
  },
  webpack: {
    rules: {
      css: {
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
        }
      }
    }
  }
}
