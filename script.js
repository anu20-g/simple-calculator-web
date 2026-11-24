let display = document.getElementById('display');
function appendNum(n) { display.value += n; }
function appendOp(op) { display.value += op; }
function clearDisplay() { display.value = ''; }
function delChar() { display.value = display.value.slice(0, -1); }
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}