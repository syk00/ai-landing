document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // For staggered animations in grid
                if(entry.target.classList.contains('stagger-item')) {
                    const siblings = entry.target.parentElement.querySelectorAll('.stagger-item');
                    siblings.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('in-view');
                        }, index * 150);
                    });
                }
                
                if(entry.target.classList.contains('stagger-item-2')) {
                    const siblings = entry.target.parentElement.querySelectorAll('.stagger-item-2');
                    siblings.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('in-view');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Initial setup for staggered items
    document.querySelectorAll('.stagger-item, .stagger-item-2').forEach(el => {
        el.classList.add('appear');
    });

    document.querySelectorAll('.appear').forEach(el => {
        observer.observe(el);
    });

    // 2. Floating CTA visibility toggle on scroll
    const floatingCta = document.querySelector('.floating-cta');
    const heroSection = document.querySelector('#hero');
    
    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        // Show floating CTA after scrolling past the hero section
        if (heroBottom < 0) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    });
});
