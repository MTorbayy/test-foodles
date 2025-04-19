/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  rootDir: "./src",
  testMatch: ["**/?(*.)+(spec|test).ts"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  verbose: true,
};
