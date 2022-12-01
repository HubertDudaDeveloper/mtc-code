function menu () {
	document.getElementById('mainNav_button').addEventListener('click', () => {
		document.getElementById('mainNav').classList.toggle('nav')
        
		document.getElementById('mainNav').classList.toggle('nav--mobile')
	})
}
export default menu