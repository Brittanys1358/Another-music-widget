const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const scrubber = document.getElementById('scrubber');
const rewindBtn = document.getElementById('rewind');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '||'; // Change to pause icon
    } else {
        audio.pause();
        playPauseBtn.textContent = '▷'; // Change to play icon
    }
});

rewindBtn.addEventListener('click', () => {
    audio.currentTime = 0; // Rewind to start
});

audio.addEventListener('loadedmetadata', () => {
    scrubber.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
    scrubber.value = audio.currentTime;
});

scrubber.addEventListener('input', () => {
    audio.currentTime = scrubber.value;
});
