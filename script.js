// ========================================
// Shersharaba - Writers Directory Platform
// Main JavaScript File
// ========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
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
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Mobile submenu toggle
    const hasSubmenuItems = document.querySelectorAll('.has-submenu > a');
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // ========================================
    // Tabs Functionality
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            const parentSection = this.closest('.top-writers, .top-writeups');
            
            // Remove active class from all tabs in this section
            parentSection.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents in this section
            parentSection.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected tab content
            const selectedContent = parentSection.querySelector(`#${tabName}`);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        });
    });

    // ========================================
    // View Toggle (Grid/List)
    // ========================================
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const viewType = this.getAttribute('data-view');
            const parentSection = this.closest('.top-writers, .top-writeups');
            
            // Remove active class from all view buttons in this section
            parentSection.querySelectorAll('.view-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update all grids in this section
            const grids = parentSection.querySelectorAll('.writers-grid, .writeups-grid');
            grids.forEach(grid => {
                grid.classList.remove('view-grid', 'view-list');
                grid.classList.add(`view-${viewType}`);
            });
        });
    });

    // ========================================
    // Modal Functionality
    // ========================================
    const memberModal = document.getElementById('memberModal');
    const btnMember = document.getElementById('btnMember');
    const btnCtaMember = document.getElementById('btnCtaMember');
    const modalClose = document.getElementById('modalClose');
    const btnOpenMemberFromList = document.getElementById('btnOpenMemberFromList');

    // Open member modal
    function openMemberModal() {
        if (memberModal) {
            memberModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close member modal
    function closeMemberModal() {
        if (memberModal) {
            memberModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (btnMember) {
        btnMember.addEventListener('click', openMemberModal);
    }

    if (btnCtaMember) {
        btnCtaMember.addEventListener('click', openMemberModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeMemberModal);
    }

    if (btnOpenMemberFromList) {
        btnOpenMemberFromList.addEventListener('click', function() {
            // Close list writer modal
            const listWriterModal = document.getElementById('listWriterModal');
            if (listWriterModal) {
                listWriterModal.classList.remove('active');
            }
            // Open member modal
            openMemberModal();
        });
    }

    // Close modal when clicking outside
    if (memberModal) {
        memberModal.addEventListener('click', function(e) {
            if (e.target === memberModal) {
                closeMemberModal();
            }
        });
    }

    // Other modals
    const openModalButtons = document.querySelectorAll('.open-modal');
    const modalCloseOthers = document.querySelectorAll('.modal-close-other');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalName = this.getAttribute('data-modal');
            const modal = document.getElementById(`${modalName}Modal`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalCloseOthers.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ========================================
    // Add Writeup Functionality (Member Form)
    // ========================================
    const btnAddWriteup = document.getElementById('btnAddWriteup');
    const writeupsContainer = document.getElementById('writeupsContainer');
    let writeupCount = 1;

    if (btnAddWriteup) {
        btnAddWriteup.addEventListener('click', function() {
            if (writeupCount < 3) {
                writeupCount++;
                const writeupInput = document.createElement('div');
                writeupInput.className = 'writeup-input';
                writeupInput.innerHTML = `
                    <textarea name="writeup${writeupCount}" rows="4" placeholder="रचना ${writeupCount}"></textarea>
                `;
                writeupsContainer.appendChild(writeupInput);

                if (writeupCount >= 3) {
                    btnAddWriteup.style.display = 'none';
                }
            }
        });
    }

    // ========================================
    // Member Form Submission
    // ========================================
    const memberForm = document.getElementById('memberForm');

    if (memberForm) {
        memberForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(memberForm);
            
            const name = formData.get('name');
            const location = formData.get('location');
            const dobDay = formData.get('dobDay');
            const dobMonth = formData.get('dobMonth');
            const dobYear = formData.get('dobYear');
            const writingSince = formData.get('writingSince');
            const howKnow = formData.get('howKnow');
            const whyJoin = formData.get('whyJoin');

            // Get all selected write types
            const writeTypes = [];
            document.querySelectorAll('input[name="writeType"]:checked').forEach(checkbox => {
                writeTypes.push(checkbox.value);
            });

            // Get all selected genres
            const genres = [];
            document.querySelectorAll('input[name="genres"]:checked').forEach(checkbox => {
                genres.push(checkbox.value);
            });

            // Get writeups
            const writeups = [];
            for (let i = 1; i <= writeupCount; i++) {
                const writeup = formData.get(`writeup${i}`);
                if (writeup && writeup.trim()) {
                    writeups.push(writeup);
                }
            }

            // Validate required fields
            if (!name || !location || !dobDay || !dobMonth || !dobYear || writeTypes.length === 0 || genres.length === 0 || !writingSince || !howKnow || !whyJoin) {
                alert('कृपया सभी आवश्यक फ़ील्ड भरें।');
                return;
            }

            // Create WhatsApp message
            let message = `*सदस्यता पंजीकरण*\n\n`;
            message += `नाम: ${name}\n`;
            message += `स्थान: ${location}\n`;
            message += `जन्म तिथि: ${dobDay}/${dobMonth}/${dobYear}\n`;
            message += `लेखन प्रकार: ${writeTypes.join(', ')}\n`;
            message += `पसंदीदा शैलियाँ: ${genres.join(', ')}\n`;
            message += `लेखन अनुभव: ${writingSince}\n`;
            message += `हमारे बारे में कैसे जाना: ${howKnow}\n`;
            message += `जुड़ने का कारण: ${whyJoin}\n`;

            if (writeups.length > 0) {
                message += `\n*रचनाएं:*\n`;
                writeups.forEach((writeup, index) => {
                    message += `\nरचना ${index + 1}:\n${writeup}\n`;
                });
            }

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919220405922?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form and close modal
            memberForm.reset();
            writeupCount = 1;
            writeupsContainer.innerHTML = `
                <div class="writeup-input">
                    <textarea name="writeup1" rows="4" placeholder="रचना 1"></textarea>
                </div>
            `;
            if (btnAddWriteup) {
                btnAddWriteup.style.display = 'block';
            }
            closeMemberModal();

            // Show success message
            alert('आपका पंजीकरण सफलतापूर्वक सबमिट किया गया है। हम जल्द ही आपसे संपर्क करेंगे।');
        });
    }

    // ========================================
    // Open Mic Form - Dynamic Member Fields
    // ========================================
    const omMembersInput = document.getElementById('omMembers');
    const membersContainer = document.getElementById('membersContainer');

    if (omMembersInput) {
        omMembersInput.addEventListener('change', function() {
            const memberCount = parseInt(this.value) || 0;
            membersContainer.innerHTML = '';

            for (let i = 1; i <= memberCount; i++) {
                const memberSection = document.createElement('div');
                memberSection.className = 'member-performance';
                memberSection.innerHTML = `
                    <h4>सदस्य ${i} की प्रस्तुतियाँ</h4>
                    <div id="member${i}Pieces">
                        <div class="form-group">
                            <label for="member${i}piece1">प्रस्तुति 1 *</label>
                            <textarea id="member${i}piece1" name="member${i}piece1" rows="3" required></textarea>
                        </div>
                    </div>
                    <button type="button" class="btn-add-piece" data-member="${i}">+ प्रस्तुति जोड़ें</button>
                `;
                membersContainer.appendChild(memberSection);

                // Add event listener for add piece button
                const btnAddPiece = memberSection.querySelector('.btn-add-piece');
                let pieceCount = 1;

                btnAddPiece.addEventListener('click', function() {
                    const memberId = this.getAttribute('data-member');
                    const piecesContainer = document.getElementById(`member${memberId}Pieces`);

                    if (pieceCount < 3) {
                        pieceCount++;
                        const pieceGroup = document.createElement('div');
                        pieceGroup.className = 'form-group';
                        pieceGroup.innerHTML = `
                            <label for="member${memberId}piece${pieceCount}">प्रस्तुति ${pieceCount} *</label>
                            <textarea id="member${memberId}piece${pieceCount}" name="member${memberId}piece${pieceCount}" rows="3" required></textarea>
                        `;
                        piecesContainer.appendChild(pieceGroup);

                        if (pieceCount >= 3) {
                            this.style.display = 'none';
                        }
                    }
                });
            }
        });
    }

    // ========================================
    // Open Mic Form Submission
    // ========================================
    const openMicForm = document.getElementById('openMicForm');

    if (openMicForm) {
        openMicForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(openMicForm);
            const name = formData.get('name');
            const date = formData.get('date');
            const members = formData.get('members');

            if (!name || !date || !members) {
                alert('कृपया सभी आवश्यक फ़ील्ड भरें।');
                return;
            }

            // Create WhatsApp message
            let message = `*ओपन माइक पंजीकरण*\n\n`;
            message += `नाम: ${name}\n`;
            message += `तारीख: ${new Date(date).toLocaleDateString('hi-IN')}\n`;
            message += `सदस्यों की संख्या: ${members}\n\n`;

            // Collect pieces for each member
            for (let i = 1; i <= parseInt(members); i++) {
                message += `*सदस्य ${i} की प्रस्तुतियाँ:*\n`;
                
                for (let j = 1; j <= 3; j++) {
                    const piece = formData.get(`member${i}piece${j}`);
                    if (piece && piece.trim()) {
                        message += `${j}. ${piece}\n`;
                    }
                }
                message += `\n`;
            }

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919220405922?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            openMicForm.reset();
            membersContainer.innerHTML = '';

            // Show success message
            alert('आपका पंजीकरण सफलतापूर्वक सबमिट किया गया है। हम जल्द ही आपसे संपर्क करेंगे।');
        });
    }

    // ========================================
    // List Writeup Form Submission
    // ========================================
    const listWriteupForm = document.getElementById('listWriteupForm');

    if (listWriteupForm) {
        listWriteupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(listWriteupForm);
            const title = formData.get('title');
            const type = formData.get('type');
            const content = formData.get('content');
            const author = formData.get('author');

            if (!title || !type || !content || !author) {
                alert('कृपया सभी आवश्यक फ़ील्ड भरें।');
                return;
            }

            // Create WhatsApp message
            let message = `*रचना सूचीकरण अनुरोध*\n\n`;
            message += `शीर्षक: ${title}\n`;
            message += `प्रकार: ${type}\n`;
            message += `लेखक: ${author}\n\n`;
            message += `*रचना:*\n${content}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919220405922?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form and close modal
            listWriteupForm.reset();
            const modal = document.getElementById('listWriteupModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Show success message
            alert('आपकी रचना सफलतापूर्वक सबमिट की गई है। हम इसकी समीक्षा करेंगे।');
        });
    }

    // ========================================
    // Submit Article Form Submission
    // ========================================
    const submitArticleForm = document.getElementById('submitArticleForm');

    if (submitArticleForm) {
        submitArticleForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(submitArticleForm);
            const title = formData.get('title');
            const category = formData.get('category');
            const content = formData.get('content');
            const author = formData.get('author');
            const email = formData.get('email');

            if (!title || !category || !content || !author || !email) {
                alert('कृपया सभी आवश्यक फ़ील्ड भरें।');
                return;
            }

            // Create WhatsApp message
            let message = `*मैगजीन लेख सबमिशन*\n\n`;
            message += `शीर्षक: ${title}\n`;
            message += `श्रेणी: ${category}\n`;
            message += `लेखक: ${author}\n`;
            message += `ईमेल: ${email}\n\n`;
            message += `*लेख:*\n${content}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919220405922?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form and close modal
            submitArticleForm.reset();
            const modal = document.getElementById('submitArticleModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Show success message
            alert('आपका लेख सफलतापूर्वक सबमिट किया गया है। हम इसकी समीक्षा करेंगे।');
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // ========================================
    // Scroll Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.writer-card, .writeup-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ========================================
// Utility Functions
// ========================================

// Format date to Hindi
function formatDateToHindi(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('hi-IN', options);
}

// Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// ========================================
// Add to WhatsApp helper function
// ========================================
function sendToWhatsApp(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ========================================
// Console Message
// ========================================
console.log('%c शेर-शराबा ', 'background: #FB6F92; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c हिंदी साहित्य का डिजिटल मंच ', 'color: #6B2A43; font-size: 14px;');



    