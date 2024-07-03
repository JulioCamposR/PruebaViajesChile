
document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute('href'); 
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = 70; 
          var targetPosition = targetElement.offsetTop - offset; 
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
          });
        }
      });
    });
  });