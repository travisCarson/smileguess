// __mocks__/react-redux.js

// Mock react-redux connect function to return the component unmodified, for testing.
export const connect = function connect() {
  return function returnObject(component) { return component; };
};
