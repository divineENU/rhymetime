// Define lyrics with timestamps
const lyricsData = [
    // First Verse
    { text: "Jack", start: 0.23, end: 0.46 },
    { text: "and", start: 0.46, end: 0.69 },
    { text: "Jill", start: 0.69, end: 1.04 },
    { text: "went", start: 1.04, end: 1.27 },
    { text: "up", start: 1.27, end: 1.5 },
    { text: "the", start: 1.5, end: 1.73 },
    { text: "hill", start: 1.73, end: 2.07 },
    { text: "to", start: 2.07, end: 2.3 },
    { text: "fetch", start: 2.3, end: 2.53 },
    { text: "a", start: 2.53, end: 2.76 },
    { text: "pail", start: 2.76, end: 3.22 },
    { text: "of", start: 3.22, end: 3.45 },
    { text: "water", start: 3.45, end: 4.03 },
    { text: "Jack", start: 4.03, end: 4.37 },
    { text: "fell", start: 4.37, end: 4.6 },
    { text: "down", start: 4.6, end: 4.95 },
    { text: "and", start: 4.95, end: 5.18 },
    { text: "broke", start: 5.18, end: 5.41 },
    { text: "his", start: 5.41, end: 5.64 },
    { text: "crown", start: 5.64, end: 6.1 },
    { text: "and", start: 6.1, end: 6.33 },
    { text: "Jill", start: 6.33, end: 6.67 },
    { text: "came", start: 6.67, end: 6.9 },
    { text: "tumbling", start: 6.9, end: 7.48 },
    { text: "after", start: 7.48, end: 8.05 },
    
    // Second Verse
    { text: "Up", start: 8.05, end: 8.28 },
    { text: "Jack", start: 8.28, end: 8.51 },
    { text: "got", start: 8.51, end: 8.74 },
    { text: "and", start: 8.74, end: 8.97 },
    { text: "home", start: 8.97, end: 9.2 },
    { text: "did", start: 9.2, end: 9.43 },
    { text: "trot", start: 9.43, end: 9.89 },
    { text: "as", start: 9.89, end: 10.12 },
    { text: "fast", start: 10.12, end: 10.35 },
    { text: "as", start: 10.35, end: 10.58 },
    { text: "he", start: 10.58, end: 10.81 },
    { text: "could", start: 10.81, end: 11.04 },
    { text: "caper", start: 11.04, end: 11.5 },
    { text: "he", start: 11.5, end: 11.73 },
    { text: "went", start: 11.73, end: 11.96 },
    { text: "to", start: 11.96, end: 12.19 },
    { text: "bed", start: 12.19, end: 12.42 },
    { text: "to", start: 12.42, end: 12.65 },
    { text: "mend", start: 12.65, end: 12.88 },
    { text: "his", start: 12.88, end: 13.11 },
    { text: "head", start: 13.11, end: 13.57 },
    { text: "with", start: 13.57, end: 13.8 },
    { text: "vinegar", start: 13.8, end: 14.38 },
    { text: "and", start: 14.38, end: 14.61 },
    { text: "brown", start: 14.61, end: 14.84 },
    { text: "paper", start: 14.84, end: 15.53 }
];

// Select elements
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const lyricsContainer = document.getElementById("lyrics");

// Initialize state
let isPlaying = false;

// Add center alignment and styling to lyrics container
lyricsContainer.style.textAlign = "center";
lyricsContainer.style.padding = "30px";
lyricsContainer.style.maxWidth = "800px";
lyricsContainer.style.margin = "0 auto";
lyricsContainer.style.lineHeight = "1.8";

// Style the play button
playButton.style.padding = "15px 30px";
playButton.style.fontSize = "20px";
playButton.style.borderRadius = "25px";
playButton.style.border = "none";
playButton.style.background = "linear-gradient(45deg, #ff6b6b, #ff8e8e)";
playButton.style.color = "white";
playButton.style.cursor = "pointer";
playButton.style.transition = "all 0.3s ease";
playButton.style.marginBottom = "30px";

// Style the pause button
pauseButton.style.padding = "15px 30px";
pauseButton.style.fontSize = "20px";
pauseButton.style.borderRadius = "25px";
pauseButton.style.border = "none";
pauseButton.style.background = "linear-gradient(45deg, #ff6b6b, #ff8e8e)";
pauseButton.style.color = "white";
pauseButton.style.cursor = "pointer";
pauseButton.style.transition = "all 0.3s ease";
pauseButton.style.marginBottom = "30px";

// Add hover effect to play button
playButton.addEventListener("mouseover", () => {
    playButton.style.transform = "scale(1.05)";
    playButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
});

playButton.addEventListener("mouseout", () => {
    playButton.style.transform = "scale(1)";
    playButton.style.boxShadow = "none";
});

// Populate lyrics in the DOM
lyricsData.forEach((line, index) => {
    const span = document.createElement("span");
    span.id = `lyric-${index}`;
    span.textContent = line.text + " ";  // Add space after each word
    lyricsContainer.appendChild(span);

    // Add line breaks to create proper verse structure
    if (["water", "after", "caper", "paper"].includes(line.text)) {
        const br = document.createElement("br");
        lyricsContainer.appendChild(br);
        
        // Add extra spacing after each verse
        if (["after", "paper"].includes(line.text)) {
            const extraBr = document.createElement("br");
            lyricsContainer.appendChild(extraBr);
        }
    }
});

