const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const lyricsElement = document.getElementById('lyrics');

const lyrics = [
  { time: 3, text: 'Acht jaar geleden, je was een uk' },
  { time: 10, text: 'Je speelde nog met poppen' },
  { time: 15, text: 'Bouwde graag of maakte stuk' },
  { time: 20, text: 'In de zandbak, het speelkwartier' },
  { time: 25, text: 'En dan rennen op het plein' },
  { time: 30, text: 'Wat had je dan plezier' },
  { time: 36, text: 'Klaar voor de stap, jij wilt gaan!' },
  { time: 43, text: 'Wat verder fietsen, dat dan wel' },
  { time: 49, text: 'Nieuwe vrienden, nieuwe vakken' },
  { time: 55, text: 'Een nieuw lokaal bij elke bel, elke bel, elke bel' },
  { time: 64, text: 'De PMS, het zit erop' },
  { time: 71, text: 'Nog een laatste feestje en ook dat was top' },
  { time: 79, text: 'PMS, het zit erop' },
  { time: 86, text: 'Nog een laatste feestje en dat was ook top' },
  { time: 92, text: 'Verkeersexamen, daarvoor geslaagd' },
  { time: 99, text: 'De muren hebben oren en toen heb je veel gevraagd' },
  { time: 107, text: 'Atelier middag, weer wat nieuws' },
  { time: 114, text: 'En veel avonden met Spelkring' },
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
  { time: 245, text: 'Nog een laatste feestje en dat was ook top' },
];

let currentLineIndex = 0;
let isPlaying = false;

function displayLyrics() {
  if (currentLineIndex < lyrics.length) {
    const { time, text } = lyrics[currentLineIndex];
    lyricsElement.textContent = text;
    currentLineIndex++;
    setTimeout(displayLyrics, (time - audio.currentTime) * 1000);
  }
}

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    displayLyrics();
  }
});
