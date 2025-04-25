// Define lyrics with timestamps
const lyricsData = [
    // First Verse
    { text: "Twinkle", start: 2, end: 3 },
    { text: "twinkle", start: 3, end: 4 },
    { text: "little", start: 4, end: 5.3 },
    { text: "star", start: 5.3, end: 6.8 },
    { text: "How", start: 6.8, end: 7.2 },
    { text: "I", start: 7.2, end: 8 },
    { text: "wonder", start: 8, end: 9 },
    { text: "what", start: 9, end: 9.5 },
    { text: "you", start: 9.5, end: 10.2 },
    { text: "are", start: 10.2, end: 11.2 },
    
    // Second Verse
    { text: "Up", start: 11.2, end: 12 },
    { text: "above", start: 12, end: 13 },
    { text: "the", start: 13, end: 14 },
    { text: "world", start: 14, end: 14.5 },
    { text: "so", start: 14.5, end: 15 },
    { text: "high", start: 15, end: 16 },
    { text: "Like", start: 16, end: 17 },
    { text: "a", start: 17, end: 17.5 },
    { text: "diamond", start: 17.5, end: 18.5 },
    { text: "in", start: 18.5, end: 19.3 },
    { text: "the", start: 19.3, end: 20 },
    { text: "sky", start: 20, end: 20.7 },
    
    // Third Verse (Repeat)
    { text: "Twinkle", start: 20.7, end: 22 },
    { text: "twinkle", start: 22, end: 23.5 },
    { text: "little", start: 23.5, end: 24.5 },
    { text: "star", start: 24.5, end: 25.5 },
    { text: "How", start: 25.5, end: 26.3 },
    { text: "I", start: 26.3, end: 27 },
    { text: "wonder", start: 27, end: 28 },
    { text: "what", start: 28, end: 29 },
    { text: "you", start: 29, end: 29.5 },
    { text: "are", start: 29.5, end: 31 }
];

// Select elements
const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggleButton");
const playIcon = document.getElementById("playIcon");
const buttonText = document.getElementById("buttonText");
const lyricsContainer = document.getElementById("lyrics");

// Initialize state
let isPlaying = false;

// Group lyrics into verses
const lyricsVerses = [];
let currentVerse = [];
lyricsData.forEach((word, index) => {
    currentVerse.push(word);
    if (["are", "sky"].includes(word.text)) {
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
    verseDiv.style.color = "#FFA500"; // Lighter orange
    
    verse.forEach((word, wordIndex) => {
        const span = document.createElement("span");
        span.id = `lyric-${verseIndex}-${wordIndex}`;
        span.textContent = word.text + " ";
        span.style.color = "#FFA500"; // Lighter orange
        // Add highlight style
        span.style.transition = "color 0.2s ease";
        span.classList.add("lyric-word");
        verseDiv.appendChild(span);
    });
    
    lyricsContainer.appendChild(verseDiv);
});

// Add highlight style
const style = document.createElement('style');
style.textContent = `
    .highlight {
        color: white !important;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

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
        } else if (currentTime < firstWord.start) {
            // Show first verse before song starts
            if (verseIndex === 0) {
                verseDiv.style.display = "block";
            } else {
                verseDiv.style.display = "none";
            }
        } else {
            verseDiv.style.display = "none"; // Hide other verses
        }
    });

    // Stop the audio after the last word
    const lastWord = lyricsData[lyricsData.length - 1];
    if (currentTime >= lastWord.end) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        buttonText.textContent = "Play";
        // Show first verse when song ends
        lyricsVerses.forEach((verse, verseIndex) => {
            const verseDiv = document.getElementById(`verse-${verseIndex}`);
            if (verseIndex === 0) {
                verseDiv.style.display = "block";
            } else {
                verseDiv.style.display = "none";
            }
            verse.forEach((_, wordIndex) => {
                const wordSpan = document.getElementById(`lyric-${verseIndex}-${wordIndex}`);
                wordSpan.classList.remove("highlight");
            });
        });
    }
};

// Reset highlighting and display when audio ends
audio.onended = () => {
    isPlaying = false;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    buttonText.textContent = "Play";
    // Show first verse when song ends
    lyricsVerses.forEach((verse, verseIndex) => {
        const verseDiv = document.getElementById(`verse-${verseIndex}`);
        if (verseIndex === 0) {
            verseDiv.style.display = "block";
        } else {
            verseDiv.style.display = "none";
        }
        verse.forEach((_, wordIndex) => {
            const wordSpan = document.getElementById(`lyric-${verseIndex}-${wordIndex}`);
            wordSpan.classList.remove("highlight");
        });
    });
};

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