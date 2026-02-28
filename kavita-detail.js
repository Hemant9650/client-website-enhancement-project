// ========================================
// Poetry Detail Page - JavaScript
// ========================================

// Sample full poetry data (expanded from kavita.js)
const fullPoetryData = {
    1: {
        id: 1,
        title: 'तेरी यादों में',
        author: 'राज कुमार',
        genre: 'romance',
        content: `तेरी यादों में खोया रहता हूं मैं,
हर पल तुझे ही सोचता रहता हूं मैं।

तेरी मुस्कान में मिलती है खुशी,
तेरी बातों में बसती है ज़िन्दगी।

जब से तू मिली है मुझे,
हर दिन लगता है एक त्यौहार सा।

तेरे बिना अधूरा है ये जहां,
तू ही मेरी मंज़िल, तू ही मेरा ठिकाना।

तेरी यादों में खोया रहता हूं मैं,
हर पल तुझे ही सोचता रहता हूं मैं।`,
        views: 1240,
        likes: 234,
        dateAdded: '2026-01-15',
        rating: 4.8
    },
    2: {
        id: 2,
        title: 'समाज की आवाज़',
        author: 'प्रिया शर्मा',
        genre: 'social',
        content: `जब तक न जागेगा समाज हमारा,
कैसे बदलेगा भविष्य सारा।

बेटी और बेटे में फर्क क्यों है,
क्यों है हर घर में यह दर्क।

शिक्षा का अधिकार सबको मिले,
हर बच्चा अपने सपनों को जिए।

उठो और आवाज़ उठाओ,
समाज को जागरूक बनाओ।

जब तक न जागेगा समाज हमारा,
कैसे बदलेगा भविष्य सारा।`,
        views: 980,
        likes: 189,
        dateAdded: '2026-01-20',
        rating: 4.9
    },
    3: {
        id: 3,
        title: 'हिम्मत न हार',
        author: 'अमित वर्मा',
        genre: 'motivational',
        content: `गिरकर उठना ही जीवन है,
हर मुश्किल में एक राह छुपी है।

हार मत मानो कभी भी,
संघर्ष ही सफलता की कुंजी है।

अंधेरे के बाद सुबह आती है,
मेहनत कभी बेकार नहीं जाती है।

हिम्मत रखो, साहस रखो,
अपने सपनों पर विश्वास रखो।

गिरकर उठना ही जीवन है,
हर मुश्किल में एक राह छुपी है।`,
        views: 1560,
        likes: 312,
        dateAdded: '2026-01-10',
        rating: 4.7
    },
    4: {
        id: 4,
        title: 'जीवन की राहें',
        author: 'सोनल गुप्ता',
        genre: 'life',
        content: `कभी धूप, कभी छाँव मिली है,
जीवन की राहों में हर रंग मिली है।

खुशी के पल, गम के लम्हे,
सब मिलकर बनाते हैं जीवन की कहानी।

कभी हंसी, कभी आंसू,
यही तो है ज़िन्दगी का सफर।

हर मोड़ पर कुछ नया मिलता है,
जीवन हमें हर दिन कुछ सिखाता है।

कभी धूप, कभी छाँव मिली है,
जीवन की राहों में हर रंग मिली है।`,
        views: 870,
        likes: 156,
        dateAdded: '2026-01-05',
        rating: 4.6
    },
    5: {
        id: 5,
        title: 'प्यार का इज़हार',
        author: 'रोहन खन्ना',
        genre: 'love',
        content: `दिल की बातें होंठों तक आती नहीं,
तेरे बिना ये ज़िन्दगी सुहाती नहीं।

तेरी आँखों में खो जाता हूं मैं,
तेरे प्यार में डूब जाता हूं मैं।

कहना चाहता हूं तुझसे बहुत कुछ,
पर शब्द नहीं मिलते कभी।

बस इतना कह सकता हूं,
तू है तो सब कुछ है।

दिल की बातें होंठों तक आती नहीं,
तेरे बिना ये ज़िन्दगी सुहाती नहीं।`,
        views: 1890,
        likes: 423,
        dateAdded: '2025-12-28',
        rating: 4.9
    },
    6: {
        id: 6,
        title: 'उदास शाम',
        author: 'मीना पाण्डेय',
        genre: 'sadness',
        content: `अकेलेपन की इस रात में,
तेरी यादें आती हैं साथ में।

सूनी सड़कें, खाली घर,
हर जगह बस तन्हाई का डर।

कभी तू थी, अब नहीं है,
जीवन में अब रोशनी नहीं है।

बस यादें रह गई हैं तेरी,
जो दिल को तड़पाती हैं मेरी।

अकेलेपन की इस रात में,
तेरी यादें आती हैं साथ में।`,
        views: 720,
        likes: 145,
        dateAdded: '2026-01-18',
        rating: 4.5
    },
    7: {
        id: 7,
        title: 'राजनीति की बात',
        author: 'आशीष त्रिपाठी',
        genre: 'political',
        content: `वादे झूठे, नेता बेईमान,
कब बदलेगा इस देश का हाल बेजान।

चुनाव आते हैं, वादे होते हैं,
फिर सब भूल जाते हैं।

जनता की आवाज़ कोई नहीं सुनता,
सत्ता के लिए सब कुछ करता।

कब आएगी वो सुबह,
जब नेता होंगे सच्चे।

वादे झूठे, नेता बेईमान,
कब बदलेगा इस देश का हाल बेजान।`,
        views: 1120,
        likes: 198,
        dateAdded: '2025-12-15',
        rating: 4.4
    },
    8: {
        id: 8,
        title: 'प्रकृति का सौंदर्य',
        author: 'कविता सिंह',
        genre: 'nature',
        content: `पेड़ों की छाँव, नदी का किनारा,
प्रकृति का हर रंग है न्यारा।

पहाड़ों की चोटी, घाटी की हरियाली,
हर जगह बिखरी है खुशहाली।

चिड़ियों की चहचहाट, फूलों की खुशबू,
प्रकृति में बसा है जीवन का हर रंग।

इसकी रक्षा करना है हमारा कर्तव्य,
यही है हमारी असली संपत्ति।

पेड़ों की छाँव, नदी का किनारा,
प्रकृति का हर रंग है न्यारा।`,
        views: 1340,
        likes: 267,
        dateAdded: '2026-01-12',
        rating: 4.8
    },
    9: {
        id: 9,
        title: 'माँ की ममता',
        author: 'राज कुमार',
        genre: 'life',
        content: `माँ के आँचल में सुकून मिलता है,
हर दर्द का हर घाव भूल जाता है।

माँ की ममता से बड़ा कुछ नहीं,
इस दुनिया में उससे प्यारा कुछ नहीं।

उसकी दुआओं से चलती है ज़िन्दगी,
उसके प्यार से मिलती है हर खुशी।

माँ है तो घर है स्वर्ग,
माँ है तो जीवन है सार्थक।

माँ के आँचल में सुकून मिलता है,
हर दर्द का हर घाव भूल जाता है।`,
        views: 2100,
        likes: 489,
        dateAdded: '2025-12-20',
        rating: 5.0
    },
    10: {
        id: 10,
        title: 'देशभक्ति',
        author: 'अमित वर्मा',
        genre: 'social',
        content: `तिरंगा फहराता रहे ऊंचा,
भारत हमेशा रहे महान।

शहीदों ने दी है कुर्बानी,
उनकी याद में जलाएं हम दिया।

देश के लिए सब कुछ कर जाएंगे,
इसकी आन, बान, शान बचाएंगे।

हम हैं भारत के वीर सपूत,
देश से बड़ा कुछ नहीं।

तिरंगा फहराता रहे ऊंचा,
भारत हमेशा रहे महान।`,
        views: 1680,
        likes: 356,
        dateAdded: '2026-01-08',
        rating: 4.7
    },
    11: {
        id: 11,
        title: 'पहला प्यार',
        author: 'प्रिया शर्मा',
        genre: 'romance',
        content: `पहली बारिश, पहली मुलाकात,
दिल की धड़कन, पहली बात।

तेरी नज़रों ने जादू किया,
दिल में प्यार का बीज बोया।

पहला प्यार कभी भूलता नहीं,
वो एहसास कभी मिटता नहीं।

तेरी यादें आज भी ताज़ा हैं,
वो पल आज भी दिल में बसे हैं।

पहली बारिश, पहली मुलाकात,
दिल की धड़कन, पहली बात।`,
        views: 1450,
        likes: 298,
        dateAdded: '2026-01-03',
        rating: 4.6
    },
    12: {
        id: 12,
        title: 'टूटे सपने',
        author: 'मीना पाण्डेय',
        genre: 'sadness',
        content: `सपने टूटे, उम्मीदें खो गईं,
ख्वाहिशें सब रेत में खो गईं।

जो चाहा था वो न मिला,
जीवन में बस दर्द ही मिला।

हर कोशिश बेकार गई,
हर उम्मीद बेकार गई।

पर फिर भी जीना है,
नए सपने बुनने हैं।

सपने टूटे, उम्मीदें खो गईं,
ख्वाहिशें सब रेत में खो गईं।`,
        views: 890,
        likes: 167,
        dateAdded: '2025-12-25',
        rating: 4.3
    },
    13: {
        id: 13,
        title: 'बचपन की यादें',
        author: 'सोनल गुप्ता',
        genre: 'life',
        content: `गली के नुक्कड़, मिट्टी के खिलौने,
बचपन के वो दिन कितने सुहाने।

दोस्तों के साथ खेलना,
माँ का प्यार पाना।

स्कूल की छुट्टी, गर्मी की छुट्टियां,
नानी के घर जाना।

वो मासूम दिन, वो प्यारी यादें,
कभी न भूलेंगी वो बातें।

गली के नुक्कड़, मिट्टी के खिलौने,
बचपन के वो दिन कितने सुहाने।`,
        views: 1230,
        likes: 245,
        dateAdded: '2026-01-02',
        rating: 4.7
    },
    14: {
        id: 14,
        title: 'संघर्ष की कहानी',
        author: 'रोहन खन्ना',
        genre: 'motivational',
        content: `हर रात के बाद सुबह आती है,
संघर्ष करने वाले को मंज़िल मिल जाती है।

जीवन में कितनी भी मुश्किलें आएं,
हिम्मत से सामना करना है।

हर असफलता एक सीख है,
हर कोशिश एक नई शुरुआत है।

कभी हार मत मानो,
अपने सपनों को साकार करो।

हर रात के बाद सुबह आती है,
संघर्ष करने वाले को मंज़िल मिल जाती है।`,
        views: 1780,
        likes: 378,
        dateAdded: '2025-12-18',
        rating: 4.8
    },
    15: {
        id: 15,
        title: 'चाँदनी रात',
        author: 'कविता सिंह',
        genre: 'romance',
        content: `चाँदनी रात, तारों भरा आसमान,
तेरे साथ हर पल है खास।

हाथ में हाथ, दिल में दिल,
साथ चलना है ज़िन्दगी भर।

चांदनी में तेरा चेहरा चमकता है,
मेरा दिल तेरे लिए धड़कता है।

प्यार की इस रात में,
बस तू और मैं हैं साथ में।

चाँदनी रात, तारों भरा आसमान,
तेरे साथ हर पल है खास।`,
        views: 1920,
        likes: 412,
        dateAdded: '2025-12-22',
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

// Get poetry ID from URL
function getPoetryIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load poetry details
function loadPoetryDetails() {
    const poetryId = getPoetryIdFromUrl();
    const poetry = fullPoetryData[poetryId];
    
    if (!poetry) {
        window.location.href = 'kavita.html';
        return;
    }
    
    // Update page title
    document.title = `${poetry.title} | शेर-शराबा`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbTitle').textContent = poetry.title;
    
    // Update poetry details
    document.getElementById('poetryTitle').textContent = poetry.title;
    document.getElementById('poetryAuthor').textContent = poetry.author;
    document.getElementById('poetryGenre').textContent = genreNames[poetry.genre];
    document.getElementById('poetryContent').textContent = poetry.content;
    
    // Format date
    const dateObj = new Date(poetry.dateAdded);
    const formattedDate = dateObj.toLocaleDateString('hi-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('poetryDate').textContent = formattedDate;
    
    // Update stats
    document.getElementById('poetryViews').textContent = poetry.views;
    document.getElementById('poetryLikes').textContent = poetry.likes;
    document.getElementById('poetryRating').textContent = poetry.rating;
    
    // Load related poetry
    loadRelatedPoetry(poetry.genre, poetryId);
}

// Load related poetry
function loadRelatedPoetry(genre, currentId) {
    const relatedPoetry = Object.values(fullPoetryData)
        .filter(p => p.genre === genre && p.id !== currentId)
        .slice(0, 3);
    
    const relatedGrid = document.getElementById('relatedGrid');
    
    if (relatedPoetry.length === 0) {
        relatedGrid.innerHTML = '<p style="text-align: center; color: var(--medium-text);">कोई संबंधित कविता नहीं मिली</p>';
        return;
    }
    
    relatedGrid.innerHTML = relatedPoetry.map(poetry => `
        <a href="kavita-detail.html?id=${poetry.id}" class="related-card">
            <h3 class="related-card-title">${poetry.title}</h3>
            <p class="related-card-author">
                <i class="fas fa-user"></i> ${poetry.author}
            </p>
            <p class="related-card-excerpt">${poetry.content.split('\n')[0]}...</p>
        </a>
    `).join('');
}

// Handle like button
function handleLike() {
    const btnLike = document.getElementById('btnLike');
    btnLike.classList.toggle('liked');
    
    const poetryId = getPoetryIdFromUrl();
    const poetry = fullPoetryData[poetryId];
    
    if (btnLike.classList.contains('liked')) {
        poetry.likes++;
        btnLike.querySelector('span').textContent = 'पसंद किया';
    } else {
        poetry.likes--;
        btnLike.querySelector('span').textContent = 'पसंद करें';
    }
    
    document.getElementById('poetryLikes').textContent = poetry.likes;
}

// Handle share button
function handleShare() {
    const poetryId = getPoetryIdFromUrl();
    const poetry = fullPoetryData[poetryId];
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: poetry.title,
            text: `${poetry.title} - ${poetry.author}`,
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
        alert('कविता सहेजी गई!');
    } else {
        btnSave.querySelector('span').textContent = 'सहेजें';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadPoetryDetails();
    
    // Event listeners
    document.getElementById('btnLike').addEventListener('click', handleLike);
    document.getElementById('btnShare').addEventListener('click', handleShare);
    document.getElementById('btnSave').addEventListener('click', handleSave);
});
