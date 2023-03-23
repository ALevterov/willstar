const runningStringInner = document.querySelector('.running_string_inner')
let runningWord = document.getElementById('running_string_word')

const runningStringWords = ['star', 'popular', 'famous']

let currentWordIndex = 0

setInterval(() => {
  runningStringInner.classList.remove('animated2')
  runningStringInner.classList.add('animated1')

  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % 3
    console.log(currentWordIndex)
    runningWord.innerHTML = runningStringWords[currentWordIndex]
    runningStringInner.classList.remove('animated1')
    runningStringInner.classList.add('animated2')
  }, 600)
}, 4000)
