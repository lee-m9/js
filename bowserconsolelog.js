
let browserConsole = console.log;
console.log = function (msg) {
    let logid = document.getElementById("logId");
    if (typeof arguments == "object") {
        let argstr = JSON && JSON.stringify ? JSON.stringify(arguments).replace(/[{}"]/g, '').replaceAll("0:", "").replaceAll(",1:", "") : arguments;
        logid.innerHTML += argstr + '<hr/>';
    }
    else {
        logid.innerHTML += arguments + '<hr/>';
    }
    browserConsole.apply(console, arguments);
}

