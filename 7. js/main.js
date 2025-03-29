document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize the zodiac grid
    initializeZodiacGrid();
    
    // Set up event listeners
    document.getElementById('backButton').addEventListener('click', showAllSigns);
    
    // Ad preferences functionality
    initializeAdPreferences();
});

/**
 * Initialize the zodiac grid by creating cards for each sign
 */
function initializeZodiacGrid() {
    const zodiacGrid = document.querySelector('.zodiac-grid');
    
    // Create a card for each zodiac sign
    zodiacSigns.forEach(sign => {
        const card = createZodiacCard(sign);
        zodiacGrid.appendChild(card);
    });
}

/**
 * Create a zodiac card element for a given sign
 * @param {Object} sign - The zodiac sign data
 * @returns {HTMLElement} - The created card element
 */
function createZodiacCard(sign) {
    // Create the main card container
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.dataset.sign = sign.name;
    
    // Create the card inner container (for flip effect)
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    // Create front of card
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    // Add zodiac symbol
    const symbolDiv = document.createElement('div');
    symbolDiv.className = 'zodiac-symbol';
    symbolDiv.innerHTML = sign.symbol;
    
    // Add zodiac name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'zodiac-name';
    nameDiv.textContent = sign.name;
    
    // Add zodiac date range
    const dateDiv = document.createElement('div');
    dateDiv.className = 'zodiac-date';
    dateDiv.textContent = sign.dateRange;
    
    // Assemble front of card
    cardFront.appendChild(symbolDiv);
    cardFront.appendChild(nameDiv);
    cardFront.appendChild(dateDiv);
    
    // Create back of card
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    // Add horoscope title
    const horoscopeTitle = document.createElement('div');
    horoscopeTitle.className = 'horoscope-title';
    horoscopeTitle.textContent = `${sign.name} Daily Horoscope`;
    
    // Add horoscope text - use monthly content if available
    const horoscopeText = document.createElement('div');
    horoscopeText.className = 'horoscope-text';
    
    // Check if getTodaysHoroscope exists (from monthly-horoscopes.js)
    if (typeof getTodaysHoroscope === 'function') {
        const monthlyHoroscope = getTodaysHoroscope(sign.name);
        horoscopeText.textContent = monthlyHoroscope.general;
    } else {
        horoscopeText.textContent = getDailyHoroscope(sign.name);
    }
    
    // Assemble back of card
    cardBack.appendChild(horoscopeTitle);
    cardBack.appendChild(horoscopeText);
    
    // Assemble card
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    // Add event listeners for card interaction
    addCardInteraction(card);
    
    return card;
}

/**
 * Add interactive behavior to zodiac cards
 * @param {HTMLElement} card - The card element to add interaction to
 */
function addCardInteraction(card) {
    // Tilt effect on mouse move
    card.addEventListener('mousemove', handleCardTilt);
    
    // Reset tilt on mouse leave
    card.addEventListener('mouseleave', resetCardTilt);
    
    // Flip and show detailed horoscope on click
    card.addEventListener('click', function() {
        // Flip the card
        card.classList.add('flipped');
        
        // After a short delay, show the detailed view
        setTimeout(() => {
            const signName = card.dataset.sign;
            showDetailedHoroscope(signName);
        }, 1500); // Delay should match the flip animation duration
    });
}

/**
 * Handle card tilt effect based on mouse position
 * @param {Event} event - The mouse event
 */
function handleCardTilt(event) {
    const card = event.currentTarget;
    const cardRect = card.getBoundingClientRect();
    
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Calculate the tilt angle (limited to a max of 15 degrees)
    const maxTilt = 15;
    const tiltX = ((mouseY - cardCenterY) / (cardRect.height / 2)) * maxTilt;
    const tiltY = ((cardCenterX - mouseX) / (cardRect.width / 2)) * maxTilt;
    
    // Apply the tilt and add a subtle lift effect
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
}

/**
 * Reset card tilt when mouse leaves
 * @param {Event} event - The mouse event
 */
function resetCardTilt(event) {
    const card = event.currentTarget;
    card.style.transform = '';
}

