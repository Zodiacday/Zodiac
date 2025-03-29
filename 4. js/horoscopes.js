/**
 * Zodiac Sign Data
 * Contains information about each zodiac sign including:
 * - name: The name of the zodiac sign
 * - symbol: The SVG path for the zodiac symbol
 * - dateRange: The date range for the zodiac sign
 * - element: The element associated with the sign
 * - ruling: The ruling planet or celestial body
 * - traits: Key personality traits for the sign
 */
const zodiacSigns = [
    {
        name: "Aries",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 C65,10 65,45 80,45 M50,10 C35,10 35,45 20,45 M50,10 L50,90" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "March 21 - April 19",
        element: "Fire",
        ruling: "Mars",
        traits: ["Bold", "Independent", "Passionate", "Determined"]
    },
    {
        name: "Taurus",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="60" r="30" stroke="currentColor" stroke-width="6" fill="none"/>
            <path d="M20,30 C20,15 35,10 50,10 C65,10 80,15 80,30" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "April 20 - May 20",
        element: "Earth",
        ruling: "Venus",
        traits: ["Reliable", "Patient", "Practical", "Devoted"]
    },
    {
        name: "Gemini",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,10 L30,90 M70,10 L70,90 M30,30 C30,30 50,30 70,30 M30,70 C30,70 50,70 70,70" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "May 21 - June 20",
        element: "Air",
        ruling: "Mercury",
        traits: ["Adaptable", "Curious", "Expressive", "Witty"]
    },
    {
        name: "Cancer",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,40 C20,25 35,25 45,40 C55,25 70,25 70,40 M20,40 C20,55 35,55 45,40 C55,55 70,55 70,40 M20,40 L20,80 M70,40 L70,80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "June 21 - July 22",
        element: "Water",
        ruling: "Moon",
        traits: ["Intuitive", "Emotional", "Nurturing", "Protective"]
    },
    {
        name: "Leo",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="6" fill="none"/>
            <path d="M75,50 C75,50 85,30 75,15 M75,50 C75,50 85,70 75,85" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "July 23 - August 22",
        element: "Fire",
        ruling: "Sun",
        traits: ["Creative", "Generous", "Charismatic", "Loyal"]
    },
    {
        name: "Virgo",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M40,20 L40,80 M60,20 C60,20 40,30 40,45 C40,60 60,70 60,80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "August 23 - September 22",
        element: "Earth",
        ruling: "Mercury",
        traits: ["Analytical", "Practical", "Diligent", "Modest"]
    },
    {
        name: "Libra",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,70 L80,70 M50,30 C35,30 25,45 25,60 M50,30 C65,30 75,45 75,60" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "September 23 - October 22",
        element: "Air",
        ruling: "Venus",
        traits: ["Diplomatic", "Fair", "Social", "Cooperative"]
    },
    {
        name: "Scorpio",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,50 C40,30 60,30 70,50 M30,50 C40,70 60,70 70,50 M70,50 L85,35 M85,35 L75,25 M85,35 L95,45" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "October 23 - November 21",
        element: "Water",
        ruling: "Pluto, Mars",
        traits: ["Passionate", "Determined", "Perceptive", "Magnetic"]
    },
    {
        name: "Sagittarius",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,70 L70,30 M70,30 L55,30 M70,30 L70,45 M60,70 L40,40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "November 22 - December 21",
        element: "Fire",
        ruling: "Jupiter",
        traits: ["Adventurous", "Optimistic", "Enthusiastic", "Open-minded"]
    },
    {
        name: "Capricorn",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,30 L30,70 C30,85 45,85 60,70 L60,30 M60,70 C60,70 70,85 80,70 L80,40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "December 22 - January 19",
        element: "Earth",
        ruling: "Saturn",
        traits: ["Ambitious", "Disciplined", "Practical", "Patient"]
    },
    {
        name: "Aquarius",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,40 C30,40 50,70 70,40 M30,60 C30,60 50,90 70,60" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "January 20 - February 18",
        element: "Air",
        ruling: "Uranus, Saturn",
        traits: ["Progressive", "Original", "Independent", "Humanitarian"]
    },
    {
        name: "Pisces",
        symbol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,40 C40,25 60,25 70,40 C80,55 60,75 40,75 C20,75 0,55 10,40 C20,25 40,25 50,40 C60,55 40,75 20,75 C0,75 -20,55 -10,40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        dateRange: "February 19 - March 20",
        element: "Water",
        ruling: "Neptune, Jupiter",
        traits: ["Compassionate", "Intuitive", "Creative", "Gentle"]
    }
];

