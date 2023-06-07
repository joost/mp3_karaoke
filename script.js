const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const lyricsElement = document.getElementById('lyrics');
const currentTimeElement = document.getElementById('current-time');

const lyrics = [
  { time: 3, text: 'Acht jaar geleden, je was een uk' },
  { time: 9, text: 'En je speelde nog met poppen' },
  { time: 11, text: 'Bouwde graag of maakte stuk' },
  { time: 14, text: 'In de zandbak, het speelkwartier' },
  { time: 19, text: 'En dan rennen op het plein' },
  { time: 21, text: 'Wat had je dan plezier' },
  { time: 24, text: 'Klaar voor de stap, jij wilt gaan!' },
  { time: 27, text: 'Wat verder fietsen, dat dan wel' },
  { time: 30, text: 'Nieuwe vrienden, nieuwe vakken' },
  { time: 32, text: 'Een nieuw lokaal bij elke bel, elke bel, elke bel' },
  { time: 39, text: 'De PMS, het zit erop' },
  { time: 44, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 49, text: 'PMS, het zit erop' },
  { time: 54, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 58, text: 'Verkeersexamen, daarvoor geslaagd' },
  { time: 63, text: 'De muren hebben oren en toen heb je veel gevraagd' },
  { time: 67, text: 'Atelier middag, weer wat nieuws' },
  { time: 73, text: 'En veel avonden met Spelkring' },
  { time: 122, text: 'Creativiteit is hier een ding' },
  { time: 129, text: 'Het leukste was wel de week op kamp' },
  { time: 136, text: 'Buiten zijn en Snakie voeren' },
  { time: 142, text: 'Het Woldhuis was een avontuur' },
  { time: 149, text: 'Hout verzam’len voor het grootste vuur, grootste vuur' },
  { time: 157, text: 'De PMS, het zit erop' },
  { time: 163, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 170, text: 'PMS, het zit erop' },
  { time: 176, text: 'Nog een laatste feestje en dat was ook top' },
  { time: 190, text: 'Het was een feestje, het was een feest' },
  { time: 196, text: 'Vossenjacht en het ouderspel' },
  { time: 202, text: 'En het gala in mooie kleren' },
  { time: 208, text: 'Musical spelen voor groot publiek' },
  { time: 215, text: 'Afscheid nemen van je vrienden, van je vrienden' },
  { time: 224, text: 'De PMS, het zit erop' },
  { time: 231, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 239, text: 'PMS, het zit erop' },
  { time: 245, text: 'Nog een laatste feestje en dat was ook top' },  // ... other lyrics lines
];

let currentLineIndex = 0;
let isPlaying = false;
let isPaused = false;
let pauseTimeRemaining = 0;
let pauseTimeout;

function displayLyrics() {
  if (currentLineIndex < lyrics.length && !isPaused) {
    const { time, text } = lyrics[currentLineIndex];
    lyricsElement.textContent = text;
    currentLineIndex++;
    const nextLineTime = currentLineIndex < lyrics.length ? lyrics[currentLineIndex].time : audio.duration;
    pauseTimeRemaining = (nextLineTime - audio.currentTime) * 1000;
    pauseTimeout = setTimeout(displayLyrics, pauseTimeRemaining);
  }
}

function togglePlayPause() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    displayLyrics();
    playPauseButton.textContent = 'Pause';
  } else {
    if (isPaused) {
      audio.play();
      isPaused = false;
      setTimeout(displayLyrics, pauseTimeRemaining);
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      isPaused = true;
      clearTimeout(pauseTimeout);
      playPauseButton.textContent = 'Play';
    }
  }
}

audio.addEventListener('timeupdate', () => {
  currentTime = audio.currentTime;
  console.log(currentTime);
  if (currentLineIndex < lyrics.length && currentTime >= lyrics[currentLineIndex].time) {
    lyricsElement.textContent = lyrics[currentLineIndex].text;
    currentLineIndex++;
  }
  currentTimeElement.textContent = formatTime(currentTime);
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}

playPauseButton.addEventListener('click', togglePlayPause);
