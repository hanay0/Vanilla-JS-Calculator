/* start definig the variable which hold the current total */
let runingTotal = 0;


/*the buffer represents what numbers is actually being visible on the screen */
let buffer = '0';

/*previous operator is to store the choosen operator */
let previousOperator;

// grab the screen where the number being shown
const screen = document.querySelector('.screen');

function btnClick(value){
    isNaN(value) ? handleSymbols(value) : handleNumbers(value); 
    // get this line here to rerendering the screen after each click
    screen.innerText = buffer; //showing what we type inside the screen of the calculator 
}

// creating function to handle symobls and another one for numbers
// handle symbols function
function handleSymbols(symbol){
    switch (symbol){
        case 'C':
            buffer = '0';
            runingTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runingTotal;
            runingTotal = 0;
            break;

        case '←':    
            if(buffer.length === 1){
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
            
        case '+':
        case '−':
        case '×':
        case '÷':            
            handleMath(symbol);
            break;    
    }
}

// handle math function
function handleMath(symbol){
    if(buffer === '0'){
        // do nothing
        return;
    }
    
    const intBuffer = parseInt(buffer);

    if(runingTotal === 0) {
        runingTotal = intBuffer; // whatever number we type , will be assigned to the intBuffer
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

// flush operation function
function flushOperation(intBuffer){
    switch(previousOperator){
        // adding
        case '+':
            runingTotal += intBuffer;
            break;
        // subtracting
            case '−':
            runingTotal -= intBuffer;
            break;
        // multiplication
            case '×':
            runingTotal *= intBuffer;
            break;
        // dividing
            case '÷':
            runingTotal /= intBuffer;
            break
    }
}

//handle numbers function
function handleNumbers(numberString){// [numberString] refers to a number but it stills viewed as a string
    if(buffer === '0') {
      buffer = numberString;  
    } else {
        buffer += numberString;
    }
} 

// creating init function which we will call it later to set up something
function init(){
    // selecting the div which wraps all buttons inside itself
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        btnClick(event.target.innerText);
    });
};

init();