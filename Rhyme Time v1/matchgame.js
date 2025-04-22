const rhymesData = [
    { target: 'hill', options: ['Jill', 'bill', 'dog', 'cat'], rhymes: ['Jill', 'bill'] },
    { target: 'crown', options: ['clown', 'town', 'stone', 'bone'], rhymes: ['clown', 'town'] },
    { target: 'pail', options: ['tail', 'mail', 'fail', 'rail'], rhymes: ['tail', 'mail'] },
    { target: 'water', options: ['daughter', 'otter', 'butter', 'mud'], rhymes: ['daughter', 'otter'] },
];

const game = rhymesData[Math.floor(Math.random() * rhymesData.length)];
const targetWordEl = document.getElementById('targetWord');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackEl = document.getElementById('feedback');
const dropZone = document.getElementById('dropZone');

targetWordEl.textContent = game.target;

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

function checkAnswers() {
  const selected = Array.from(dropZone.children).map(card => card.textContent);
  const correct = game.rhymes;
  const isCorrect = selected.length && selected.every(word => correct.includes(word)) && selected.length === correct.length;

  feedbackEl.textContent = isCorrect ? '🎉 Great job! You found the rhymes!' : '�� Try again!';
}
  