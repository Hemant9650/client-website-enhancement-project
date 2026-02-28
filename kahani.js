// ========================================
// Story Page - JavaScript
// ========================================

// Sample story data
const storyData = [
    {
        id: 1,
        title: 'अनजान रास्ता',
        author: 'अरुण शर्मा',
        genre: 'mystery',
        excerpt: 'वह रास्ता जिसे कोई नहीं जानता था, उसी रास्ते पर चल पड़ा था राजू...',
        views: 2100,
        likes: 456,
        dateAdded: '2024-01-18',
        rating: 4.8
    },
    {
        id: 2,
        title: 'माँ की ममता',
        author: 'अरुण शर्मा',
        genre: 'social',
        excerpt: 'जब सारी दुनिया साथ छोड़ देती है, तब सिर्फ माँ ही होती है जो अपने बच्चे के साथ खड़ी रहती है...',
        views: 3400,
        likes: 789,
        dateAdded: '2024-01-14',
        rating: 4.9
    },
    {
        id: 3,
        title: 'संघर्ष और सफलता',
        author: 'अरुण शर्मा',
        genre: 'motivational',
        excerpt: 'हर सफलता के पीछे एक लंबा संघर्ष होता है, और अर्जुन की कहानी इसका प्रमाण है...',
        views: 2800,
        likes: 612,
        dateAdded: '2024-01-10',
        rating: 4.7
    },
    {
        id: 4,
        title: 'जीवन के रंग',
        author: 'आरती मिश्रा',
        genre: 'life',
        excerpt: 'जीवन के विभिन्न पड़ावों में एक परिवार के उतार-चढ़ाव की मार्मिक कहानी...',
        views: 1870,
        likes: 345,
        dateAdded: '2026-01-05',
        rating: 4.6
    },
    {
        id: 5,
        title: 'दिल का रिश्ता',
        author: 'विक्रम सिंह',
        genre: 'love',
        excerpt: 'दो दोस्तों के बीच प्यार की शुरुआत और उसके बाद आने वाली चुनौतियों की कहानी...',
        views: 2890,
        likes: 623,
        dateAdded: '2025-12-28',
        rating: 4.9
    },
    {
        id: 6,
        title: 'अकेलेपन की रात',
        author: 'मीना पाण्डेय',
        genre: 'sadness',
        excerpt: 'एक महिला की अकेलेपन से जूझने की कहानी और उसका नया जीवन...',
        views: 1420,
        likes: 267,
        dateAdded: '2026-01-18',
        rating: 4.5
    },
    {
        id: 7,
        title: 'राजनीति का खेल',
        author: 'आशीष त्रिपाठी',
        genre: 'political',
        excerpt: 'एक ईमानदार अधिकारी की भ्रष्टाचार के खिलाफ लड़ाई की कहानी...',
        views: 2120,
        likes: 445,
        dateAdded: '2025-12-15',
        rating: 4.4
    },
    {
        id: 8,
        title: 'प्रकृति का संदेश',
        author: 'कविता सिंह',
        genre: 'nature',
        excerpt: 'पहाड़ों में रहने वाले एक परिवार की प्रकृति के साथ जीवन की कहानी...',
        views: 1640,
        likes: 334,
        dateAdded: '2026-01-12',
        rating: 4.8
    },
    {
        id: 9,
        title: 'माँ की ममता',
        author: 'आरती मिश्रा',
        genre: 'life',
        excerpt: 'एक माँ के त्याग और समर्पण की भावुक कहानी जो दिल को छू जाए...',
        views: 3100,
        likes: 689,
        dateAdded: '2025-12-20',
        rating: 5.0
    },
    {
        id: 10,
        title: 'वीर योद्धा',
        author: 'विक्रम सिंह',
        genre: 'social',
        excerpt: 'स्वतंत्रता संग्राम में एक वीर योद्धा के बलिदान की प्रेरक कहानी...',
        views: 2680,
        likes: 556,
        dateAdded: '2026-01-08',
        rating: 4.7
    },
    {
        id: 11,
        title: 'पहला प्यार',
        author: 'मीना पाण्डेय',
        genre: 'romance',
        excerpt: 'कॉलेज के दिनों में दो युवाओं के प्रेम की मासूम कहानी...',
        views: 2450,
        likes: 498,
        dateAdded: '2026-01-03',
        rating: 4.6
    },
    {
        id: 12,
        title: 'टूटे सपने',
        author: 'आशीष त्रिपाठी',
        genre: 'sadness',
        excerpt: 'असफलता के बाद एक युवक की निराशा और फिर नई शुरुआत की कहानी...',
        views: 1590,
        likes: 289,
        dateAdded: '2025-12-25',
        rating: 4.3
    },
    {
        id: 13,
        title: 'बचपन के दिन',
        author: 'कविता सिंह',
        genre: 'life',
        excerpt: 'बचपन की यादों और मासूमियत की भरी कहानी जो सबको पसंद आएगी...',
        views: 1930,
        likes: 378,
        dateAdded: '2026-01-02',
        rating: 4.7
    },
    {
        id: 14,
        title: 'संघर्ष की जीत',
        author: 'विक्रम सिंह',
        genre: 'motivational',
        excerpt: 'गरीबी और संघर्ष के बावजूद सफलता की ऊंचाइयों को छूने वाली कहानी...',
        views: 2780,
        likes: 589,
        dateAdded: '2025-12-18',
        rating: 4.8
    },
    {
        id: 15,
        title: 'खूबसूरत रिश्ता',
        author: 'आरती मिश्रा',
        genre: 'romance',
        excerpt: 'दो परिवारों की दोस्ती और उनके बच्चों के प्यार की खूबसूरत कहानी...',
        views: 2920,
        likes: 612,
        dateAdded: '2025-12-22',
        rating: 4.9
    }
];

