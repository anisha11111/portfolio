'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// Animation timing functions and variables
const ANIMATION_TIMING = {
  DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  BOUNCE: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  SMOOTH: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
};

const ANIMATION_DURATION = {
  SHORT: 300,
  MEDIUM: 500,
  LONG: 800
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initHeaderAnimation();
  initSectionAnimations();
  initHeroAnimations();
  initPortfolioHoverEffects();
  initSkillsAnimation();
  initContactFormAnimation();
  initScrollTopButton();
});

// Header and navigation animations
function initHeaderAnimation() {
  const header = document.querySelector('.header');
  const navItems = document.querySelectorAll('.navbar-link');
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Navbar link hover effect
  navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transition = `color ${ANIMATION_DURATION.SHORT}ms ${ANIMATION_TIMING.DEFAULT}`;
    });
  });
  
  // Mobile menu toggle animation
  const menuToggle = document.querySelector('[data-nav-toggle-btn]');
  const navbar = document.querySelector('.navbar');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      
      // Add slide-in animation for mobile menu
      const navbarList = document.querySelector('.navbar-list');
      if (navbar.classList.contains('active')) {
        navbarList.style.animation = `slideIn ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.DEFAULT} forwards`;
      } else {
        navbarList.style.animation = `slideOut ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.DEFAULT} forwards`;
      }
    });
  }
}

// Section reveal animations on scroll
function initSectionAnimations() {
  const sections = document.querySelectorAll('.section');
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  // Observe all sections
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Hero section specific animations
function initHeroAnimations() {
  const heroElems = document.querySelectorAll('.elem');
  const heroTitle = document.querySelector('.hero-title');
  const heroText = document.querySelector('.hero-text');
  const heroBtns = document.querySelector('.btn-group');
  const rotateImg = document.querySelector('.rotate-img');
  
  // Stagger hero elements entrance
  if (heroElems.length) {
    heroElems.forEach((elem, index) => {
      elem.style.animation = `fadeInUp ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.BOUNCE} ${index * 150}ms forwards`;
      elem.style.opacity = '0';
    });
  }
  
  // Hero content animations
  if (heroTitle) {
    heroTitle.style.animation = `fadeInLeft ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT} forwards`;
    heroTitle.style.opacity = '0';
  }
  
  if (heroText) {
    heroText.style.animation = `fadeInLeft ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT} 200ms forwards`;
    heroText.style.opacity = '0';
  }
  
  if (heroBtns) {
    heroBtns.style.animation = `fadeInLeft ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT} 400ms forwards`;
    heroBtns.style.opacity = '0';
  }
  
  // Rotate image animation
  if (rotateImg) {
    rotateImg.style.animation = 'rotate 20s linear infinite';
  }
}

// Portfolio hover effects
function initPortfolioHoverEffects() {
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.card-content').style.transition = `transform ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.SMOOTH}, opacity ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.SMOOTH}`;
      this.querySelector('.card-content').style.transform = 'translateY(0)';
      this.querySelector('.card-content').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.card-content').style.transform = 'translateY(20px)';
      this.querySelector('.card-content').style.opacity = '0';
    });
  });
}

// Skills progress bar animation
function initSkillsAnimation() {
  const skillsSection = document.querySelector('#skills');
  const progressBars = document.querySelectorAll('.skills-progress');
  
  if (!skillsSection || !progressBars.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
          bar.style.transition = `width ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT}`;
          bar.style.width = width;
        }, index * 100);
      });
      
      observer.unobserve(skillsSection);
    }
  }, { threshold: 0.5 });
  
  observer.observe(skillsSection);
}

