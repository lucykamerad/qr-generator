// The little "+" box that lets you pick a logo for the middle of the code.

const logo = {
  src: '', // data URL of the chosen image, empty when there is none

  init(onChange) {
    const fileInput = document.getElementById('logo-file');
    const addButton = document.getElementById('logo-add');
    const removeButton = document.getElementById('logo-remove');
    const preview = document.getElementById('logo-preview');

    const set = (src) => {
      this.src = src;
      addButton.hidden = !!src;
      preview.hidden = !src;
      preview.querySelector('img').src = src;
      onChange(src);
    };

    addButton.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.addEventListener('load', () => set(reader.result));
      reader.readAsDataURL(file);
    });

    removeButton.addEventListener('click', () => {
      fileInput.value = ''; // so picking the same file again still fires "change"
      set('');
    });
  },
};
