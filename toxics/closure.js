/**
 * Calc().add(2).sub(1).mul(2).val()
 * Closures with Modular Pattern
 */

export let Calc = function () {
    let cal;

    function Add(params) {
        cal = cal ? cal + params : params;
        return this;
    }
    function Sub(params) {
        cal = cal ? cal - params : params;
        return this;
    }

    function Multiply(params) {
        cal = cal ? cal * params : params;
        return this;
    }

    const val = function () {
        return cal;
    }

    return ({
        add: Add,
        sub: Sub,
        mul: Multiply,
        val: val
    });
}