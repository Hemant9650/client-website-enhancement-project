// ========================================
// Story Detail Page - JavaScript
// ========================================

// Sample full story data (expanded from kahani.js)
const fullStoryData = {
    1: {
        id: 1,
        title: 'प्यार की कहानी',
        author: 'विक्रम सिंह',
        genre: 'romance',
        content: `दो अनजान दिलों की मुलाकात ने जीवन को नया अर्थ दे दिया। यह कहानी है प्रेम, त्याग और समर्पण की।

राज और सिमरन की पहली मुलाकात एक बरसात की शाम को हुई थी। दोनों एक ही बस स्टॉप पर बारिश से बचने के लिए रुके थे। राज ने जब सिमरन को अपनी छाता दी, तो उस पल दोनों के दिलों में कुछ अलग सा महसूस हुआ।

धीरे-धीरे मुलाकातें बढ़ीं, बातें बढ़ीं, और प्यार भी बढ़ता गया। लेकिन जीवन इतना आसान नहीं था। सिमरन के परिवार की आर्थिक स्थिति अच्छी नहीं थी, और राज का परिवार बहुत संपन्न था। दोनों परिवारों में विरोध शुरू हो गया।

लेकिन सच्चा प्यार हर मुश्किल को पार कर जाता है। राज ने अपने परिवार को समझाया, सिमरन ने अपने माता-पिता को आश्वासन दिया। और अंततः, दोनों परिवारों ने उनके प्यार को स्वीकार किया।

आज राज और सिमरन साथ हैं, खुश हैं। उनकी कहानी हर किसी को यह सिखाती है कि सच्चा प्यार सभी बाधाओं को पार कर लेता है।`,
        views: 2340,
        likes: 456,
        dateAdded: '2026-01-15',
        rating: 4.8
    },
    2: {
        id: 2,
        title: 'गांव की कहानी',
        author: 'आरती मिश्रा',
        genre: 'social',
        content: `एक छोटे से गांव में रहने वाले लोगों की जिंदगी की संघर्ष और सफलता की कहानी।

रामपुर नाम का एक छोटा सा गांव था, जहां के लोग खेती-बाड़ी करके अपना जीवन यापन करते थे। गांव में सुविधाओं की कमी थी - न पक्की सड़कें, न बिजली, न पानी की व्यवस्था। लेकिन लोगों के दिल बहुत बड़े थे।

गांव के सरपंच रामलाल ने सोचा कि अगर सब मिलकर प्रयास करें, तो गांव का विकास हो सकता है। उन्होंने गांववालों को इकट्ठा किया और एक योजना बनाई।

पहले उन्होंने मिलकर एक तालाब का निर्माण किया, ताकि पानी की समस्या हल हो। फिर सरकारी योजना के तहत सड़क और बिजली के लिए आवेदन किया। युवाओं ने मिलकर एक पुस्तकालय बनाया।

धीरे-धीरे गांव बदलने लगा। बच्चे स्कूल जाने लगे, किसान नई तकनीक अपनाने लगे। आज रामपुर एक आदर्श गांव है, जहां सभी लोग खुशहाल हैं।

यह कहानी सिखाती है कि एकता में शक्ति है, और मिलकर कोई भी लक्ष्य हासिल किया जा सकता है।`,
        views: 1980,
        likes: 389,
        dateAdded: '2026-01-20',
        rating: 4.9
    },
    3: {
        id: 3,
        title: 'सपनों की उड़ान',
        author: 'विक्रम सिंह',
        genre: 'motivational',
        content: `एक युवा लड़के की कहानी जो अपने सपनों को पूरा करने के लिए हर मुश्किल का सामना करता है।

अर्जुन एक गरीब परिवार से था। उसके पिता एक मजदूर थे और मां घरों में काम करती थीं। लेकिन अर्जुन के सपने बड़े थे। वह एक इंजीनियर बनना चाहता था।

स्कूल में अर्जुन बहुत मेहनत करता था। दिन में स्कूल जाता, शाम को अखबार बांटता, और रात में पढ़ाई करता। उसके शिक्षक उसकी मेहनत देखकर प्रभावित थे।

12वीं के बाद, अर्जुन ने आईआईटी की तैयारी शुरू की। पैसों की कमी के कारण कोचिंग नहीं जा सकता था, तो उसने ऑनलाइन वीडियो देखकर और पुस्तकालय में किताबें पढ़कर तैयारी की।

पहले प्रयास में वह सफल नहीं हुआ, लेकिन हार नहीं मानी। दूसरे प्रयास में उसने आईआईटी में दाखिला पा लिया। आज अर्जुन एक सफल इंजीनियर है और अपने परिवार का सहारा है।

उसकी कहानी हर किसी को प्रेरणा देती है कि मेहनत और समर्पण से कोई भी सपना पूरा हो सकता है।`,
        views: 3120,
        likes: 678,
        dateAdded: '2026-01-10',
        rating: 4.7
    },
    4: {
        id: 4,
        title: 'जीवन के रंग',
        author: 'आरती मिश्रा',
        genre: 'life',
        content: `जीवन के विभिन्न पड़ावों में एक परिवार के उतार-चढ़ाव की मार्मिक कहानी।

शर्मा परिवार एक साधारण मध्यमवर्गीय परिवार था। पिता एक क्लर्क थे, मां गृहिणी थीं, और दो बच्चे - रोहन और प्रिया। जीवन सामान्य रूप से चल रहा था।

एक दिन पिता की नौकरी चली गई। घर में मुश्किलें आने लगीं। लेकिन परिवार ने हिम्मत नहीं हारी। मां ने घर से ही टिफिन सर्विस शुरू की, रोहन ने ट्यूशन पढ़ाना शुरू किया।

धीरे-धीरे हालात सुधरने लगे। पिता को एक नई नौकरी मिल गई, बच्चे अपनी पढ़ाई में अच्छा कर रहे थे। परिवार ने मिलकर हर मुश्किल का सामना किया।

आज शर्मा परिवार खुश है। उन्होंने जीवन के कठिन समय को पार किया और समझा कि परिवार की एकता सबसे बड़ी ताकत है।

यह कहानी सिखाती है कि जीवन में उतार-चढ़ाव आते रहते हैं, लेकिन हिम्मत और परिवार का साथ हमें हर मुश्किल से पार करा देता है।`,
        views: 1870,
        likes: 345,
        dateAdded: '2026-01-05',
        rating: 4.6
    },
    5: {
        id: 5,
        title: 'दिल का रिश्ता',
        author: 'विक्रम सिंह',
        genre: 'love',
        content: `दो दोस्तों के बीच प्यार की शुरुआत और उसके बाद आने वाली चुनौतियों की कहानी।

अंकित और मीरा बचपन के दोस्त थे। साथ खेलते, साथ पढ़ते, और साथ बड़े हुए। लेकिन कॉलेज के दिनों में दोस्ती प्यार में बदल गई।

शुरू में दोनों को समझ नहीं आया कि यह प्यार है या सिर्फ दोस्ती। लेकिन धीरे-धीरे एहसास हुआ कि वे एक-दूसरे के बिना नहीं रह सकते।

अंकित ने अपने दिल की बात मीरा से कही। मीरा भी उसे प्यार करती थी, लेकिन डर थी कि कहीं दोस्ती खराब न हो जाए। लेकिन अंकित ने भरोसा दिलाया कि चाहे कुछ भी हो, उनकी दोस्ती हमेशा बनी रहेगी।

दोनों ने अपने रिश्ते को आगे बढ़ाया। कुछ मुश्किलें आईं, लेकिन उनकी दोस्ती की मजबूत नींव ने हर परेशानी को दूर किया।

आज अंकित और मीरा शादीशुदा हैं और बहुत खुश हैं। उनका रिश्ता सिखाता है कि सच्ची दोस्ती ही सच्चे प्यार की बुनियाद है।`,
        views: 2890,
        likes: 623,
        dateAdded: '2025-12-28',
        rating: 4.9
    }
};