/**
 * Show detailed horoscope for a specific sign
 * @param {string} signName - The name of the zodiac sign
 */
function showDetailedHoroscope(signName) {
    // Hide the zodiac grid
    document.querySelector('.zodiac-grid').style.display = 'none';
    document.querySelector('.intro').style.display = 'none';
    
    // Show the detailed horoscope section
    const detailSection = document.getElementById('horoscopeDetail');
    detailSection.classList.remove('hidden');
    
    // Get the sign data
    const sign = zodiacSigns.find(s => s.name === signName);
    
    // Get horoscope from monthly content if available, otherwise fall back to generated one
    let horoscope;
    
    // Check if getTodaysHoroscope exists (from monthly-horoscopes.js)
    if (typeof getTodaysHoroscope === 'function') {
        horoscope = getTodaysHoroscope(signName);
    } else {
        // Fall back to randomly generated horoscope
        horoscope = getExtendedHoroscope(signName);
    }
    
    // Create detailed content
    const contentContainer = document.getElementById('horoscopeContent');
    contentContainer.innerHTML = `
        <h2>${sign.name}</h2>
        <div class="date-range">${sign.dateRange}</div>
        
        <div class="sign-details">
            <p><strong>Element:</strong> ${sign.element}</p>
            <p><strong>Ruling:</strong> ${sign.ruling}</p>
            <p><strong>Traits:</strong> ${sign.traits.join(', ')}</p>
        </div>
        
        <div class="horoscope-section">
            <h3>Today's Horoscope</h3>
            <p>${horoscope.general}</p>
        </div>
        
        <div class="horoscope-section">
            <h3>Love & Relationships</h3>
            <p>${horoscope.love}</p>
        </div>
        
        <div class="horoscope-section">
            <h3>Career & Money</h3>
            <p>${horoscope.career}</p>
        </div>
        
        <div class="horoscope-section">
            <h3>Health & Wellness</h3>
            <p>${horoscope.wellness}</p>
        </div>
        
        <div class="horoscope-extras">
            <p><strong>Lucky Number:</strong> ${horoscope.luckyNumber}</p>
            <p><strong>Compatible Sign:</strong> ${horoscope.compatibleSign}</p>
        </div>
    `;
}

/**
 * Return to the grid view of all zodiac signs
 */
function showAllSigns() {
    // Hide the detailed section
    document.getElementById('horoscopeDetail').classList.add('hidden');
    
    // Show the grid and intro
    document.querySelector('.zodiac-grid').style.display = 'grid';
    document.querySelector('.intro').style.display = 'block';
    
    // Reset all flipped cards
    const cards = document.querySelectorAll('.zodiac-card');
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
    
    // Refresh ads when returning to grid view
    if (typeof refreshAds === 'function' && !document.body.classList.contains('ad-free')) {
        refreshAds();
    }
}

/**
 * Initialize ad preferences functionality
 * Allows users to toggle ads on/off and saves preference to localStorage
 */
function initializeAdPreferences() {
    const adPreferences = document.getElementById('adPreferences');
    const adPreferenceText = document.getElementById('adPreferenceText');
    
    // Check if user has a saved preference
    const adFree = localStorage.getItem('adFree') === 'true';
    
    // Apply saved preference
    if (adFree) {
        document.body.classList.add('ad-free');
        adPreferenceText.textContent = 'Show Ads';
    }
    
    // Toggle ad visibility when clicked
    adPreferences.addEventListener('click', () => {
        // Toggle ad-free class on body
        const isCurrentlyAdFree = document.body.classList.toggle('ad-free');
        
        // Update button text
        adPreferenceText.textContent = isCurrentlyAdFree ? 'Show Ads' : 'Hide Ads';
        
        // Save preference to localStorage
        localStorage.setItem('adFree', isCurrentlyAdFree);
        
        // If user chose to show ads again, refresh ad units using ad manager
        if (!isCurrentlyAdFree) {
            // Use the refreshAds function from ad-manager.js if it exists
            if (typeof refreshAds === 'function') {
                refreshAds();
            }
        }
    });
}
