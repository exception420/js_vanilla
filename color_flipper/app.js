const colors = [ 'green', 'red', 'rgba(133,122,200)', '#f15025' ];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
	// get random no between 0 - 3
	// i tried to use arrow function here, but it didn't work
	const randomNumber = getRandomNumber();

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * 4);
}
