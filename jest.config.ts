module.exports = async () => {
  return {
    roots: ["<rootDir>"],
    transform: {
      "^.+\\.tsx?$": [
        "esbuild-jest-transform",
        {
          sourcemap: true,
        },
      ],
    },
    collectCoverageFrom: ["src/**/*.ts"],
    coveragePathIgnorePatterns: [
      "node_modules",
      "interfaces",
      "<rootDir>/src/index.ts",
      ".mock.ts",
    ],
    coverageDirectory: "<rootDir>/coverage/",
    logHeapUsage: true,
    testEnvironment: "node",
    resetMocks: true,
    maxWorkers: "50%",
    maxConcurrency: 10,
    reporters: ["default"],
  };
};
