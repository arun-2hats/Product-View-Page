
const sizeButton = document.getElementById('size-btn');
const popUpOverlay = document.getElementById('pop-up-overlay');
const popUpClose = document.getElementById('pop-up-close');

/**
 * Function to toggle pop up visibility.
 * @param {Event} visibility - The first number.
 * @returns {null} .
 */
const togglePopUpVisibility = (visibility) => {
  popUpOverlay.style.display = visibility;
}

document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('input[name="color"]');
  const displayText = document.querySelector('#color-value');

  radioButtons.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      displayText.textContent = `${event.target.value}`;
    });
  });
});

document.addEventListener('keydown', (event) => {
  // Check for the desired key combination (Ctrl + Shift + F)

  if (event.ctrlKey && event.shiftKey && event.key === 'F') {
    console.log('event detected')
    event.preventDefault(); // Prevent any default browser action
    const searchInput = document.getElementById('search');
    searchInput.focus(); // Focus on the search input
    searchInput.select(); // Optionally, select existing text
  }
});

sizeButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('size event click event identified');

  togglePopUpVisibility('block');
})

popUpClose.addEventListener('click', (event) => {
  event.preventDefault();

  togglePopUpVisibility('none')
})