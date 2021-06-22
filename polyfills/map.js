function map(callbackFn) {
    if (typeof callbackFn != "function") {
        throw new TypeError(callbackFn + " is not a function");
    }

    if (this == null) {
        throw new TypeError("this is null or undefined");
    }

    var array = arguments.length > 1 ? arguments[1] : Object(this);
    var arrayLn = array.length;
    var mappedArray = new Array(arrayLn);
    var index = 0;

    if (array.length > 0) {
        while (index < arrayLn) {
            mappedArray[index] = callbackFn(array[index], index);
            index++;
        }
    }

    return mappedArray;
}

Array.prototype.mapFn = map;
