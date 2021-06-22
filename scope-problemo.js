/**
    function logNumbers(maxNumber) {
        for (var i = 1; i <= maxNumber; i++) {
            setTimeout(() => {
                console.log(i);
            }, 500);
        }
    }

    Expected output numbers 1 through 4 (1 to 4) when maxNumber = 4
 */

//Fix 1 - using let keywork which is block scoped
function logNumbers_LET(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        setTimeout(() => {
            console.log(i);
        }, 500);
    }
}

//Fix 2 - using IIFE creating closure
function logNumbers_IIFE(maxNumber) {
    for (var i = 1; i <= maxNumber; i++) {
        (function (index) {
            setTimeout(() => {
                console.log(index);
            }, 500);
        })(i);
    }
}
