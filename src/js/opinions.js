
function opinions() {
	let id = 0
	const opinionItem = document.querySelectorAll('.opinions__article')
	const scroll = (id) => opinionItem[id].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
	document.getElementById('arrow-next').addEventListener('click', () => {
		id = (id + 1) % opinionItem.length
		scroll(id)
	})
	document.getElementById('arrow-before').addEventListener('click', () => {
		id-- 
		if (id < 0) {
			id = opinionItem.length - 1
		}
		scroll(id)
	})

}

export default opinions