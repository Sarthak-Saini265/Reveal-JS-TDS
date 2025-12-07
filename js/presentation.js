/**
 * Custom JavaScript for Earnings Presentation
 * Handles interactive elements and animations
 */

// Currency formatter
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

// Number formatter with abbreviations
function formatNumber(value) {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(1) + 'B';
    } else if (value >= 1e6) {
        return (value / 1e6).toFixed(1) + 'M';
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(1) + 'K';
    }
    return value.toString();
}

// Percentage formatter
function formatPercentage(value) {
    return (value * 100).toFixed(2) + '%';
}

// Add custom event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('Earnings Presentation Loaded');
    
    // Add keyboard shortcuts info to console
    console.log('Keyboard Shortcuts:');
    console.log('- F: Fullscreen');
    console.log('- S: Speaker Notes');
    console.log('- O: Overview Mode');
    console.log('- B: Pause (Black Screen)');
    console.log('- ?: Show Help');
});

// Track slide changes for analytics
Reveal.on('slidechanged', event => {
    const slideNumber = event.indexh + 1;
    const totalSlides = Reveal.getTotalSlides();
    
    console.log(`Viewing slide ${slideNumber} of ${totalSlides}`);
    
    // Add custom behavior for specific slides
    if (event.currentSlide.querySelector('.metrics-container')) {
        console.log('Financial metrics slide displayed');
    }
    
    if (event.currentSlide.querySelector('code')) {
        console.log('Code example slide displayed');
    }
});

// Add fragment animations tracking
Reveal.on('fragmentshown', event => {
    console.log('Fragment shown:', event.fragment.textContent.substring(0, 50));
});

// Add print/PDF export helper
Reveal.on('pdf-ready', () => {
    console.log('PDF export ready');
});

// Simulate real-time data updates (for demo purposes)
function simulateDataUpdate() {
    const metrics = document.querySelectorAll('.metric h3');
    
    metrics.forEach(metric => {
        const currentValue = metric.textContent;
        
        // Add a subtle pulse effect
        metric.style.transition = 'transform 0.3s ease';
        metric.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            metric.style.transform = 'scale(1)';
        }, 300);
    });
}

// Interactive chart data (placeholder for D3.js or Chart.js integration)
const earningsData = {
    quarters: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
    revenue: [10.2, 11.5, 12.1, 12.8],
    netIncome: [1.8, 2.1, 2.2, 2.4],
    segments: {
        retail: [3.8, 4.0, 4.2, 4.5],
        corporate: [3.1, 3.3, 3.6, 3.8],
        wealth: [2.0, 2.3, 2.6, 2.9],
        digital: [1.3, 1.9, 1.7, 1.6]
    }
};

// Calculate year-over-year growth
function calculateYoYGrowth(current, previous) {
    return ((current - previous) / previous) * 100;
}

// Calculate compound annual growth rate
function calculateCAGR(startValue, endValue, years) {
    return (Math.pow(endValue / startValue, 1 / years) - 1) * 100;
}

// Financial calculations
const financialCalculations = {
    // Sharpe Ratio calculation
    sharpeRatio: function(portfolioReturn, riskFreeRate, standardDeviation) {
        return (portfolioReturn - riskFreeRate) / standardDeviation;
    },
    
    // Return on Equity
    roe: function(netIncome, shareholderEquity) {
        return (netIncome / shareholderEquity) * 100;
    },
    
    // Earnings Per Share
    eps: function(netIncome, sharesOutstanding) {
        return netIncome / sharesOutstanding;
    },
    
    // Price to Earnings Ratio
    peRatio: function(stockPrice, eps) {
        return stockPrice / eps;
    },
    
    // Tier 1 Capital Ratio
    tier1Ratio: function(tier1Capital, riskWeightedAssets) {
        return (tier1Capital / riskWeightedAssets) * 100;
    }
};

// Example calculations using our data
console.log('Financial Metrics:');
console.log('Q4 Revenue:', formatCurrency(earningsData.revenue[3] * 1e9));
console.log('Q4 Net Income:', formatCurrency(earningsData.netIncome[3] * 1e9));
console.log('YoY Growth:', 
    calculateYoYGrowth(
        earningsData.revenue[3], 
        earningsData.revenue[3] * 0.847 // Approximating previous year
    ).toFixed(2) + '%'
);

// Add smooth scrolling for navigation
Reveal.configure({
    // Enable smooth transitions
    transition: 'slide',
    transitionSpeed: 'default',
    
    // Auto-slide configuration (disabled by default)
    autoSlide: 0,
    autoSlideStoppable: true,
    
    // Mouse wheel navigation
    mouseWheel: false,
    
    // Touch navigation
    touch: true,
    
    // Loop presentation
    loop: false,
    
    // Enable slide overview
    overview: true
});

// Add presentation timer
let presentationStartTime = null;
let presentationTimer = null;

function startPresentationTimer() {
    presentationStartTime = Date.now();
    
    presentationTimer = setInterval(() => {
        const elapsed = Date.now() - presentationStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        
        console.log(`Presentation time: ${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 60000); // Log every minute
}

// Start timer when presentation begins
Reveal.on('ready', () => {
    startPresentationTimer();
    console.log('Presentation started - Timer active');
});

// Clean up on presentation end
window.addEventListener('beforeunload', () => {
    if (presentationTimer) {
        clearInterval(presentationTimer);
    }
});

// Utility function to highlight code lines dynamically
function highlightCodeLines(slideIndex, lines) {
    const slide = Reveal.getSlide(slideIndex);
    const codeBlock = slide.querySelector('code');
    
    if (codeBlock) {
        codeBlock.setAttribute('data-line-numbers', lines);
    }
}

// Export functions for external use
window.presentationUtils = {
    formatCurrency,
    formatNumber,
    formatPercentage,
    calculateYoYGrowth,
    calculateCAGR,
    financialCalculations,
    earningsData
};

console.log('Presentation utilities loaded and ready');
