const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.input-field')
const errors = document.querySelectorAll('.error')
const errorEmail = document.querySelector('.error-email')
const errorFullName = document.querySelector('.error-full-name')
const errorUserName = document.querySelector('.error-user-name')
const errorPassword = document.querySelector('.error-password')
const btn = document.querySelector('.sign-up-btn')

let isNameTouched = false
btn.disabled = true

// change position of label while input focused and actived
inputs.forEach(inp => {
	inp.addEventListener('focus', () => {
		inp.classList.add('active')
	})
	inp.addEventListener('blur', () => {
		if (inp.value != '') return
		inp.classList.remove('active')
	})
})

// form validation
inputs.forEach((item, index) => {
	item.addEventListener('input', () => {
		isNameTouched = true
		if (item.name === 'input-email' && !item.value.includes('@')) {
			errorEmail.innerText = 'email must contain "@"'
		} else if (item.name === 'input-email' && item.value.includes('@')) {
			if (item.value.split('@')[0].length < 3 || item.value.split('@')[1].length < 3) {
				errorEmail.innerText = 'email must contain at least 3 characters before and after "@"'
			} else {
				errorEmail.innerText = ''
			}
		} else if (item.name === 'input-full-name' && !(item.value.split(' ').length > 1)) {
			errorFullName.innerText = 'fullname must contain 2 words'
		} else if (item.name === 'input-user-name' && item.value.length < 4) {
			errorUserName.innerText = 'passwords must contain at least 4 characters'
		} else if (item.name === 'input-password' && item.value.length < 4) {
			errorPassword.innerText = 'passwords must contain at least 4 characters'
		} else {
			errors[index].innerText = ''
			isNameTouched = true
		}
	})
})

form.addEventListener('submit', e => {
	e.preventDefault()
	console.log('registered')
})
