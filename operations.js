function operation(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            if (num2 === 0) {
                throw new Error('Divisão por zero não é permitida!');
            }
            return num1 / num2;
    }
}

if (typeof module !== 'undefined') {
    module.exports = operation;
}
