// Kahanikaar Detail Page JavaScript

// Sample data - In production, this would come from an API or database
const kahanikaarData = {
    1: {
        id: 1,
        name: "अरुण शर्मा",
        location: "दिल्ली",
        dob: "5 जून 1990",
        experience: "6 साल",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        genres: ["सामाजिक", "जागरूकता", "प्रेरक"],
        bio: "अरुण शर्मा एक प्रतिभाशाली कहानीकार हैं जो अपनी कहानियों के माध्यम से समाज के विभिन्न पहलुओं को उजागर करते हैं। उनकी कहानियां पाठकों को सोचने पर मजबूर करती हैं और एक नया दृष्टिकोण प्रदान करती हैं।",
        social: {
            facebook: "https://facebook.com/arunsharma",
            instagram: "https://instagram.com/arunsharma",
            twitter: "https://twitter.com/arunsharma"
        },
        stats: {
            stories: 28,
            likes: 890,
            views: 5600
        },
        stories: [
            {
                id: 1,
                title: "अनजान रास्ता",
                excerpt: "वह रास्ता जिसे कोई नहीं जानता था, उसी रास्ते पर चल पड़ा था राजू...",
                date: "2024-01-18",
                likes: 456,
                views: 2100,
                genre: "रहस्य",
                readTime: "12 मिनट"
            },
            {
                id: 2,
                title: "माँ की ममता",
                excerpt: "जब सारी दुनिया साथ छोड़ देती है, तब सिर्फ माँ ही होती है जो अपने बच्चे के साथ खड़ी रहती है...",
                date: "2024-01-14",
                likes: 789,
                views: 3400,
                genre: "सामाजिक",
                readTime: "8 मिनट"
            },
            {
                id: 3,
                title: "संघर्ष और सफलता",
                excerpt: "हर सफलता के पीछे एक लंबा संघर्ष होता है, और अर्जुन की कहानी इसका प्रमाण है...",
                date: "2024-01-10",
                likes: 612,
                views: 2800,
                genre: "प्रेरक",
                readTime: "15 मिनट"
            }
        ]
    },
    2: {
        id: 2,
        name: "नेहा वर्मा",
        location: "नोएडा, उत्तर प्रदेश",
        experience: "4 साल",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        genres: ["रोमांस", "जीवन", "भावनात्मक"],
        bio: "नेहा वर्मा अपनी भावनात्मक कहानियों के लिए जानी जाती हैं। उनकी लेखनी में गहराई और संवेदनशीलता है जो पाठकों के दिलों को छू जाती है।",
        social: {
            facebook: "https://facebook.com/nehaverma",
            instagram: "https://instagram.com/nehaverma"
        },
        stats: {
            stories: 22,
            likes: 1420,
            views: 9200
        },
        stories: [
            {
                id: 4,
                title: "प्यार का एहसास",
                excerpt: "जब मैंने पहली बार उसे देखा, मुझे पता नहीं था कि यह मुलाकात मेरी ज़िंदगी बदल देगी...",
                date: "2024-01-16",
                likes: 892,
                views: 4200,
                genre: "रोमांस",
                readTime: "10 मिनट"
            },
            {
                id: 5,
                title: "टूटे सपने",
                excerpt: "कभी-कभी ज़िंदगी हमारे सपनों को तोड़ देती है, लेकिन हमें फिर से उठना सीखना होता है...",
                date: "2024-01-12",
                likes: 534,
                views: 2300,
                genre: "भावनात्मक",
                readTime: "9 मिनट"
            }
        ]
    }
};

