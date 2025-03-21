// Prevent zooming on the webpage
window.addEventListener("wheel", (e) => {
  const isPinching = e.ctrlKey
  if(isPinching) e.preventDefault()
}, { passive: false });

// Add hover effects to SVG elements
document.addEventListener('DOMContentLoaded', () => {
  // Function to animate NAD+ elements in the mechanism SVG
  const animateNADMechanism = () => {
    const nadplus = document.getElementById('nadplus');
    const nadh = document.getElementById('nadh');
    
    if (nadplus && nadh) {
      // Already animated via CSS keyframes
    }
  };
  
  // Add tooltip functionality for the age graph data points
  const setupGraphTooltips = () => {
    const dataPoints = document.querySelectorAll('.data-point');
    
    dataPoints.forEach(point => {
      point.addEventListener('mouseenter', () => {
        point.setAttribute('r', '8');
        point.setAttribute('stroke-width', '3');
      });
      
      point.addEventListener('mouseleave', () => {
        point.setAttribute('r', '6');
        point.setAttribute('stroke-width', '2');
      });
    });
  };
  
  // Health risks interaction
  const setupHealthRisks = () => {
    const organHighlights = document.querySelectorAll('.organ-highlight');
    
    organHighlights.forEach(organ => {
      organ.addEventListener('mouseenter', () => {
        organ.setAttribute('fill-opacity', '0.8');
      });
      
      organ.addEventListener('mouseleave', () => {
        organ.setAttribute('fill-opacity', '0.6');
      });
    });
  };
  
  // Initialize all interactions
  animateNADMechanism();
  setupGraphTooltips();
  setupHealthRisks();
  
  // Smooth section reveal on scroll
  const revealSections = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('opacity-100');
        section.classList.remove('opacity-0', 'translate-y-4');
      }
    });
  };
  
  // Initial check for elements in viewport
  revealSections();
  
  // Check on scroll
  window.addEventListener('scroll', () => {
    revealSections();
  });
});

// Optional: Add a subtle parallax effect to the background
window.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX / window.innerWidth) * 5;
  const moveY = (e.clientY / window.innerHeight) * 5;
  
  document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
});

// Adjust SVG size on window resize for responsive design
window.addEventListener('resize', () => {
  // This helps ensure SVGs remain properly sized on different screens
  const svgs = document.querySelectorAll('svg');
  svgs.forEach(svg => {
    const container = svg.parentElement;
    if (container) {
      // Maintain aspect ratio while fitting container
      const aspectRatio = svg.viewBox.baseVal.width / svg.viewBox.baseVal.height;
      const containerWidth = container.clientWidth;
      svg.style.width = `${containerWidth}px`;
      svg.style.height = `${containerWidth / aspectRatio}px`;
    }
  });
});
