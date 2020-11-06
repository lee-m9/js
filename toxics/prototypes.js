/**
 * [1,2,3,4].square() => [1,4,9,16]
 * A new Square function show return new array with square of each element
 * Create a new function, with 'this' returning the array it was called on.
 * Assign with a function name to Array.prototype
 */

export let ArrayProtoSquare = function () {

    let Square = function () {
        let currentArray = Object(this);
        let ln = currentArray.length;
        let squaredArray = new Array();
        let s = 0;
        while (s < ln) {
            let val = currentArray[s];
            squaredArray.push(val * val);
            s++;
        }
        return squaredArray;
    }

    Array.prototype.Square = Square;
}
