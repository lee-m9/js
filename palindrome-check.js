function palindrome(str) {
    let regex = /[\da-zA-Z]/g;
    let pal = str.match(regex).join('').toLowerCase();
    let palLn = pal.length;
    for (let c in pal) {
        if (pal[c] != pal[palLn - 1 - c]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye"));