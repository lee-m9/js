function map(callbackFn) {
    if (typeof callbackFn != "function") {
        throw new TypeError(callbackFn + " is not a function");
    }

    if (this == null) {
        throw new TypeError("this is null or undefined");
    }

    let array = arguments.length > 1 ? arguments[1] : Object(this);
    let arrayLn = array.length;
    let mappedArray = new Array(arrayLn);
    let index = 0;

    if (array.length > 0) {
        while (index < arrayLn) {
            mappedArray[index] = callbackFn(array[index], index);
            index++;
        }
    }

    return mappedArray;
}

Array.prototype.mapFn = map;
