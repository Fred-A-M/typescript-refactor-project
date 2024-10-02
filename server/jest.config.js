/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch: ['**/?(*.)+(spec|test).ts'],  
  moduleFileExtensions: ['ts', 'js'], 
};