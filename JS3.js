console.log(basicop('+', 12, 10))
console.log(basicop('-', 12, 10))
console.log(basicop('*', 12, 10))
console.log(basicop('/', 12, 10))



function basicop(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}