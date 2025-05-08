// Language translations
const translations = {
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.team": "Team",
        "nav.services": "Leistungen",
        "nav.projects": "Projekte",
        "nav.roadmap": "Roadmap",
        "nav.news": "News",
        "nav.contact": "Kontakt",
        
        // Hero section
        "hero.title": "Innovative Maschinenbaulösungen",
        "hero.description": "Wir entwickeln maßgeschneiderte technische Lösungen für Industrie und Produktion. Unser erfahrenes Team steht für Präzision, Innovation und Zuverlässigkeit.",
        "hero.title2": "Technische Exzellenz",
        "hero.description2": "Hochpräzise Engineering-Lösungen für anspruchsvolle industrielle Anwendungen.",
        "hero.title3": "Zukunftsorientierte Technologien",
        "hero.description3": "Innovationen, die Ihre Produktion auf das nächste Level bringen.",
        
        // Services
        "services.title": "Unsere Leistungen",
        "services.tab1": "Konstruktion",
        "services.tab1.short": "Präzise Konstruktionslösungen nach DIN- und ISO-Normen",
        "services.tab2": "Simulation",
        "services.tab2.short": "FEM- und CFD-Simulationen nach VDI 2206",
        "services.tab3": "Prototyping",
        "services.tab3.short": "Moderne Fertigungsverfahren für Prototypen",
        "services.tab4": "Beratung",
        "services.tab4.short": "Fundiertes Fachwissen für Ihre Projekte",
        "services.tab5": "IWE",
        "services.tab5.short": "Schweißtechnik und Fügeverfahren",
        
        "services.content1.title": "Konstruktion und Entwicklung",
        "services.content1.description": "Unsere Ingenieure entwickeln präzise Konstruktionslösungen nach DIN- und ISO-Normen mit modernsten CAD-Systemen. Von der ersten Skizze bis zur fertigen technischen Zeichnung mit vollständiger Toleranzanalyse begleiten wir Ihr Projekt gemäß VDI 2221.",
        "services.content1.item1": "3D-CAD Konstruktion mit SolidWorks (nach VDI 2212), Inventor und CATIA V5",
        "services.content1.item2": "Bauteil- und Baugruppenkonstruktion mit FEM-gerechter Modellierung",
        "services.content1.item3": "Technische Dokumentation nach DIN 6789 und ISO 7200",
        "services.content1.item4": "Toleranzanalysen nach GPS (Geometrische Produktspezifikation)",
        "services.content1.item5": "Stücklistenmanagement mit ERP-Schnittstellen (SAP, ProAlpha)",
        "services.content1.item6": "Schweißkonstruktionen nach DIN EN 1090 und DIN EN 15085",
        
        "services.content2.title": "Simulation und Berechnung",
        "services.content2.description": "Mit FEM- und CFD-Simulationen nach VDI 2206 optimieren wir Ihre Konstruktionen virtuell. Wir führen statische und dynamische Analysen nach FKM-Richtlinie durch und validieren die Ergebnisse mit experimentellen Methoden (DIC, Dehnungsmessstreifen).",
        "services.content2.item1": "Statische und dynamische FEM-Analysen (ANSYS, Abaqus, Nastran)",
        "services.content2.item2": "Thermische Simulationen mit nichtlinearen Materialmodellen",
        "services.content2.item3": "Strömungssimulationen (CFD) für laminare und turbulente Strömungen",
        "services.content2.item4": "Festigkeits- und Lebensdauerberechnungen nach FKM-Richtlinie",
        "services.content2.item5": "Schwingungsanalysen mit Modal- und Spektralanalysen",
        "services.content2.item6": "Multiphysik-Simulationen (thermomechanisch, fluid-strukturgekoppelt)",
        
        "services.content3.title": "Prototyping und Testing",
        "services.content3.description": "Von 3D-Druck (Additive Fertigung nach VDI 3405) über CNC-gefertigte Funktionsmuster bis hin zu kleinen Serien realisieren wir Ihre Prototypen mit modernsten Fertigungsverfahren. Wir begleiten den gesamten Produktentstehungsprozess nach VDI 2221.",
        "services.content3.item1": "Rapid Prototyping (FDM, SLS, SLA nach ASTM F2792)",
        "services.content3.item2": "CNC-Prototypenfertigung (5-Achs-Simultanbearbeitung)",
        "services.content3.item3": "Funktionstests und Validierung nach VDI/VDE 2650",
        "services.content3.item4": "Mess- und Prüftechnik (3D-Scannen nach VDI/VDE 2630, CMM)",
        "services.content3.item5": "Kleinserienfertigung mit werkzeuglosen Umformverfahren",
        "services.content3.item6": "Materialprüfung nach DIN EN ISO 6892-1 und ASTM E8",
        
        "services.content4.title": "Technische Beratung",
        "services.content4.description": "Unsere Experten stehen Ihnen mit fundiertem Fachwissen zur Seite - von Materialauswahl nach Werkstoffdatenblättern über Fertigungsoptimierung nach Lean-Prinzipien bis hin zu Normen und Richtlinien (DIN, ISO, ASTM, ASME).",
        "services.content4.item1": "Fertigungsoptimierung mit Wertstromanalyse nach VDI 5200",
        "services.content4.item2": "Materialberatung mit Zugversuchen nach DIN EN ISO 6892-1",
        "services.content4.item3": "Normen und Richtlinien (DIN, ISO, ASTM, ASME, PED)",
        "services.content4.item4": "Qualitätssicherung mit SPC nach ISO 7870",
        "services.content4.item5": "Prozessoptimierung mit Six Sigma Methoden",
        "services.content4.item6": "Risikoanalysen nach FMEA (VDI 2246) und FMECA",
        
        "services.content5.title": "International Welding Engineer (IWE)",
        "services.content5.description": "Als zertifizierte International Welding Engineers nach IIW/EWF bieten wir umfassende Expertise in Schweißtechnik und Fügeverfahren gemäß DIN EN ISO 3834 und DIN EN 1090. Unsere Dienstleistungen umfassen die gesamte Prozesskette von der Konstruktion bis zur Qualitätssicherung.",
        "services.content5.item1": "Schweißtechnische Berechnungen nach DIN EN 1993-1-8 (Eurocode 3)",
        "services.content5.item2": "Schweißnahtvorbereitung und -auslegung nach DIN EN ISO 2553",
        "services.content5.item3": "WPS/PQR nach DIN EN ISO 15614 und DIN EN ISO 15609",
        "services.content5.item4": "Zerstörungsfreie Prüfungen (VT, PT, MT, UT, RT nach DIN EN ISO 17635)",
        "services.content5.item5": "Schweißaufsicht nach DIN EN ISO 14731",
        "services.content5.item6": "Zertifizierung nach DIN EN 1090 und DIN EN 15085",

        // Team
        "team.title": "Unser Expertenteam",
        "team.description": "Unser interdisziplinäres Team aus erfahrenen Ingenieuren, Konstrukteuren und Technikern steht für höchste Fachkompetenz und innovative Lösungen. Mit jahrzehntelanger Erfahrung in verschiedenen Branchen entwickeln wir maßgeschneiderte Lösungen für Ihre technischen Herausforderungen.",
        "team.stat1": "Jahre Erfahrung",
        "team.stat2": "Abgeschlossene Projekte",
        "team.stat3": "Branchen",
        "team.stat4": "Kundenzufriedenheit",
        
        // Projects
        "projects.title": "Aktuelle Projekte",
        "projects.project1.title": "Modulare Fertigungszelle",
        "projects.project1.description": "Entwicklung einer flexiblen Fertigungszelle für die automatisierte Bearbeitung von Kleinbauteilen mit integrierter Qualitätskontrolle.",
        "projects.project2.title": "Strömungsoptimierte Pumpengehäuse",
        "projects.project2.description": "CFD-optimierte Neukonstruktion von Hochleistungspumpengehäusen für die chemische Industrie mit 15% höherem Wirkungsgrad.",
        "projects.project3.title": "Leichtbau-Roboterarm",
        "projects.project3.description": "Entwicklung eines carbonfaserverstärkten Roboterarms für die Lebensmittelindustrie mit 30% Gewichtsreduktion bei gleicher Tragkraft.",
        
        // Roadmap
        "roadmap.title": "Technologie-Roadmap",
        "roadmap.item1.title": "Multiphysik-Simulationen",
        "roadmap.item1.text": "Einführung erweiterter Simulationsmöglichkeiten",
        "roadmap.item2.title": "KI-Optimierung",
        "roadmap.item2.text": "Integration von KI-basierten Algorithmen",
        "roadmap.item3.title": "Additive Fertigung",
        "roadmap.item3.text": "Erweiterung der Fertigungskapazitäten",
        "roadmap.item4.title": "Digitaler Zwilling",
        "roadmap.item4.text": "Für Produktionsanlagen",
        "roadmap.item5.title": "Nachhaltigkeit",
        "roadmap.item5.text": "Materialinnovationen und Kreislaufwirtschaft",
        
        // News
        "news.title": "Aktuelles",
        "news.news1.title": "BMEC erhält Innovationspreis für nachhaltige Konstruktionen",
        "news.news1.description": "Wir freuen uns, den \"Green Engineering Award 2023\" für unser Projekt zur Materialeinsparung in Serienbauteilen erhalten zu haben. Durch optimierte Konstruktionen konnten wir bei unseren Kunden jährlich über 50 Tonnen Stahl einsparen.",
        "news.news2.title": "Neue Softwarelizenzen für erweiterte Simulationsmöglichkeiten",
        "news.news2.description": "Um unseren Kunden noch bessere Dienstleistungen anbieten zu können, haben wir unsere Softwarepalette erweitert. Ab sofort stehen uns ANSYS Mechanical Premium und Siemens Simcenter für komplexe Multiphysik-Simulationen zur Verfügung.",
        
        // Contact
        "contact.title": "Kontaktieren Sie uns",
        "contact.form.name": "Name",
        "contact.form.email": "E-Mail",
        "contact.form.phone": "Telefon (optional)",
        "contact.form.subject": "Betreff",
        "contact.form.message": "Ihre Nachricht",
        "contact.form.privacy": "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
        "contact.form.button": "Nachricht senden",
        
        // Footer
        "footer.about": "Innovative Maschinenbaulösungen seit 2005. Unser spezialisiertes Team entwickelt maßgeschneiderte technische Lösungen für Industrie und Produktion.",
        "footer.contact": "Kontakt",
        "footer.address1": "Technologiepark 15",
        "footer.address2": "86159 Augsburg",
        "footer.phone": "Tel: +49 821 1234567",
        "footer.links": "Links",
        "footer.legal": "Rechtliches",
        "footer.legal1": "Impressum",
        "footer.legal2": "Datenschutz",
        "footer.legal3": "AGB",
        "footer.rights": "Alle Rechte vorbehalten.",
        
        // Ticker
        "ticker.item1": "🚀 Neues Projekt: Entwicklung einer automatisierten Montagelinie für die Automobilindustrie",
        "ticker.item2": "🏆 Auszeichnung: BMEC erhält Innovationspreis 2023",
        "ticker.item3": "📅 Veranstaltung: Besuchen Sie uns auf der Hannover Messe vom 17.-21. April",
        "ticker.item4": "🔧 Stellenangebot: Wir suchen Verstärkung im Bereich Konstruktion (m/w/d)"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.team": "Team",
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.roadmap": "Roadmap",
        "nav.news": "News",
        "nav.contact": "Contact",
        
        // Hero section
        "hero.title": "Innovative Engineering Solutions",
        "hero.description": "We develop customized technical solutions for industry and production. Our experienced team stands for precision, innovation and reliability.",
        "hero.title2": "Technical Excellence",
        "hero.description2": "High-precision engineering solutions for demanding industrial applications.",
        "hero.title3": "Future-Oriented Technologies",
        "hero.description3": "Innovations that take your production to the next level.",
        
        // Services
        "services.title": "Our Services",
        "services.tab1": "Construction",
        "services.tab1.short": "Precise construction solutions according to DIN and ISO standards",
        "services.tab2": "Simulation",
        "services.tab2.short": "FEM and CFD simulations according to VDI 2206",
        "services.tab3": "Prototyping",
        "services.tab3.short": "Modern manufacturing processes for prototypes",
        "services.tab4": "Consulting",
        "services.tab4.short": "Expert knowledge for your projects",
        "services.tab5": "IWE",
        "services.tab5.short": "Welding technology and joining processes",
        
        "services.content1.title": "Construction and Development",
        "services.content1.description": "Our engineers develop precise construction solutions with state-of-the-art CAD systems. From the first sketch to the finished technical drawing, we accompany your project.",
        "services.content1.item1": "3D CAD construction with SolidWorks and Inventor",
        "services.content1.item2": "Component and assembly construction",
        "services.content1.item3": "Technical documentation",
        "services.content1.item4": "Tolerance analyses",
        "services.content1.item5": "Parts list management",
        
        "services.content2.title": "Simulation and Calculation",
        "services.content2.description": "With FEM and CFD simulations we optimize your constructions even before the first prototype is built. This saves you time and development costs.",
        "services.content2.item1": "Static and dynamic FEM analyses",
        "services.content2.item2": "Thermal simulations",
        "services.content2.item3": "Flow simulations (CFD)",
        "services.content2.item4": "Strength and lifetime calculations",
        "services.content2.item5": "Vibration analyses",
        
        // Team
        "team.title": "Our Expert Team",
        "team.description": "Our interdisciplinary team of experienced engineers, designers and technicians stands for the highest expertise and innovative solutions. With decades of experience in various industries, we develop customized solutions for your technical challenges.",
        "team.stat1": "Years of Experience",
        "team.stat2": "Completed Projects",
        "team.stat3": "Industries",
        "team.stat4": "Customer Satisfaction",
        
        // Projects
        "projects.title": "Current Projects",
        "projects.project1.title": "Modular Manufacturing Cell",
        "projects.project1.description": "Development of a flexible manufacturing cell for the automated processing of small parts with integrated quality control.",
        "projects.project2.title": "Flow-Optimized Pump Housings",
        "projects.project2.description": "CFD-optimized redesign of high-performance pump housings for the chemical industry with 15% higher efficiency.",
        "projects.project3.title": "Lightweight Robot Arm",
        "projects.project3.description": "Development of a carbon fiber reinforced robot arm for the food industry with 30% weight reduction at the same load capacity.",
        
        // Roadmap
        "roadmap.title": "Technology Roadmap",
        "roadmap.item1.title": "Multiphysics Simulations",
        "roadmap.item1.text": "Introduction of extended simulation capabilities",
        "roadmap.item2.title": "AI Optimization",
        "roadmap.item2.text": "Integration of AI-based algorithms",
        "roadmap.item3.title": "Additive Manufacturing",
        "roadmap.item3.text": "Expansion of manufacturing capacities",
        "roadmap.item4.title": "Digital Twin",
        "roadmap.item4.text": "For production plants",
        "roadmap.item5.title": "Sustainability",
        "roadmap.item5.text": "Material innovations and circular economy",
        
        // News
        "news.title": "News",
        "news.news1.title": "BMEC receives innovation award for sustainable constructions",
        "news.news1.description": "We are pleased to have received the \"Green Engineering Award 2023\" for our project to save material in series parts. Through optimized constructions, we were able to save more than 50 tons of steel annually for our customers.",
        "news.news2.title": "New software licenses for extended simulation options",
        "news.news2.description": "In order to be able to offer our customers even better services, we have expanded our software portfolio. From now on, ANSYS Mechanical Premium and Siemens Simcenter are available to us for complex multiphysics simulations.",
        
        // Contact
        "contact.title": "Contact us",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone (optional)",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.privacy": "I have read and accept the privacy policy.",
        "contact.form.button": "Send message",
        
        // Footer
        "footer.about": "Innovative engineering solutions since 2005. Our specialized team develops customized technical solutions for industry and production.",
        "footer.contact": "Contact",
        "footer.address1": "Technology Park 15",
        "footer.address2": "86159 Augsburg",
        "footer.phone": "Phone: +49 821 1234567",
        "footer.links": "Links",
        "footer.legal": "Legal",
        "footer.legal1": "Imprint",
        "footer.legal2": "Privacy Policy",
        "footer.legal3": "Terms and Conditions",
        "footer.rights": "All rights reserved.",
        
        // Ticker
        "ticker.item1": "🚀 New project: Development of an automated assembly line for the automotive industry",
        "ticker.item2": "🏆 Award: BMEC receives innovation award 2023",
        "ticker.item3": "📅 Event: Visit us at Hannover Messe from April 17-21",
        "ticker.item4": "🔧 Job offer: We are looking for reinforcement in the construction department (m/f/d)"
    }
};

