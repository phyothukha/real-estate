function scrollTrack(id, direction) {
	const track = document.getElementById(id);
	if (!track) return;
	const card = track.firstElementChild;
	const amount = card ? card.getBoundingClientRect().width + 24 : 320;
	track.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

document.querySelectorAll('[data-carousel-prev]').forEach((btn) => {
	btn.addEventListener('click', () => scrollTrack(btn.getAttribute('data-carousel-prev'), -1));
});

document.querySelectorAll('[data-carousel-next]').forEach((btn) => {
	btn.addEventListener('click', () => scrollTrack(btn.getAttribute('data-carousel-next'), 1));
});

document.querySelectorAll('[data-dismiss]').forEach((btn) => {
	btn.addEventListener('click', () => btn.closest(`.${btn.getAttribute('data-dismiss')}`)?.remove());
});
