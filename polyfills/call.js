function CallFn(thisObject, ...args) {
    thisObject.functionName = this;
    thisObject.functionName(...args);
}

//As Call() method is prototype method of Function, adding CallFn to Function prototype
Function.prototype.callFn = CallFn;

var sachin = {
    firstName: "Sachin",
    lastName: "Tendulkar",
};

var rahul = {
    firstName: "Rahul",
    lastName: "Dravid",
};

var printMessage = function (message) {
    console.log(`Welcome ${message} ${this.lastName}, ${this.firstName}`);
};

printMessage.callFn(sachin, "God of Cricket", "test");
printMessage.callFn(rahul, "Mr. Dependable", "test");
