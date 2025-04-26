const rhymeWords = ['tail', 'mail', 'snail', 'trail', 'bail', 'fail'];
const wrongWords = ['cat', 'dog', 'sun', 'tree', 'book', 'hat'];

const bucket = document.getElementById('bucket');
const area = document.getElementById('falling-area');
const scoreEl = document.getElementById('score');
const endMessage = document.getElementById('endMessage');
const finalScoreEl = document.getElementById('finalScore');

let score = 0;
let gameInterval;
let gameOver = false;

// Move bucket with mouse
document.addEventListener('mousemove', (e) => {
  const gameRect = area.getBoundingClientRect();
  const x = e.clientX - gameRect.left;
  bucket.style.left = `${x}px`;
});

// Touch support
document.addEventListener('touchmove', (e) => {
  const gameRect = area.getBoundingClientRect();
  const x = e.touches[0].clientX - gameRect.left;
  bucket.style.left = `${x}px`;
});

function dropWord() {
  const isRhyme = Math.random() < 0.5;
  const word = isRhyme
    ? rhymeWords[Math.floor(Math.random() * rhymeWords.length)]
    : wrongWords[Math.floor(Math.random() * wrongWords.length)];

  const el = document.createElement('div');
  el.classList.add('falling-word');
  el.textContent = word;
  el.dataset.rhyme = isRhyme;
  el.style.left = `${Math.random() * 90}%`;
  area.appendChild(el);

  let top = 0;
  const fallSpeed = 2 + Math.random() * 2;

  const fallInterval = setInterval(() => {
    top += fallSpeed;
    el.style.top = `${top}px`;

    const bucketRect = bucket.getBoundingClientRect();
    const wordRect = el.getBoundingClientRect();

    if (
      wordRect.bottom >= bucketRect.top &&
      wordRect.left >= bucketRect.left &&
      wordRect.right <= bucketRect.right
    ) {
      if (el.dataset.rhyme === 'true') {
        score++;
      } else {
        score--;
      }
      updateScore();
      clearInterval(fallInterval);
      el.remove();
    }

    if (top > area.offsetHeight) {
      clearInterval(fallInterval);
      el.remove();

      if (el.dataset.rhyme === 'true') {
        endGame(); // Missed rhyme = game over
      }
    }
  }, 20);
}

function updateScore() {
  scoreEl.textContent = score;
}

function endGame() {
  clearInterval(gameInterval);
  gameOver = true;
  endMessage.classList.remove('hidden');
  finalScoreEl.textContent = score;
}

function startGame() {
  gameInterval = setInterval(dropWord, 1200);
}

startGame();
