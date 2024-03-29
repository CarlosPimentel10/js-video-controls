/* get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function togglePlay() {
	if (video.pause) {
		video.play();
	} else {
		video.pause();
	}
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	// const icon = this.paused ? 'play' : 'pause';
	// toggle.textContent = icon;
	//	console.log('icon');
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
	//console.log('skipping');
}

function handleRangeUpdate() {
	video[this.name] = this.value;
	/*console.log(this.name);
	console.log(this.value);*/
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}`;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeUpdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
