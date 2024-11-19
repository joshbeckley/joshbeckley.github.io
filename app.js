// Open modal on card click
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10); // Add class for animation
      
      // Disable scrolling
      document.body.classList.add('no-scroll');
  });
});

// Close modal when the close button is clicked
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
      const modal = this.closest('.modal');
      modal.classList.remove('show'); // Remove animation class
      setTimeout(() => {
          modal.style.display = 'none';
          
          // Re-enable scrolling
          document.body.classList.remove('no-scroll');
      }, 300); // Wait for animation to finish
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      if (event.target === modal) {
          modal.classList.remove('show'); // Remove animation class
          setTimeout(() => {
              modal.style.display = 'none';
              
              // Re-enable scrolling
              document.body.classList.remove('no-scroll');
          }, 300); // Wait for animation to finish
      }
  });
});