// Language switcher functionality
const languageBtns = document.querySelectorAll('.language-btn');
let currentLang = 'de';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    languageBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language switcher
languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Service Modal functionality
const serviceCards = document.querySelectorAll('.service-card');
const serviceModal = document.getElementById('service-modal');
const closeModal = document.querySelector('.close-modal');
const modalServiceImg = document.getElementById('modal-service-img');
const modalServiceTitle = document.getElementById('modal-service-title');
const modalServiceDescription = document.getElementById('modal-service-description');
const modalServiceItems = document.getElementById('modal-service-items');

// Service images mapping
const serviceImages = {
    'tab1': '/home/uni/Documents/Webpage-Ing/images/KONST.jpeg',
    'tab2': '/home/uni/Documents/Webpage-Ing/images/SIMULATION.jpeg',
    'tab3': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'tab4': '/home/uni/Documents/Webpage-Ing/images/BERATUNG.jpeg',
    'tab5': '/home/uni/Documents/Webpage-Ing/images/IWE.jpeg'
};

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const tabId = card.getAttribute('data-tab');
        
        // Set modal content
        modalServiceImg.src = serviceImages[tabId];
        modalServiceTitle.textContent = translations[currentLang][`services.content${tabId.slice(-1)}.title`];
        modalServiceDescription.textContent = translations[currentLang][`services.content${tabId.slice(-1)}.description`];
        
        // Clear previous items
        modalServiceItems.innerHTML = '';
        
        // Add new items
        for (let i = 1; i <= 6; i++) {
            const itemKey = `services.content${tabId.slice(-1)}.item${i}`;
            if (translations[currentLang][itemKey]) {
                const li = document.createElement('li');
                li.textContent = translations[currentLang][itemKey];
                modalServiceItems.appendChild(li);
            }
        }
        
        // Show modal
        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Mobile Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(currentLang === 'de' ? 'Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.' :
          'Thank you for your message! We will get back to you as soon as possible.');
    contactForm.reset();
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        }
    });
});

// News ticker interaction
const tickerContent = document.querySelector('.ticker-content');
if (tickerContent) {
    tickerContent.addEventListener('mouseenter', () => {
        tickerContent.style.animationPlayState = 'paused';
    });
    
    tickerContent.addEventListener('mouseleave', () => {
        tickerContent.style.animationPlayState = 'running';
    });
}

// Close responsive navigation when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
        nav.classList.remove('show');
    }
});

// Header scroll behavior
let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header-hidden');
        header.classList.remove('header-scrolled');
        return;
    }
    
    if (currentScroll > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
        // Scroll down
        header.classList.add('header-hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
        // Scroll up
        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});

// Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Initialize slider
    showSlide(0);
    startSlider();

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlider();
            startSlider();
        });
    });

    // Pause on hover
    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
});

// Initialize news ticker immediately
document.addEventListener('DOMContentLoaded', function() {
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        tickerContent.style.animation = 'ticker 30s linear infinite';
    }
});
