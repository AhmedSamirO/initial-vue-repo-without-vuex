module.exports = {
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires >= sass-loader@^9.0.0
            options: {
              additionalData: "@import '@/styles/variables.scss'"
            }
          }
        ]
      },
      // SCSS has different line endings than SASS
      // and needs a semicolon after the import.
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^9.0.0
            options: {
              // This is the path to your variables
              additionalData: "@import '@/styles/variables.scss';"
            }
          }
        ]
      }
    ]
  }
}
