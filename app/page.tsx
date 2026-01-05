"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Factory, Flame, Wrench, Wind, CheckCircle2, AirVent, Menu, Phone } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { certificatesData } from "@/lib/certificates-data"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const translations = {
  sr: {
    nav: {
      about: "O NAMA",
      services: "DELATNOSTI",
      projects: "PROJEKTI",
      contact: "KONTAKT",
      contactUs: "Kontaktirajte Nas",
    },
    hero: {
      title: "Vaš Pouzdan Partner za Termoenergetska Rešenja",
      subtitle:
        "Vodeci stručnjaci u inženjeringu termoenergetskih objekata, termotehničkih i gasnih instalacija sa višegodišnjim iskustvom.",
      learnMore: "Saznajte Više",
      ourProjects: "Naši Projekti",
    },
    whyChoose: {
      title: "Zašto Izabrati INGRAD ENERGO",
      subtitle: "Kompletna rešenja od projektovanja do održavanja sistema u eksploataciji",
      comprehensive: "Sveobuhvatni Inženjering",
      comprehensiveDesc:
        "Od predlaganja rešenja, preko izrade projektno-tehničke dokumentacije do montaže i održavanja.",
      expertise: "Dokazana Ekspertiza",
      expertiseDesc: "Višegodišnje iskustvo u realizaciji složenih projekata termoenergetskih sistema.",
      service: "Kompletan Servis",
      serviceDesc: "Obezbeđujemo kompletnu podršku tokom celog životnog ciklusa vašeg projekta.",
    },
    services: {
      title: "Naše Delatnosti",
      subtitle: "Širok spektar usluga u oblasti termoenergetike i gasnih instalacija",
      engineering: "Inženjering i Konsalting",
      engineeringDesc: "Stručno projektovanje i konsalting za termoenergetske sisteme i instalacije.",
      thermotechnical: "Termotehničke Instalacije",
      thermotechnicalDesc: "Projektovanje, montaža i održavanje termotehničkih sistema grejanja i hlađenja.",
      thermoEnergy: "Termoenergetski Objekti",
      thermoEnergyDesc: "Kompleksni termoenergetski objekti i instalacije visokih performansi.",
      gas: "Distribucija Prirodnog Gasa",
      gasDesc: "Distribucija i eksploatacija prirodnog gasa, gasne instalacije i priključci.",
      hvac: "Ventilacija i Klimatizacija",
      hvacDesc: "Projektovanje i montaža sistema ventilacije i klimatizacije za industrijske i komercijalne objekte.",
      steel: "Čelične Konstrukcije",
      steelDesc: "Projektovanje, izrada i montaža čeličnih konstrukcija za industrijske i komercijalne objekte.",
      learnMore: "Saznajte više →",
    },
    projects: {
      title: "Naši Projekti",
      subtitle: "Pogledajte neke od naših uspešno realizovanih projekata",
      project1Title: "Rekonstrukcija Toplane",
      project1Desc:
        "Kompletna rekonstrukcija toplane kapaciteta 15 MW, uključujući modernizaciju kotlovskog postrojenja i sistema distribucije toplote.",
      project2Title: "Gasna Distributivna Mreža",
      project2Desc:
        "Izgradnja gasne distributivne mreže ukupne dužine preko 8 km sa priključcima za stambene i industrijske objekte.",
      project3Title: "Poslovni Centar - HVAC",
      project3Desc:
        "Kompletna termotehnička instalacija za poslovni centar površine 12.000 m² sa sistemom grejanja, hlađenja i ventilacije.",
      tagThermoEnergy: "Termoenergetika",
      tagEngineering: "Inženjering",
      tagGas: "Prirodni Gas",
      tagDistribution: "Distribucija",
      tagThermotechnical: "Termotehnika",
      tagHVAC: "HVAC",
    },
    cta: {
      title: "Spremni da Započnete Vaš Projekat?",
      subtitle: "Kontaktirajte nas danas i saznajte kako možemo pomoći u realizaciji vašeg termoenergetskog projekta.",
      sendInquiry: "Pošaljite Upit",
      callUs: "Pozovite Nas",
    },
    contact: {
      title: "Kontakt Informacije",
      mainOffice: "Glavno Sedište",
      branchOffice: "Filijala – Nemačka",
      address: "Adresa",
      addressValue: "Žikice Jovanovića 5\n15300 Loznica, Srbija",
      addressValueGermany: "Weierstr. 65\n46149 Oberhausen, Nemačka",
      phone: "Telefon",
      phoneGermany: "+49 151 1444 5972",
      email: "Email",
      emailGermany: "ingradoberhausen@gmail.com",
      hours: "Radno Vreme",
      hoursValue: "Ponedeljak - Petak: 09:00 - 17:00",
      sendMessage: "Pošaljite Poruku",
      name: "Ime i Prezime",
      namePlaceholder: "Vaše ime",
      emailPlaceholder: "vas@email.com",
      message: "Poruka",
      messagePlaceholder: "Vaša poruka...",
      submit: "Pošaljite Poruku",
    },
    footer: {
      description: "Stručnjaci u inženjeringu termoenergetskih objekata i instalacija.",
      servicesTitle: "Delatnosti",
      companyTitle: "Kompanija",
      engineering: "Inženjering",
      thermotechnical: "Termotehnika",
      thermoEnergy: "Termoenergetika",
      gasInstallations: "Gasne Instalacije",
      hvac: "Ventilacija i Klimatizacija",
      about: "O Nama",
      projects: "Projekti",
      policy: "Politika IMS",
      contact: "Kontakt",
      rights: "Sva prava zadržana.",
    },
  },
  en: {
    nav: {
      about: "ABOUT US",
      services: "SERVICES",
      projects: "PROJECTS",
      contact: "CONTACT",
      contactUs: "Contact Us",
    },
    hero: {
      title: "Your Trusted Partner for Thermal Energy Solutions",
      subtitle:
        "Leading experts in engineering thermal energy facilities, thermotechnical and gas installations with years of experience.",
      learnMore: "Learn More",
      ourProjects: "Our Projects",
    },
    whyChoose: {
      title: "Why Choose INGRAD ENERGO",
      subtitle: "Complete solutions from design to system maintenance in operation",
      comprehensive: "Comprehensive Engineering",
      comprehensiveDesc:
        "From proposing solutions, through technical documentation development to installation and maintenance.",
      expertise: "Proven Expertise",
      expertiseDesc: "Years of experience in implementing complex thermal energy system projects.",
      service: "Complete Service",
      serviceDesc: "We provide complete support throughout the entire lifecycle of your project.",
    },
    services: {
      title: "Our Services",
      subtitle: "Wide range of services in thermal energy and gas installations",
      engineering: "Engineering and Consulting",
      engineeringDesc: "Professional design and consulting for thermal energy systems and installations.",
      thermotechnical: "Thermotechnical Installations",
      thermotechnicalDesc: "Design, installation and maintenance of thermotechnical heating and cooling systems.",
      thermoEnergy: "Thermal Energy Facilities",
      thermoEnergyDesc: "Complex thermal energy facilities and high-performance installations.",
      gas: "Natural Gas Distribution",
      gasDesc: "Distribution and operation of natural gas, gas installations and connections.",
      hvac: "Ventilation and Air Conditioning",
      hvacDesc:
        "Design and installation of ventilation and air conditioning systems for industrial and commercial buildings.",
      steel: "Steel Structures",
      steelDesc: "Design, fabrication, and installation of steel structures for industrial and commercial buildings.",
      learnMore: "Learn more →",
    },
    projects: {
      title: "Our Projects",
      subtitle: "See some of our successfully completed projects",
      project1Title: "Heating Plant Reconstruction",
      project1Desc:
        "Complete reconstruction of a 15 MW heating plant, including modernization of boiler facilities and heat distribution system.",
      project2Title: "Gas Distribution Network",
      project2Desc:
        "Construction of a gas distribution network with a total length of over 8 km with connections for residential and industrial facilities.",
      project3Title: "Business Center - HVAC",
      project3Desc:
        "Complete thermotechnical installation for a 12,000 m² business center with heating, cooling and ventilation system.",
      tagThermoEnergy: "Thermal Energy",
      tagEngineering: "Engineering",
      tagGas: "Natural Gas",
      tagDistribution: "Distribution",
      tagThermotechnical: "Thermotechnical",
      tagHVAC: "HVAC",
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Contact us today and learn how we can help implement your thermal energy project.",
      sendInquiry: "Send Inquiry",
      callUs: "Call Us",
    },
    contact: {
      title: "Contact Information",
      mainOffice: "Main Office",
      branchOffice: "Branch Office – Germany",
      address: "Address",
      addressValue: "Žikice Jovanovića 5\n15300 Loznica, Serbia",
      addressValueGermany: "Weierstr. 65\n46149 Oberhausen, Germany",
      phone: "Phone",
      phoneGermany: "+49 151 1444 5972",
      email: "Email",
      emailGermany: "ingradoberhausen@gmail.com",
      hours: "Business Hours",
      hoursValue: "Monday - Friday: 09:00 - 17:00",
      sendMessage: "Send a Message",
      name: "Full Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
    },
    footer: {
      description: "Experts in engineering thermal energy facilities and installations.",
      servicesTitle: "Services",
      companyTitle: "Company",
      engineering: "Engineering",
      thermotechnical: "Thermotechnical",
      thermoEnergy: "Thermal Energy",
      gasInstallations: "Gas Installations",
      hvac: "Ventilation and AC",
      about: "About Us",
      projects: "Projects",
      policy: "IMS Policy",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      about: "ÜBER UNS",
      services: "DIENSTLEISTUNGEN",
      projects: "PROJEKTE",
      contact: "KONTAKT",
      contactUs: "Kontaktieren Sie Uns",
    },
    hero: {
      title: "Ihr Vertrauenspartner für Wärmeenergielösungen",
      subtitle:
        "Führende Experten in der Planung von Wärmeenergieanlagen, thermotechnischen und Gasinstallationen mit langjähriger Erfahrung.",
      learnMore: "Mehr Erfahren",
      ourProjects: "Unsere Projekte",
    },
    whyChoose: {
      title: "Warum INGRAD ENERGO Wählen",
      subtitle: "Komplettlösungen von der Planung bis zur Systemwartung im Betrieb",
      comprehensive: "Umfassendes Engineering",
      comprehensiveDesc: "Von der Lösungsvorschlag über die technische Dokumentation bis zur Installation und Wartung.",
      expertise: "Bewährte Expertise",
      expertiseDesc: "Langjährige Erfahrung in der Umsetzung komplexer Wärmeenergieanlagenprojekte.",
      service: "Kompletter Service",
      serviceDesc: "Wir bieten vollständige Unterstützung während des gesamten Lebenszyklus Ihres Projekts.",
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Breites Spektrum an Dienstleistungen im Bereich Wärmeenergie und Gasinstallationen",
      engineering: "Engineering und Beratung",
      engineeringDesc: "Professionelle Planung und Beratung für Wärmeenergieanlagen und -installationen.",
      thermotechnical: "Thermotechnische Installationen",
      thermotechnicalDesc: "Planung, Installation und Wartung thermotechnischer Heiz- und Kühlsysteme.",
      thermoEnergy: "Wärmeenergieanlagen",
      thermoEnergyDesc: "Komplexe Wärmeenergieanlagen und Hochleistungsinstallationen.",
      gas: "Erdgasverteilung",
      gasDesc: "Verteilung und Betrieb von Erdgas, Gasinstallationen und Anschlüsse.",
      hvac: "Lüftung und Klimatisierung",
      hvacDesc: "Planung und Installation von Lüftungs- und Klimatisierungssystemen für Industrie- und Gewerbegebäude.",
      steel: "Stahlkonstruktionen",
      steelDesc: "Planung, Herstellung und Montage von Stahlkonstruktionen für Industrie- und Gewerbegebäude.",
      learnMore: "Mehr erfahren →",
    },
    projects: {
      title: "Unsere Projekte",
      subtitle: "Sehen Sie einige unserer erfolgreich abgeschlossenen Projekte",
      project1Title: "Heizwerk-Rekonstruktion",
      project1Desc:
        "Vollständige Rekonstruktion eines 15-MW-Heizwerks, einschließlich Modernisierung der Kesselanlagen und des Wärmeverteilungssystems.",
      project2Title: "Gasverteilungsnetz",
      project2Desc:
        "Bau eines Gasverteilungsnetzes mit einer Gesamtlänge von über 8 km mit Anschlüssen für Wohn- und Industrieanlagen.",
      project3Title: "Geschäftszentrum - HLK",
      project3Desc:
        "Vollständige thermotechnische Installation für ein 12.000 m² Geschäftszentrum mit Heizungs-, Kühl- und Lüftungssystem.",
      tagThermoEnergy: "Wärmeenergie",
      tagEngineering: "Engineering",
      tagGas: "Erdgas",
      tagDistribution: "Verteilung",
      tagThermotechnical: "Thermotechnik",
      tagHVAC: "HLK",
    },
    cta: {
      title: "Bereit, Ihr Projekt zu Starten?",
      subtitle:
        "Kontaktieren Sie uns heute und erfahren Sie, wie wir bei der Umsetzung Ihres Wärmeenergieprojekts helfen können.",
      sendInquiry: "Anfrage Senden",
      callUs: "Rufen Sie Uns An",
    },
    contact: {
      title: "Kontaktinformationen",
      mainOffice: "Hauptsitz",
      branchOffice: "Niederlassung – Deutschland",
      address: "Adresse",
      addressValue: "Žikice Jovanovića 5\n15300 Loznica, Serbien",
      addressValueGermany: "Weierstr. 65\n46149 Oberhausen, Deutschland",
      phone: "Telefon",
      phoneGermany: "+49 151 1444 5972",
      email: "E-Mail",
      emailGermany: "ingradoberhausen@gmail.com",
      hours: "Öffnungszeiten",
      hoursValue: "Montag - Freitag: 09:00 - 17:00",
      sendMessage: "Nachricht Senden",
      name: "Vollständiger Name",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.de",
      message: "Nachricht",
      messagePlaceholder: "Ihre Nachricht...",
      submit: "Nachricht Senden",
    },
    footer: {
      description: "Experten für Engineering von Wärmeenergieanlagen und -installationen.",
      servicesTitle: "Dienstleistungen",
      companyTitle: "Unternehmen",
      engineering: "Engineering",
      thermotechnical: "Thermotechnik",
      thermoEnergy: "Wärmeenergie",
      gasInstallations: "Gasinstallationen",
      hvac: "Lüftung und Klima",
      about: "Über Uns",
      projects: "Projekte",
      policy: "IMS-Richtlinie",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
  },
}

