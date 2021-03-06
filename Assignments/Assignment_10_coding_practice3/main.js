// Variable Declarations
var thatDate = new Date(2030, 0)
var today = new Date()

var fromNow = document.getElementById('fromNow')

var daysLeft = document.getElementById('daysLeft');
var checkButton1 = document.getElementById('check1')
var checkButton2 = document.getElementById('check2')

var daysBt = document.getElementById('daysBt');
var checkButton3 = document.getElementById('check3')

// Part 1 - From Now
checkButton1.onclick = function () {check1()};

function check1() {
    fromNow.value = parseInt((thatDate - today) / 1000 / 60 / 60 / 24);
}


// Part 2 - From Input
document.getElementById('tilDate').addEventListener('change', function () {
    let newTilDate = new Date(this.value);

    checkButton2.onclick = function () {check2()};

    function check2() {
        console.log(thatDate - today)
        console.log(thatDate - newTilDate)
        daysLeft.value = parseInt(((thatDate - newTilDate - 100000000)/1000/60/60/24));
    }
});


// Part 3 - Days Between
document.getElementById('startDate').addEventListener('change', function () {
    let newStartDate = new Date(this.value)
    document.getElementById('endDate').addEventListener('change', function () {
            var newEndDate = new Date(this.value)
        });

    checkButton3.onclick = function () {check3()};
    function check3() {
        daysBt.value = Math.abs(parseInt((newStartDate - newEndDate)/1000/60/60/24));
    }
});