/**
 * Daily Horoscope Generator
 * Returns a horoscope based on the zodiac sign
 * @param {string} sign - The zodiac sign to get a horoscope for
 * @returns {string} - A horoscope for the given sign
 */
function getDailyHoroscope(sign) {
    // Standard horoscope templates that can be adapted for any sign
    const templates = [
        "Today brings a powerful energy for {sign}. Trust your instincts on important decisions, and don't be afraid to step outside your comfort zone. Your {element} element is guiding you toward meaningful connections.",
        
        "The celestial alignment favors your {traits} nature today. Take time to reflect on recent challenges and recognize how they've strengthened you. {ruling} is highlighting opportunities for growth in unexpected places.",
        
        "Your natural {traits} qualities will serve you well today. A situation may arise that requires your unique perspective. Remember that balance is key—don't neglect self-care while pursuing your goals.",
        
        "Today's cosmic energy amplifies your {element} power. You may feel drawn to explore new ideas or reconnect with old passions. Listen to your intuition, as it's especially sharp today.",
        
        "The stars suggest focusing on relationships today. Your {traits} nature helps you understand others' perspectives. {ruling} brings harmony to both personal and professional connections.",
        
        "An opportunity for creative expression presents itself today. Your {element} energy is flowing freely, making this an excellent time for artistic pursuits or solving problems in innovative ways.",
        
        "The current planetary position encourages reflection for {sign}. Consider how your recent actions align with your long-term vision. Your {traits} qualities help you stay true to your authentic path."
    ];
    
    // Get the zodiac sign details
    const signData = zodiacSigns.find(zodiac => zodiac.name === sign);
    
    if (!signData) return "Horoscope unavailable.";
    
    // Randomly select a template
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    // Randomly select one or two traits to highlight
    const selectedTraits = signData.traits
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .join(" and ");
    
    // Replace placeholders with actual data
    return template
        .replace(/{sign}/g, signData.name)
        .replace(/{element}/g, signData.element)
        .replace(/{ruling}/g, signData.ruling)
        .replace(/{traits}/g, selectedTraits);
}

/**
 * Extended Horoscope Generator
 * Returns a more detailed horoscope with multiple sections
 * @param {string} sign - The zodiac sign to get a horoscope for
 * @returns {object} - An object containing various horoscope details
 */
function getExtendedHoroscope(sign) {
    const signData = zodiacSigns.find(zodiac => zodiac.name === sign);
    
    if (!signData) return null;
    
    const generalHoroscope = getDailyHoroscope(sign);
    
    // Generate love horoscope
    const loveTemplates = [
        `Your ${signData.element} energy creates a magnetic aura in your relationships today. Be open to meaningful conversations.`,
        `${signData.ruling} influences your romantic sphere today, bringing clarity to relationship matters.`,
        `Your natural ${signData.traits[0]} quality strengthens bonds with those closest to you. Express your feelings honestly.`
    ];
    
    // Generate career horoscope
    const careerTemplates = [
        `Professional opportunities align with your ${signData.traits[1]} nature today. Trust your instincts in workplace decisions.`,
        `Your ${signData.element} element guides your career path today. Focus on long-term goals rather than immediate gains.`,
        `${signData.ruling} empowers your professional endeavors. Your unique approach will be recognized by those who matter.`
    ];
    
    // Generate wellness horoscope
    const wellnessTemplates = [
        `Balance your ${signData.element} energy today with activities that ground and center you.`,
        `Your body responds well to ${signData.element}-based wellness practices today. Listen to what it needs.`,
        `Channeling your ${signData.traits[2]} quality into self-care routines brings harmony to your mind and body.`
    ];
    
    return {
        general: generalHoroscope,
        love: loveTemplates[Math.floor(Math.random() * loveTemplates.length)],
        career: careerTemplates[Math.floor(Math.random() * careerTemplates.length)],
        wellness: wellnessTemplates[Math.floor(Math.random() * wellnessTemplates.length)],
        luckyNumber: Math.floor(Math.random() * 100),
        compatibleSign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name
    };
}
