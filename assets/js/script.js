/* ============================================
   PADANG RESIDENCES - MAIN JAVASCRIPT
   FAQ Chatbot, Form Handling & Interactions
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    whatsappNumber: '60125560400',
    chatbotAutoOpen: true,
    chatbotDelay: 3000, // 3 seconds
    animationDuration: 800,
    scrollOffset: 80
};

// ============================================
// FAQ DATA - 30+ Questions from Brochure
// ============================================
const FAQ_DATA = {
    categories: [
        {
            id: 'general',
            title: '📋 General Information',
            questions: [
                {
                    q: 'What is Padang Residences?',
                    a: 'Padang Residences is a serviced apartment development located in Kota Semarak (Phase 1), Kuala Lumpur. It\'s co-developed by TH Properties and MRCB, featuring 4 towers with 20+ resort-style facilities.'
                },
                {
                    q: 'Who is the developer?',
                    a: 'Padang Residences is co-developed by TH Properties and MRCB under 59 Inc Sdn. Bhd. (Company No: 200901023377 / 866476-T). Both are reputable developers with extensive experience in Malaysian property development.'
                },
                {
                    q: 'What is the project status?',
                    a: 'Padang Residences is currently under development. Expected completion is 48 months from SPA date (approximately September 2027). The project has been approved by the National Housing Department.'
                },
                {
                    q: 'What is the land tenure?',
                    a: 'The land tenure for Padang Residences is 99-year leasehold. The land is under the Land Committee of Kuala Lumpur, Federal Territory.'
                }
            ]
        },
        {
            id: 'pricing',
            title: '💰 Pricing & Payment',
            questions: [
                {
                    q: 'What is the starting price?',
                    a: 'Padang Residences starts from RM300,000. Prices vary depending on unit type, size, and floor level. Contact our sales team for the latest pricing and promotions.'
                },
                {
                    q: 'What are the price ranges by unit type?',
                    a: 'Unit prices vary by type:\n• Type D1/D2 (802 sq.ft.): From RM300,000\n• Type C (902 sq.ft.): From RM363,800\n• Type B1/B2 (1,032-1,033 sq.ft.): From RM391,000 - RM592,800\n• Type A (1,199 sq.ft.): From RM456,800\n\n*Prices subject to change. Contact us for current pricing.'
                },
                {
                    q: 'What payment schemes are available?',
                    a: 'Various payment schemes are available including standard bank loans and developer packages. Our sales team can help you explore financing options based on your eligibility. Contact us for personalized payment plan assistance.'
                },
                {
                    q: 'Are there any promotions?',
                    a: 'Yes! We have ongoing promotions and special packages. Contact our sales team at 60125560400 to learn about current rebates, discounts, and early bird offers.'
                }
            ]
        },
        {
            id: 'units',
            title: '🏠 Unit Types & Layouts',
            questions: [
                {
                    q: 'What unit types are available?',
                    a: 'Padang Residences offers 6 unit types:\n\n• Type A: 1,199 sq.ft. (3 bed, 2 bath, 2 parking)\n• Type B1: 1,033 sq.ft. (3 bed, 2 bath, 2 parking)\n• Type B2: 1,032 sq.ft. (3 bed, 2 bath, 2 parking)\n• Type C: 902 sq.ft. (3 bed, 2 bath, 1-2 parking)\n• Type D1: 802 sq.ft. (2 bed, 2 bath, 1 parking)\n• Type D2: 802 sq.ft. (2 bed, 2 bath, 1 parking)'
                },
                {
                    q: 'What is the smallest unit?',
                    a: 'The smallest units are Type D1 and D2 at 802 sq.ft. These are 2-bedroom, 2-bathroom units with 1 parking bay - perfect for young couples or small families.'
                },
                {
                    q: 'What is the largest unit?',
                    a: 'The largest unit is Type A at 1,199 sq.ft. This is a 3-bedroom, 2-bathroom unit with 2 parking bays, featuring a balcony and generous living spaces - ideal for families.'
                },
                {
                    q: 'How many towers are there?',
                    a: 'Padang Residences comprises 4 residential towers: Tower A, Tower B, Tower C, and Tower D. Each tower offers different unit configurations and views.'
                },
                {
                    q: 'Do units come with parking?',
                    a: 'Yes, all units come with dedicated parking bays:\n• Type A, B1, B2: 2 parking bays\n• Type C: 1-2 parking bays\n• Type D1, D2: 1 parking bay'
                }
            ]
        },
        {
            id: 'facilities',
            title: '🏊 Facilities & Amenities',
            questions: [
                {
                    q: 'What facilities are available?',
                    a: 'Padang Residences offers 20+ resort-style facilities on Level 8, including:\n\n• Infinity Swimming Pool & Wading Pool\n• Gymnasium & Aerobic/Yoga Studio\n• BBQ Pit Area\n• Indoor Games Room\n• Multipurpose Hall with Event Lawn\n• Kid\'s Indoor Playroom & Playground\n• Reading Room\n• Steam & Sauna Room\n• Half-court Basketball & Futsal Court\n• Wellness Garden & Herbs Garden\n• Reflective Ponds\n• Visitor\'s Lounge\n• Surau'
                },
                {
                    q: 'Is there a swimming pool?',
                    a: 'Yes! Padang Residences features an Infinity Swimming Pool with stunning views, plus a separate Wading Pool for children. Both are located on Level 8 Facility Podium.'
                },
                {
                    q: 'Is there a gym?',
                    a: 'Yes, there\'s a fully-equipped Gymnasium on Level 8, along with a separate Aerobic/Yoga Studio for fitness classes and activities.'
                },
                {
                    q: 'Are there facilities for children?',
                    a: 'Absolutely! Kid-friendly facilities include:\n• Kid\'s Indoor Playroom\n• Outdoor Playground\n• Wading Pool\n• Indoor Games Room\n• Half-court Basketball Court\n• Futsal Court'
                },
                {
                    q: 'Is there a BBQ area?',
                    a: 'Yes, Padang Residences has a BBQ Pit Area on Level 8 where residents can enjoy outdoor gatherings and cookouts with family and friends.'
                }
            ]
        },
        {
            id: 'specifications',
            title: '🔧 Specifications & Quality',
            questions: [
                {
                    q: 'What are the building specifications?',
                    a: 'Padang Residences features premium specifications:\n\n• Structure: Reinforced Concrete\n• Wall: Masonry/RC Block\n• Roof: Reinforced Concrete Slab\n• Windows: Aluminium Frame & Glass\n• Main Door: Fire Rated Door\n• Ceiling: Plaster & Skim Coat Paint'
                },
                {
                    q: 'What flooring is provided?',
                    a: 'Flooring specifications include:\n• Living/Dining Area: Porcelain Tiles\n• Bedrooms: Laminated Timber\n• Bathrooms: Porcelain Tiles\n• Yard: Homogeneous Tiles\n• Kitchen Wall: Porcelain Tiles (1500mm height)'
                },
                {
                    q: 'What bathroom fittings are included?',
                    a: 'Each unit comes with quality sanitary fittings:\n• 2 Shower Rose\n• 2 Wash Basin\n• 2 Water Closet\n• 6 Taps\n• 1 Kitchen Sink\n\nAll bathrooms feature porcelain tiles up to ceiling height.'
                },
                {
                    q: 'Are air-conditioning points provided?',
                    a: 'Yes, air-conditioning points are provided. The number varies by unit type:\n• Type A: 4 points\n• Type B1/B2: 4 points\n• Type C: 3 points\n• Type D1/D2: 3 points'
                }
            ]
        },
        {
            id: 'location',
            title: '📍 Location & Connectivity',
            questions: [
                {
                    q: 'Where is Padang Residences located?',
                    a: 'Padang Residences is located along Jalan Sultan Yahya Petra in Kota Semarak, Kuala Lumpur. It\'s part of the first phase of the Kota Semarak integrated development, just beyond the vibrant city center.'
                },
                {
                    q: 'How far is KLCC?',
                    a: 'KLCC is approximately 3 km away from Padang Residences. You can easily access Suria KLCC, KLCC Park, and the Petronas Twin Towers within minutes.'
                },
                {
                    q: 'What public transport is nearby?',
                    a: 'Padang Residences enjoys excellent public transport connectivity:\n• Damai LRT Station - Nearby\n• Raja Uda MRT Station - Within reach\n• Multiple bus routes along Jalan Sultan Yahya Petra\n• Easy access to KL Elevated Highway (AKLEH)'
                },
                {
                    q: 'What schools are nearby?',
                    a: 'Several educational institutions are nearby:\n• SK Seri Bonus: 800m\n• SMK Padang Tembak: 1 km\n• UTM Kuala Lumpur: 1.6 km\n• UNIKL Business College: 2.7 km\n• TAR University: 3.5 km\n• UniRazak: 4.8 km'
                },
                {
                    q: 'What hospitals are nearby?',
                    a: 'Healthcare facilities within reach:\n• Rampai Puteri Medical Centre: 2 km\n• National Heart Institute: 2 km\n• Columbia Asia Hospital: 2 km\n• Kuala Lumpur Hospital: 3 km\n• Prince Court Medical Centre: 4 km\n• HSC Medical Center: Nearby'
                },
                {
                    q: 'What shopping malls are nearby?',
                    a: 'Shopping destinations near Padang Residences:\n• Air Panas Market: 1 km\n• Suria KLCC: 3 km\n• The Intermark & Avenue K: 3 km\n• Pavilion Kuala Lumpur: 4 km\n• KL City Centre: 4 km'
                }
            ]
        },
        {
            id: 'booking',
            title: '📝 Booking & Process',
            questions: [
                {
                    q: 'How do I book a unit?',
                    a: 'To book a unit at Padang Residences:\n1. Visit our Sales Gallery or contact us via WhatsApp\n2. Choose your preferred unit type and floor\n3. Pay the booking fee\n4. Complete documentation and SPA signing\n\nContact us at 60125560400 to start your booking!'
                },
                {
                    q: 'Where is the Sales Gallery?',
                    a: 'Our Sales Gallery is located at:\n\nKota Semarak Galleria\nNo. 38, Jalan Sultan Yahya Petra\n54100 Kuala Lumpur\n\nCall us at 03-2602-3831 or WhatsApp 60125560400 to arrange a visit.'
                },
                {
                    q: 'Can I view the show unit?',
                    a: 'Yes! We welcome you to visit our Sales Gallery to view the show unit and experience the quality of Padang Residences firsthand. Contact us to schedule an appointment.'
                },
                {
                    q: 'What documents do I need?',
                    a: 'Documents typically required:\n• MyKad/Passport copy\n• Latest 3-6 months payslips\n• Latest EPF statement\n• Bank statements\n• EA Form/Tax documents\n\nOur sales team will guide you through the complete documentation process.'
                }
            ]
        }
    ]
};

// ============================================
// DOM ELEMENTS
// ============================================
let elements = {};

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initElements();
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initAnimations();
    initChatbot();
    initForm();
    
    // Auto-open chatbot after delay
    if (CONFIG.chatbotAutoOpen) {
        setTimeout(openChatbot, CONFIG.chatbotDelay);
    }
});

// ============================================
// ELEMENT INITIALIZATION
// ============================================
function initElements() {
    elements = {
        header: document.getElementById('header'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        mobileMenuClose: document.getElementById('mobileMenuClose'),
        chatbotTrigger: document.getElementById('chatbotTrigger'),
        chatbotPanel: document.getElementById('chatbotPanel'),
        chatbotClose: document.getElementById('chatbotClose'),
        chatbotOverlay: document.getElementById('chatbotOverlay'),
        chatbotMessages: document.getElementById('chatbotMessages'),
        contactForm: document.getElementById('contactForm')
    };
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeader() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (elements.header) {
            elements.header.classList.toggle('scrolled', currentScroll > 50);
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (elements.mobileMenuClose) {
        elements.mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking nav links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    elements.mobileMenu?.classList.toggle('active');
    elements.mobileMenuBtn?.classList.toggle('active');
    document.body.style.overflow = elements.mobileMenu?.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    elements.mobileMenu?.classList.remove('active');
    elements.mobileMenuBtn?.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - CONFIG.scrollOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS (Simple AOS Alternative)
// ============================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.aosDelay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, parseInt(delay));
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => el.classList.add('aos-animate'));
    }
}

// ============================================
// CHATBOT
// ============================================
let chatHistory = [];
let currentCategory = null;

function initChatbot() {
    if (elements.chatbotTrigger) {
        elements.chatbotTrigger.addEventListener('click', toggleChatbot);
    }
    
    if (elements.chatbotClose) {
        elements.chatbotClose.addEventListener('click', closeChatbot);
    }
    
    if (elements.chatbotOverlay) {
        elements.chatbotOverlay.addEventListener('click', closeChatbot);
    }
    
    // Initialize with welcome message
    showWelcomeMessage();
}

function openChatbot() {
    elements.chatbotPanel?.classList.add('active');
    elements.chatbotOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeChatbot() {
    elements.chatbotPanel?.classList.remove('active');
    elements.chatbotOverlay?.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleChatbot() {
    if (elements.chatbotPanel?.classList.contains('active')) {
        closeChatbot();
    } else {
        openChatbot();
    }
}

function showWelcomeMessage() {
    if (!elements.chatbotMessages) return;
    
    elements.chatbotMessages.innerHTML = '';
    
    addBotMessage('👋 Welcome to Padang Residences! I\'m here to help answer your questions.');
    
    setTimeout(() => {
        addBotMessage('What would you like to know about?');
        showCategories();
    }, 500);
}

function showCategories() {
    currentCategory = null;
    
    const optionsHtml = FAQ_DATA.categories.map(cat => 
        `<button class="faq-option" onclick="selectCategory('${cat.id}')">${cat.title}</button>`
    ).join('');
    
    addBotOptions(optionsHtml);
}

function selectCategory(categoryId) {
    const category = FAQ_DATA.categories.find(c => c.id === categoryId);
    if (!category) return;
    
    currentCategory = category;
    
    // Add user message
    addUserMessage(category.title);
    
    // Show questions
    setTimeout(() => {
        addBotMessage(`Here are common questions about ${category.title.replace(/[📋💰🏠🏊🔧📍📝]/g, '').trim()}:`);
        
        const optionsHtml = category.questions.map((q, i) => 
            `<button class="faq-option" onclick="selectQuestion('${categoryId}', ${i})">${q.q}</button>`
        ).join('');
        
        addBotOptions(optionsHtml);
    }, 300);
}

function selectQuestion(categoryId, questionIndex) {
    const category = FAQ_DATA.categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const qa = category.questions[questionIndex];
    if (!qa) return;
    
    // Add user message
    addUserMessage(qa.q);
    
    // Add bot response
    setTimeout(() => {
        addBotMessage(qa.a);
        
        // Show follow-up options
        setTimeout(() => {
            addBotMessage('Would you like to:');
            addBotOptions(`
                <button class="faq-option" onclick="showMoreQuestions('${categoryId}')">📋 See more questions in this topic</button>
                <button class="faq-option" onclick="showCategories()">🔄 Browse other topics</button>
                <button class="faq-option" onclick="connectWhatsApp()">💬 Chat with our sales team</button>
            `);
        }, 500);
    }, 300);
}

function showMoreQuestions(categoryId) {
    addUserMessage('Show more questions');
    setTimeout(() => selectCategory(categoryId), 300);
}

function connectWhatsApp() {
    addUserMessage('Connect to WhatsApp');
    
    setTimeout(() => {
        addBotMessage('Great! Click the button below to chat with our sales team on WhatsApp. They\'ll be happy to assist you with any inquiries about Padang Residences!');
    }, 300);
    
    // WhatsApp button is in the footer
}

function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    elements.chatbotMessages?.appendChild(messageDiv);
    scrollChatToBottom();
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = text;
    elements.chatbotMessages?.appendChild(messageDiv);
    scrollChatToBottom();
}

function addBotOptions(optionsHtml) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'chat-message bot';
    optionsDiv.innerHTML = `<div class="faq-options">${optionsHtml}</div>`;
    elements.chatbotMessages?.appendChild(optionsDiv);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    if (elements.chatbotMessages) {
        elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
    }
}

function resetChat() {
    showWelcomeMessage();
}

// Make functions available globally for onclick handlers
window.selectCategory = selectCategory;
window.selectQuestion = selectQuestion;
window.showMoreQuestions = showMoreQuestions;
window.showCategories = showCategories;
window.connectWhatsApp = connectWhatsApp;
window.resetChat = resetChat;

// ============================================
// FORM HANDLING
// ============================================
function initForm() {
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    // Netlify handles the form submission
    // We add WhatsApp redirect option after submission
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Check honeypot
    if (formData.get('bot-field')) {
        e.preventDefault();
        return false;
    }
    
    // Store form data for WhatsApp option (shown on success page)
    sessionStorage.setItem('formSubmitted', 'true');
    sessionStorage.setItem('formName', formData.get('name') || '');
    sessionStorage.setItem('formPhone', formData.get('phone') || '');
    
    // Let Netlify handle the rest
    return true;
}

// WhatsApp link generator
function generateWhatsAppLink(customMessage) {
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const unitType = document.getElementById('unitType')?.value || '';
    const budget = document.getElementById('budget')?.value || '';
    const contactTime = document.getElementById('contactTime')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    let whatsappMessage = customMessage || `Hi, I'm interested in Padang Residences.`;
    
    if (name) whatsappMessage += `\n\nName: ${name}`;
    if (phone) whatsappMessage += `\nPhone: ${phone}`;
    if (email) whatsappMessage += `\nEmail: ${email}`;
    if (unitType) whatsappMessage += `\nPreferred Unit: ${unitType}`;
    if (budget) whatsappMessage += `\nBudget: ${budget}`;
    if (contactTime) whatsappMessage += `\nBest Time to Contact: ${contactTime}`;
    if (message) whatsappMessage += `\nMessage: ${message}`;
    
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

// Open WhatsApp with form data
function openWhatsAppWithFormData() {
    window.open(generateWhatsAppLink(), '_blank');
}

// Open WhatsApp with custom message
function openWhatsApp(customMessage) {
    const message = customMessage || "Hi, I'm interested in Padang Residences. Please send me more details.";
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Make WhatsApp functions global
window.openWhatsApp = openWhatsApp;
window.openWhatsAppWithFormData = openWhatsAppWithFormData;
window.generateWhatsAppLink = generateWhatsAppLink;

// ============================================
// UTILITY FUNCTIONS
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', function(e) {
    console.warn('Script error:', e.message);
});

// Prevent errors from breaking the page
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.warn('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo);
    return false;
};
