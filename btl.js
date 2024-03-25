const greetingElement = document.getElementById('greeting');

    function updateGreeting() {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 6 && hours < 12) {
        greetingElement.textContent = 'Chào buổi sáng';
      } else if (hours >= 12 && hours < 18) {
        greetingElement.textContent = 'Chào buổi chiều';
      } else {
        greetingElement.textContent = 'Chào buổi tối';
      }
    }
    updateGreeting();
    setInterval(updateGreeting, 60 * 60 * 1000);
    document.addEventListener("DOMContentLoaded", function() {
        var menuItems = document.querySelectorAll('.menu li');
    
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function() {
                var submenu = this.querySelector('.submenu');
    
                if (submenu.classList.contains('active')) {
                    submenu.classList.remove('active');
                } else {
                    var activeSubmenu = document.querySelector('.submenu.active');
                    if (activeSubmenu) {
                        activeSubmenu.classList.remove('active');
                    }
                    submenu.classList.add('active');
                }
            });
        });
    });
      function redirectToPage() {
        window.location.href = "t1.html"; 
      }