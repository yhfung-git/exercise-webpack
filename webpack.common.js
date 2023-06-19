const path = require("path");

module.exports = {
  entry: {
    main: {
      import: path.resolve(__dirname, "src/index.js"),
      dependOn: "shared",
    },
    vendor: {
      import: path.resolve(__dirname, "src/vendor.js"),
      dependOn: "shared",
    },
    shared: "bootstrap",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
