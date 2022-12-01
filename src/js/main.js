'use strict'
import 'bootstrap'
import carousel from './carousel'
import opinions from './opinions'
import menu from './menu'

opinions()
carousel()
menu()

// Added dark menu on scroll
window.onscroll = () => {
	document.documentElement.scrollTop > 50 && document.getElementById('mainNav').classList.add('dark')
	document.documentElement.scrollTop < 50 && document.getElementById('mainNav').classList.remove('dark')
}