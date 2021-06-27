const getSearchDataFromApi = (event) => {
    //Make a API call and get results based on search term
    //Here we are going to just use console log to see concept
    console.log(event.target.value);
};

/**
 *
 * @param {Function} debonceFn
 * @param {number} delay (default 300 milliseconds)
 * @returns
 */
const debounce = (debonceFn, delay = 300) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            debonceFn.apply(this, args);
        }, delay);
    };
};

const querySearch = debounce(getSearchDataFromApi);

//Button click debounce

const onRegisterBtnClick = () => {
    console.log("Button click registered");
};

const debounceBtn = (debounceFn, delay = 300) => {
    let timeoutId;
    return () => {
        if (!timeoutId) {
            debounceFn.call(this);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
        }, delay);
    };
};

const onBtnClick = debounceBtn(onRegisterBtnClick);
