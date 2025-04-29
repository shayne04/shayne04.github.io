function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Make dropdowns toggleable on mobile
    document.querySelectorAll('.mobile-dropdown > a').forEach(menu => {
      menu.addEventListener('click', function (event) {
        event.preventDefault();
        let dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  