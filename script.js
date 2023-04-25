//your code here
const evaluatedText = document.querySelector('#evaluatedText');
const letterCount = document.querySelector('#letterCount');

evaluatedText.addEventListener('input', () => {
  const count = evaluatedText.value.length;
  letterCount.textContent = count;
});
