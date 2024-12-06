function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}
function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
}
function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
