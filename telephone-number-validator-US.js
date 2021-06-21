function telephoneCheck(str) {
    let countryCheck = /^1((((\(\d+\))|(\s\(\d+\)\s)))|[\s]\d+[-\s])\d+[-\s]\d{4}/;
    let exactTen = /^\d{10}$/;
    let areaCode = /(^\(\d{3}\)|^(\d{3}))[-\s\d]\d+[-\s]\d+/;
    return countryCheck.test(str) ||
        exactTen.test(str) ||
        areaCode.test(str);
}

console.log(telephoneCheck("555-555-5555"));

/** OR A better solution*/

let teleCheck = (phone) => /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(phone);

console.log(teleCheck("555-555-5555"));

