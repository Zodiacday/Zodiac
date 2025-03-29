/**
 * Ad Manager Functions
 * Handles ad initialization, refreshing, and fallback behavior
 */

// Check if AdSense is loaded
function isAdSenseLoaded() {
    return typeof adsbygoogle !== 'undefined';
}

// Initialize ads
function initializeAds() {
    // Only initialize if AdSense is loaded and user hasn't disabled ads
    if (isAdSenseLoaded() && !document.body.classList.contains('ad-free')) {
        try {
            // Initialize all ad units
            const adUnits = document.querySelectorAll('.adsbygoogle');
            adUnits.forEach(unit => {
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
            console.log('Ads initialized successfully');
        } catch (error) {
            console.log('Ad initialization failed:', error);
            hideEmptyAdContainers();
        }
    } else {
        hideEmptyAdContainers();
    }
}

// Refresh ads (used when returning to grid view)
function refreshAds() {
    if (isAdSenseLoaded() && !document.body.classList.contains('ad-free')) {
        try {
            // Force a refresh on all ad units
            const adUnits = document.querySelectorAll('.adsbygoogle');
            adUnits.forEach(unit => {
                // Clear existing ad content
                unit.innerHTML = '';
                // Re-initialize the ad
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
            console.log('Ads refreshed successfully');
        } catch (error) {
            console.log('Ad refresh failed:', error);
        }
    }
}

// Hide ad containers if ads fail to load
function hideEmptyAdContainers() {
    // Check after a short delay to make sure ads had time to load
    setTimeout(() => {
        const adContainers = document.querySelectorAll('.ad-container');
        adContainers.forEach(container => {
            // If the container is empty or has only hidden/empty elements
            if (!container.innerHTML.trim() || 
                !container.querySelector('.adsbygoogle iframe')) {
                container.style.display = 'none';
            }
        });
    }, 2000); // 2 second delay
}

// Initialize ads when the page is fully loaded
window.addEventListener('load', initializeAds);
