function reduce(callbackFn) {
    if (typeof callbackFn != "function") {
        throw new TypeError(callbackFn + " is not a function");
    }

    if (this == null) {
        throw new TypeError("this is null or undefined");
    }

    var array = arguments.length >= 2 ? arguments[2] : Object(this);
    var arrayLn = array.length;
    var value;
    var index = 0;

    if (arguments.length >= 2) {
        value = arguments[1]; //this is initial value
    } else {
        value = array[index];
        index += 1;
    }

    if (arrayLn > 0) {
        while (index < arrayLn) {
            value = callbackFn(value, array[index], index);
            index++;
        }
    }

    return value;
}

Array.prototype.reduceFn = reduce;