// Contact form animations
function initContactFormAnimation() {
  const formInputs = document.querySelectorAll('.contact-input');
  const submitBtn = document.querySelector('.btn-submit');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transition = `border-color ${ANIMATION_DURATION.SHORT}ms ${ANIMATION_TIMING.DEFAULT}, box-shadow ${ANIMATION_DURATION.SHORT}ms ${ANIMATION_TIMING.DEFAULT}`;
      this.style.boxShadow = '0 0 0 4px rgba(79, 70, 229, 0.1)';
    });
    
    input.addEventListener('blur', function() {
      this.style.boxShadow = 'none';
    });
  });
  
  if (submitBtn) {
    submitBtn.addEventListener('mouseenter', function() {
      this.style.transition = `transform ${ANIMATION_DURATION.SHORT}ms ${ANIMATION_TIMING.BOUNCE}`;
      this.style.transform = 'translateY(-3px)';
    });
    
    submitBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  }
}

// Scroll-to-top button animations
function initScrollTopButton() {
  const scrollTopBtn = document.querySelector('[data-back-to-top]');
  
  if (!scrollTopBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Define required keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  /* Add needed CSS for animated components */
  .header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    transition: all ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.DEFAULT};
  }
  
  .section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT},
                transform ${ANIMATION_DURATION.LONG}ms ${ANIMATION_TIMING.DEFAULT};
  }
  
  .section.reveal {
    opacity: 1;
    transform: translateY(0);
  }
  
  .portfolio-card .card-content {
    transform: translateY(20px);
    opacity: 0;
  }
  
  [data-back-to-top] {
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION.MEDIUM}ms ${ANIMATION_TIMING.DEFAULT};
    pointer-events: none;
  }
  
  [data-back-to-top].visible {
    opacity: 1;
    pointer-events: all;
  }
`;

// Add the style to the document
document.head.appendChild(styleSheet);
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Portfolio filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-list li');
  
  // Initial state: show all items
  let visibleItems = portfolioItems.length;
  const initialVisibleCount = 6; // Show first 6 items initially
  const loadIncrement = 3; // Load 3 more items at a time
  
  // Hide items beyond initial count
  portfolioItems.forEach((item, index) => {
    if (index >= initialVisibleCount) {
      item.style.display = 'none';
    }
  });
  
  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // Filter the portfolio items
      portfolioItems.forEach((item, index) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          // Check if it should be visible based on load more logic
          if (index < initialVisibleCount) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        } else {
          item.style.display = 'none';
        }
      });
      
      // Reset visible items count for current filter
      visibleItems = Math.min(initialVisibleCount, 
        filter === 'all' ? 
        portfolioItems.length : 
        document.querySelectorAll(`.portfolio-list li[data-category="${filter}"]`).length
      );
      
      // Show/hide load more button
      updateLoadMoreButton();
    });
  });
  
  // Load more functionality
  const loadMoreButton = document.querySelector('.btn-load-more');
  
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
      let shown = 0;
      let count = 0;
      
      portfolioItems.forEach(item => {
        if ((activeFilter === 'all' || item.getAttribute('data-category') === activeFilter) && 
            item.style.display === 'none') {
          if (count < loadIncrement) {
            item.style.display = 'block';
            count++;
            visibleItems++;
          }
        }
        if (item.style.display !== 'none' && 
            (activeFilter === 'all' || item.getAttribute('data-category') === activeFilter)) {
          shown++;
        }
      });
      
      // Update load more button visibility
      updateLoadMoreButton();
    });
  }
  
  function updateLoadMoreButton() {
    if (!loadMoreButton) return;
    
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const totalItems = activeFilter === 'all' ? 
      portfolioItems.length : 
      document.querySelectorAll(`.portfolio-list li[data-category="${activeFilter}"]`).length;
    
    if (visibleItems >= totalItems) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'inline-block';
    }
  }
  
  // Initialize load more button state
  updateLoadMoreButton();
  
  // Mobile menu toggle functionality improvement
  const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-link');
  
  if (navToggleBtn && navbar) {
    navToggleBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navToggleBtn.classList.toggle('active');
      document.body.classList.toggle('nav-active');
    });
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        navToggleBtn.classList.remove('active');
        document.body.classList.remove('nav-active');
      });
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to top button functionality
  const backToTopBtn = document.querySelector('[data-back-to-top]');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
  }
});