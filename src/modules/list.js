const Tasks = require('./Task.js');

const lists = () => {
  const ul = document.getElementById('ul');
  ul.innerHTML = '';
  Tasks.forEach((listItems) => {
    const li = document.createElement('li');
    li.innerText = `${listItems.name} ${listItems.score}`;
    ul.appendChild(li);
  });
  return ul;
};

module.exports = lists;