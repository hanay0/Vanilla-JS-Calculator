/* start definig the variable which hold the current total */
let runingTotal = 0;


/*the buffer represents what numbers is actually being visible on the screen */
let buffer = '0';

/*previous operator is to store the choosen operator */
let previousOperator;

// grab the screen where to show the numbers
const screen = document.querySelector('.screen');

function btnClick(value){
    console.log(value);
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