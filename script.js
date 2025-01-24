
const sizeButton = document.getElementById('size-btn');
const popUpOverlay = document.getElementById('pop-up-overlay');
const popUpClose = document.getElementById('pop-up-close');

// Image Preview selector 
// Accessing img preview tag
const imgPreview = document.getElementById('img-preview');
// Accessiing next and previous button
const nextButton = document.getElementById('next');
const prevButton =document.getElementById('prev');
// Base img path
const imgPath = './assets';
// imgArray
const imgArray = ['./assets/preview1.png', './assets/preview2.png', './assets/preview3.png', './assets/preview4.png', './assets/product-image1.jpg', './assets/preview1.png', './assets/preview2.png', './assets/preview3.png', './assets/preview4.png']
let currentImg = 0;
const imgArrayLength = imgArray.length - 1;
// Selecting all image thumbnails
const thumbnail = document.querySelectorAll(`.thumbnail`);
// Accessing thumbnail image container to autoscroll as per
// -thumbnail click
const  thumbnailContainer = document.getElementById('preview-img-container');
console.log('thumbnail', thumbnail)

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
  togglePopUpVisibility('block');
})

popUpClose.addEventListener('click', (event) => {
  event.preventDefault();
  togglePopUpVisibility('none')
})

imgPreview.src = imgArray[currentImg];

// onNextHandler function definition
const onNextHandler = () => {
  if ( currentImg >= 0 && currentImg < imgArrayLength){
    currentImg++;
    imgPreview.src = imgArray[currentImg];
    // console.log(currentImg, imgArrayLength);
    ActivateLink(thumbnail[currentImg]);
    thumbnailContainer.scrollBy({
      left: 100, // Negative value to scroll left
      behavior: 'smooth', // Smooth scrolling effect
    });
  }else{
    currentImg = 0;
    imgPreview.src = imgArray[currentImg];
    ActivateLink(thumbnail[0]);
    thumbnailContainer.scrollBy({
      right: 0, // Negative value to scroll left
      behavior: 'smooth', // Smooth scrolling effect
    });
  }
}

// onPrev function definition
const onPrevHandler = () => {
  if(currentImg > 0){
    currentImg--;
    imgPreview.src = imgArray[currentImg];
    ActivateLink(thumbnail[currentImg]);
    thumbnailContainer.scrollBy({
      left: -100, // Negative value to scroll left
      behavior: 'smooth', // Smooth scrolling effect
    });
  }else{
    currentImg = imgArrayLength;
  }
} 

// Adding event listener to the next button
nextButton.addEventListener('click', (event) => {
  onNextHandler();
})

// Adding event listener to the prev button
prevButton.addEventListener('click', (event) => {
  onPrevHandler();
}) 

// function to apppend and remove active class to the thumbnail
const ActivateLink = (currentThumbnail) => {
  // console.log(currentThumbnail);

  thumbnail.forEach(element => {
    // console.log('element', element)
    element.classList.remove('active-img-button');
  });

  
  currentThumbnail.classList.add('active-img-button');  
}

// active class to the first thumbnail by default
ActivateLink(thumbnail[currentImg]);

// preview on thumbnail click
thumbnail.forEach((img, index) => {
  img.addEventListener('click', (event) => {
    // console.log('event form thumbnaill click', event)
    currentImg = index;
    ActivateLink(thumbnail[index]);
    imgPreview.src = imgArray[index];
    // if(currentImg > index){
    //   thumbnailContainer.scrollBy({
    //     left: -100*index, // Negative value to scroll left
    //     behavior: 'smooth', // Smooth scrolling effect
    //   });
    // }else{
    //   thumbnailContainer.scrollBy({
    //     left: 100*index, // Negative value to scroll left
    //     behavior: 'smooth', // Smooth scrolling effect
    //   });
    // }
    thumbnailContainer.scrollBy({
      left: 100, // Negative value to scroll left
      behavior: 'smooth', // Smooth scrolling effect
    });
    
  })
})
