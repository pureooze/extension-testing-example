module.exports = {
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "^react-dom/server$":
      "<rootDir>/node_modules/preact-render-to-string/dist/index.js",
    "^react-addons-test-utils$":
      "<rootDir>/node_modules/preact-test-utils/lib/index.js",
    "^react$": "<rootDir>/node_modules/preact-compat/lib/index.js",
    "^react-dom$": "<rootDir>/node_modules/preact-compat/lib/index.js"
  },
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest.transform.js"
  }
};
