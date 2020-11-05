export class Deepcopy {
    /**
     * Deep Copy should not only copy primitives types propeties, but also nested object
     * Map is used to copy if any circular referece's
     * Used WeakMap to it wont be memory hog.
     * @param {object} input 
     * @param {WeakMap} map optional
     */
    deepCopyFn(input, map = new WeakMap()) {
        if (typeof input === "object" && input != null) {
            let clone = Array.isArray(input) ? [] : {};
            if (map.get(input)) {
                return map.get(input);
            }
            map.set(input, clone);
            Object.keys(input).forEach(key => {
                clone[key] = this.deepCopyFn(input[key], map);
            });
            return clone;
        }
        else {
            return input;
        }
    }
}