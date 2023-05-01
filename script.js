
const evaluatedText = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

evaluatedText.addEventListener('input', () => {
	let str = evaluatedText.value; 
	letterCount.innerHTML = `${str.lenght}`;
});
