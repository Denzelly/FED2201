var thatDate = new Date(2030,0)
var today = new Date()
var fromNow = document.getElementById('fromNow')
var tilDate = document.getElementById('tilDate');
var daysLeft = document.getElementById('daysLeft');
var checkButton1 = document.getElementById('check1')
var checkButton2 = document.getElementById('check2')


var startDate = document.getElementById('startDate');
var endDate = document.getElementById('endDate');
var daysBt = document.getElementById('daysBt');
var checkButton3 = document.getElementById('check3')


checkButton1.onclick = function() {check1()};
function check1() {
    fromNow.value = parseInt((thatDate-today)/1000/60/60/24);
}

checkButton2.onclick = function() {check2()};
function check2() {
    console.log(tilDate)
    daysLeft.value = parseInt((thatDate-tilDate)/1000/60/60/24);
}

checkButton3.onclick = function() {check3()};
function check3() {
    daysBt.value = parseInt((startDate-endDate)/1000/60/60/24);
}