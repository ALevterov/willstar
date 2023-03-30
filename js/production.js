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

let nameInput = document.querySelector('input[name="name"]')
let nameLabel = document.querySelector('label[for="name"]')
let emailInput = document.querySelector('input[name="email"]')
let emailLabel = document.querySelector('label[for="email"]')

let submitBtn = document.getElementById('submit')
submitBtn.disabled = true

function validateForm() {
  if (nameInput.value === '' || emailInput.value === '') {
    submitBtn.disabled = true
  }

  if (nameInput.value !== '' && emailInput.value !== '') {
    submitBtn.disabled = false
  }

  if (nameInput.value === '') {
    nameInput.style.borderBottom = '1px solid red'
    nameLabel.style.color = 'red'
  } else {
    nameInput.style.borderBottom = '1px solid #fff'
    nameLabel.style.color = '#fff'
  }

  if (emailInput.value === '') {
    emailInput.style.borderBottom = '1px solid red'
    emailLabel.style.color = 'red'
  } else {
    emailInput.style.borderBottom = '1px solid #fff'
    emailLabel.style.color = '#fff'
  }
}

nameInput.addEventListener('change', validateForm)
nameInput.addEventListener('input', validateForm)

emailInput.addEventListener('change', validateForm)
emailInput.addEventListener('input', validateForm)

const moreBtn = document.querySelector('.btn_more')
const galeryContainer = document.querySelector('.production__galery_container')
moreBtn.addEventListener('click', () => {
  galeryContainer.classList.toggle('opened')
  if (!galeryContainer.classList.contains('opened')) {
    moreBtn.href = '#galery_item1'
  }
  if (galeryContainer.classList.contains('opened')) {
    moreBtn.removeAttribute('href')
  }
})
