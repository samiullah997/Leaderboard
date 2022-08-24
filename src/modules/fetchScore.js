const lists = require('./list.js');

const fetchScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jimsa5KtKCwfICVDsBiC/scores/');
  const scores = await response.json();
  lists(scores.result);
};
module.exports = fetchScore;