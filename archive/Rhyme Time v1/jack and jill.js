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
const toggleButton = document.getElementById("toggleButton");
const playIcon = document.getElementById("playIcon");
const buttonText = document.getElementById("buttonText");
const lyricsContainer = document.getElementById("lyrics");

// Initialize state
let isPlaying = false;

// Add center alignment and styling to lyrics container
lyricsContainer.style.textAlign = "center";
lyricsContainer.style.padding = "30px";
lyricsContainer.style.maxWidth = "800px";
lyricsContainer.style.margin = "0 auto";
lyricsContainer.style.lineHeight = "1.8";

// Style the toggle button
toggleButton.style.padding = "15px 30px";
toggleButton.style.fontSize = "20px";
toggleButton.style.borderRadius = "25px";
toggleButton.style.border = "none";
toggleButton.style.background = "linear-gradient(135deg, #8B4513, #A0522D)";
toggleButton.style.color = "white";
toggleButton.style.cursor = "pointer";
toggleButton.style.transition = "all 0.3s ease";
toggleButton.style.marginBottom = "30px";

// Add hover effect to toggle button
toggleButton.addEventListener("mouseover", () => {
    toggleButton.style.transform = "scale(1.05)";
    toggleButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    toggleButton.style.background = "linear-gradient(135deg, #A0522D, #8B4513)";
});

toggleButton.addEventListener("mouseout", () => {
    toggleButton.style.transform = "scale(1)";
    toggleButton.style.boxShadow = "none";
    toggleButton.style.background = "linear-gradient(135deg, #8B4513, #A0522D)";
});

// Toggle button functionality
toggleButton.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        buttonText.textContent = "Pause";
    } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        buttonText.textContent = "Play";
    }
    isPlaying = !isPlaying;
});

// Handle audio ending naturally
audio.addEventListener("ended", () => {
    isPlaying = false;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    buttonText.textContent = "Play";
});

// Group lyrics into verses
const lyricsVerses = [];
let currentVerse = [];
lyricsData.forEach((word, index) => {
    currentVerse.push(word);
    if (["after", "paper"].includes(word.text)) {
        lyricsVerses.push(currentVerse);
        currentVerse = [];
    }
});

// Populate lyrics in the DOM
lyricsVerses.forEach((verse, verseIndex) => {
    const verseDiv = document.createElement("div");
    verseDiv.id = `verse-${verseIndex}`;
    // Show first verse initially, hide others
    verseDiv.style.display = verseIndex === 0 ? "block" : "none";
    verseDiv.style.marginBottom = "20px"; // Add spacing between verses
    
    verse.forEach((word, wordIndex) => {
        const span = document.createElement("span");
        span.id = `lyric-${verseIndex}-${wordIndex}`;
        span.textContent = word.text + " ";
        verseDiv.appendChild(span);
    });
    
    lyricsContainer.appendChild(verseDiv);
});

// Synchronize lyrics with audio
audio.ontimeupdate = () => {
    const currentTime = audio.currentTime;
    let currentVerseIndex = null;

    // Find the current verse being sung
    lyricsVerses.forEach((verse, verseIndex) => {
        const verseDiv = document.getElementById(`verse-${verseIndex}`);
        const firstWord = verse[0];
        const lastWord = verse[verse.length - 1];
        
        if (currentTime >= firstWord.start && currentTime <= lastWord.end) {
            currentVerseIndex = verseIndex;
            verseDiv.style.display = "block"; // Show current verse
            
            // Highlight the current word within the verse
            verse.forEach((word, wordIndex) => {
                const wordSpan = document.getElementById(`lyric-${verseIndex}-${wordIndex}`);
                if (currentTime >= word.start && currentTime <= word.end) {
                    wordSpan.classList.add("highlight");
                } else {
                    wordSpan.classList.remove("highlight");
                }
            });
        } else {
            verseDiv.style.display = "none"; // Hide other verses
        }
    });
};

// Reset highlighting and display when audio ends
audio.onended = () => {
    isPlaying = false;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    buttonText.textContent = "Play";
    lyricsVerses.forEach((verse, verseIndex) => {
        const verseDiv = document.getElementById(`verse-${verseIndex}`);
        verseDiv.style.display = "none"; // Hide all verses when song ends
        verse.forEach((_, wordIndex) => {
            const wordSpan = document.getElementById(`lyric-${verseIndex}-${wordIndex}`);
            wordSpan.classList.remove("highlight");
        });
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
