/**
 * write a function sum(a)(b)(c)....( n)(). which should return the sum of all the numbers a+b+c+..+n
 */

/**
 * lets first solve for sum(a)(b) => a + b
 */

let sum0 = (a) => {
    return (b) => {
        return () => a + b;
    };
};

/**
 * lets expand on it and solve for sum(a)(b)(c)(d) => a + b + c + d
 */

let sum1 = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return () => a + b + c + d;
            };
        };
    };
};

/**
 * as inputs increase, the number of inner return functions increase as well.
 * So, instead of repeating code/as the dynamic nature of input parameters we can use recursive function
 * which can dynamically call itself based on number of input parameters
 */
let sum2 = (a) => {
    return (b) => {
        if (b) {
            return sum2(a + b);
        }

        return a;
    };
};

/**
 * The above function can further be simplified as below
 */

let sum = (a) => (b) => b ? sum(a + b) : a;
