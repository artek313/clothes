'use strict'

document.addEventListener('DOMContentLoaded', function () {
	init()
})

function init() {
	const kindTshirtSelect = document.querySelector('#kindTshirt')
	const colorTshirtSelect = document.querySelector('#colorTshirt')
	const tshirtBox = document.querySelector('.tshirtBox')
	const overPrintNameSelect = document.querySelector('#overPrintName')
	const overPrintColorSelect = document.querySelector('#overPrintColor')

	const overprint = document.getElementById('overprint')

	console.log(overprint)

	// overprint.addEventListener('load', function (e) {
	// 	console.dir(e)
	// 	console.log(overprint.contentDocument)
	// 	console.log(overprint.contentDocument.querySelector('svg'))
	// 	overprint.contentDocument.querySelector('svg').style.fill = '#00f'
	// })

	console.log(colorTshirtSelect)

	colorTshirtSelect.addEventListener('click')

	overPrintColorSelect.addEventListener('change', function (e) {
		console.log(e.target.value)
		const color = e.target.value
		overprint.contentDocument.querySelector('svg').style.fill = color
	})

	// document.getElementById('inputfile').addEventListener('change', function (e) {
	// 	console.dir(document.getElementById('inputfile'))
	// 	console.log(e)
	// 	let fr = new FileReader()
	// 	fr.readAsText(file)

	// 	console.log(fr)
	// 	fr.onload = function () {
	// 		document.getElementById('output').textContent = fr.result
	// 	}

	// 	fr.readAsBinaryString(this.files[0])
	// })

	// overprint.addEventListener(
	// 	'load',
	// 	function (e) {
	// 		const svgObj = overprint.contentDocument
	// 		if (svgObj) {
	// 			console.log(svgObj.querySelector('svg'))
	// 		}
	// 	},
	// 	false
	// )
	// overPrintNameSelect.addEventListener('change', function (e) {
	// 	let svgObject = document.querySelector('#path3443')
	// 	console.log(overprint)
	// 	document.querySelectorAll('#path1096')

	// 	if (svgObject) {
	// 		console.log(svgObject)
	// 		let svgDocObject = svgObject.innerHTML

	// 		console.log(svgDocObject)
	// 	}
	// })
}
