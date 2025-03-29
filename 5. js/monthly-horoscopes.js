/**
 * Monthly Horoscope Data
 * Contains pre-written horoscopes for each day of the month for each zodiac sign
 * Update this file monthly with new content
 */

const monthlyHoroscopes = {
    // Format: day-of-month (1-31)
    // For each day, include horoscopes for all 12 signs
    // The horoscope object for each sign includes general, love, career, and wellness sections
    
    "1": {
        "aries": {
            general: "Today marks a new beginning for you, Aries. Your pioneering spirit is at its peak.",
            love: "In matters of the heart, honesty brings you closer to your partner today.",
            career: "A leadership opportunity may present itself at work. Be ready to step up.",
            wellness: "Focus on physical activity that boosts your energy levels.",
            luckyNumber: "7",
            compatibleSign: "Leo"
        },
        "taurus": {
            general: "Stability and comfort are your focus today, Taurus. Build on your solid foundation.",
            love: "Express your affection through practical gestures of care and commitment.",
            career: "Your persistence at work is noticed by those who matter. Keep up the steady pace.",
            wellness: "Connect with nature today to ground your energy and refresh your spirit.",
            luckyNumber: "6",
            compatibleSign: "Virgo"
        },
        "gemini": {
            general: "Your mind is especially sharp today, Gemini. Use this mental clarity to solve problems.",
            love: "Communication is your pathway to deeper connection in your relationships.",
            career: "Share your innovative ideas confidently in professional settings.",
            wellness: "Give your mind some rest through meditation or leisurely reading.",
            luckyNumber: "3",
            compatibleSign: "Libra"
        },
        "cancer": {
            general: "Your intuition is heightened today, Cancer. Trust your inner voice.",
            love: "Emotional honesty creates a safe space for deeper intimacy with loved ones.",
            career: "Your nurturing approach helps resolve workplace tensions effectively.",
            wellness: "Emotional self-care should be your priority today.",
            luckyNumber: "2",
            compatibleSign: "Scorpio"
        },
        "leo": {
            general: "Your natural charisma shines brightly today, Leo. Use it to inspire others.",
            love: "Romance flourishes when you show your authentic self to your partner.",
            career: "Your creative contributions gain recognition from colleagues and superiors.",
            wellness: "Activities that boost your confidence will enhance your overall wellbeing.",
            luckyNumber: "1",
            compatibleSign: "Aries"
        },
        "virgo": {
            general: "Details matter today, Virgo. Your analytical skills help you excel in all areas.",
            love: "Small, thoughtful gestures strengthen your romantic connections.",
            career: "Your methodical approach solves a complex problem at work.",
            wellness: "A well-organized routine brings balance to your mental and physical health.",
            luckyNumber: "5",
            compatibleSign: "Taurus"
        },
        "libra": {
            general: "Harmony and balance are within reach today, Libra. Seek fair compromises.",
            love: "Partnership thrives when you prioritize equality and mutual respect.",
            career: "Your diplomatic skills help navigate workplace dynamics successfully.",
            wellness: "Aesthetic pleasures like art or music bring you peace today.",
            luckyNumber: "9",
            compatibleSign: "Gemini"
        },
        "scorpio": {
            general: "Your intensity serves you well today, Scorpio. Dive deep into what matters most.",
            love: "Emotional depth creates powerful bonds with those you trust.",
            career: "Your determination helps you overcome obstacles in your professional path.",
            wellness: "Transformative practices like yoga or journaling benefit your spiritual health.",
            luckyNumber: "8",
            compatibleSign: "Cancer"
        },
        "sagittarius": {
            general: "Adventure calls to you today, Sagittarius. Expand your horizons.",
            love: "Shared experiences create meaningful connections with romantic partners.",
            career: "Your optimistic outlook inspires colleagues and opens new doors.",
            wellness: "Outdoor activities align with your free-spirited nature.",
            luckyNumber: "4",
            compatibleSign: "Aquarius"
        },
        "capricorn": {
            general: "Your disciplined approach brings success today, Capricorn. Stay the course.",
            love: "Commitment and loyalty strengthen your romantic relationships.",
            career: "Long-term planning pays off with professional advancement opportunities.",
            wellness: "Structure and routine contribute to your overall wellbeing.",
            luckyNumber: "10",
            compatibleSign: "Virgo"
        },
        "aquarius": {
            general: "Innovative thinking sets you apart today, Aquarius. Embrace your uniqueness.",
            love: "Intellectual connection is the foundation of your most fulfilling relationships.",
            career: "Your forward-thinking ideas gain traction in collaborative settings.",
            wellness: "Mental stimulation through learning or social causes energizes you.",
            luckyNumber: "11",
            compatibleSign: "Sagittarius"
        },
        "pisces": {
            general: "Your compassionate nature touches lives today, Pisces. Trust your intuition.",
            love: "Emotional understanding deepens your romantic connections.",
            career: "Creative approaches to workplace challenges showcase your unique talents.",
            wellness: "Spiritual practices or artistic expression nurture your sensitive soul.",
            luckyNumber: "12",
            compatibleSign: "Cancer"
        }
    },
    
    "2": {
        "aries": {
            general: "Patience serves you well today, Aries. Take time to consider your next move.",
            love: "Balance your assertiveness with listening in your relationships today.",
            career: "Focus on building alliances at work rather than going solo.",
            wellness: "Try gentler exercises like stretching or walking to balance your fiery energy.",
            luckyNumber: "9",
            compatibleSign: "Libra"
        },
        // Add horoscopes for the other 11 signs for day 2
        "taurus": {
            general: "Financial matters come into focus today, Taurus. Review your resources wisely.",
            love: "Security in relationships matters more than grand gestures today.",
            career: "Your practical skills solve an important problem at work.",
            wellness: "Nourish your body with healthy comfort foods that satisfy and energize.",
            luckyNumber: "4",
            compatibleSign: "Capricorn"
        },
        // Continue with all signs for day 2
    },
    
    // Continue pattern for days 3-31
    "3": {
        // Horoscopes for all 12 signs
    },
    
    // Add placeholder for all days
    // Each month, update this file with fresh content
};

/**
 * Get today's horoscope for a specific sign
 * @param {string} sign - The zodiac sign to get a horoscope for
 * @returns {object} - Today's horoscope object containing all sections
 */
function getTodaysHoroscope(sign) {
    // Get current day of month (1-31)
    const today = new Date();
    const dayOfMonth = today.getDate().toString();
    
    // Default to day 1 if current day isn't available yet
    // (happens at the beginning of a month before content is updated)
    const availableDays = Object.keys(monthlyHoroscopes);
    const targetDay = availableDays.includes(dayOfMonth) ? dayOfMonth : "1";
    
    // Get horoscope for the sign on the current day
    const signLower = sign.toLowerCase();
    
    // Return horoscope if available, otherwise return a default message
    if (monthlyHoroscopes[targetDay] && monthlyHoroscopes[targetDay][signLower]) {
        return monthlyHoroscopes[targetDay][signLower];
    } else {
        // Fallback for missing data
        return {
            general: "The cosmic energies are mysterious today. Check back tomorrow for your updated horoscope.",
            love: "Reflect on what matters most in your relationships.",
            career: "Consider your professional goals and realign if necessary.",
            wellness: "Take time for self-care and renewal.",
            luckyNumber: Math.floor(Math.random() * 12) + 1,
            compatibleSign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name
        };
    }
}
