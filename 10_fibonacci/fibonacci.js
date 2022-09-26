const fibonacci = function (num) {
    // if negative return "OOPS"
    if (num < 0) {
        return 'OOPS';
    }
    // initialize the first two part of the fib array
    let fib = [1, 1];
    // get the sum of the previous two elements and push to array
    for (let i = 1; i < num; i++) {
        let sum = fib[fib.length - 2] + fib[fib.length - 1];
        fib.push(sum);
    }

    return fib[fib.length - 2];
};

console.log(fibonacci("4"));
// Do not edit below this line
module.exports = fibonacci;
