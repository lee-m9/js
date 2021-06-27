/**
 * EVENT BUBBLING goes from clicked element to top - always blows up
 */
document.querySelector("#parent").addEventListener("click", (event) => {
    console.log(
        `Event bubble cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
    );
});

document.querySelector("#child").addEventListener("click", (event) => {
    console.log(
        `Event bubble cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
    );
});

document.querySelector("#grandchild").addEventListener("click", (event) => {
    console.log(
        `Event bubble cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
    );
});

/**
 * EVENT CAPTURING starts from top most listener element to tricles down to clicked element - always flows down
 */
document.querySelector("#parent").addEventListener(
    "click",
    (event) => {
        console.log(
            `Event capture cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
        );
    },
    true
);

document.querySelector("#child").addEventListener(
    "click",
    (event) => {
        console.log(
            `Event capture cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
        );
    },
    true
);

document.querySelector("#grandchild").addEventListener(
    "click",
    (event) => {
        console.log(
            `Event capture cycle: target element - ${event.target.id}, current element - ${event.currentTarget.id}`
        );
    },
    true
);

//// JUSt to clear UI console for better readability
document.querySelector("#bubbling").addEventListener(
    "click",
    () => {
        let logId = document.getElementById("consolelog");
        logId.innerHTML = "";
    },
    true
);