// Play button functionality
playButton.addEventListener("click", () => {
    audio.play();
    isPlaying = true;
    updateButtonStates();
});

// Pause button functionality
pauseButton.addEventListener("click", () => {
    audio.pause();
    isPlaying = false;
    updateButtonStates();
});

// Update button states based on playing status
function updateButtonStates() {
    if (isPlaying) {
        playButton.style.opacity = "0.5";
        pauseButton.style.opacity = "1";
    } else {
        playButton.style.opacity = "1";
        pauseButton.style.opacity = "0.5";
    }
}

// Initial button states
updateButtonStates();

// Synchronize lyrics with audio
audio.ontimeupdate = () => {
    const currentTime = audio.currentTime;

    // Highlight the current lyric
    lyricsData.forEach((line, index) => {
        const lyricElement = document.getElementById(`lyric-${index}`);
        if (currentTime >= line.start && currentTime <= line.end) {
            lyricElement.classList.add("highlight");
        } else {
            lyricElement.classList.remove("highlight");
        }
    });
};

// Reset highlighting when audio ends
audio.onended = () => {
    isPlaying = false;
    updateButtonStates();
    lyricsData.forEach((_, index) => {
        const lyricElement = document.getElementById(`lyric-${index}`);
        lyricElement.classList.remove("highlight");
    });
};

// Pail Collector Game Logic
document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.querySelector('.game-area');
    const bucket = document.getElementById('bucket');
    const scoreboard = document.getElementById('score');
    const endMessage = document.getElementById('endMessage');
    const finalScoreEl = document.getElementById('finalScore');

    const words = ['tail','mail','fail','rail'];
    const rhymes = ['tail','mail'];
    const spawnInterval = 1500;   // ms between spawns
    const gameDuration = 30000;   // total game time in ms
    const fallSpeed = 2;          // px per frame
    let score = 0;
    let spawnTimer, animationId;

    // Center bucket initially and on resize
    function centerBucket() {
        const rect = gameArea.getBoundingClientRect();
        bucket.style.left = (rect.width - bucket.offsetWidth) / 2 + 'px';
    }
    centerBucket();
    window.addEventListener('resize', centerBucket);

    // Smooth bucket drag accounting for initial position
    let dragging = false;
    let gameAreaLeft = 0;
    const bucketHalf = bucket.offsetWidth / 2;
    let initialLeft = bucket.offsetLeft;
    bucket.style.willChange = 'transform';
    bucket.addEventListener('pointerdown', e => {
        dragging = true;
        bucket.setPointerCapture(e.pointerId);
        gameAreaLeft = gameArea.getBoundingClientRect().left;
        initialLeft = bucket.offsetLeft;
    });
    document.addEventListener('pointermove', e => {
        if (!dragging) return;
        // Calculate pointer relative to gameArea
        let pointerX = e.clientX - gameAreaLeft - bucketHalf;
        // Clamp within bounds
        const maxX = gameArea.clientWidth - bucket.offsetWidth;
        let x = Math.max(0, Math.min(pointerX, maxX));
        // Translate relative to initial left
        bucket.style.transform = `translateX(${x - initialLeft}px)`;
    });
    bucket.addEventListener('pointerup', e => {
        dragging = false;
        bucket.releasePointerCapture(e.pointerId);
    });

    // Spawn a new falling word
    function spawnWord() {
        const word = words[Math.floor(Math.random() * words.length)];
        const el = document.createElement('div');
        el.className = 'falling-word';
        el.textContent = word;
        gameArea.appendChild(el);
        el.style.top = '-40px';
        const maxX = gameArea.clientWidth - el.offsetWidth;
        el.style.left = Math.random() * maxX + 'px';
    }

    // Main animation loop: move words and detect collisions
    function update() {
        document.querySelectorAll('.falling-word').forEach(el => {
            let top = parseFloat(el.style.top) + fallSpeed;
            el.style.top = top + 'px';
            const bRect = bucket.getBoundingClientRect();
            const wRect = el.getBoundingClientRect();
            // Check catch
            if (wRect.bottom >= bRect.top &&
                wRect.left < bRect.right &&
                wRect.right > bRect.left) {
                if (rhymes.includes(el.textContent)) {
                    score++;
                    scoreboard.textContent = score;
                }
                el.remove();
            } else if (top > gameArea.clientHeight) {
                el.remove();
            }
        });
        animationId = requestAnimationFrame(update);
    }

    // Start the game
    function startGame() {
        score = 0;
        scoreboard.textContent = score;
        endMessage.classList.add('hidden');
        spawnTimer = setInterval(spawnWord, spawnInterval);
        update();
        setTimeout(() => {
            clearInterval(spawnTimer);
            cancelAnimationFrame(animationId);
            endMessage.classList.remove('hidden');
            finalScoreEl.textContent = score;
        }, gameDuration);
    }

    // Show prompt and start game on bucket click
    bucket.textContent = 'Click to Start';
    bucket.style.cursor = 'pointer';
    bucket.addEventListener('pointerdown', function init(e) {
        bucket.removeEventListener('pointerdown', init);
        bucket.textContent = '';
        startGame();
    });
});
