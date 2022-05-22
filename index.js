var counterVal = 0;

function addClick() {
    updateDisplay(++counterVal);
}

function removeClick() {
    if(counterVal == 0 ){
        updateDisplay(counterVal);
    }else{
        updateDisplay(--counterVal);
    } 
}

function updateDisplay(val) {
    document.getElementById("count_lbl").innerHTML = val;
}
