module.exports = {
  module: {
    rules: [
      {
        test: /\.yarn$/,
        use: "raw-loader",
      },
    ],
  },
};
