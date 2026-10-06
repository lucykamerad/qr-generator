const textInput = document.getElementById('text');
const levelSelect = document.getElementById('level');
const qrBox = document.getElementById('qr');
const downloadButton = document.getElementById('download');

let levelBeforeLogo = null; // what the user had picked before a logo forced "High"
let timer;

function update() {
  const text = textInput.value.trim();
  qrBox.classList.toggle('empty', !text);
  downloadButton.hidden = !text;
  if (text) drawQR(text, levelSelect.value, logo.src);
}

// wait a moment after typing stops so we don't redraw on every keystroke
function updateSoon() {
  clearTimeout(timer);
  timer = setTimeout(update, 150);
}

textInput.addEventListener('input', updateSoon);
levelSelect.addEventListener('change', () => {
  levelBeforeLogo = null; // the user chose a level themselves, so keep it when the logo goes
  update();
});
downloadButton.addEventListener('click', downloadQR);

logo.init((src) => {
  // a logo covers part of the code, so use the strongest error correction
  if (src && levelBeforeLogo === null) {
    levelBeforeLogo = levelSelect.value;
    levelSelect.value = 'H';
  } else if (!src && levelBeforeLogo !== null) {
    levelSelect.value = levelBeforeLogo;
    levelBeforeLogo = null;
  }
  update();
});
