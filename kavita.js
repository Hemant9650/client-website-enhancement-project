// ========================================
// Poetry Page - JavaScript
// ========================================

// Sample poetry data
const poetryData = [
    {
        id: 1,
        title: 'प्रेम की परिभाषा',
        author: 'राज कुमार',
        genre: 'romance',
        excerpt: 'जब दिल से निकले एक आहट, और होंठों पर आए मुस्कान...',
        views: 890,
        likes: 245,
        dateAdded: '2024-01-15',
        rating: 4.8
    },
    {
        id: 2,
        title: 'जीवन के रंग',
        author: 'राज कुमार',
        genre: 'life',
        excerpt: 'हर सुबह नई उम्मीद लेकर आती है, रात अपने साथ सपने ले जाती है...',
        views: 654,
        likes: 189,
        dateAdded: '2024-01-10',
        rating: 4.7
    },
    {
        id: 3,
        title: 'उदासी की शाम',
        author: 'राज कुमार',
        genre: 'sadness',
        excerpt: 'जब धीरे-धीरे ढलती है शाम, और यादें करती हैं आकर सलाम...',
        views: 987,
        likes: 312,
        dateAdded: '2024-01-05',
        rating: 4.9
    },
    {
        id: 4,
        title: 'जीवन की राहें',
        author: 'सोनल गुप्ता',
        genre: 'life',
        excerpt: 'कभी धूप, कभी छाँव मिली है,\nजीवन की राहों में हर रंग मिली है...',
        views: 870,
        likes: 156,
        dateAdded: '2026-01-05',
        rating: 4.6
    },
    {
        id: 5,
        title: 'प्यार का इज़हार',
        author: 'रोहन खन्ना',
        genre: 'love',
        excerpt: 'दिल की बातें होंठों तक आती नहीं,\nतेरे बिना ये ज़िन्दगी सुहाती नहीं...',
        views: 1890,
        likes: 423,
        dateAdded: '2025-12-28',
        rating: 4.9
    },
    {
        id: 6,
        title: 'उदास शाम',
        author: 'मीना पाण्डेय',
        genre: 'sadness',
        excerpt: 'अकेलेपन की इस रात में,\nतेरी यादें आती हैं साथ में...',
        views: 720,
        likes: 145,
        dateAdded: '2026-01-18',
        rating: 4.5
    },
    {
        id: 7,
        title: 'राजनीति की बात',
        author: 'आशीष त्रिपाठी',
        genre: 'political',
        excerpt: 'वादे झूठे, नेता बेईमान,\nकब बदलेगा इस देश का हाल बेजान...',
        views: 1120,
        likes: 198,
        dateAdded: '2025-12-15',
        rating: 4.4
    },
    {
        id: 8,
        title: 'प्रकृति का सौंदर्य',
        author: 'कविता सिंह',
        genre: 'nature',
        excerpt: 'पेड़ों की छाँव, नदी का किनारा,\nप्रकृति का हर रंग है न्यारा...',
        views: 1340,
        likes: 267,
        dateAdded: '2026-01-12',
        rating: 4.8
    },
    {
        id: 9,
        title: 'माँ की ममता',
        author: 'राज कुमार',
        genre: 'life',
        excerpt: 'माँ के आँचल में सुकून मिलता है,\nहर दर्द का हर घाव भूल जाता है...',
        views: 2100,
        likes: 489,
        dateAdded: '2025-12-20',
        rating: 5.0
    },
    {
        id: 10,
        title: 'देशभक्ति',
        author: 'अमित वर्मा',
        genre: 'social',
        excerpt: 'तिरंगा फहराता रहे ऊंचा,\nभारत हमेशा रहे महान...',
        views: 1680,
        likes: 356,
        dateAdded: '2026-01-08',
        rating: 4.7
    },
    {
        id: 11,
        title: 'पहला प्यार',
        author: 'प्रिया शर्मा',
        genre: 'romance',
        excerpt: 'पहली बारिश, पहली मुलाकात,\nदिल की धड़कन, पहली बात...',
        views: 1450,
        likes: 298,
        dateAdded: '2026-01-03',
        rating: 4.6
    },
    {
        id: 12,
        title: 'टूटे सपने',
        author: 'मीना पाण्डेय',
        genre: 'sadness',
        excerpt: 'सपने टूटे, उम्मीदें खो गईं,\nख्वाहिशें सब रेत में खो गईं...',
        views: 890,
        likes: 167,
        dateAdded: '2025-12-25',
        rating: 4.3
    },
    {
        id: 13,
        title: 'बचपन की यादें',
        author: 'सोनल गुप्ता',
        genre: 'life',
        excerpt: 'गली के नुक्कड़, मिट्टी के खिलौने,\nबचपन के वो दिन कितने सुहाने...',
        views: 1230,
        likes: 245,
        dateAdded: '2026-01-02',
        rating: 4.7
    },
    {
        id: 14,
        title: 'संघर्ष की कहानी',
        author: 'रोहन खन्ना',
        genre: 'motivational',
        excerpt: 'हर रात के बाद सुबह आती है,\nसंघर्ष करने वाले को मंज़िल मिल जाती है...',
        views: 1780,
        likes: 378,
        dateAdded: '2025-12-18',
        rating: 4.8
    },
    {
        id: 15,
        title: 'चाँदनी रात',
        author: 'कविता सिंह',
        genre: 'romance',
        excerpt: 'चाँदनी रात, तारों भरा आसमान,\nतेरे साथ हर पल है खास...',
        views: 1920,
        likes: 412,
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
    displayPoetry(poetryData);
    setupEventListeners();
});