type Language = "sr" | "en" | "de"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("sr")
  const [projectApi, setProjectApi] = useState<CarouselApi>()
  const [certificateApi, setCertificateApi] = useState<CarouselApi>()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const projects = [
    {
      title: t.projects.project1Title,
      desc: t.projects.project1Desc,
      image: "/modern-heating-system-industrial-facility.jpg",
      tags: [t.projects.tagThermoEnergy, t.projects.tagEngineering],
    },
    {
      title: t.projects.project2Title,
      desc: t.projects.project2Desc,
      image: "/gas-pipeline-distribution-network.jpg",
      tags: [t.projects.tagGas, t.projects.tagDistribution],
    },
    {
      title: t.projects.project3Title,
      desc: t.projects.project3Desc,
      image: "/hvac-system-commercial-building-interior.jpg",
      tags: [t.projects.tagThermotechnical, t.projects.tagHVAC],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/logoingrad.png" alt="INGRAD ENERGO" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#why-choose" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.projects}
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-0.5 md:gap-1 border rounded-lg p-0.5 md:p-1">
                <Button
                  size="sm"
                  variant={language === "sr" ? "default" : "ghost"}
                  className="h-7 px-2 md:h-8 md:px-3 text-xs"
                  onClick={() => setLanguage("sr")}
                >
                  SR
                </Button>
                <Button
                  size="sm"
                  variant={language === "en" ? "default" : "ghost"}
                  className="h-7 px-2 md:h-8 md:px-3 text-xs"
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  size="sm"
                  variant={language === "de" ? "default" : "ghost"}
                  className="h-7 px-2 md:h-8 md:px-3 text-xs"
                  onClick={() => setLanguage("de")}
                >
                  DE
                </Button>
              </div>
              <span className="text-sm text-muted-foreground hidden lg:inline">+381 15 893 310</span>
              <Button size="sm" className="hidden md:inline-flex md:min-w-[140px] lg:min-w-[160px]" onClick={scrollToContact}>
                {t.nav.contactUs}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[85%] max-w-[320px] px-4 py-6">
          <SheetHeader>
            <SheetTitle>{language === "sr" ? "Meni" : language === "en" ? "Menu" : "Menü"}</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="#why-choose"
              className="text-lg font-medium py-3 border-b hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="#services"
              className="text-lg font-medium py-3 border-b hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium py-3 border-b hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium py-3 border-b hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>

            <a
              href="tel:+381158933310"
              className="flex items-center gap-3 py-3 text-muted-foreground border-b"
            >
              <Phone className="h-5 w-5" />
              <span>+381 15 893 310</span>
            </a>

            <Button
              className="w-full mt-4"
              onClick={() => {
                setMobileMenuOpen(false)
                scrollToContact()
              }}
            >
              {t.nav.contactUs}
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/ntp.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-white">{t.hero.title}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl text-pretty leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90" onClick={scrollToContact}>
                {t.hero.learnMore}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.ourProjects}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-balance">{t.whyChoose.title}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            {t.whyChoose.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.whyChoose.comprehensive}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.whyChoose.comprehensiveDesc}</p>
            </Card>
            <Card className="p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.whyChoose.expertise}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.whyChoose.expertiseDesc}</p>
            </Card>
            <Card className="p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.whyChoose.service}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.whyChoose.serviceDesc}</p>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === "sr" ? "Naši Sertifikati" : language === "en" ? "Our Certificates" : "Unsere Zertifikate"}
            </h3>
            <Carousel
              setApi={setCertificateApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certificatesData.map((certificate) => (
                  <CarouselItem key={certificate.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card
                      className="p-6 bg-background h-full cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => window.open(certificate.pdf[language], '_blank')}
                    >
                      <img
                        src={certificate.image[language]}
                        alt={certificate.title[language]}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-bold text-center mb-2">
                        {certificate.title[language]}
                      </h4>
                      <p className="text-sm text-muted-foreground text-center">
                        {certificate.desc[language]}
                      </p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 md:-left-16" />
              <CarouselNext className="-right-12 md:-right-16" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-balance">{t.services.title}</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-pretty">{t.services.subtitle}</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/consulting-main.jpg" alt="Engineering and Consulting" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Flame className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.engineering}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.engineeringDesc}</p>
                <Link href="/services/consulting">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/engineering-main.jpg" alt="Thermotechnical Installations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Wind className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.thermotechnical}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.thermotechnicalDesc}</p>
                <Link href="/services/engineering">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/thermal-energy-main.jpg" alt="Thermal Energy Facilities" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Factory className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.thermoEnergy}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.thermoEnergyDesc}</p>
                <Link href="/services/thermal-energy">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/gas-main.jpg" alt="Natural Gas Distribution" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Flame className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.gas}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.gasDesc}</p>
                <Link href="/services/gas">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/hvac-main.jpg" alt="Ventilation and Air Conditioning" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <AirVent className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.hvac}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.hvacDesc}</p>
                <Link href="/services/hvac">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src="/steel-main.jpg" alt="Steel Structures" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Factory className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.services.steel}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.services.steelDesc}</p>
                <Link href="/services/steel">
                  <Button variant="ghost" className="px-0">
                    {t.services.learnMore}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-balance">{t.projects.title}</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-pretty">{t.projects.subtitle}</p>

          <div className="max-w-6xl mx-auto">
            <Carousel
              setApi={setProjectApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-3">
                {projects.map((project, idx) => (
                  <CarouselItem key={idx} className="pl-2 md:pl-3 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden h-full">
                      <div className="aspect-video relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 md:-left-16" />
              <CarouselNext className="-right-12 md:-right-16" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">{t.contact.title}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">{t.contact.mainOffice}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.address}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{t.contact.addressValue}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.phone}</h4>
                      <p className="text-muted-foreground">+381 15 893 310</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.email}</h4>
                      <p className="text-muted-foreground">office@ingrad.biz</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.hours}</h4>
                      <p className="text-muted-foreground">{t.contact.hoursValue}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">{t.contact.branchOffice}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.address}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{t.contact.addressValueGermany}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.phone}</h4>
                      <p className="text-muted-foreground">{t.contact.phoneGermany}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{t.contact.email}</h4>
                      <p className="text-muted-foreground">{t.contact.emailGermany}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t.contact.submit}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logoingrad.png" alt="INGRAD ENERGO" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground max-w-md">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t.footer.engineering}</li>
                <li>{t.footer.thermotechnical}</li>
                <li>{t.footer.thermoEnergy}</li>
                <li>{t.footer.gasInstallations}</li>
                <li>{t.footer.hvac}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.companyTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about">{t.footer.about}</Link>
                </li>
                <li>
                  <Link href="#projects">{t.footer.projects}</Link>
                </li>
                <li>
                  <Link href="#policy">{t.footer.policy}</Link>
                </li>
                <li>
                  <Link href="#contact">{t.footer.contact}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 INGRAD ENERGO d.o.o. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
