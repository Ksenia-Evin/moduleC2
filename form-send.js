const cats = document.querySelector('#cats');
const parrots = document.querySelector('#parrots');
const dogs = document.querySelector('#dogs');


async function voteCats () {
  const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {
      method: 'post'
  });
  location.href = 'index.html'
};

async function voteParrots () {
  const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {
      method: 'post'
  });
  location.href = 'index.html'
};

async function voteDogs () {
  const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {
      method: 'post'
  });
  location.href = 'index.html'
};


cats.addEventListener('click', voteCats);
parrots.addEventListener('click', voteParrots);
dogs.addEventListener('click', voteDogs);