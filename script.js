// Klaro! Konfiguration (am Anfang der Datei)
window.klaroConfig = {
    privacyPolicy: '/datenschutz.html', // Link zur Datenschutzerklärung
    translations: {
        de: {
            consentModal: {
                title: 'Cookie-Einstellungen',
                description: 'Wir verwenden Cookies, um die Nutzererfahrung zu verbessern. Sie können die Arten von Cookies unten auswählen.',
            },
            purposes: {
                necessary: 'Notwendige Cookies',
                analytics: 'Analytics (Statistiken)',
                marketing: 'Marketing (z.B. Tracking)',
            },
            googleAnalytics: {
                description: 'Tracking mit Google Analytics',
            },
        },
    },
    apps: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            required: false,
            cookies: ['_ga', '_gat', '_gid'],
            optOut: true,
        },
    ],
};

// In script.js (nach Klaro!-Initialisierung)
if (klaro.getConsent('googleAnalytics')) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-XXXXX-Y'); // Ihre Tracking-ID
}

// Language translations
const translations = {
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.team": "Expertise",
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
        "services.tab1.short": "Fachgerechte Konstruktionsunterstützung nach branchenüblichen Methoden & Richtlinien (z.B. DIN, ISO, VDI)",
        "services.tab2": "Simulation",
        "services.tab2.short": "FEM- und CFD-Simulationen unter Berücksichtigung der VDI 2206",
        "services.tab3": "Prototyping",
        "services.tab3.short": "Prototypenfertigung mit modernen Technologien",
        "services.tab4": "Beratung",
        "services.tab4.short": "Beratung mit ingenieurwissenschaftlicher Expertise für Ihr Projekt",
        "services.tab5": "IWE-Begleitung",
        "services.tab5.short": "Schweißtechnik und Fügeverfahren",
        "services.tab6": "Vertriebsagent",
        "services.tab6.short": "Internationale Vertriebsunterstützung und Markterschließung",
        
        "services.content1.title": "Technische Konstruktionsdienstleistungen nach Industriestandards",
        "services.content1.description": "Unsere Ingenieure mit maschinenbautechnischer Qualifikation (HTL/TU) unterstützen Sie bei der Entwicklung normenkonformer Konstruktionslösungen. Alle Leistungen erfolgen im Rahmen ingenieurwissenschaftlicher Beratung gemäß geltendem Gewerberecht.",
        "services.content1.item1": "3D-CAD-Modellierung, Erstellung von Bauteil- und Baugruppenkonstruktionen mit FreeCAD auf Wunsch auch mit anderen Tools wie SolidWorks, Inventor, CATIA V5, Orientierung an VDI-Richtlinien (z.B. VDI 2212 für CAD-Modellierung)",
        "services.content1.item2": "FEM-gerechte Modellierung, Vorbereitende Modellierung für spätere Simulationsberechnungen und Vorabschätzung der Bauteile/Baugruppen, erstellen von Simulationsstudien",
        "services.content1.item3": "Technische Dokumentation, Zeichnungserstellung nach ISO 7200 und DIN 6789",
        "services.content1.item4": "Toleranzmanagement, Unterstützung bei geometrischen Produktspezifikationen (GPS)",
        "services.content1.item5": "Stücklistenmanagement mit ERP-Schnittstellen (SAP, ProAlpha)",
        "services.content1.item6": "Schweißtechnische Konstruktionsberatung, Konstruktive Empfehlungen für schweißgerechte Gestaltung (DIN EN 1090-1)",
        
        "services.content2.title": "Simulationsdienstleistungen nach Ingenieurstandards",
        "services.content2.description": "Wir unterstützen Sie bei der virtuellen Produktentwicklung durch wissenschaftlich fundierte Simulationsverfahren. Unsere Analysen erfolgen unter Anwendung etablierter Ingenieurmethoden (z.B. VDI 2206, FKM-Richtlinie) und dienen als Entscheidungsgrundlage für Ihre Konstruktionsprozesse.",
        "services.content2.item1": "Finite-Elemente-Analysen (FEA), Lineare und nichtlineare Strukturanalysen mit FreeCAD oder auf Wunsch auch mit ANSYS/Abaqus, Modal- und Spektralanalysen für Schwingungsuntersuchungen",
        "services.content2.item2": "Thermische Simulationen mit nichtlinearen Materialmodellen,Thermische Untersuchungen mit gekoppelten Modellen",
        "services.content2.item3": "Strömungssimulationen (CFD), Laminare und turbulente Strömungsanalysen, ",
        "services.content2.item4": "Festigkeitsbewertungen, Orientierung an FKM-Richtlinie für Bauteilauslegung",
        "services.content2.item5": "Validierungsbegleitung, Unterstützung bei experimentellen Methoden (DIC, Dehnungsmessstreifen), Vergleich von Simulations- und Messdaten",
        "services.content2.item6": "Multiphysik-Simulationen (thermomechanisch, fluid-strukturgekoppelt)",
        
        "services.content3.title": "Prototypenentwicklung & Testbegleitung",
        "services.content3.description": "Wir unterstützen Sie bei der Realisierung von Prototypen mit modernen Fertigungstechnologien und orientieren uns dabei an etablierten ingenieurwissenschaftlichen Standards.",
        "services.content3.item1": "Additive Fertigung, 3D-Druckverfahren (FDM, SLS, SLA) unter Berücksichtigung von VDI 3405",
        "services.content3.item2": "CNC-Prototypenfertigung, Präzisionsbearbeitung inkl. 5-Achs-Technologie, Funktionsmuster als Entwicklungsgrundlage",
        "services.content3.item3": "Testbegleitung, Unterstützung bei Funktionsvalidierungen, Messtechnische Dokumentation (3D-Scanning, Koordinatenmesstechnik)",
        "services.content3.item4": "Mess- und Prüftechnik (3D-Scannen)",
        "services.content3.item5": "Kleinserien, Werkzeuglose Fertigungslösungen für Vorlaufserien",
        "services.content3.item6": "Materialprüfung & Bauteilvalidierung, Standardisierte Materialprüfung, Topologieoptimierte Bauteilbewertung, Validierungsdienstleistungen.  Wir unterstützen Sie bei der Herstellung von Prototypen unter Anwendung aktueller Fertigungsverfahren.",
        
        "services.content4.title": "Technische Beratung & Ingenieurdienstleistungen",
        "services.content4.description": "Wir unterstützen Unternehmen mit fachlicher Expertise bei produktions- und qualitätstechnischen Fragestellungen unter Anwendung etablierter ingenieurwissenschaftlicher Methoden.",
        "services.content4.item1": "Produktionsoptimierung, Prozessanalysen unter Berücksichtigung von Lean-Prinzipien, Wertstromanalysen orientiert an VDI 5200",
        "services.content4.item2": "Materialtechnische Beratung, Werkstoffauswahl unter Einbeziehung von Datenblättern, Unterstützung bei Materialprüfungen nach DIN EN ISO 6892-1",
        "services.content4.item3": "Normative Beratung, Orientierung an Standards (DIN, ISO, ASTM, ASME)",
        "services.content4.item4": "Qualitätssicherungsbegleitung mit statistischen Prozesskontroll-Methoden (SPC) unter Anwendung der ISO 7870",
        "services.content4.item5": "Prozessoptimierungsberatung unter Anwendung von Six-Sigma-Methoden",
        "services.content4.item6": "Risikoanalyse-Beratung unter Anwendung von FMEA/FMECA-Methoden (orientiert an VDI 2246)",
        
        "services.content5.title": "Schweißtechnische Beratung & Normenimplementierung",
        "services.content5.description": "Als erfahrene Schweißtechnik-Experten mit maschinenbautechnischer Qualifikation (HTL & TU) unterstützen wir Unternehmen bei der Umsetzung schweißtechnischer Anforderungen gemäß DIN EN ISO 3834 und DIN EN 1090.",
        "services.content5.item1": "Technische Beratung zu Schweißprozessen und Fügeverfahren",
        "services.content5.item2": "Unterstützung bei der Dokumentenerstellung für WPS/PQR nach DIN EN ISO 15614/15609",
        "services.content5.item3": "Schulungen zu Normenanforderungen (DIN EN ISO 2553, DIN EN 1993-1-8)",
        "services.content5.item4": "Vorbereitung von Zertifizierungsaudits (inkl. Gap-Analysen)",
        "services.content5.item5": "Begleitung bei zerstörungsfreien Prüfungen (VT, PT, MT, UT, RT nach DIN EN ISO 17635)",
        "services.content5.item6": "Zertifizierungbegleitung nach DIN EN 1090 und DIN EN 15085 (Vorbereitung auf Audits – von der Dokumentation bis zur Schulung in Kooperation mit akkreditierten Partnern)",

        "services.content6.title": "Internationale Vertriebsunterstützung",
        "services.content6.description": "Wir unterstützen Sie bei der internationalen Markterschließung und Vertriebsaktivitäten mit unserem globalen Netzwerk.",
        "services.content6.item1": "Marktanalyse und Zielgruppenidentifikation",
        "services.content6.item2": "Vertriebskanäle und Partneridentifikation",
        "services.content6.item3": "Internationale Vertriebsstrategieentwicklung",
        "services.content6.item4": "Kundenakquise und Lead-Generierung",
        "services.content6.item5": "Messe- und Eventunterstützung",
        "services.content6.item6": "Kulturspezifische Vertriebsberatung",

        // Team
        "team.title": "Unser Leistungsspektrum im Überblick",
        "team.description": "Unser Team kombiniert ingenieurwissenschaftliches Know-how mit praxisbewährter Konstruktionserfahrung. Gemeinsam mit Ihnen entwickeln wir Lösungsansätze für Ihre technischen Herausforderungen – einschließlich Unterstützung bei: Cyberphysischen Systemen (Schnittstellen zwischen Mechanik, Elektronik und Software), Nachhaltigen Technologien (Ressourceneffizienz, Lebenszyklusbetrachtungen), Digitalisierungsvorhaben (Industrie 4.0-Ansätze, Datenvernetzung).",
        "team.stat1": "Jahre Erfahrung",
        "team.stat2": "Projekterfahrung",
        "team.stat3": "Branchen",
        "team.stat4": " Fokus auf Digitalisierung/ Nachhaltigkeit",
        
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
        "roadmap.item1.title": "Erstgespräch (online / vor Ort)",
        "roadmap.item1.text": "Besprechen des Projekstart und Umfanges, Schnittstellen sowie Peripherie und Normen/Richtlinien. Dauer des kostenlosen Erstgesprächs liegt zwischen 30min-60min ",
        "roadmap.item2.title": "Kick-Off-Meeting",
        "roadmap.item2.text": "Meeting mit allen Stakeholdern und Verantwortlichen des Projekts, tiefere Projektbeschreibung konkretisierung des Leisstungsumfangs und Phlichtenhefts",
        "roadmap.item3.title": "SOP - Start of Projekt",
        "roadmap.item3.text": "Nach erhalt aller notwendigen Projektinformationen, erfolg der interne Projektstart. gekoppelt mit zusätzlichen Besprechungen und Presäntation (online oder wenn gewünscht vor Ort) von Zwischenergebnisen nach vorheriger Milenstein Festlegung",
        "roadmap.item4.title": "Intensive Projektumsetzungsphase ",
        "roadmap.item4.text": "Das Projekt wird gemäß den zuvor abgesprochenen Punkten umgesetzt und Entwickelt, Im Zuge der Projektentwicklung wird stets das optimim angestrebt die durch den Kunden komunizieren Ansprüche stellen für uns das minimum der Ansprüche dar und wir sind stets getrieben von übertreffen der Vorstellung unseres Kunden.",
        "roadmap.item5.title": "Finalisierung / Dokumentation",
        "roadmap.item5.text": "Wir validieren die finalen Ergebnisse mit unserem Kunden und bringen die letzten gewünschten Änderungen ung Wünsche sofern diese technisch noch zu diesem Stadium umsetzbar sind um. Der Nachhaltigkeitsgedanke verfolgt uns stets in jedem Step unseres technologie-Roadmap und stellt eine wichtige Säule in unserem handeln dar. ",
        
        // News
        "news.title": "Aktuelles",
        "news.news1.title": "BMEC nimmt fokus auf mechanisch-digitale Systemintegration sowie Digitalisierung für ressourcenoptimierte Bauteilgestaltung",
        "news.news1.description": "Wir freuen uns, Einsparpotenziale für unser Projekt zur Materialeinsparung umgesetzt zu haben. Durch optimierte Konstruktionen und Topologieoptimierungen ergaben sich Reduktionsmöglichkeiten.",
        "news.news2.title": "Erweiterung unserer Simulationsdienstleistungen, wir haben unsere technischen Möglichkeiten durch neue Softwaretools erweitert, darunter auch leistungsfähige Open-Source-Lösungen. Dies ermöglicht uns:",
        "news.news2.description": "Erweiterte Analysemöglichkeiten, Multiphysikalische Simulationsansätze, Visualisierung von Machbarkeitsstudien! Vorteile durch Open-Source-Komponenten, Flexiblere Anpassung an Kundenanforderungen,Unabhängigkeit von proprietären Systemen, Transparente Methodik nach wissenschaftlichen Standards! Leistungsmerkmale, Erweiterte Validierungsmöglichkeiten, Kosteneffiziente Lösungsansätze.",
        
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
        "footer.about": "Innovative Maschinenbaulösungen. Unsere spezialisierten Bereiche sind das Entwickeln maßgeschneiderter technischer Lösungen für Industrie und Produktion durch Kombinieren von cyberphysikalischen Anwendungen,in symbiose mit Maschinenbau-Software.",
        "footer.contact": "Kontakt",
        "footer.address1": "Technologiepark 15",
        "footer.address2": "8010 Graz",
        "footer.phone": "Tel: +43 821 1234567",
        "footer.links": "Links",
        "footer.legal": "Rechtliches",
        "footer.legal1": "Impressum",
        "footer.legal2": "Datenschutz",
        "footer.legal3": "AGB",
        "footer.rights": "Alle Rechte vorbehalten.",
        
        // Ticker
        "ticker.item1": "🚀 Neues Projekt: Entwicklung einer CAE Kopplung mit Berechnungstools in der Kommissionierungsindustrie",
        "ticker.item2": "🏆 Auszeichnung: Mitarbeiter ist \"Star of Styria\"",
        "ticker.item3": "📅 Veranstaltung: Besuchen Sie uns auf der Maschinenbau-Messe vom 17.-21. April",
        "ticker.item4": "🔧 Stellenangebot: Wir suchen Verstärkung im Bereich Datascience (m/w/d)"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.team": "Expertise",
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
        "services.tab1.short": "Professional construction support according to industry-standard methods & guidelines (e.g. DIN, ISO, VDI)",
        "services.tab2": "Simulation",
        "services.tab2.short": "FEM and CFD simulations considering VDI 2206",
        "services.tab3": "Prototyping",
        "services.tab3.short": "Prototype manufacturing with modern technologies",
        "services.tab4": "Consulting",
        "services.tab4.short": "Consulting with engineering expertise for your project",
        "services.tab5": "IWE Support",
        "services.tab5.short": "Welding technology and joining processes",
        "services.tab6": "Sales Agent",
        "services.tab6.short": "International sales support and market development",
        
        "services.content1.title": "Technical Construction Services According to Industry Standards",
        "services.content1.description": "Our engineers with mechanical engineering qualifications (HTL/TU) support you in developing standards-compliant construction solutions. All services are provided within the framework of engineering consulting in accordance with applicable trade laws.",
        "services.content1.item1": "3D CAD modeling, creation of component and assembly designs with FreeCAD, optionally also with other tools like SolidWorks, Inventor, CATIA V5, orientation to VDI guidelines (e.g. VDI 2212 for CAD modeling)",
        "services.content1.item2": "FEM-compliant modeling, preparatory modeling for later simulation calculations and preliminary estimation of components/assemblies, creation of simulation studies",
        "services.content1.item3": "Technical documentation, drawing creation according to ISO 7200 and DIN 6789",
        "services.content1.item4": "Tolerance management, support for geometric product specifications (GPS)",
        "services.content1.item5": "Parts list management with ERP interfaces (SAP, ProAlpha)",
        "services.content1.item6": "Welding construction consulting, constructive recommendations for welding-friendly design (DIN EN 1090-1)",
        
        "services.content2.title": "Simulation Services According to Engineering Standards",
        "services.content2.description": "We support you in virtual product development through scientifically based simulation methods. Our analyses are performed using established engineering methods (e.g. VDI 2206, FKM guideline) and serve as a basis for decision-making in your construction processes.",
        "services.content2.item1": "Finite element analyses (FEA), linear and nonlinear structural analyses with FreeCAD or optionally with ANSYS/Abaqus, modal and spectral analyses for vibration investigations",
        "services.content2.item2": "Thermal simulations with nonlinear material models, thermal investigations with coupled models",
        "services.content2.item3": "Flow simulations (CFD), laminar and turbulent flow analyses",
        "services.content2.item4": "Strength evaluations, orientation to FKM guideline for component design",
        "services.content2.item5": "Validation support, assistance with experimental methods (DIC, strain gauges), comparison of simulation and measurement data",
        "services.content2.item6": "Multiphysics simulations (thermomechanical, fluid-structure coupled)",
        
        "services.content3.title": "Prototype Development & Test Support",
        "services.content3.description": "We support you in realizing prototypes with modern manufacturing technologies, following established engineering standards.",
        "services.content3.item1": "Additive manufacturing, 3D printing processes (FDM, SLS, SLA) considering VDI 3405",
        "services.content3.item2": "CNC prototype manufacturing, precision machining including 5-axis technology, functional models as development basis",
        "services.content3.item3": "Test support, assistance with functional validations, metrological documentation (3D scanning, coordinate measuring technology)",
        "services.content3.item4": "Measurement and testing technology (3D scanning)",
        "services.content3.item5": "Small series, tool-less manufacturing solutions for pre-series",
        "services.content3.item6": "Material testing & component validation, standardized material testing, topology-optimized component evaluation, validation services. We support you in manufacturing prototypes using current production processes.",
        
        "services.content4.title": "Technical Consulting & Engineering Services",
        "services.content4.description": "We support companies with specialized expertise in production and quality-related issues using established engineering methods.",
        "services.content4.item1": "Production optimization, process analyses considering lean principles, value stream analyses oriented to VDI 5200",
        "services.content4.item2": "Material technical consulting, material selection including data sheets, support for material tests according to DIN EN ISO 6892-1",
        "services.content4.item3": "Normative consulting, orientation to standards (DIN, ISO, ASTM, ASME)",
        "services.content4.item4": "Quality assurance support with statistical process control methods (SPC) applying ISO 7870",
        "services.content4.item5": "Process optimization consulting using Six Sigma methods",
        "services.content4.item6": "Risk analysis consulting using FMEA/FMECA methods (oriented to VDI 2246)",
        
        "services.content5.title": "Welding Technology Consulting & Standards Implementation",
        "services.content5.description": "As experienced welding technology experts with mechanical engineering qualifications (HTL & TU), we support companies in implementing welding technology requirements according to DIN EN ISO 3834 and DIN EN 1090.",
        "services.content5.item1": "Technical consulting on welding processes and joining methods",
        "services.content5.item2": "Support in creating documents for WPS/PQR according to DIN EN ISO 15614/15609",
        "services.content5.item3": "Training on standard requirements (DIN EN ISO 2553, DIN EN 1993-1-8)",
        "services.content5.item4": "Preparation for certification audits (including gap analyses)",
        "services.content5.item5": "Support for non-destructive testing (VT, PT, MT, UT, RT according to DIN EN ISO 17635)",
        "services.content5.item6": "Certification support according to DIN EN 1090 and DIN EN 15085 (Preparation for audits - from documentation to training in cooperation with accredited partners)",

        "services.content6.title": "International Sales Support",
        "services.content6.description": "We support you in international market development and sales activities with our global network.",
        "services.content6.item1": "Market analysis and target group identification",
        "services.content6.item2": "Sales channels and partner identification",
        "services.content6.item3": "International sales strategy development",
        "services.content6.item4": "Customer acquisition and lead generation",
        "services.content6.item5": "Trade fair and event support",
        "services.content6.item6": "Culture-specific sales consulting",

        // Team
        "team.title": "Our Range of Services at a Glance",
        "team.description": "Our team combines engineering know-how with proven construction experience. Together with you, we develop solution approaches for your technical challenges - including support for: Cyber-physical systems (interfaces between mechanics, electronics and software), Sustainable technologies (resource efficiency, life cycle considerations), Digitalization projects (Industry 4.0 approaches, data networking).",
        "team.stat1": "Years of Experience",
        "team.stat2": "Project Experience",
        "team.stat3": "Industries",
        "team.stat4": "Focus on Digitalization/Sustainability",
        
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
        "roadmap.item1.title": "Initial Consultation (online / on-site)",
        "roadmap.item1.text": "We offer a non-binding initial consultation (approx. 30-60 minutes) to discuss potential project approaches, technical interfaces, and relevant regulatory frameworks. This serves as a preliminary assessment – any specific services require separate agreement and formal commissioning. Please note that information regarding standards and guidelines is based on data available during this initial discussion and does not constitute comprehensive legal advice.",
        "roadmap.item2.title": "Kick-Off Meeting",
        "roadmap.item2.text": "The structured kick-off meeting with all stakeholders serves to clarify project requirements in detail, refine the agreed scope of services, and establish the basis for a potential specification document. This meeting aligns framework conditions, responsibilities, and milestones – subject to final contract execution and in compliance with applicable technical and regulatory standards.",
        "roadmap.item3.title": "SOP - Start of Project",
        "roadmap.item3.text": "Following receipt of all required project information and customer approval, the formal project initiation takes place. This process includes regular coordination meetings and presentation of interim results - according to the agreed milestone schedule. Meetings are conducted online by default; on-site sessions are available upon explicit request. All services are delivered based on the framework conditions defined at project start and documented in the contract.",
        "roadmap.item4.title": "Intensive Project Implementation Phase",
        "roadmap.item4.text": "Services are delivered according to the contractually agreed specifications and project objectives. We commit to diligent implementation in compliance with agreed quality standards and technical regulations. The customer's communicated requirements serve as the binding minimum standard, while we strive for technically optimized solutions within the agreed project framework. Any modifications or additions to the original agreement require separate written authorization.",
        "roadmap.item5.title": "Finalization / Documentation",
        "roadmap.item5.text": "During the final project phase, we conduct joint validation of results with the customer. Technically feasible adjustments will be considered within the agreed project scope. All project outcomes are documented according to applicable professional standards, incorporating sustainability aspects as per the ecological guidelines established at project inception. Services are concluded in compliance with contractual agreements.",
        
        // News
        "news.title": "News",
        "news.news1.title": "BMEC focuses on mechanical-digital system integration and digitalization for resource-optimized component design",
        "news.news1.description": "We are pleased to have implemented savings potential for our material saving project. Through optimized constructions and topology optimizations, reduction possibilities were achieved.",
        "news.news2.title": "Expansion of our simulation services, we have expanded our technical capabilities with new software tools, including powerful open-source solutions. This enables us:",
        "news.news2.description": "Extended analysis possibilities, multiphysical simulation approaches, visualization of feasibility studies! Advantages through open-source components, more flexible adaptation to customer requirements, independence from proprietary systems, transparent methodology according to scientific standards! Performance characteristics, extended validation possibilities, cost-efficient solution approaches.",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone (optional)",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.privacy": "I have read and accept the privacy policy.",
        "contact.form.button": "Send Message",
        
        // Footer
        "footer.about": "Innovative engineering solutions. Our specialized areas are developing customized technical solutions for industry and production by combining cyber-physical applications in symbiosis with mechanical engineering software.",
        "footer.contact": "Contact",
        "footer.address1": "Technology Park 15",
        "footer.address2": "8010 Graz",
        "footer.phone": "Tel: +43 821 1234567",
        "footer.links": "Links",
        "footer.legal": "Legal",
        "footer.legal1": "Imprint",
        "footer.legal2": "Privacy Policy",
        "footer.legal3": "Terms and Conditions",
        "footer.rights": "All rights reserved.",
        
        // Ticker
        "ticker.item1": "🚀 New project: Development of a CAE coupling with calculation tools in the commissioning industry",
        "ticker.item2": "🏆 Award: Employee is \"Star of Styria\"",
        "ticker.item3": "📅 Event: Visit us at the Mechanical Engineering Fair from April 17-21",
        "ticker.item4": "🔧 Job offer: We are looking for reinforcement in the field of Data Science (m/f/d)"
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
    'tab1': './images/KONST.jpeg',
    'tab2': './images/SIMULATION.jpeg',
    'tab3': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'tab4': './images/BERATUNG.jpeg',
    'tab5': './images/IWE.jpeg',
    'tab6': './images/VERTRIEB.jpeg'
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

// Roadmap Interaction
document.addEventListener('DOMContentLoaded', function() {
    const progressSteps = document.querySelectorAll('.progress-step');
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    const progressBar = document.querySelector('.progress-bar');
    
    // Füge Endpunkt hinzu
    const progressEndpoint = document.createElement('div');
    progressEndpoint.className = 'progress-endpoint';
    progressBar.parentNode.insertBefore(progressEndpoint, progressBar.nextSibling);

    
    
    initializePercentages();
    
    // Mache die Steps verschiebbar (außer dem ersten und letzten)
    progressSteps.forEach((step, index) => {
        if (index > 0 && index < progressSteps.length - 1) {
            step.addEventListener('mousedown', startDrag);
            step.addEventListener('touchstart', startDrag, { passive: false });
        }
    });
    
    let isDragging = false;
    let currentStep = null;
    let startX = 0;
    let startLeft = 0;
    
    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        currentStep = e.target.closest('.progress-step');
        currentStep.classList.add('dragging');
        
        const progressBarRect = progressBar.getBoundingClientRect();
        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
        } else {
            startX = e.clientX;
        }
        startLeft = parseFloat(currentStep.style.left) / 100;
        
        document.addEventListener('mousemove', dragStep);
        document.addEventListener('touchmove', dragStep, { passive: false });
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
    }
    
    function dragStep(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const progressBarRect = progressBar.getBoundingClientRect();
        let clientX;
        
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
        
        const deltaX = clientX - startX;
        const deltaPercentage = deltaX / progressBarRect.width;
        let newLeft = startLeft + deltaPercentage;
        
        // Begrenze die Position zwischen dem vorherigen und nächsten Step
        const stepIndex = Array.from(progressSteps).indexOf(currentStep);
        const prevStep = progressSteps[stepIndex - 1];
        const nextStep = progressSteps[stepIndex + 1];
        
        const minPos = prevStep ? parseFloat(prevStep.style.left) / 100 : 0;
        const maxPos = nextStep ? parseFloat(nextStep.style.left) / 100 : 1;
        
        newLeft = Math.max(minPos, Math.min(maxPos, newLeft));
        
        const percentage = Math.round(newLeft * 100);
        currentStep.style.left = `${percentage}%`;
        
        // Aktualisiere die Prozentangaben
        initializePercentages();
    }
    
    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        
        if (currentStep) {
            currentStep.classList.remove('dragging');
            currentStep = null;
        }
        
        document.removeEventListener('mousemove', dragStep);
        document.removeEventListener('touchmove', dragStep);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
    }
    
    // Highlight first step by default
    if (roadmapItems.length > 0) {
        roadmapItems[0].classList.add('active');
    }
    
    // Click handler for progress steps
    progressSteps.forEach(step => {
        step.addEventListener('click', function(e) {
            if (isDragging) {
                e.stopPropagation();
                return;
            }
            
            const stepNumber = this.getAttribute('data-step');
            
            roadmapItems.forEach(item => {
                item.classList.remove('active');
            });
            
            const targetItem = document.querySelector(`.roadmap-item[data-step="${stepNumber}"]`);
            if (targetItem) {
                targetItem.classList.add('active');
                
                targetItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
    
    // Hover handler for roadmap items
    roadmapItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const stepNumber = this.getAttribute('data-step');
            const correspondingStep = document.querySelector(`.progress-step[data-step="${stepNumber}"]`);
            if (correspondingStep) {
                correspondingStep.style.transform = 'translate(-50%, -50%) scale(1.3)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const stepNumber = this.getAttribute('data-step');
            const correspondingStep = document.querySelector(`.progress-step[data-step="${stepNumber}"]`);
            if (correspondingStep && !correspondingStep.classList.contains('dragging')) {
                correspondingStep.style.transform = 'translate(-50%, -50%)';
            }
        });
    });

    // Make progress bar sticky when scrolling
    const progressContainer = document.querySelector('.roadmap-progress-container');
    const roadmapSection = document.querySelector('.roadmap-section');
    
    if (progressContainer && roadmapSection) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                progressContainer.classList.toggle('sticky-active', !entry.isIntersecting);
            },
            { threshold: [0] }
        );
        
        observer.observe(roadmapSection);
    }
});

// Scroll down arrow functionality
document.querySelector('.scroll-down-arrow').addEventListener('click', function() {
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});

// Klaro! Konfiguration (am Anfang der Datei)
window.klaroConfig = {
    privacyPolicy: '/datenschutz.html', // Link zur Datenschutzerklärung
    translations: {
        de: {
            consentModal: {
                title: 'Cookie-Einstellungen',
                description: 'Wir verwenden Cookies, um die Nutzererfahrung zu verbessern. Sie können die Arten von Cookies unten auswählen.',
            },
            purposes: {
                necessary: 'Notwendige Cookies',
                analytics: 'Analytics (Statistiken)',
                marketing: 'Marketing (z.B. Tracking)',
            },
            googleAnalytics: {
                description: 'Tracking mit Google Analytics',
            },
        },
    },
    apps: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            required: false,
            cookies: ['_ga', '_gat', '_gid'],
            optOut: true,
        },
    ],
};
