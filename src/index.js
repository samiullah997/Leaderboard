/* eslint-disable no-restricted-globals */
import fetchScore from './modules/fetchScore.js';
import './style.css';
import postScore from './modules/postScore.js';

const btnRefresh = document.getElementById('btn-refresh');
const form = document.querySelector('form');
const component = () => {
  const element = document.createElement('div');
  fetchScore();
  return element;
};
btnRefresh.addEventListener('click', () => {
  location.reload();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputUser = form.querySelector('input[type = "text"]').value;
  const inputScore = form.querySelector('input[type = "number"]').value;
  postScore(inputUser, inputScore);
  form.reset();
});

document.body.appendChild(component());