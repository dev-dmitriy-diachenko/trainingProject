const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1score = document.querySelector('#p1Display');
const p2score = document.querySelector('#p2Display');
const playto = document.querySelector('#playto');

p1Button.addEventListener('click', function () {
	p1score.innerText++;
	if (p1score.innerText === playto.value) {
		p1Button.setAttribute('disabled', true);
		p2Button.setAttribute('disabled', true);
		p1score.style.color = 'green';
		p2score.style.color = 'red';
	}
})

p2Button.addEventListener('click', function () {
	p2score.innerText++;
	if (p2score.innerText === playto.value) {
		p1Button.setAttribute('disabled', true);
		p2Button.setAttribute('disabled', true);
		p1score.style.color = 'red';
		p2score.style.color = 'green';
	}
})

reset.addEventListener('click', resetFunc)
playto.addEventListener('change', resetFunc)

const resetFunc = () => {
	p1score.innerText = 0;
	p2score.innerText = 0;
	p1Button.removeAttribute('disabled');
	p2Button.removeAttribute('disabled');
	p1score.style.color = 'black';
	p2score.style.color = 'black';
}
