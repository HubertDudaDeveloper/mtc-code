//
//const opinionActive = (kId) => {
//	const carousel = `# ${kId} .opinions_active`
//	const id = document.querySelectorAll(String(carousel))[0].id
//	return Number(id)
//}
//
//const current = (k, init, carId) => {
//	const counter = (slide.length / 2)
//	Math.round(counter)
//	counter.toString()
//	if (init === 'change') {
//		const index = k % slide.length
//		appear(index, carId)
//	} else {
//		if (k === 1) {
//			return String('opinions_active')
//		}
//	}
//}
//
//const appear = (k, carId) => {
//	const carousel = '#' + carId + ' .opinion__item'
//	const opinion = document.querySelectorAll(String(carousel))
//	opinion.forEach(item => {
//		item.removeAttribute('style')
//		item.classList.remove('opinions_active')
//	})
//	if (k < 0) {
//		opinion[opinion.length - 1].classList.toggle('opinions_active')
//		opinion[opinion.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
//	} else {
//		opinion[k].classList.toggle('opinions_active')
//		opinion[k].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
//	}
//}

function carousel () {
	const carouselItem = document.querySelectorAll('.carousel__container')
	const thumb = document.querySelectorAll('.thumb')
	const scroll = (id) => carouselItem[id].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
	
	thumb[0].style.background = '#D4B254'

	for (let i = 0; i < thumb.length; i++) {
		thumb[i].addEventListener('click', () => { 
			scroll(i)
			thumb.forEach((item) => { item.style.background = '#FFFFFF' })
			thumb[i].style.background = '#D4B254'
		})
	}
}

export default carousel