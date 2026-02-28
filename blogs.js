const blogs = [
    {id: 1, title: 'हिंदी कविता का महत्व', author: 'राज कुमार', date: '2026-01-15', category: 'साहित्य', excerpt: 'हिंदी कविता हमारी संस्कृति और भाषा का अभिन्न हिस्सा है...', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400'},
    {id: 2, title: 'कहानी लेखन की कला', author: 'प्रिया शर्मा', date: '2026-01-10', category: 'लेखन', excerpt: 'एक अच्छी कहानी लिखने के लिए क्या आवश्यक है...', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'},
    {id: 3, title: 'ओपन माइक का अनुभव', author: 'अमित वर्मा', date: '2026-01-05', category: 'इवेंट', excerpt: 'अपनी पहली ओपन माइक परफॉर्मेंस के अनुभव...', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400'},
    {id: 4, title: 'नई पीढ़ी और हिंदी', author: 'सोनल गुप्ता', date: '2025-12-28', category: 'समाज', excerpt: 'आज की युवा पीढ़ी हिंदी साहित्य से कैसे जुड़ सकती है...', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400'},
    {id: 5, title: 'कविता पाठ की तैयारी', author: 'विक्रम सिंह', date: '2025-12-20', category: 'टिप्स', excerpt: 'मंच पर अपनी कविता को प्रभावी तरीके से प्रस्तुत करने के तरीके...', image: 'https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=400'},
    {id: 6, title: 'साहित्यिक समुदाय का महत्व', author: 'आरती मिश्रा', date: '2025-12-15', category: 'समुदाय', excerpt: 'एक मजबूत साहित्यिक समुदाय लेखकों को कैसे प्रेरित करता है...', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400'}
];

document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = blogs.map(blog => `
        <div class="blog-card" onclick="window.location.href='blog-detail.html?id=${blog.id}'" style="cursor: pointer;">
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}">
                <span class="blog-category">${blog.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                    <span><i class="fas fa-user"></i> ${blog.author}</span>
                </div>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-footer">
                    <button class="btn-primary" style="padding: 8px 20px; font-size: 14px;">पढ़ें <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `).join('');
});
