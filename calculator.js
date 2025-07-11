let display = document.getElementById('display');
let sound = document.getElementById('click-sound');

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function press(value) {
  playSound();
  display.value += value;
}

function calculate() {
  playSound();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  playSound();
  display.value = '';
}
