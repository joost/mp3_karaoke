const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const lyricsElement = document.getElementById('lyrics');
const lyrics = `Acht jaar geleden, je was een uk
Je speelde nog met poppen
Bouwde graag of maakte stuk
In de zandbak, het speelkwartier
En dan rennen op het plein
Wat had je dan plezier
Klaar voor de stap, jij wilt gaan!
Wat verder fietsen, dat dan wel
Nieuwe vrienden, nieuwe vakken
Een nieuw lokaal bij elke bel, elke bel, elke bel
De PMS, het zit erop
Nog een laatste feestje en ook dat was top
PMS, het zit erop
Nog een laatste feestje en dat was ook top
Verkeersexamen, daarvoor geslaagd
De muren hebben oren en toen heb je veel gevraagd

Atelier middag, weer wat nieuws
En veel avonden met Spelkring
Creativiteit is hier een ding

Het leukste was wel de week op kamp
Buiten zijn en Snakie voeren
Het Woldhuis was een avontuur
Hout verzam’len voor het grootste vuur, grootste vuur

De PMS, het zit erop
Nog een laatste feestje en ook dat was top
PMS, het zit erop
Nog een laatste feestje en dat was ook top
Het was een feestje, het was een feest
Vossenjacht en het ouderspel
En het gala in mooie kleren
Musical spelen voor groot publiek
Afscheid nemen van je vrienden, van je vrienden

De PMS, het zit erop
Nog een laatste feestje en ook dat was top
PMS, het zit erop
Nog een laatste feestje en dat was ook top`;

const lyricsArray = lyrics.split('\n');

let index = 0;
let isPlaying = false;

function displayLyrics() {
  lyricsElement.textContent = lyricsArray[index];
  index = (index + 1) % lyricsArray.length;
  setTimeout(displayLyrics, 2000); // Adjust the delay as needed
}

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    displayLyrics();
  }
});
