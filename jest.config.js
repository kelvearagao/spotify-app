module.exports = {
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.style.js',
    '!src/**/index.js',
    '!src/App.js',
    '!src/store/configureStore.js',
    '!src/__tests__/utils.js'
  ],
  moduleNameMapper: {
    '\\.(png|svg)$': '<rootDir>src/__mocks__/fileMock.js'
  }
}
