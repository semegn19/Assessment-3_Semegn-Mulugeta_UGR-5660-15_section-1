
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (button.id === 'clear') {
         
            display.value = '';
            expression = '';
        } else if (button.id === 'equals') {
            
            if (expression) {
                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            }
        } else if (button.classList.contains('operator')) {
            
            if (expression && !isNaN(expression.slice(-1))) {
                expression += value;
                display.value = expression;
            }
        } else {           
            expression += value;
            display.value = expression;
        }
    });
});
