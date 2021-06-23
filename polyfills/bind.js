function bind(...args) {

    if(this == null) {
        throw new TypeError('this is null or undefined');
    }

    if(args.length == 0 || args[0] == null || args[0] == undefined) {
        throw new TypeError('this argument is null or undefined');
    }
    
    let fn = Object(this);
    let params = args.slice(1);
    return function() {
        fn.apply(args[0], [...params, ...arguments]);
    }
}

Function.prototype.bindFn = bind;

let sachin = {
    firstName: "Sachin",
    lastName: "Tendulkar",
};

let rahul = {
    firstName: "Rahul",
    lastName: "Dravid",
};

let printMessage = function (message) {
    console.log(`Welcome ${message} ${this.lastName}, ${this.firstName}`);
};

let printSachin = printMessage.bindFn(sachin, "God of Cricket", "test");
let printDavid = printMessage.bindFn(rahul, "Mr. Dependable", "test");

printSachin();
printDavid();