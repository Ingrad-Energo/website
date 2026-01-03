"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lightbulb, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function ConsultingPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Inženjering i Konsalting",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Pružamo kompleksne inženjerske i konsultantske usluge za termoenergetske sisteme i instalacije. Od inicijalne analize izvodljivosti, preko projektovanja tehničke dokumentacije, do upravljanja projektima i stručnog nadzora - vaš partner u svim fazama projekta.",
      services: "Naše Usluge",
      service1: "Studije Izvodljivosti i Tehničke Analize",
      service1Desc:
        "Sveobuhvatne studije izvodljivosti, tehničko-ekonomske analize, procena rizika i preporuke za optimalna tehnička rešenja prilagođena specifičnim zahtevima projekta.",
      service2: "Projektovanje i Tehnička Dokumentacija",
      service2Desc:
        "Izrada kompletne projektno-tehničke dokumentacije, idejnih i glavnih projekata, izvođačkih projekata sa detaljnim crtežima, specifikacijama i proračunima.",
      service3: "Stručno Konsalting i Optimizacija Sistema",
      service3Desc:
        "Konsultantske usluge za izbor opreme i tehnologija, energetske revizije, optimizaciju performansi sistema i usklađenost sa propisima i standardima.",
      service4: "Upravljanje Projektima i Koordinacija",
      service4Desc:
        "Profesionalno upravljanje projektom, koordinacija svih učesnika, kontrola kvaliteta i rokova, tehnički nadzor i priprema dokumentacije za prijavu sistema.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Multidisciplinarno Iskustvo",
      reason1Desc:
        "Duboko poznavanje svih oblasti termoenergetike - od gasnih sistema preko HVAC-a do termoenergetskih postrojenja, omogućava celovita i integrisana rešenja.",
      reason2: "Usklađenost sa Standardima",
      reason2Desc:
        "Detaljno poznavanje domaćih i međunarodnih standarda, propisa i zahteva za sertifikaciju, garantuje odobrene i usklađene projekte.",
      reason3: "Od Koncepta do Puštanja u Rad",
      reason3Desc:
        "Kontinuirano učešće od početne ideje preko projektovanja, nadzora izvođenja, do konačnog puštanja u rad i obuke osoblja.",
      cta: "Kontaktirajte nas za konsultacije",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti gde smo pružili inženjerske i konsultantske usluge",
    },
    en: {
      title: "Engineering and Consulting",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "We provide comprehensive engineering and consulting services for thermal energy systems and installations. From initial feasibility analysis, through technical documentation design, to project management and expert supervision - your partner in all project phases.",
      services: "Our Services",
      service1: "Feasibility Studies and Technical Analysis",
      service1Desc:
        "Comprehensive feasibility studies, technical-economic analyses, risk assessments, and recommendations for optimal technical solutions tailored to specific project requirements.",
      service2: "Engineering Design and Documentation",
      service2Desc:
        "Preparation of complete engineering documentation, conceptual and main designs, construction projects with detailed drawings, specifications, and calculations.",
      service3: "Expert Consulting and System Optimization",
      service3Desc:
        "Consulting services for equipment and technology selection, energy audits, system performance optimization, and compliance with regulations and standards.",
      service4: "Project Management and Coordination",
      service4Desc:
        "Professional project management, coordination of all participants, quality and timeline control, technical supervision, and preparation of system approval documentation.",
      whyChooseUs: "Why Choose Us",
      reason1: "Multidisciplinary Expertise",
      reason1Desc:
        "Deep knowledge across all thermal energy domains - from gas systems through HVAC to thermal plants, enabling comprehensive and integrated solutions.",
      reason2: "Standards Compliance and Certification",
      reason2Desc:
        "Thorough understanding of national and international standards, regulations, and certification requirements, guaranteeing approved and compliant projects.",
      reason3: "From Concept to Commissioning",
      reason3Desc:
        "Continuous involvement from initial concept through design, construction supervision, to final commissioning and staff training.",
      cta: "Contact us for consultation",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects where we provided engineering and consulting services",
    },
    de: {
      title: "Engineering und Beratung",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Wir bieten umfassende Engineering- und Beratungsdienstleistungen für Wärmeenergieanlagen und -installationen. Von der initialen Machbarkeitsanalyse über die technische Dokumentation bis zum Projektmanagement und fachlicher Überwachung - Ihr Partner in allen Projektphasen.",
      services: "Unsere Dienstleistungen",
      service1: "Machbarkeitsstudien und Technische Analysen",
      service1Desc:
        "Umfassende Machbarkeitsstudien, technisch-wirtschaftliche Analysen, Risikobewertungen und Empfehlungen für optimale technische Lösungen, zugeschnitten auf spezifische Projektanforderungen.",
      service2: "Planung und Technische Dokumentation",
      service2Desc:
        "Erstellung vollständiger Planungsunterlagen, Konzept- und Hauptentwürfe, Ausführungsprojekte mit detaillierten Zeichnungen, Spezifikationen und Berechnungen.",
      service3: "Fachberatung und Systemoptimierung",
      service3Desc:
        "Beratungsdienstleistungen für Ausrüstungs- und Technologieauswahl, Energieaudits, Systemleistungsoptimierung und Einhaltung von Vorschriften und Standards.",
      service4: "Projektmanagement und Koordination",
      service4Desc:
        "Professionelles Projektmanagement, Koordination aller Beteiligten, Qualitäts- und Zeitkontrolle, technische Überwachung und Vorbereitung der Systemgenehmigungsdokumentation.",
      whyChooseUs: "Warum Uns Wählen",
      reason1: "Multidisziplinäre Expertise",
      reason1Desc:
        "Tiefes Wissen in allen Wärmeenergiebereichen - von Gassystemen über HLK bis zu Wärmekraftwerken, ermöglicht umfassende und integrierte Lösungen.",
      reason2: "Standardkonformität und Zertifizierung",
      reason2Desc:
        "Gründliches Verständnis nationaler und internationaler Standards, Vorschriften und Zertifizierungsanforderungen, garantiert genehmigte und konforme Projekte.",
      reason3: "Vom Konzept bis zur Inbetriebnahme",
      reason3Desc:
        "Kontinuierliche Beteiligung vom ersten Konzept über die Planung, Bauüberwachung bis zur endgültigen Inbetriebnahme und Personalschulung.",
      cta: "Kontaktieren Sie uns für eine Beratung",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte, bei denen wir Engineering- und Beratungsdienstleistungen erbracht haben",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">{t.backToHome}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant={language === "sr" ? "default" : "outline"} size="sm" onClick={() => setLanguage("sr")}>
              SR
            </Button>
            <Button variant={language === "en" ? "default" : "outline"} size="sm" onClick={() => setLanguage("en")}>
              EN
            </Button>
            <Button variant={language === "de" ? "default" : "outline"} size="sm" onClick={() => setLanguage("de")}>
              DE
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">{t.title}</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto text-pretty">{t.overviewText}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.services}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.service1}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.service1Desc}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.service2}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.service2Desc}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.service3}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.service3Desc}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.service4}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.service4Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.whyChooseUs}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">{t.reason1}</h3>
              <p className="text-muted-foreground">{t.reason1Desc}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">{t.reason2}</h3>
              <p className="text-muted-foreground">{t.reason2Desc}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">{t.reason3}</h3>
              <p className="text-muted-foreground">{t.reason3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Projects Carousel */}
      <FilteredProjectsCarousel
        language={language}
        filterTags={
          language === "sr" ? ["Inženjering"] : language === "en" ? ["Engineering"] : ["Engineering"]
        }
        title={t.projectsTitle}
        subtitle={t.projectsSubtitle}
      />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Link href="/#contact">
            <Button size="lg">{t.cta}</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
