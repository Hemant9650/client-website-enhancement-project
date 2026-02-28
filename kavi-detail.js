// Kavi Detail Page JavaScript

// Sample data - In production, this would come from an API or database
const kaviData = {
    1: {
        id: 1,
        name: "राज कुमार",
        location: "फरीदाबाद, हरियाणा",
        dob: "15 अगस्त 1995",
        experience: "5 साल",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        genres: ["रोमांस", "प्रेम", "उदासी"],
        bio: "राज कुमार हिंदी साहित्य के एक प्रतिभाशाली कवि हैं। उन्होंने पिछले 5 वर्षों से कविता लेखन में अपनी प्रतिभा दिखाई है। उनकी कविताएं प्रेम, जीवन और समाज के विभिन्न पहलुओं को छूती हैं।",
        social: {
            facebook: "https://facebook.com/rajkumar",
            instagram: "https://instagram.com/rajkumar",
            twitter: "https://twitter.com/rajkumar"
        },
        stats: {
            poems: 45,
            likes: 1250,
            views: 8500
        },
        poems: [
            {
                id: 1,
                title: "प्रेम की परिभाषा",
                excerpt: "जब दिल से निकले एक आहट, और होंठों पर आए मुस्कान...",
                date: "2024-01-15",
                likes: 245,
                views: 890,
                genre: "रोमांस"
            },
            {
                id: 2,
                title: "जीवन के रंग",
                excerpt: "हर सुबह नई उम्मीद लेकर आती है, रात अपने साथ सपने ले जाती है...",
                date: "2024-01-10",
                likes: 189,
                views: 654,
                genre: "जीवन"
            },
            {
                id: 3,
                title: "उदासी की शाम",
                excerpt: "जब धीरे-धीरे ढलती है शाम, और यादें करती हैं आकर सलाम...",
                date: "2024-01-05",
                likes: 312,
                views: 987,
                genre: "उदासी"
            }
        ]
    },
    2: {
        id: 2,
        name: "प्रिया शर्मा",
        location: "नोएडा, उत्तर प्रदेश",
        dob: "22 जनवरी 1998",
        experience: "3 साल",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        genres: ["सामाजिक", "जागरूकता", "प्रेरक"],
        bio: "प्रिया शर्मा एक सशक्त आवाज हैं जो अपनी कविताओं के माध्यम से सामाजिक मुद्दों को उठाती हैं। उनकी लेखनी में समाज के प्रति गहरी संवेदना और परिवर्तन की चाह झलकती है।",
        social: {
            facebook: "https://facebook.com/priyasharma",
            instagram: "https://instagram.com/priyasharma"
        },
        stats: {
            poems: 32,
            likes: 980,
            views: 6200
        },
        poems: [
            {
                id: 4,
                title: "नारी शक्ति",
                excerpt: "वो आंधियों से लड़ना जानती है, अपने सपनों को पूरा करना जानती है...",
                date: "2024-01-12",
                likes: 456,
                views: 1200,
                genre: "सामाजिक"
            },
            {
                id: 5,
                title: "जागो भारत",
                excerpt: "सोई हुई चेतना को जगाने का समय आ गया है...",
                date: "2024-01-08",
                likes: 278,
                views: 890,
                genre: "जागरूकता"
            }
        ]
    },
    3: {
        id: 3,
        name: "राहुल मेहता",
        location: "मुंबई",
        dob: "10 मार्च 1992",
        experience: "8 साल",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
        genres: ["शायरी", "लेख", "समीक्षा"],
        bio: "राहुल मेहता एक बहुमुखी लेखक हैं जो शायरी, लेख और समीक्षाओं में समान रूप से सिद्धहस्त हैं। उनकी रचनाएं पाठकों को गहराई से सोचने पर मजबूर करती हैं।",
        social: {
            facebook: "https://facebook.com/rahulmehta",
            instagram: "https://instagram.com/rahulmehta",
            twitter: "https://twitter.com/rahulmehta"
        },
        stats: {
            poems: 35,
            likes: 670,
            views: 4200
        },
        poems: [
            {
                id: 6,
                title: "शहर की रातें",
                excerpt: "शहर की रातों में खो जाते हैं हम, सपनों की दुनिया में सो जाते हैं हम...",
                date: "2024-01-20",
                likes: 198,
                views: 765,
                genre: "शायरी"
            }
        ]
    }
};

