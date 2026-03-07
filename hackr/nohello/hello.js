// the sequence
const nohelloCode = ['h', 'e', 'l', 'l', 'o'];

// a variable to remember the 'position' the user has reached so far.
let nohelloCodePosition = 0;

function activateWut() {
  // @ts-ignore
  document.getElementById("subtitle").textContent = "why are you like this?";
}

// add keydown event listener
document.addEventListener('keydown', (e) => {
  // get the value of the required key from the code
  const requiredKey = nohelloCode[nohelloCodePosition];

  // compare the key with the required key
  if (e.key === requiredKey) {
    // move to the next key in the  sequence
    nohelloCodePosition += 1;

    // if the last key is reached, activate wut
    if (nohelloCodePosition === nohelloCode.length) {
      activateWut();
      nohelloCodePosition = 0;
    } else if (nohelloCodePosition === 2) {
      const preload = document.getElementById('preloadimg');
      if (preload != null) {
        preload.classList.add('now');
      }
    }
  } else {
    nohelloCodePosition = 0;
  }
});