// Selectors
const modalContainer = document.querySelector('.modal-parent-container')
const mainContainer = document.querySelector('main')
const modalMoneyContainers = document.querySelectorAll('.modal-money-container')
const modalOptions = document.querySelectorAll('.modal-option')
const successContainer = document.querySelector('.success-parent')
const backBtn = document.querySelector('.back-btn')
const closeBtn = document.querySelector('.close-btn')
const continueBtns = document.querySelectorAll('.continue-btn')
const successBtn = document.querySelector('.success-btn')
const rewardBtns = document.querySelectorAll('.reward-btn')
const bookmarkBtn = document.querySelector('.bookmark-btn')
const bookmarkText = document.querySelector('.bookmark-text')
const bookmarkSvg = document.querySelector('.bookmark-svg')

// EventListeners
backBtn.addEventListener('click', showModals)

closeBtn.addEventListener('click', closeModals)

modalOptions.forEach((option, index) => option.addEventListener('click', () => showPrices(index)))

continueBtns.forEach((btn) => btn.addEventListener('click', showSuccess))

successBtn.addEventListener('click', closeSuccess)

rewardBtns.forEach((btn) => btn.addEventListener('click', showSuccess))

// Functions
function showModals() {
  mainContainer.classList.add('close')
  modalContainer.classList.add('show')
}

function closeModals() {
  mainContainer.classList.remove('close')
  modalContainer.classList.remove('show')
}

function showPrices(index) {
  modalMoneyContainers.forEach((container) => {
    if (container.classList.contains('price-show')) container.classList.remove('price-show')
  })

  modalMoneyContainers[index].classList.add('price-show')
}

function showSuccess() {
  if (mainContainer.classList.contains('close') && modalContainer.classList.contains('show')) {
    mainContainer.classList.remove('close')
    modalContainer.classList.remove('show')
  }

  successContainer.classList.add('show')
  successContainer.style.position = 'fixed'
}

function closeSuccess() {
  bookmarkBtn.style.color = 'hsl(176, 50%, 47%)'
  bookmarkText.innerText = 'Bookmarked'
  bookmarkSvg.querySelector('circle').style.fill = 'hsl(176, 50%, 47%)'
  bookmarkSvg.querySelector('path').style.fill = '#fff'

  successContainer.classList.remove('show')
  successContainer.style.position = 'absolute'
}
