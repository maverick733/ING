// Language translations
const translations = {
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.team": "Team",
        "nav.services": "Leistungen",
        "nav.projects": "Projekte",
        "nav.news": "News",
        "nav.booking": "Termin buchen",
        "nav.contact": "Kontakt",
        
        // Hero section
        "hero.title": "Innovative Maschinenbaulösungen",
        "hero.description": "Wir entwickeln maßgeschneiderte technische Lösungen für Industrie und Produktion. Unser erfahrenes Team steht für Präzision, Innovation und Zuverlässigkeit.",
        "hero.button": "Termin buchen",
        
        // Services
        "services.tab1": "Konstruktion",
        "services.tab2": "Simulation",
        "services.tab3": "Prototyping",
        "services.tab4": "Beratung",
        "services.tab5": "IWE",
        
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
        "team.title": "Unser Team",
        "team.position1": "Geschäftsführer / Senior Ingenieur",
        "team.bio1": "Maschinenbau (TU München), Promotion im Bereich Strömungsmechanik, 20+ Jahre Erfahrung in Konstruktion und Simulation.",
        "team.position2": "Projektleiterin",
        "team.bio2": "Dipl.-Ing. Maschinenbau (RWTH Aachen), Spezialistin für FEM-Simulationen und Leichtbaukonstruktionen, 10 Jahre Projekterfahrung.",
        "team.position3": "Konstrukteur",
        "team.bio3": "Staatl. gepr. Techniker Maschinenbau, CAD-Spezialist (SolidWorks, Inventor), Experte für technische Dokumentation und Fertigungsvorbereitung.",
        "team.position4": "Technische Zeichnerin",
        "team.bio4": "Ausbildung zur Technischen Zeichnerin, Spezialistin für 2D/3D-Konstruktion, Verantwortlich für Normteilemanagement und Stücklisten.",
        
        // Projects
        "projects.title": "Aktuelle Projekte",
        "projects.project1.title": "Modulare Fertigungszelle",
        "projects.project1.description": "Entwicklung einer flexiblen Fertigungszelle für die automatisierte Bearbeitung von Kleinbauteilen mit integrierter Qualitätskontrolle.",
        "projects.project2.title": "Strömungsoptimierte Pumpengehäuse",
        "projects.project2.description": "CFD-optimierte Neukonstruktion von Hochleistungspumpengehäusen für die chemische Industrie mit 15% höherem Wirkungsgrad.",
        "projects.project3.title": "Leichtbau-Roboterarm",
        "projects.project3.description": "Entwicklung eines carbonfaserverstärkten Roboterarms für die Lebensmittelindustrie mit 30% Gewichtsreduktion bei gleicher Tragkraft.",
        
        // News
        "news.title": "Aktuelles",
        "news.news1.title": "BMEC erhält Innovationspreis für nachhaltige Konstruktionen",
        "news.news1.description": "Wir freuen uns, den \"Green Engineering Award 2023\" für unser Projekt zur Materialeinsparung in Serienbauteilen erhalten zu haben. Durch optimierte Konstruktionen konnten wir bei unseren Kunden jährlich über 50 Tonnen Stahl einsparen.",
        "news.news2.title": "Neue Softwarelizenzen für erweiterte Simulationsmöglichkeiten",
        "news.news2.description": "Um unseren Kunden noch bessere Dienstleistungen anbieten zu können, haben wir unsere Softwarepalette erweitert. Ab sofort stehen uns ANSYS Mechanical Premium und Siemens Simcenter für komplexe Multiphysik-Simulationen zur Verfügung.",
        "news.news3.title": "Erfolgreiche Zertifizierung nach DIN EN ISO 9001:2015",
        "news.news3.description": "Nach intensiver Vorbereitung hat BMEC die Zertifizierung nach DIN EN ISO 9001:2015 erfolgreich bestanden. Dies unterstreicht unser Engagement für qualitativ hochwertige Ingenieursdienstleistungen und kontinuierliche Verbesserung.",
        
        // Contact
        "contact.title": "Kontaktieren Sie uns",
        "contact.form.name": "Name",
        "contact.form.email": "E-Mail",
        "contact.form.phone": "Telefon (optional)",
        "contact.form.subject": "Betreff",
        "contact.form.message": "Ihre Nachricht",
        "contact.form.privacy": "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
        "contact.form.button": "Nachricht senden",
        
        // Booking
        "booking.title": "Termin vereinbaren",
        "booking.subtitle": "Wählen Sie ein verfügbares Datum und eine Uhrzeit für Ihre Beratung",
        "booking.prev": "Vorheriger Monat",
        "booking.next": "Nächster Monat",
        "booking.day0": "Mo",
        "booking.day1": "Di",
        "booking.day2": "Mi",
        "booking.day3": "Do",
        "booking.day4": "Fr",
        "booking.day5": "Sa",
        "booking.day6": "So",
        "booking.time": "Verfügbare Uhrzeiten:",
        "booking.form.name": "Name",
        "booking.form.email": "E-Mail",
        "booking.form.phone": "Telefon",
        "booking.form.notes": "Anmerkungen",
        "booking.form.submit": "Termin buchen",
        "booking.success": "Vielen Dank! Ihr Termin wurde erfolgreich gebucht.",
        
        // Footer
        "footer.about": "Innovative Maschinenbaulösungen seit 2005. Unser kleines, spezialisiertes Team entwickelt maßgeschneiderte technische Lösungen für Industrie und Produktion.",
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
        "nav.news": "News",
        "nav.booking": "Book Appointment",
        "nav.contact": "Contact",
        
        // Hero section
        "hero.title": "Innovative Engineering Solutions",
        "hero.description": "We develop customized technical solutions for industry and production. Our experienced team stands for precision, innovation and reliability.",
        "hero.button": "Book Appointment",
        
        // Services
        "services.tab1": "Construction",
        "services.tab2": "Simulation",
        "services.tab3": "Prototyping",
        "services.tab4": "Consulting",
        "services.tab5": "IWE",
        
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
        
        "services.content3.title": "Prototyping and Testing",
        "services.content3.description": "From 3D printing to CNC-manufactured functional models to small series - we realize your prototypes with the most modern manufacturing processes.",
        "services.content3.item1": "Rapid prototyping (3D printing)",
        "services.content3.item2": "CNC prototype manufacturing",
        "services.content3.item3": "Function tests and validation",
        "services.content3.item4": "Measurement and testing technology",
        "services.content3.item5": "Small series production",
        
        "services.content4.title": "Technical Consulting",
        "services.content4.description": "Our experts are at your side with sound specialist knowledge - from material selection to production optimization to standards and guidelines.",
        "services.content4.item1": "Production optimization",
        "services.content4.item2": "Material consulting",
        "services.content4.item3": "Standards and guidelines",
        "services.content4.item4": "Quality assurance",
        "services.content4.item5": "Process optimization",
        
        // Team
        "team.title": "Our Team",
        "team.position1": "Managing Director / Senior Engineer",
        "team.bio1": "Mechanical engineering (TU Munich), PhD in fluid mechanics, 20+ years of experience in construction and simulation.",
        "team.position2": "Project Manager",
        "team.bio2": "Dipl.-Ing. Mechanical Engineering (RWTH Aachen), specialist for FEM simulations and lightweight constructions, 10 years of project experience.",
        "team.position3": "Design Engineer",
        "team.bio3": "State-certified mechanical engineering technician, CAD specialist (SolidWorks, Inventor), expert for technical documentation and production preparation.",
        "team.position4": "Technical Draftswoman",
        "team.bio4": "Training as a technical draftswoman, specialist for 2D/3D construction, responsible for standard parts management and parts lists.",
        
        // Projects
        "projects.title": "Current Projects",
        "projects.project1.title": "Modular Manufacturing Cell",
        "projects.project1.description": "Development of a flexible manufacturing cell for the automated processing of small parts with integrated quality control.",
        "projects.project2.title": "Flow-Optimized Pump Housings",
        "projects.project2.description": "CFD-optimized redesign of high-performance pump housings for the chemical industry with 15% higher efficiency.",
        "projects.project3.title": "Lightweight Robot Arm",
        "projects.project3.description": "Development of a carbon fiber reinforced robot arm for the food industry with 30% weight reduction at the same load capacity.",
        
        // News
        "news.title": "News",
        "news.news1.title": "BMEC receives innovation award for sustainable constructions",
        "news.news1.description": "We are pleased to have received the \"Green Engineering Award 2023\" for our project to save material in series parts. Through optimized constructions, we were able to save more than 50 tons of steel annually for our customers.",
        "news.news2.title": "New software licenses for extended simulation options",
        "news.news2.description": "In order to be able to offer our customers even better services, we have expanded our software portfolio. From now on, ANSYS Mechanical Premium and Siemens Simcenter are available to us for complex multiphysics simulations.",
        "news.news3.title": "Successful certification according to DIN EN ISO 9001:2015",
        "news.news3.description": "After intensive preparation, BMEC has successfully passed the certification according to DIN EN ISO 9001:2015. This underlines our commitment to high-quality engineering services and continuous improvement.",
        
        // Contact
        "contact.title": "Contact us",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone (optional)",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.privacy": "I have read and accept the privacy policy.",
        "contact.form.button": "Send message",
        
        // Booking
        "booking.title": "Book an Appointment",
        "booking.subtitle": "Choose an available date and time for your consultation",
        "booking.prev": "Previous Month",
        "booking.next": "Next Month",
        "booking.day0": "Mon",
        "booking.day1": "Tue",
        "booking.day2": "Wed",
        "booking.day3": "Thu",
        "booking.day4": "Fri",
        "booking.day5": "Sat",
        "booking.day6": "Sun",
        "booking.time": "Available Times:",
        "booking.form.name": "Name",
        "booking.form.email": "Email",
        "booking.form.phone": "Phone",
        "booking.form.notes": "Notes",
        "booking.form.submit": "Book Appointment",
        "booking.success": "Thank you! Your appointment has been successfully booked.",
        
        // Footer
        "footer.about": "Innovative engineering solutions since 2005. Our small, specialized team develops customized technical solutions for industry and production.",
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

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
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

// Calendar functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;

    function renderCalendar() {
        const calendarEl = document.getElementById('calendar');
        const monthYearEl = document.getElementById('current-month');
        
        // Show month and year
        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
        monthYearEl.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        
        // Generate calendar days
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
        // Weekday of first day (0-6, Sunday=0)
        let firstDayIndex = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
        
        // Empty cells for days from previous month
        for (let i = 0; i < firstDayIndex; i++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day disabled';
            dayEl.textContent = '';
            calendarEl.appendChild(dayEl);
        }
        
        // Days of current month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = i;
            
            // Check if day is in the future
            const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (dayDate < today) {
                dayEl.classList.add('disabled');
            } else {
                dayEl.addEventListener('click', function() {
                    // Remove previous selection
                    document.querySelectorAll('.calendar-day.selected').forEach(el => {
                        el.classList.remove('selected');
                    });
                    
                    // Set new selection
                    this.classList.add('selected');
                    selectedDate = dayDate;
                    
                    // Show available times
                    renderTimeSlots();
                });
            }
            
            calendarEl.appendChild(dayEl);
        }
    }
    
    function renderTimeSlots() {
        if (!selectedDate) return;
        
        const timeSlotsEl = document.getElementById('time-slots');
        timeSlotsEl.innerHTML = '';
        
        // Available times (example)
        const availableTimes = [
            '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
        ];
        
        availableTimes.forEach(time => {
            const timeEl = document.createElement('div');
            timeEl.className = 'time-slot';
            timeEl.textContent = time;
            
            timeEl.addEventListener('click', function() {
                // Remove previous selection
                document.querySelectorAll('.time-slot.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // Set new selection
                this.classList.add('selected');
                selectedTime = time;
            });
            
            timeSlotsEl.appendChild(timeEl);
        });
    }
    
    // Month navigation
    document.getElementById('prev-month').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        document.getElementById('calendar').innerHTML = '';
        renderCalendar();
    });
    
    document.getElementById('next-month').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        document.getElementById('calendar').innerHTML = '';
        renderCalendar();
    });
    
    // Booking form
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!selectedDate || !selectedTime) {
            alert(currentLang === 'de' ? 'Bitte wählen Sie ein Datum und eine Uhrzeit aus.' : 'Please select a date and time.');
            return;
        }
        
        // Here the booking would normally be sent to the server
        const bookingData = {
            name: document.getElementById('booking-name').value,
            email: document.getElementById('booking-email').value,
            phone: document.getElementById('booking-phone').value,
            date: selectedDate,
            time: selectedTime,
            notes: document.getElementById('booking-notes').value
        };
        
        console.log('Booking data:', bookingData);
        alert(translations[currentLang]['booking.success']);
        this.reset();
        
        // Reset selection
        document.querySelectorAll('.calendar-day.selected, .time-slot.selected').forEach(el => {
            el.classList.remove('selected');
        });
        selectedDate = null;
        selectedTime = null;
        document.getElementById('time-slots').innerHTML = '';
    });
    
    // Initial calendar render
    renderCalendar();
});