// Genre names in Hindi
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

// Get story ID from URL
function getStoryIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load story details
function loadStoryDetails() {
    const storyId = getStoryIdFromUrl();
    const story = fullStoryData[storyId];
    
    if (!story) {
        window.location.href = 'kahani.html';
        return;
    }
    
    // Update page title
    document.title = `${story.title} | शेर-शराबा`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbTitle').textContent = story.title;
    
    // Update story details
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('storyAuthor').textContent = story.author;
    document.getElementById('storyGenre').textContent = genreNames[story.genre];
    document.getElementById('storyContent').textContent = story.content;
    
    // Format date
    const dateObj = new Date(story.dateAdded);
    const formattedDate = dateObj.toLocaleDateString('hi-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('storyDate').textContent = formattedDate;
    
    // Update stats
    document.getElementById('storyViews').textContent = story.views;
    document.getElementById('storyLikes').textContent = story.likes;
    document.getElementById('storyRating').textContent = story.rating;
    
    // Load related stories
    loadRelatedStories(story.genre, storyId);
}

// Load related stories
function loadRelatedStories(genre, currentId) {
    const relatedStories = Object.values(fullStoryData)
        .filter(s => s.genre === genre && s.id !== currentId)
        .slice(0, 3);
    
    const relatedGrid = document.getElementById('relatedGrid');
    
    if (relatedStories.length === 0) {
        relatedGrid.innerHTML = '<p style="text-align: center; color: var(--medium-text);">कोई संबंधित कहानी नहीं मिली</p>';
        return;
    }
    
    relatedGrid.innerHTML = relatedStories.map(story => `
        <a href="kahani-detail.html?id=${story.id}" class="related-card">
            <h3 class="related-card-title">${story.title}</h3>
            <p class="related-card-author">
                <i class="fas fa-user"></i> ${story.author}
            </p>
            <p class="related-card-excerpt">${story.content.split('\n\n')[0].substring(0, 100)}...</p>
        </a>
    `).join('');
}

// Handle like button
function handleLike() {
    const btnLike = document.getElementById('btnLike');
    btnLike.classList.toggle('liked');
    
    const storyId = getStoryIdFromUrl();
    const story = fullStoryData[storyId];
    
    if (btnLike.classList.contains('liked')) {
        story.likes++;
        btnLike.querySelector('span').textContent = 'पसंद किया';
    } else {
        story.likes--;
        btnLike.querySelector('span').textContent = 'पसंद करें';
    }
    
    document.getElementById('storyLikes').textContent = story.likes;
}

// Handle share button
function handleShare() {
    const storyId = getStoryIdFromUrl();
    const story = fullStoryData[storyId];
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: story.title,
            text: `${story.title} - ${story.author}`,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('लिंक कॉपी किया गया!');
        });
    }
}

// Handle save button
function handleSave() {
    const btnSave = document.getElementById('btnSave');
    btnSave.classList.toggle('liked');
    
    if (btnSave.classList.contains('liked')) {
        btnSave.querySelector('span').textContent = 'सहेजा गया';
        alert('कहानी सहेजी गई!');
    } else {
        btnSave.querySelector('span').textContent = 'सहेजें';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadStoryDetails();
    
    // Event listeners
    document.getElementById('btnLike').addEventListener('click', handleLike);
    document.getElementById('btnShare').addEventListener('click', handleShare);
    document.getElementById('btnSave').addEventListener('click', handleSave);
});
