const lists = (score) => {
  const ul = document.getElementById('ul');
  ul.innerHTML = '';
  score.forEach((listItems) => {
    const li = document.createElement('li');
    li.innerText = `${listItems.user}: ${listItems.score}`;
    ul.appendChild(li);
  });
  return ul;
};

module.exports = lists;