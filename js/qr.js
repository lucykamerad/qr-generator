// Thin wrapper around qr-code-styling, so the rest of the app doesn't touch the library.

const DOWNLOAD_SIZE = 1024; // the PNG you download is this many pixels square

const qrCode = new QRCodeStyling({
  width: DOWNLOAD_SIZE,
  height: DOWNLOAD_SIZE,
  type: 'canvas',
  backgroundOptions: { color: '#ffffff' },
  imageOptions: { crossOrigin: 'anonymous', margin: 5, imageSize: 0.4 },
});

let qrMounted = false;

function drawQR(data, level, logoSrc) {
  qrCode.update({
    data,
    image: logoSrc,
    qrOptions: { errorCorrectionLevel: level },
  });

  // the canvas only gets added to the page the first time we draw
  if (!qrMounted) {
    qrCode.append(document.getElementById('qr'));
    qrMounted = true;
  }
}

function downloadQR() {
  qrCode.download({ name: 'qrcode', extension: 'png' });
}
