## `app` folder

This folder contains all of the react client code for the app

### State Diagram

```javascript
let sampleState = {
  // This should be a singular object with the users properties
  user: { username: 'bob', id: 5 },

  /* This is an object where the userids map to key/value objects
   * which represent players in the current game
   */
  players: { 1: userObj, 2: userObj, 3: userObj },

  /* This is an object which represents attributes of the
   * current round and game
   */
  game: { dealerid: 3, answer: 'Avengers', category: 'Movie', initalClue: '[Emojies...]' },

  /* This is a simple array of the messages in the current round.  Type of messages:
   * 1: Player message
   * 2: Dealer clue
   */
  messages: [
    { userid: 1, type: 1, message: 'Home Alone' },
    { userid: 3, type: 2, message: '[Emojies...]' },
    { userid: 2, type: 1, message: 'Spiderman' },
    { userid: 1, type: 1, message: 'The Avengers' },
  ],
};
```

