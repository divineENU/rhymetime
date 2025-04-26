// Define lyrics with timestamps for Baby Shark
const lyricsData = [
    // Baby Shark Verse
    { line: "Baby shark, doo doo doo doo doo doo", words: [
        { text: "Baby", start: 0.0, end: 0.5 },
        { text: "shark,", start: 0.5, end: 1.0 },
        { text: "doo", start: 1.0, end: 1.3 },
        { text: "doo", start: 1.3, end: 1.6 },
        { text: "doo", start: 1.6, end: 1.9 },
        { text: "doo", start: 1.9, end: 2.2 },
        { text: "doo", start: 2.2, end: 2.5 },
        { text: "doo", start: 2.5, end: 2.8 }
    ]},
    { line: "Baby shark, doo doo doo doo doo doo", words: [
        { text: "Baby", start: 2.8, end: 3.3 },
        { text: "shark,", start: 3.3, end: 3.8 },
        { text: "doo", start: 3.8, end: 4.1 },
        { text: "doo", start: 4.1, end: 4.4 },
        { text: "doo", start: 4.4, end: 4.7 },
        { text: "doo", start: 4.7, end: 5.0 },
        { text: "doo", start: 5.0, end: 5.3 },
        { text: "doo", start: 5.3, end: 5.6 }
    ]},
    { line: "Baby shark, doo doo doo doo doo doo", words: [
        { text: "Baby", start: 5.6, end: 6.1 },
        { text: "shark,", start: 6.1, end: 6.6 },
        { text: "doo", start: 6.6, end: 6.9 },
        { text: "doo", start: 6.9, end: 7.2 },
        { text: "doo", start: 7.2, end: 7.5 },
        { text: "doo", start: 7.5, end: 7.8 },
        { text: "doo", start: 7.8, end: 8.1 },
        { text: "doo", start: 8.1, end: 8.4 }
    ]},
    { line: "Baby shark!", words: [
        { text: "Baby shark!", start: 8.4, end: 9.0 }
    ]},
 
    // Mommy Shark Verse
    { line: "Mommy shark, doo doo doo doo doo doo", words: [
        { text: "Mommy", start: 9.0, end: 9.5 },
        { text: "shark,", start: 9.5, end: 10.0 },
        { text: "doo", start: 10.0, end: 10.3 },
        { text: "doo", start: 10.3, end: 10.6 },
        { text: "doo", start: 10.6, end: 10.9 },
        { text: "doo", start: 10.9, end: 11.2 },
        { text: "doo", start: 11.2, end: 11.5 },
        { text: "doo", start: 11.5, end: 11.8 }
    ]},
    { line: "Mommy shark, doo doo doo doo doo doo", words: [
        { text: "Mommy", start: 11.8, end: 12.3 },
        { text: "shark,", start: 12.3, end: 12.8 },
        { text: "doo", start: 12.8, end: 13.1 },
        { text: "doo", start: 13.1, end: 13.4 },
        { text: "doo", start: 13.4, end: 13.7 },
        { text: "doo", start: 13.7, end: 14.0 },
        { text: "doo", start: 14.0, end: 14.3 },
        { text: "doo", start: 14.3, end: 14.6 }
    ]},
    { line: "Mommy shark, doo doo doo doo doo doo", words: [
        { text: "Mommy", start: 14.6, end: 15.1 },
        { text: "shark,", start: 15.1, end: 15.6 },
        { text: "doo", start: 15.6, end: 15.9 },
        { text: "doo", start: 15.9, end: 16.2 },
        { text: "doo", start: 16.2, end: 16.5 },
        { text: "doo", start: 16.5, end: 16.8 },
        { text: "doo", start: 16.8, end: 17.1 },
        { text: "doo", start: 17.1, end: 17.4 }
    ]},
    { line: "Mommy shark!", words: [
        { text: "Mommy shark!", start: 17.4, end: 18.0 }
    ]},
 
    // Daddy Shark Verse
    { line: "Daddy shark, doo doo doo doo doo doo", words: [
        { text: "Daddy", start: 18.0, end: 18.5 },
        { text: "shark,", start: 18.5, end: 19.0 },
        { text: "doo", start: 19.0, end: 19.3 },
        { text: "doo", start: 19.3, end: 19.6 },
        { text: "doo", start: 19.6, end: 19.9 },
        { text: "doo", start: 19.9, end: 20.2 },
        { text: "doo", start: 20.2, end: 20.5 },
        { text: "doo", start: 20.5, end: 20.8 }
    ]},
    { line: "Daddy shark, doo doo doo doo doo doo", words: [
        { text: "Daddy", start: 20.8, end: 21.3 },
        { text: "shark,", start: 21.3, end: 21.8 },
        { text: "doo", start: 21.8, end: 22.1 },
        { text: "doo", start: 22.1, end: 22.4 },
        { text: "doo", start: 22.4, end: 22.7 },
        { text: "doo", start: 22.7, end: 23.0 },
        { text: "doo", start: 23.0, end: 23.3 },
        { text: "doo", start: 23.3, end: 23.6 }
    ]},
    { line: "Daddy shark, doo doo doo doo doo doo", words: [
        { text: "Daddy", start: 23.6, end: 24.1 },
        { text: "shark,", start: 24.1, end: 24.6 },
        { text: "doo", start: 24.6, end: 24.9 },
        { text: "doo", start: 24.9, end: 25.2 },
        { text: "doo", start: 25.2, end: 25.5 },
        { text: "doo", start: 25.5, end: 25.8 },
        { text: "doo", start: 25.8, end: 26.1 },
        { text: "doo", start: 26.1, end: 26.4 }
    ]},
    { line: "Daddy shark!", words: [
        { text: "Daddy shark!", start: 26.4, end: 27.0 }
    ]},
 
    // Grandma Shark Verse
    { line: "Grandma shark, doo doo doo doo doo doo", words: [
        { text: "Grandma", start: 27.0, end: 27.5 },
        { text: "shark,", start: 27.5, end: 28.0 },
        { text: "doo", start: 28.0, end: 28.3 },
        { text: "doo", start: 28.3, end: 28.6 },
        { text: "doo", start: 28.6, end: 28.9 },
        { text: "doo", start: 28.9, end: 29.2 },
        { text: "doo", start: 29.2, end: 29.5 },
        { text: "doo", start: 29.5, end: 29.8 }
    ]},
    { line: "Grandma shark, doo doo doo doo doo doo", words: [
        { text: "Grandma", start: 29.8, end: 30.3 },
        { text: "shark,", start: 30.3, end: 30.8 },
        { text: "doo", start: 30.8, end: 31.1 },
        { text: "doo", start: 31.1, end: 31.4 },
        { text: "doo", start: 31.4, end: 31.7 },
        { text: "doo", start: 31.7, end: 32.0 },
        { text: "doo", start: 32.0, end: 32.3 },
        { text: "doo", start: 32.3, end: 32.6 }
    ]},
    { line: "Grandma shark, doo doo doo doo doo doo", words: [
        { text: "Grandma", start: 32.6, end: 33.1 },
        { text: "shark,", start: 33.1, end: 33.6 },
        { text: "doo", start: 33.6, end: 33.9 },
        { text: "doo", start: 33.9, end: 34.2 },
        { text: "doo", start: 34.2, end: 34.5 },
        { text: "doo", start: 34.5, end: 34.8 },
        { text: "doo", start: 34.8, end: 35.1 },
        { text: "doo", start: 35.1, end: 35.4 }
    ]},
    { line: "Grandma shark!", words: [
        { text: "Grandma shark!", start: 35.4, end: 36.0 }
    ]},
 
    // Grandpa Shark Verse
    { line: "Grandpa shark, doo doo doo doo doo doo", words: [
        { text: "Grandpa", start: 36.0, end: 36.5 },
        { text: "shark,", start: 36.5, end: 37.0 },
        { text: "doo", start: 37.0, end: 37.3 },
        { text: "doo", start: 37.3, end: 37.6 },
        { text: "doo", start: 37.6, end: 37.9 },
        { text: "doo", start: 37.9, end: 38.2 },
        { text: "doo", start: 38.2, end: 38.5 },
        { text: "doo", start: 38.5, end: 38.8 }
    ]},
    { line: "Grandpa shark, doo doo doo doo doo doo", words: [
        { text: "Grandpa", start: 38.8, end: 39.3 },
        { text: "shark,", start: 39.3, end: 39.8 },
        { text: "doo", start: 39.8, end: 40.1 },
        { text: "doo", start: 40.1, end: 40.4 },
        { text: "doo", start: 40.4, end: 40.7 },
        { text: "doo", start: 40.7, end: 41.0 },
        { text: "doo", start: 41.0, end: 41.3 },
        { text: "doo", start: 41.3, end: 41.6 }
    ]},
    { line: "Grandpa shark, doo doo doo doo doo doo", words: [
        { text: "Grandpa", start: 41.6, end: 42.1 },
        { text: "shark,", start: 42.1, end: 42.6 },
        { text: "doo", start: 42.6, end: 42.9 },
        { text: "doo", start: 42.9, end: 43.2 },
        { text: "doo", start: 43.2, end: 43.5 },
        { text: "doo", start: 43.5, end: 43.8 },
        { text: "doo", start: 43.8, end: 44.1 },
        { text: "doo", start: 44.1, end: 44.4 }
    ]},
    { line: "Grandpa shark!", words: [
        { text: "Grandpa shark!", start: 44.4, end: 45.0 }
    ]}
  ];

