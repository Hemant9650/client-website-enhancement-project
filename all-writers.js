// All Writers Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Check URL parameter for type and activate corresponding tab
    const urlParams = new URLSearchParams(window.location.search);
    const writerType = urlParams.get('type');
    

    // Manual Tab Switching
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function () {

        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Activate clicked button
        this.classList.add('active');

        // Show matching tab
        const tabId = this.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);

        if (tabContent) {
            tabContent.classList.add('active');
        }

        // Hide no results message if visible
        const noResults = document.getElementById('noResults');
        if (noResults) {
            noResults.style.display = 'none';
        }
    });
});

    if (writerType) {
        // Deactivate all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Activate the selected tab
        let tabId = 'all-lekhak'; // default
        
        if (writerType === 'kavi') {
            tabId = 'kavi';
        } else if (writerType === 'kahanikaar') {
            tabId = 'kahanikaar';
        } else if (writerType === 'others') {
            tabId = 'others';
        }
        
        // Activate the tab button
        const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);
        if (tabBtn) {
            tabBtn.classList.add('active');
        }
        
        // Show the tab content
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.classList.add('active');
        }

        // Set the filter dropdown to match
        const writerTypeFilter = document.getElementById('writerType');
        if (writerTypeFilter) {
            writerTypeFilter.value = writerType;
        }
    }

    // Filters Toggle for Mobile
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersContent = document.getElementById('filtersContent');
    
    if (filtersToggle && filtersContent) {
        filtersToggle.addEventListener('click', function() {
            filtersContent.classList.toggle('active');
            const icon = this.querySelector('i');
            if (filtersContent.classList.contains('active')) {
                icon.classList.remove('fa-sliders-h');
                icon.classList.add('fa-times');
                this.innerHTML = '<i class="fas fa-times"></i> छुपाएं';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-sliders-h');
                this.innerHTML = '<i class="fas fa-sliders-h"></i> फ़िल्टर दिखाएं';
            }
        });
    }

    // Get all writer cards
    function getAllWriterCards() {
        const cards = [];
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.querySelectorAll('.writer-card-link').forEach(cardLink => {
                const card = cardLink.querySelector('.writer-card');
                const name = card.querySelector('.writer-name')?.textContent || '';
                const badge = card.querySelector('.writer-badge')?.textContent || '';
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
                const location = card.querySelector('.writer-location')?.textContent || '';
                const stats = card.querySelector('.writer-stats')?.textContent || '';
                
                let type = 'others';
                if (badge.includes('कवि')) type = 'kavi';
                else if (badge.includes('कहानीकार')) type = 'kahanikaar';

                cards.push({
                    element: cardLink.cloneNode(true),
                    name: name,
                    type: type,
                    tags: tags,
                    location: location,
                    badge: badge,
                    stats: stats
                });
            });
        });
        return cards;
    }

    // Apply Filters
    const applyFiltersBtn = document.getElementById('applyFilters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const writerTypeValue = document.getElementById('writerType').value;
            const genreValue = document.getElementById('genre').value;
            const sortByValue = document.getElementById('sortBy').value;
            const searchValue = document.getElementById('searchWriter').value.toLowerCase();

            let allCards = getAllWriterCards();
            
            // Filter by writer type
            if (writerTypeValue) {
                allCards = allCards.filter(card => card.type === writerTypeValue);
            }

            // Filter by genre
            if (genreValue) {
                allCards = allCards.filter(card => 
                    card.tags.some(tag => tag.toLowerCase().includes(genreValue.toLowerCase()))
                );
            }

            // Filter by search
            if (searchValue) {
                allCards = allCards.filter(card => 
                    card.name.toLowerCase().includes(searchValue) ||
                    card.location.toLowerCase().includes(searchValue)
                );
            }

            // Sort cards
            if (sortByValue === 'name-asc') {
                allCards.sort((a, b) => a.name.localeCompare(b.name, 'hi'));
            } else if (sortByValue === 'name-desc') {
                allCards.sort((a, b) => b.name.localeCompare(a.name, 'hi'));
            } else if (sortByValue === 'popular') {
                allCards.sort((a, b) => {
                    const getLikes = (stats) => {
                        const match = stats.match(/(\d+)/g);
                        return match ? parseInt(match[1]) : 0;
                    };
                    return getLikes(b.stats) - getLikes(a.stats);
                });
            } else if (sortByValue === 'works-high') {
                allCards.sort((a, b) => {
                    const getWorks = (stats) => {
                        const match = stats.match(/(\d+)/);
                        return match ? parseInt(match[0]) : 0;
                    };
                    return getWorks(b.stats) - getWorks(a.stats);
                });
            } else if (sortByValue === 'works-low') {
                allCards.sort((a, b) => {
                    const getWorks = (stats) => {
                        const match = stats.match(/(\d+)/);
                        return match ? parseInt(match[0]) : 0;
                    };
                    return getWorks(a.stats) - getWorks(b.stats);
                });
            }

            // Display filtered results
            displayFilteredResults(allCards);
            
            // Update results count
            updateResultsCount(allCards.length);
        });
    }

    // Reset Filters
    const resetFiltersBtn = document.getElementById('resetFilters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            document.getElementById('writerType').value = '';
            document.getElementById('genre').value = '';
            document.getElementById('sortBy').value = 'name-asc';
            document.getElementById('searchWriter').value = '';

            // Show all tabs again
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = '';
            });

            // Reset to default active tab
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab) {
                const tabId = activeTab.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabId)?.classList.add('active');
            }

            // Hide no results
            const noResults = document.getElementById('noResults');
            if (noResults) {
                noResults.style.display = 'none';
            }

            // Update results count to show all
            const allCards = getAllWriterCards();
            updateResultsCount(allCards.length);
        });
    }

    // Display filtered results
    function displayFilteredResults(cards) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        const noResults = document.getElementById('noResults');
        
        if (cards.length === 0) {
            // Show no results message
            if (noResults) {
                noResults.style.display = 'block';
            }
        } else {
            // Hide no results message
            if (noResults) {
                noResults.style.display = 'none';
            }

            // Show all-lekhak tab and populate with filtered results
            const allLekhakTab = document.getElementById('all-lekhak');
            if (allLekhakTab) {
                allLekhakTab.style.display = 'block';
                allLekhakTab.classList.add('active');
                
                const grid = allLekhakTab.querySelector('.writers-grid');
                if (grid) {
                    grid.innerHTML = '';
                    cards.forEach(card => {
                        grid.appendChild(card.element);
                    });
                }
            }

            // Activate the all-lekhak tab button
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const allLekhakBtn = document.querySelector('[data-tab="all-lekhak"]');
            if (allLekhakBtn) {
                allLekhakBtn.classList.add('active');
            }
        }
    }

    // Update results count
    function updateResultsCount(count) {
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = `सभी लेखक (${count})`;
        }
    }

    // Initialize results count
    const allCards = getAllWriterCards();
    updateResultsCount(allCards.length);
});
