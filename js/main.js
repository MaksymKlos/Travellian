const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');

// Get today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
today = yyyy + '-' + mm + '-' + dd;

// Get the date 2 months from today
var maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 2);
dd = maxDate.getDate();
mm = maxDate.getMonth() + 1;
yyyy = maxDate.getFullYear();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
maxDate = yyyy + '-' + mm + '-' + dd;

// Set the min and max attributes for checkIn and checkOut inputs
checkIn.setAttribute('min', today);
checkIn.setAttribute('max', maxDate);
checkOut.setAttribute('min', today);
checkOut.setAttribute('max', maxDate);

//Burger
document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.header__navigation').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.header__login').classList.toggle('open');
  document.querySelector('body').classList.toggle('hidden');
});