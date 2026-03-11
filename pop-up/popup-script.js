const getNewsLetterButton = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')
const form = document.querySelector('.subscribe-form')
const emailInput = document.querySelector('.form-wrapper input')


getNewsLetterButton.addEventListener('click',()=>{
    document.body.classList.add('popup-open')
})

closeIcon.addEventListener('click',()=>{
    document.body.classList.remove('popup-open')
})

overlay.addEventListener('click',()=>{
    document.body.classList.remove('popup-open')
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        document.body.classList.remove('popup-open')
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(emailInput.value !== ''){
        document.body.classList.remove('popup-open')
    }
})
