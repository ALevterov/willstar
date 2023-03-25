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
