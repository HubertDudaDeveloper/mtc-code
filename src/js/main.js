'use strict'
import 'bootstrap'
import carousel from './carousel'
import opinions from './opinions'
import menu from './menu'
import lightbox from './lightbox'

opinions()
carousel()
menu()
lightbox()

// Added dark menu on scroll
window.onscroll = () => {
	document.documentElement.scrollTop > 50 && document.getElementById('mainNav').classList.add('dark')
	document.documentElement.scrollTop < 50 && document.getElementById('mainNav').classList.remove('dark')
}