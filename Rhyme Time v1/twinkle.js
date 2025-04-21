// Define lyrics with timestamps
const lyricsData = [
    { text: "Twinkle", start: 2, end: 3 },
    { text: "twinkle", start: 3, end: 4 },
    { text: "little", start: 4, end: 5.3 },
    { text: "star", start: 5.3, end: 6.8 },
    { text: "How", start: 6.8 , end: 7.2 },
    { text: "I", start: 7.2, end: 8 },
    { text: "wonder", start: 8, end: 9 },
    { text: "what", start: 9, end: 9.5 },
    { text: "you", start: 9.5, end: 10.2 },
    { text: "are", start: 10.2, end: 11.2 },
    { text: "Up", start: 11.2, end: 12 },
    { text: "above", start: 12, end: 13 },
    { text: "the", start: 13, end: 14 },
    { text: "world", start: 14, end: 14.5 },
    { text: "so", start: 14.5 , end: 15 },
    { text: "high", start: 15, end: 16 },
    { text: "Like", start: 16, end: 17 },
    { text: "a", start: 17, end: 17.5 },
    { text: "diamond", start: 17.5, end: 18.5 },
    { text: "in", start: 18.5, end: 19.3 },
    { text: "the", start: 19.3, end: 20 },
    { text: "sky", start: 20, end: 20.7 },
    { text: "Twinkle", start: 20.7, end: 22 },
    { text: "twinkle", start: 22, end: 23.5 },
    { text: "little", start: 23.5, end: 24.5 },
    { text: "star", start: 24.5, end: 25.5 },
    { text: "How", start: 25.5 , end: 26.3 },
    { text: "I", start: 26.3, end: 27 },
    { text: "wonder", start: 27, end: 28 },
    { text: "what", start: 28, end: 29 },
    { text: "you", start: 29, end: 29.5 },
    { text: "are", start: 29.5, end: 31 }
];

// Select elements
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const lyricsContainer = document.getElementById("lyrics");

// Initialize state
let isPlaying = false;

// Populate lyrics in the DOM
lyricsData.forEach((line, index) => {
    const span = document.createElement("span");
    span.id = `lyric-${index}`;
    span.textContent = line.text + " ";  // Add space after each word
    lyricsContainer.appendChild(span);

    // Add a line break after "star", "are", "high", "sky"
    if (["star", "are", "high", "sky"].includes(line.text)) {
        lyricsContainer.appendChild(document.createElement("br"));
    }
    
    // Add an EXTRA page break after "are" and "sky"
    if (["are", "sky"].includes(line.text)) {
        lyricsContainer.appendChild(document.createElement("br")); // Another break for extra space
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

// Auto-scroll to rhyme section after a 1-second delay
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const mainSection = document.querySelector('main');
        if (mainSection) {
            mainSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
});