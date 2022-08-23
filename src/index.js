/* eslint-disable no-restricted-globals */
import './style.css';
import lists from './modules/list.js';

function component() {
  const element = document.createElement('div');
  lists();
  return element;
}
const btnRefresh = document.getElementById('btn-refresh');

btnRefresh.addEventListener('click', () => {
  location.reload();
});

document.body.appendChild(component());