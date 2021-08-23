const firstYear = document.getElementById('1year');
const secondYear = document.getElementById('2year');
const price = document.getElementById('price');

const offerDetails1 = document.getElementById('offer-detail-1');
const offerDetails2 = document.getElementById('offer-detail-2');

const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option5 = document.getElementById('option-5');
const option6 = document.getElementById('option-6');

firstYear.addEventListener('click', () => {
    offerDetails1.classList.toggle('showOffer');
    firstYear.classList.add('change-background');
    secondYear.classList.remove('change-background');
    offerDetails2.classList.remove('showOffer');
    price.innerHTML = '$2.49';
})

secondYear.addEventListener('click', () => {
    offerDetails2.classList.toggle('showOffer');
    secondYear.classList.add('change-background');
    firstYear.classList.remove('change-background');
    offerDetails1.classList.remove('showOffer');
    price.innerHTML = '$5.49';
})

option2.addEventListener('click', () => {
    price.innerHTML = '$1.5';
})

option3.addEventListener('click', () => {
    price.innerHTML = '$.8';
})


option5.addEventListener('click', () => {
    price.innerHTML = '$2.49';
})

option6.addEventListener('click', () => {
    price.innerHTML = '$1.49';
})
