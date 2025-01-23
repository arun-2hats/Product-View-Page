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
  console.log('event detected')

  if (event.ctrlKey && event.shiftKey && event.key === 'F') {
    console.log('event detected')
    event.preventDefault(); // Prevent any default browser action
    const searchInput = document.getElementById('search');
    searchInput.focus(); // Focus on the search input
    searchInput.select(); // Optionally, select existing text
  }
});

console.log("script worked")