## `app` folder

This folder contains all of the react client code for the app

### State Diagram

```javascript
let sampleState = {
  // This should be a singular object with the users properties
  user: { username: 'bob', id: 5 },

  /* There are two keys in the players portion of the store:
   * - playersById: This is an object where the userids map to key/value objects
   *   which represent players in the current game.
   * - players: This is an array of ids of all the users in the game.
   */
  players: {
    playersById: { 1: userObj, 2: userObj, 3: userObj },
    players: ['1', '2', '3'],
  },

  /* This is an object which represents attributes of the
   * current round and game */
  game: { dealerid: 3, answer: 'Avengers', category: 'Movie', initalClue: '[Emojies...]' },

  /* This is a simple array of the messages in the current round. */
  messages: [
    { userid: 1, type: 'guess', message: 'Home Alone' },
    { userid: 3, type: 'clue', message: '[Emojies...]' },
    { userid: 2, type: 'guess', message: 'Spiderman' },
    { userid: 1, type: 'guess', message: 'The Avengers' },
  ],
};
```

