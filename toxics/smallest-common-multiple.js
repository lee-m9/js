function smallestCommons(arr) {
    //Get Max & Min using
    let [max, min] = [Math.max(...arr), Math.min(...arr)];
    //For constructing array on nums b/w two numbers
    let range = [...Array(max - min + 1)].map((_, index) => index + min);
    /**
     * GCD (12, 5) 
     * gcd(a, b) 
     * => 12%5 => 2 (a=12, b=5)
     *  prev. b becomes a & reminder becomes b 
     * => 5%2 => 1 (a=5, b=2)
     * => 2%1 => 0 (a=2, b=1) (when reached Zero return a)   
     * => 1 => 1 (a=1)
     */
    let gcd = (a, b) => {
        return b ? gcd(b, a % b) : a;
    }
    /**
     * lcm = a*b/gcd(a,b);
     */
    let lcm = (a, b) => (a * b) / gcd(a, b);
    let resArr = range.reduce((ac, cm) => {
        return lcm(ac, cm);
    })
    return resArr;
}

//1- 1 2 3 4 5 6, 7, 8
//2- 2, 4, 6, 8
//3- 3, 6
//4- 4, 8, 12, 16, 20, 
console.log(smallestCommons([1, 5]));