document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="color"]');
    const displayText = document.querySelector('#color-value');
  
    radioButtons.forEach((radio) => {
      radio.addEventListener('change', (event) => {
        displayText.textContent = `${event.target.value}`;
      });
    });
  });

  console.log("script worked")