// Get kavi ID from URL parameter
function getKaviId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load kavi details
function loadKaviDetails() {
    const kaviId = getKaviId();
    const kavi = kaviData[kaviId];

    if (!kavi) {
        document.querySelector('.writer-detail-container').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <h2>कवि नहीं मिला</h2>
                <p>क्षमा करें, यह कवि उपलब्ध नहीं है।</p>
                <a href="all-writers.html?type=poet" class="btn-primary">सभी कवि देखें</a>
            </div>
        `;
        return;
    }

    // Set writer details
    document.getElementById('writerImage').src = kavi.image;
    document.getElementById('writerImage').alt = kavi.name;
    document.getElementById('writerName').textContent = kavi.name;
    document.getElementById('writerLocation').textContent = kavi.location;
    document.getElementById('writerDOB').textContent = kavi.dob || 'N/A';
    document.getElementById('writerExperience').textContent = kavi.experience + ' का अनुभव';
    document.getElementById('writerBio').textContent = kavi.bio;

    // Set genres
    const genresContainer = document.getElementById('writerGenres');
    genresContainer.innerHTML = kavi.genres.map(genre => 
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    // Set social links
    const socialContainer = document.getElementById('writerSocial');
    const socialLinks = [];
    if (kavi.social.facebook) {
        socialLinks.push(`<a href="${kavi.social.facebook}" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>`);
    }
    if (kavi.social.instagram) {
        socialLinks.push(`<a href="${kavi.social.instagram}" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>`);
    }
    if (kavi.social.twitter) {
        socialLinks.push(`<a href="${kavi.social.twitter}" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>`);
    }
    socialContainer.innerHTML = socialLinks.join('') || '<p>सोशल मीडिया लिंक उपलब्ध नहीं हैं</p>';

    // Set stats
    document.getElementById('totalPoems').textContent = kavi.stats.poems;
    document.getElementById('totalLikes').textContent = kavi.stats.likes;
    document.getElementById('totalViews').textContent = kavi.stats.views;

    // Load poems
    loadPoems(kavi.poems);

    // Set page title
    document.title = `${kavi.name} | शेर-शराबा`;
}

// Load poems
function loadPoems(poems) {
    const poemsGrid = document.getElementById('poemsGrid');
    
    if (!poems || poems.length === 0) {
        poemsGrid.innerHTML = `
            <div class="no-content">
                <i class="fas fa-book-open"></i>
                <p>अभी तक कोई कविता उपलब्ध नहीं है</p>
            </div>
        `;
        return;
    }

    poemsGrid.innerHTML = poems.map(poem => `
        <div class="poem-card" data-date="${poem.date}" data-likes="${poem.likes}">
            <div class="poem-header">
                <h3 class="poem-title">
                    <a href="kavita-detail.html?id=${poem.id}">${poem.title}</a>
                </h3>
                <span class="poem-genre">${poem.genre}</span>
            </div>
            <p class="poem-excerpt">${poem.excerpt}</p>
            <div class="poem-footer">
                <div class="poem-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(poem.date)}</span>
                    <span><i class="fas fa-heart"></i> ${poem.likes}</span>
                    <span><i class="fas fa-eye"></i> ${poem.views}</span>
                </div>
                <a href="kavita-detail.html?id=${poem.id}" class="read-more">पढ़ें <i class="fas fa-arrow-right"></i></a>
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

// Filter poems
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const kaviId = getKaviId();
    const kavi = kaviData[kaviId];

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            let sortedPoems = [...kavi.poems];

            switch(filter) {
                case 'recent':
                    sortedPoems.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'popular':
                    sortedPoems.sort((a, b) => b.likes - a.likes);
                    break;
                default:
                    // 'all' - no sorting needed
                    break;
            }

            loadPoems(sortedPoems);
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadKaviDetails();
    setupFilters();
    loadRelatedWriters();
});

// Load related writers
function loadRelatedWriters() {
    const kaviId = getKaviId();
    const relatedWritersGrid = document.getElementById('relatedWritersGrid');
    
    if (!relatedWritersGrid) return;
    
    // Get all kavis except current one
    const relatedKavis = Object.values(kaviData).filter(k => k.id != kaviId).slice(0, 3);
    
    if (relatedKavis.length === 0) {
        relatedWritersGrid.innerHTML = '<p class="no-content">कोई संबंधित लेखक नहीं मिला</p>';
        return;
    }
    
    relatedWritersGrid.innerHTML = relatedKavis.map(kavi => `
        <a href="kavi-detail.html?id=${kavi.id}" class="writer-card-link">
            <div class="writer-card">
                <div class="writer-avatar">
                    <img src="${kavi.image}" alt="${kavi.name}">
                </div>
                <div class="writer-info">
                    <h3 class="writer-name">${kavi.name}</h3>
                    <span class="writer-badge"><i class="fas fa-pen-fancy"></i> कवि</span>
                    <div class="writer-tags">
                        ${kavi.genres.slice(0, 3).map(genre => `<span class="tag">${genre}</span>`).join('')}
                    </div>
                    <p class="writer-location"><i class="fas fa-map-marker-alt"></i> ${kavi.location}</p>
                    <p class="writer-excerpt">"${kavi.poems[0]?.excerpt || 'रचनाएं पढ़ें...'}"</p>
                    <div class="writer-stats">
                        <span title="रचनाएं"><i class="fas fa-book"></i> ${kavi.stats.poems} कविताएं</span>
                        <span title="पसंद"><i class="fas fa-heart"></i> ${kavi.stats.likes}</span>
                        <span title="दृश्य"><i class="fas fa-eye"></i> ${kavi.stats.views}</span>
                    </div>
                    <span class="btn-view-profile">पढ़ें <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </a>
    `).join('');
}
