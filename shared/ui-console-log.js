let log = console.log;
console.log = function () {
    let logId = document.getElementById("consolelog");
    if (logId) {
        if (typeof arguments == "object") {
            let args =
                JSON && JSON.stringify
                    ? JSON.stringify(arguments)
                          .replace(/[{}"]/g, "")
                          .replace(/[0:]/g, "")
                    : arguments;
            logId.innerHTML += args && args + "<hr/>";
        } else {
            logId.innerHTML += arguments.length && arguments + "<hr/>";
        }
        log.apply(console, arguments);
    }
};
