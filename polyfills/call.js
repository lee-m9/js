function CallFn(thisArg, ...args) {
    if (thisArg == null || thisArg == undefined) {
        throw new TypeError("this argument is null or undefined");
    }

    if (typeof this != "function") {
        throw new TypeError(this + " is not a function");
    }

    thisArg.functionName = Object(this);
    thisArg.functionName(...args);
}

//As Call() method is prototype method of Function, adding CallFn to Function prototype
Function.prototype.callFn = CallFn;

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

printMessage.callFn(sachin, "God of Cricket", "test");
printMessage.callFn(rahul, "Mr. Dependable", "test");
