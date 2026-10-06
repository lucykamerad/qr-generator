# QR Generator

A small web app that turns text or a link into a QR code. The code updates while you type, you can pick the error correction level, put a logo in the middle, and download the result as a 1024x1024 PNG.

It uses [qr-code-styling](https://github.com/kozakdenys/qr-code-styling), loaded from a CDN, so there is nothing to install. You need an internet connection the first time the page loads.

## Run it

Open `index.html` in a browser.

## Files

- `index.html` is the page.
- `css/style.css` has the styling, with a light and a dark theme.
- `js/qr.js` wraps the QR library.
- `js/logo.js` handles picking and removing the logo.
- `js/app.js` ties the form to the QR code.

## Notes

- Adding a logo switches error correction to High, because the logo covers part of the code. Removing it puts your old choice back.
- Low, Medium, Quartile and High can recover about 7, 15, 25 and 30% of damaged data.

## License

MIT