// Select elements
const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggleButton");
const endButton = document.getElementById("endButton");
const playIcon = document.getElementById("playIcon");
const buttonText = document.getElementById("buttonText");
const lyricsContainer = document.getElementById("lyrics");

// Initialize state
let isPlaying = false;

// Create spans for each line of lyrics
function createLyrics() {
    lyricsData.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        line.words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word.text + ' ';
            lineDiv.appendChild(span);
        });
        lyricsContainer.appendChild(lineDiv);
    });
}

// Update lyrics based on current time
function updateLyrics() {
    const currentTime = audio.currentTime;
    lyricsData.forEach((line, lineIndex) => {
        line.words.forEach((word, wordIndex) => {
            const span = lyricsContainer.children[lineIndex].children[wordIndex];
            if (currentTime >= word.start && currentTime <= word.end) {
                span.classList.add('highlight');
            } else {
                span.classList.remove('highlight');
            }
        });
    });
}

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

// End button functionality
endButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    buttonText.textContent = "Play";
    // Reset any highlighted lyrics
    document.querySelectorAll(".lyrics span").forEach(span => {
        span.classList.remove("highlight");
    });
});

// Handle audio ending naturally
audio.addEventListener("ended", () => {
    isPlaying = false;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    buttonText.textContent = "Play";
    // Reset any highlighted lyrics
    document.querySelectorAll(".lyrics span").forEach(span => {
        span.classList.remove("highlight");
    });
});

// Update lyrics as audio plays
audio.addEventListener("timeupdate", updateLyrics);

// Create lyrics when page loads
document.addEventListener('DOMContentLoaded', createLyrics);