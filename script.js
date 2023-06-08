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
  { time: 49, text: 'De PMS, het zit erop' },
  { time: 54, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 58, text: 'Verkeersexamen, daarvoor geslaagd' },
  { time: 63, text: 'En de muren hebben oren en toen heb je veel gevraagd' },
  { time: 67, text: 'Atelier middag, weer wat nieuws' },
  { time: 73, text: 'En veel avonden met Spelkring' },
  { time: 75, text: 'CreativiTEIT is hier een ding' },
  { time: 78, text: 'Het leukste was wel de week op kamp' },
  { time: 81, text: 'Buiten zijn en Snakie voeren' },
  { time: 83, text: 'Het Woldhuis was een avontuur' },
  { time: 86, text: 'Hout verzam’len voor het grootste vuur, grootste vuur, grootste vuur' },
  { time: 93, text: 'De PMS, het zit erop' },
  { time: 98, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 103, text: 'De PMS, het zit erop' },
  { time: 108, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 112, text: 'Het was een feestje (3x), het was een feest' },
  { time: 122, text: 'Vossenjacht en het ouderspel' },
  { time: 126, text: 'En het gala in mooie kleren' },
  { time: 128, text: 'Musical spelen voor groot publiek' },
  { time: 131, text: 'Afscheid nemen van je vrienden, van je vrienden, van je vrienden' },
  { time: 138, text: 'De PMS, het zit erop' },
  { time: 143, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 148, text: 'De PMS, het zit erop' },
  { time: 152, text: 'Nog een laatste feestje en ook dat was top' }
];

let isPlaying = false;
let isPaused = false;
let currentLyricIndex = -1;
let pauseTimeout;

function displayLyrics() {
  if (!isPaused) {
    const currentTime = audio.currentTime;
    const lyricIndex = findCurrentLyricIndex(currentTime);
    if (lyricIndex !== -1 && lyricIndex !== currentLyricIndex) {
      currentLyricIndex = lyricIndex;
      lyricsElement.textContent = lyrics[currentLyricIndex].text;
    }
    pauseTimeout = requestAnimationFrame(displayLyrics);
  }
}

function findCurrentLyricIndex(currentTime) {
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      return i;
    }
  }
  return -1;
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
      displayLyrics();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      isPaused = true;
      cancelAnimationFrame(pauseTimeout);
      playPauseButton.textContent = 'Play';
    }
  }
}

audio.addEventListener('timeupdate', () => {
  currentTimeElement.textContent = formatTime(audio.currentTime);
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
