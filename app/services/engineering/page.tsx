"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function EngineeringPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Termotehničke Instalacije",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Naša kompanija se bavi projektovanjem, izvođenjem i održavanjem termotehničkih instalacija za stambene, poslovne i industrijske objekte. Pružamo kompletna rešenja za sisteme grejanja koja obezbeđuju optimalnu termalnu komfor i energetsku efikasnost.",
      services: "Naše Usluge",
      service1: "Projektovanje sistema grejanja",
      service1Desc:
        "Izrada tehničke dokumentacije i projekata za sisteme centralnog grejanja, podnog grejanja i radiatorskog grejanja prilagođenih specifičnim potrebama objekta.",
      service2: "Ugradnja i montaža",
      service2Desc:
        "Stručna montaža kotlova, radijatora, cevnih instalacija i drugih komponenti sistema grejanja sa garancijom kvaliteta i usklađenosti sa standardima.",
      service3: "Rekonstrukcija postojećih sistema",
      service3Desc:
        "Modernizacija i optimizacija starih sistema grejanja radi poboljšanja efikasnosti i smanjenja troškova energije.",
      service4: "Servisiranje i održavanje",
      service4Desc:
        "Redovno održavanje, dijagnostika i popravke termotehničkih sistema kako bi se osigurala njihova dugotrajnost i pouzdanost.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Iskustvo",
      reason1Desc: "Više od 20 godina iskustva u projektovanju i izvođenju termotehničkih instalacija.",
      reason2: "Kvalitet",
      reason2Desc: "Koristimo samo materijale i opremu provjerenih proizvođača i poštujemo sve standarde kvaliteta.",
      reason3: "Tim Stručnjaka",
      reason3Desc: "Naš tim čine licencirani inženjeri i tehničari sa bogatim iskustvom u struci.",
      cta: "Kontaktirajte nas za konsultacije",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti iz oblasti termotehničkih instalacija",
    },
    en: {
      title: "Thermotechnical Installations",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "Our company specializes in the design, installation, and maintenance of thermotechnical installations for residential, commercial, and industrial buildings. We provide complete heating system solutions that ensure optimal thermal comfort and energy efficiency.",
      services: "Our Services",
      service1: "Heating System Design",
      service1Desc:
        "Preparation of technical documentation and projects for central heating, underfloor heating, and radiator heating systems tailored to specific building requirements.",
      service2: "Installation and Assembly",
      service2Desc:
        "Professional installation of boilers, radiators, piping installations, and other heating system components with quality guarantee and compliance with standards.",
      service3: "Reconstruction of Existing Systems",
      service3Desc:
        "Modernization and optimization of old heating systems to improve efficiency and reduce energy costs.",
      service4: "Servicing and Maintenance",
      service4Desc:
        "Regular maintenance, diagnostics, and repairs of thermotechnical systems to ensure their longevity and reliability.",
      whyChooseUs: "Why Choose Us",
      reason1: "Experience",
      reason1Desc: "Over 20 years of experience in designing and implementing thermotechnical installations.",
      reason2: "Quality",
      reason2Desc:
        "We use only materials and equipment from verified manufacturers and adhere to all quality standards.",
      reason3: "Expert Team",
      reason3Desc: "Our team consists of licensed engineers and technicians with extensive professional experience.",
      cta: "Contact us for consultation",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects in the field of thermotechnical installations",
    },
    de: {
      title: "Thermotechnische Installationen",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Unser Unternehmen ist spezialisiert auf Planung, Installation und Wartung thermotechnischer Anlagen für Wohn-, Gewerbe- und Industriegebäude. Wir bieten komplette Heizungslösungen, die optimalen thermischen Komfort und Energieeffizienz gewährleisten.",
      services: "Unsere Dienstleistungen",
      service1: "Heizungssystemplanung",
      service1Desc:
        "Erstellung technischer Dokumentation und Projekte für Zentralheizung, Fußbodenheizung und Heizkörperheizung, angepasst an spezifische Gebäudeanforderungen.",
      service2: "Installation und Montage",
      service2Desc:
        "Professionelle Installation von Kesseln, Heizkörpern, Rohrleitungen und anderen Heizungskomponenten mit Qualitätsgarantie und Einhaltung von Standards.",
      service3: "Rekonstruktion bestehender Systeme",
      service3Desc:
        "Modernisierung und Optimierung alter Heizungssysteme zur Verbesserung der Effizienz und Reduzierung der Energiekosten.",
      service4: "Service und Wartung",
      service4Desc:
        "Regelmäßige Wartung, Diagnose und Reparaturen thermotechnischer Systeme zur Gewährleistung ihrer Langlebigkeit und Zuverlässigkeit.",
      whyChooseUs: "Warum uns wählen",
      reason1: "Erfahrung",
      reason1Desc: "Über 20 Jahre Erfahrung in der Planung und Umsetzung thermotechnischer Installationen.",
      reason2: "Qualität",
      reason2Desc:
        "Wir verwenden nur Materialien und Geräte von geprüften Herstellern und halten alle Qualitätsstandards ein.",
      reason3: "Expertenteam",
      reason3Desc: "Unser Team besteht aus lizenzierten Ingenieuren und Technikern mit umfangreicher Berufserfahrung.",
      cta: "Kontaktieren Sie uns für eine Beratung",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte im Bereich thermotechnischer Installationen",
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
              <Flame className="h-12 w-12 text-primary" />
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

      <FilteredProjectsCarousel
        language={language}
        filterTags={
          language === "sr"
            ? ["Termotehnika", "Inženjering"]
            : language === "en"
              ? ["Thermotechnical", "Engineering"]
              : ["Thermotechnik", "Engineering"]
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
