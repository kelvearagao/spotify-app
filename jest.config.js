module.exports = {
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.style.js',
    '!src/**/index.js',
    '!src/store/configureStore.js',
    '!src/__tests__/utils.js'
  ],
  moduleNameMapper: {
    '\\.(png|svg)$': '<rootDir>src/__mocks__/fileMock.js'
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
