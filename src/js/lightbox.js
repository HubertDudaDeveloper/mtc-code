function lightbox() {
	document.querySelectorAll('.gallery__image').forEach((item, index) => {
		item.addEventListener('click', (event) => {
			console.log(event)
			const main = document.getElementById('main')
			event.target.style += 'object-fit: contain; position: fixed; z-index: 999; top: 30vh; left 50%; pointer-events: none'
			const shadow = document.createElement('div')
			shadow.classList += 'shadow__image'
			shadow.addEventListener('click', () => {
				event.target.style -= 'object-fit: contain; position: fixed; z-index: 999; top: 30vh; left 50%; pointer-events: none'
				shadow.classList = ''
			})
			main.prepend(shadow)
		})
	})
}

export default lightbox