// Get kahanikaar ID from URL parameter
function getKahanikaarId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load kahanikaar details
function loadKahanikaarDetails() {
    const kahanikaarId = getKahanikaarId();
    const kahanikaar = kahanikaarData[kahanikaarId];

    if (!kahanikaar) {
        document.querySelector('.writer-detail-container').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <h2>कहानीकार नहीं मिला</h2>
                <p>क्षमा करें, यह कहानीकार उपलब्ध नहीं है।</p>
                <a href="all-writers.html?type=kahanikaar" class="btn-primary">सभी कहानीकार देखें</a>
            </div>
        `;
        return;
    }

    // Set writer details
    document.getElementById('writerImage').src = kahanikaar.image;
    document.getElementById('writerImage').alt = kahanikaar.name;
    document.getElementById('writerName').textContent = kahanikaar.name;
    document.getElementById('writerLocation').textContent = kahanikaar.location;
    document.getElementById('writerDOB').textContent = kahanikaar.dob || 'N/A';
    document.getElementById('writerExperience').textContent = kahanikaar.experience + ' का अनुभव';
    document.getElementById('writerBio').textContent = kahanikaar.bio;

    // Set genres
    const genresContainer = document.getElementById('writerGenres');
    genresContainer.innerHTML = kahanikaar.genres.map(genre => 
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    // Set social links
    const socialContainer = document.getElementById('writerSocial');
    const socialLinks = [];
    if (kahanikaar.social.facebook) {
        socialLinks.push(`<a href="${kahanikaar.social.facebook}" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>`);
    }
    if (kahanikaar.social.instagram) {
        socialLinks.push(`<a href="${kahanikaar.social.instagram}" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>`);
    }
    if (kahanikaar.social.twitter) {
        socialLinks.push(`<a href="${kahanikaar.social.twitter}" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>`);
    }
    socialContainer.innerHTML = socialLinks.join('') || '<p>सोशल मीडिया लिंक उपलब्ध नहीं हैं</p>';

    // Set stats
    document.getElementById('totalStories').textContent = kahanikaar.stats.stories;
    document.getElementById('totalLikes').textContent = kahanikaar.stats.likes;
    document.getElementById('totalViews').textContent = kahanikaar.stats.views;

    // Load stories
    loadStories(kahanikaar.stories);

    // Set page title
    document.title = `${kahanikaar.name} | शेर-शराबा`;
}

// Load stories
function loadStories(stories) {
    const storiesGrid = document.getElementById('storiesGrid');
    
    if (!stories || stories.length === 0) {
        storiesGrid.innerHTML = `
            <div class="no-content">
                <i class="fas fa-book-open"></i>
                <p>अभी तक कोई कहानी उपलब्ध नहीं है</p>
            </div>
        `;
        return;
    }

    storiesGrid.innerHTML = stories.map(story => `
        <div class="story-card" data-date="${story.date}" data-likes="${story.likes}">
            <div class="story-header">
                <h3 class="story-title">
                    <a href="kahani-detail.html?id=${story.id}">${story.title}</a>
                </h3>
                <span class="story-genre">${story.genre}</span>
            </div>
            <p class="story-excerpt">${story.excerpt}</p>
            <div class="story-footer">
                <div class="story-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(story.date)}</span>
                    <span><i class="fas fa-clock"></i> ${story.readTime}</span>
                    <span><i class="fas fa-heart"></i> ${story.likes}</span>
                    <span><i class="fas fa-eye"></i> ${story.views}</span>
                </div>
                <a href="kahani-detail.html?id=${story.id}" class="read-more">पढ़ें <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('hi-IN', options);
}

// Filter stories
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const kahanikaarId = getKahanikaarId();
    const kahanikaar = kahanikaarData[kahanikaarId];

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            let sortedStories = [...kahanikaar.stories];

            switch(filter) {
                case 'recent':
                    sortedStories.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'popular':
                    sortedStories.sort((a, b) => b.likes - a.likes);
                    break;
                default:
                    // 'all' - no sorting needed
                    break;
            }

            loadStories(sortedStories);
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadKahanikaarDetails();
    setupFilters();
    loadRelatedWriters();
});

// Load related writers
function loadRelatedWriters() {
    const kahanikaarId = getKahanikaarId();
    const relatedWritersGrid = document.getElementById('relatedWritersGrid');
    
    if (!relatedWritersGrid) return;
    
    // Get all kahanikaar except current one
    const relatedKahanikaars = Object.values(kahanikaarData).filter(k => k.id != kahanikaarId).slice(0, 3);
    
    if (relatedKahanikaars.length === 0) {
        relatedWritersGrid.innerHTML = '<p class="no-content">कोई संबंधित लेखक नहीं मिला</p>';
        return;
    }
    
    relatedWritersGrid.innerHTML = relatedKahanikaars.map(kahanikaar => `
        <a href="kahanikaar-detail.html?id=${kahanikaar.id}" class="writer-card-link">
            <div class="writer-card">
                <div class="writer-avatar">
                    <img src="${kahanikaar.image}" alt="${kahanikaar.name}">
                </div>
                <div class="writer-info">
                    <h3 class="writer-name">${kahanikaar.name}</h3>
                    <span class="writer-badge"><i class="fas fa-book-open"></i> कहानीकार</span>
                    <div class="writer-tags">
                        ${kahanikaar.genres.slice(0, 3).map(genre => `<span class="tag">${genre}</span>`).join('')}
                    </div>
                    <p class="writer-location"><i class="fas fa-map-marker-alt"></i> ${kahanikaar.location}</p>
                    <p class="writer-excerpt">"${kahanikaar.stories[0]?.excerpt || 'कहानियां पढ़ें...'}"</p>
                    <div class="writer-stats">
                        <span title="रचनाएं"><i class="fas fa-book"></i> ${kahanikaar.stats.stories} कहानियां</span>
                        <span title="पसंद"><i class="fas fa-heart"></i> ${kahanikaar.stats.likes}</span>
                        <span title="दृश्य"><i class="fas fa-eye"></i> ${kahanikaar.stats.views}</span>
                    </div>
                    <span class="btn-view-profile">पढ़ें <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </a>
    `).join('');
}
