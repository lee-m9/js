/**
 * Shallow Copy will only copy primitives types propeties, removing refernce to input object
 * If any Property is object, it will share refernce of input object Property
 * @param {Object} input any Object
 */

export function shallowCopyFn(input) {
    if (typeof input == "object" && input != null) {
        let returncopy = Array.isArray(input) ? [] : {};
        Object.keys(input).forEach(key => {
            returncopy[key] = input[key];
        });
        return returncopy;
    }
    else {
        return input;
    }
}

