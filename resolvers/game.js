const fetch = require('node-fetch');

const game = id => fetch(`https://geek-api.herokuapp.com/game/${id}`).then(res => res.json());

module.exports = { game };
