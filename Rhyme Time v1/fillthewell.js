// Fill the Well game logic
// Adds droplets to the well and counts them up to 10

// Removed DOMContentLoaded wrapper; code now runs immediately

const rhymesData = [
  { target: 'hill', options: ['Jill', 'bill', 'dog', 'cat'], rhymes: ['Jill', 'bill'] },
  { target: 'crown', options: ['clown', 'town', 'stone', 'bone'], rhymes: ['clown', 'town'] },
  { target: 'pail', options: ['tail', 'mail', 'fail', 'rail'], rhymes: ['tail', 'mail'] },
  { target: 'water', options: ['daughter', 'otter', 'butter', 'mud'], rhymes: ['daughter', 'otter'] }
];

const game = rhymesData[Math.floor(Math.random() * rhymesData.length)];
const targetWordEl = document.getElementById('targetWord');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackEl = document.getElementById('feedback');
const dropZone = document.getElementById('dropZone');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
const messageEl = document.getElementById('message');
const well = document.getElementById('well');

targetWordEl.textContent = game.target;
totalEl.textContent = game.rhymes.length;

game.options.forEach(word => {
  const btn = document.createElement('div');
  btn.classList.add('option-card');
  btn.textContent = word;
  btn.setAttribute('draggable', 'true');
  btn.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', e.target.textContent));
  btn.addEventListener('click', () => {
    if (!dropZone.contains(btn)) {
      dropZone.appendChild(btn);
    } else {
      optionsContainer.appendChild(btn);
    }
  });
  optionsContainer.appendChild(btn);
});

dropZone.addEventListener('dragover', e => e.preventDefault());
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  const word = e.dataTransfer.getData('text/plain');
  const card = Array.from(optionsContainer.children).find(el => el.textContent === word);
  if (card) dropZone.appendChild(card);
});

function fillWellWithRhymes(correctCount) {
  let currentCount = 0;
  countEl.textContent = 0;
  well.innerHTML = '';
  messageEl.textContent = '';

  const addDroplet = () => {
    const drop = document.createElement('div');
    drop.classList.add('droplet');
    const maxLeft = well.clientWidth - 20;
    drop.style.left = `${Math.random() * maxLeft}px`;
    drop.style.bottom = '0px';
    well.appendChild(drop);
    setTimeout(() => drop.remove(), 1500);
  };

  for (let i = 0; i < correctCount; i++) {
    setTimeout(() => {
      addDroplet();
      currentCount++;
      countEl.textContent = currentCount;
      if (currentCount === correctCount) {
        messageEl.textContent = '🎉 You filled the well with rhymes!';
      }
    }, i * 300);
  }
}

function checkAnswers() {
  const selected = Array.from(dropZone.children)
    .filter(el => el.classList.contains('option-card'))
    .map(card => card.textContent);
  const correct = game.rhymes;
  const matched = selected.filter(word => correct.includes(word));
  const isPerfect = matched.length === correct.length && matched.length === selected.length;

  feedbackEl.textContent = isPerfect ? '✅ Perfect rhymes!' : '🔁 Not quite yet...';
  fillWellWithRhymes(matched.length);
}

// make function available globally for the HTML button
window.checkAnswers = checkAnswers;