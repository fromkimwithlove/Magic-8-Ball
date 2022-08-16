let possibleAnswers = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Google it',
	'My sources on Reddit say yes',
	'It is as certain as the price of Bitcoin',
	'Most likely',
	'Ask again after I had my coffee',
	'Yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'What do I know, I said Trump would never be elected president',
	'Better Call Saul',
	'Cannot predict now',
	'Concentrate and ask again',
	'Do not count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

let btn = document.querySelector('button');
let fortune = document.querySelector('.fortune');
const input = document.querySelector('input');

btn.addEventListener('click', function (e) {
	e.preventDefault();
	const outerBall = document.querySelector('#outerball');
	outerBall.classList.add('shake');
	setTimeout(function () {
		const index = Math.floor(Math.random() * possibleAnswers.length);
		const message = possibleAnswers[index];
		fortune.textContent = message;
		fortune.style.fontSize = '1rem';
		outerBall.classList.remove('shake');
	}, 1000);
	input.value = '';
});