// Current filters
let currentFilters = {
    genre: '',
    author: '',
    sortBy: 'date-new',
    search: ''
};

// Current view mode
let currentView = 'grid';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    populateAuthors();
    displaystory(storyData);
    setupEventListeners();
});

// Populate authors dropdown
function populateAuthors() {
    const authors = [...new Set(storyData.map(p => p.author))].sort();
    const authorSelect = document.getElementById('author');
    
    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorSelect.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter toggle for mobile
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersContent = document.getElementById('filtersContent');
    
    if (filtersToggle) {
        filtersToggle.addEventListener('click', function() {
            filtersContent.classList.toggle('active');
            const icon = this.querySelector('i');
            if (filtersContent.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i> फ़िल्टर छुपाएं';
            } else {
                this.innerHTML = '<i class="fas fa-sliders-h"></i> फ़िल्टर दिखाएं';
            }
        });
    }

    // Apply filters button
    document.getElementById('applyFilters').addEventListener('click', applyFilters);

    // Reset filters button
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Search input - real-time search
    document.getElementById('searchPoetry').addEventListener('input', function() {
        currentFilters.search = this.value;
        applyFilters();
    });

    // View toggle buttons
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.getAttribute('data-view');
            toggleView();
        });
    });
}

// Apply filters
function applyFilters() {
    currentFilters.genre = document.getElementById('genre').value;
    currentFilters.author = document.getElementById('author').value;
    currentFilters.sortBy = document.getElementById('sortBy').value;
    currentFilters.search = document.getElementById('searchPoetry').value.toLowerCase();

    let filtered = storyData.filter(story => {
        const matchGenre = !currentFilters.genre || story.genre === currentFilters.genre;
        const matchAuthor = !currentFilters.author || story.author === currentFilters.author;
        const matchSearch = !currentFilters.search || 
            story.title.toLowerCase().includes(currentFilters.search) ||
            story.author.toLowerCase().includes(currentFilters.search) ||
            story.excerpt.toLowerCase().includes(currentFilters.search);
        
        return matchGenre && matchAuthor && matchSearch;
    });

    // Sort
    filtered = sortstory(filtered, currentFilters.sortBy);

    displaystory(filtered);
}

// Reset filters
function resetFilters() {
    document.getElementById('genre').value = '';
    document.getElementById('author').value = '';
    document.getElementById('sortBy').value = 'date-new';
    document.getElementById('searchPoetry').value = '';
    
    currentFilters = {
        genre: '',
        author: '',
        sortBy: 'date-new',
        search: ''
    };
    
    displaystory(storyData);
}

// Sort story
function sortstory(story, sortBy) {
    const sorted = [...story];
    
    switch(sortBy) {
        case 'date-new':
            sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'date-old':
            sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
            break;
        case 'popular':
            sorted.sort((a, b) => b.views - a.views);
            break;
        case 'title-asc':
            sorted.sort((a, b) => a.title.localeCompare(b.title, 'hi'));
            break;
        case 'title-desc':
            sorted.sort((a, b) => b.title.localeCompare(a.title, 'hi'));
            break;
    }
    
    return sorted;
}

// Display story
function displaystory(story) {
    const grid = document.getElementById('poetryGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    // Update count
    resultsCount.textContent = `सभी कहानियां (${story.length})`;
    
    if (story.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = story.map(p => createstoryCard(p)).join('');
}

// Create story card HTML
function createstoryCard(story) {
    const genreNames = {
        romance: 'रोमांस',
        social: 'सामाजिक',
        political: 'राजनीतिक',
        motivational: 'प्रेरक',
        love: 'प्रेम',
        life: 'जीवन',
        sadness: 'उदासी',
        nature: 'प्रकृति'
    };
    
    return `
        <div class="poetry-card" onclick="window.location.href='kahani-detail.html?id=${story.id}'">
            <div class="poetry-header">
                <div>
                    <h3 class="poetry-title">${story.title}</h3>
                    <p class="poetry-author">
                        <i class="fas fa-user"></i>
                        ${story.author}
                    </p>
                </div>
                <span class="poetry-badge">${genreNames[story.genre]}</span>
            </div>
            
            <p class="poetry-excerpt">${story.excerpt}</p>
            
            <div class="poetry-meta">
                <div class="poetry-stats">
                    <div class="stat-item">
                        <i class="fas fa-eye"></i>
                        <span>${story.views}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-heart"></i>
                        <span>${story.likes}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-star"></i>
                        <span>${story.rating}</span>
                    </div>
                </div>
                <button class="btn-primary" style="padding: 8px 20px; font-size: 14px;" onclick="event.stopPropagation(); window.location.href='kahani-detail.html?id=${story.id}'">
                    पढ़ें <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

// Toggle view mode
function toggleView() {
    const grid = document.getElementById('poetryGrid');
    
    if (currentView === 'grid') {
        grid.classList.remove('view-list');
        grid.classList.add('view-grid');
    } else {
        grid.classList.remove('view-grid');
        grid.classList.add('view-list');
    }
}
