// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ffcc00, #ff9900);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  display: none;
  justify-content: center;
  align-items: center;
`;

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Sound effect for hover
const cheerSound = new Audio('cheer.m4a'); // Path to the cheer sound file

// Buttons
const buyChipButton = document.getElementById('buy-chip-btn');
const communityButton = document.getElementById('community-btn');

// Function to play sound
const playCheerSound = () => {
  cheerSound.currentTime = 0; // Reset sound to the beginning
  cheerSound.play();
};

// Attach event listeners for hover
buyChipButton.addEventListener('mouseover', playCheerSound);
communityButton.addEventListener('mouseover', playCheerSound);
