const inputField = document.querySelector('#password')
const strength = document.querySelector('#strength')
const missingField = document.querySelector('#missing')
const button = document.querySelector('#toggleBtn')

inputField.addEventListener('input', () => {
  console.log(inputField.value)
  let password = inputField.value

  if (!password) {
    strength.innerText = ''
    missingField.innerText = ''
    return
  }

  let score = 0

  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)) score++

  if (score <= 2) {
    strength.innerText = 'Password is Weak.'
    strength.style.color = 'red'
  } else if (score <= 4) {
    strength.innerText = 'Password is okay.'
    strength.style.color = 'orange'
  } else {
    strength.innerText = 'Password is strong.'
    strength.style.color = 'green'
  }

  let missing = []

if (password.length < 8) missing.push('8+ characters')
if (!/[a-z]/.test(password)) missing.push('lowercase letter')
if (!/[A-Z]/.test(password)) missing.push('uppercase letter')
if (!/[0-9]/.test(password)) missing.push('number')
if (!/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)) missing.push('special character')

if (missing.length > 0) {
  missingField.innerText = `Missing: ${missing.join(', ')}`
} else {
  missingField.innerText = ''
}
})

button.addEventListener('click', () => {
  if (inputField.type === 'password') {
    inputField.type = 'text'
    button.innerText = 'Hide'
  } else {
    inputField.type = 'password'
    button.innerText = 'Show'
  }
})
