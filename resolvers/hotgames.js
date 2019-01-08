const fetch = require('node-fetch');

const hotgames = () => fetch('https://geek-api.herokuapp.com/hotgames').then(res => res.json());

module.exports = { hotgames };
