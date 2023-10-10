const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
});
