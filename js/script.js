const block = document.querySelector('.block')
const btn = document.querySelector('.link')

function arrayRandElement(arr) {
	let rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}

const phrase = ['Очень люблю!', 'По всякому люблю!', 'Тя лю!', 'Лапка тебя люблю', 'Люблю заю!', 'Ты моя красавица!', 'Лю сильно', 'Оп ниждан фраза!', 'Тебя обожаю'];

btn.addEventListener('click', (e) => {
	e.PreventDefault
	block.innerHTML = arrayRandElement(phrase)
})