// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Set active nav link based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-menu a');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                
                // Handle exact page match
                if (href === currentPage) {
                    link.classList.add('active');
                }
                
                // Handle special cases for writeups pages
                if ((currentPage === 'kavita.html' || currentPage === 'kahani.html') && link.id === 'nav-writeups') {
                    link.classList.add('active');
                }
            });
            
            // Initialize mobile menu after header is loaded
            initializeMobileMenu();
            initializeMemberModal();

        })
        .catch(error => console.error('Error loading header:', error));
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});


function initializeMemberModal() {
    const memberModal = document.getElementById('memberModal');
    const btnMember = document.getElementById('btnMember');
    const closeModal = document.querySelector('.close-modal');

    if (btnMember && memberModal) {
        btnMember.addEventListener('click', function () {
            memberModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            memberModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (e) {
        if (e.target === memberModal) {
            memberModal.style.display = 'none';
        }
    });
}


// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.add('active');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}


