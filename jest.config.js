export default {
  setupFilesAfterEnv: ['./src/jestSetup.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  testEnvironment: 'jest-environment-jsdom',
};
