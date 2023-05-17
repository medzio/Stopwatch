const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const archivBtn = document.querySelector('.archiv')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const infoBtn = document.querySelector('.info')
const brushBtn = document.querySelector('.brush')
const timeList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
const brush = document.querySelector('.brush')
const colorPalette = document.querySelector('.color-palette')
const firstColorBtn = document.querySelector('.first-color')
const secondColorBtn = document.querySelector('.second-color')
const thirdColorBtn = document.querySelector('.third-color')
const root = document.querySelector(':root')

let countTime
let seconds = 0
let minutes = 0
let timesArr = []
let timeNumber = 0

const handleStart = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		seconds++
		if (seconds < 10) {
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds > 9 && seconds < 60) {
			stopwatch.textContent = `${minutes}:${seconds}`
		} else if (seconds > 59) {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:0${seconds}`
		}
	}, 20)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	if (stopwatch.textContent !== '0:00') {
		time.textContent = `Last time: ${stopwatch.textContent}`
		time.style = 'visibility: visible'

		timesArr.unshift(`${stopwatch.textContent}`)
		let li = document.createElement('li')
		li.innerHTML = `<span>Time no. ${timeNumber + 1}: </span>${timesArr[0]}`
		timeList.appendChild(li)
		timeNumber++
		console.log(timesArr)
	}
	seconds = 0
	minutes = 0
	clearInterval(countTime)
	stopwatch.textContent = `${minutes}:0${seconds}`
}

const handleReset = () => {
	timesArr = []
	timeNumber = 0
	timeList.innerHTML = ''
	stopwatch.textContent = '0:00'
	time.textContent = ''
}

const toggleArchiv = () => {
	timeList.classList.toggle('toggleArchiv')
}

const showModal = () => {
	if (modalShadow.style !== 'display: block') {
		modalShadow.style = 'display: block'
	}
}

const closeModal = () => {
	if (modalShadow.style !== 'display:none') {
		modalShadow.style = 'display: none'
	}
}

const changeColors = () => {
	colorPalette.classList.toggle('show-colors')
}

const setFirstColor = () => {
	root.style.setProperty('--first-color', '#fa1406')
}
const setSecondColor = () => {
	root.style.setProperty('--first-color', 'rgb(24, 105, 24)')
}
const setThirdColor = () => {
	root.style.setProperty('--first-color', 'rgb(128, 114, 30)')
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
archivBtn.addEventListener('click', toggleArchiv)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
window.addEventListener('click', e => {
	e.target === modalShadow ? (modalShadow.style = 'display: none') : false
})
brush.addEventListener('click', changeColors)

firstColorBtn.addEventListener('click', setFirstColor)
secondColorBtn.addEventListener('click', setSecondColor)
thirdColorBtn.addEventListener('click', setThirdColor)