// Populate authors dropdown
function populateAuthors() {
    const authors = [...new Set(poetryData.map(p => p.author))].sort();
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

    let filtered = poetryData.filter(poetry => {
        const matchGenre = !currentFilters.genre || poetry.genre === currentFilters.genre;
        const matchAuthor = !currentFilters.author || poetry.author === currentFilters.author;
        const matchSearch = !currentFilters.search || 
            poetry.title.toLowerCase().includes(currentFilters.search) ||
            poetry.author.toLowerCase().includes(currentFilters.search) ||
            poetry.excerpt.toLowerCase().includes(currentFilters.search);
        
        return matchGenre && matchAuthor && matchSearch;
    });

    // Sort
    filtered = sortPoetry(filtered, currentFilters.sortBy);

    displayPoetry(filtered);
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
    
    displayPoetry(poetryData);
}

// Sort poetry
function sortPoetry(poetry, sortBy) {
    const sorted = [...poetry];
    
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

// Display poetry
function displayPoetry(poetry) {
    const grid = document.getElementById('poetryGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    // Update count
    resultsCount.textContent = `सभी कविताएं (${poetry.length})`;
    
    if (poetry.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = poetry.map(p => createPoetryCard(p)).join('');
}

// Create poetry card HTML
function createPoetryCard(poetry) {
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
        <div class="poetry-card" onclick="window.location.href='kavita-detail.html?id=${poetry.id}'">
            <div class="poetry-header">
                <div>
                    <h3 class="poetry-title">${poetry.title}</h3>
                    <p class="poetry-author">
                        <i class="fas fa-user"></i>
                        ${poetry.author}
                    </p>
                </div>
                <span class="poetry-badge">${genreNames[poetry.genre]}</span>
            </div>
            
            <p class="poetry-excerpt">${poetry.excerpt}</p>
            
            <div class="poetry-meta">
                <div class="poetry-stats">
                    <div class="stat-item">
                        <i class="fas fa-eye"></i>
                        <span>${poetry.views}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-heart"></i>
                        <span>${poetry.likes}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-star"></i>
                        <span>${poetry.rating}</span>
                    </div>
                </div>
                <button class="btn-primary" style="padding: 8px 20px; font-size: 14px;" onclick="event.stopPropagation(); window.location.href='kavita-detail.html?id=${poetry.id}'">
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
