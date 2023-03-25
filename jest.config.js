module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  "setupFilesAfterEnv": [
    "./src/setupTest.ts"
  ],
  "coverageReporters": [
    "json-summary",
    "lcov"
  ],
  "modulePathIgnorePatterns": [
    "/node_modules/",
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/src/__test__",
    "/src/mocks",
    "/src/constants",
    "/src/api",
  ]
};