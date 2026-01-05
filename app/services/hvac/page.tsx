"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AirVent, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function HVACPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Ventilacija i Klimatizacija",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Specijalizovani smo za projektovanje, ugradnju i održavanje sistema ventilacije i klimatizacije za stambene, poslovne i industrijske objekte. Naša rešenja obezbeđuju optimalan kvalitet vazduha, komfor i energetsku efikasnost.",
      services: "Naše Usluge",
      service1: "Projektovanje HVAC sistema",
      service1Desc:
        "Izrada tehničke dokumentacije za sisteme grejanja, ventilacije i klimatizacije (HVAC) prilagođenih specifičnim zahtevima prostora i namene objekta.",
      service2: "Ugradnja klima uređaja",
      service2Desc:
        "Profesionalna montaža klima uređaja svih tipova - split sistemi, multi split, VRV/VRF sistemi, centralne klime sa kompletnom instalacijom i puštanjem u rad.",
      service3: "Ventilacioni sistemi",
      service3Desc:
        "Instalacija mehaničkih ventilacionih sistema sa rekuperacijom toplote, prisilnom ventilacijom i kontrolom kvaliteta vazduha.",
      service4: "Servisiranje i održavanje",
      service4Desc:
        "Redovno servisiranje klima uređaja i ventilacionih sistema, dopuna rashladnog gasa, čišćenje filtera i provera ispravnosti sistema.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Energetska Efikasnost",
      reason1Desc: "Koristimo najsavremenije uređaje sa visokim energetskim klasama za minimalne troškove rada.",
      reason2: "Sertifikovana Montaža",
      reason2Desc:
        "Naš tim poseduje sertifikate za rad sa rashladnim sistemima i sigurno rukovanje rashladnim gasovima.",
      reason3: "Brz Servis",
      reason3Desc: "Nudimo brz odziv i kvalitetan servis za sve tipove klima uređaja i ventilacionih sistema.",
      cta: "Kontaktirajte nas za besplatnu procenu",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti iz oblasti ventilacije i klimatizacije",
    },
    en: {
      title: "Ventilation and Air Conditioning",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "We specialize in the design, installation, and maintenance of ventilation and air conditioning systems for residential, commercial, and industrial buildings. Our solutions ensure optimal air quality, comfort, and energy efficiency.",
      services: "Our Services",
      service1: "HVAC System Design",
      service1Desc:
        "Preparation of technical documentation for heating, ventilation, and air conditioning (HVAC) systems tailored to specific space requirements and building purposes.",
      service2: "Air Conditioning Installation",
      service2Desc:
        "Professional installation of all types of air conditioning units - split systems, multi-split, VRV/VRF systems, central air conditioning with complete installation and commissioning.",
      service3: "Ventilation Systems",
      service3Desc:
        "Installation of mechanical ventilation systems with heat recovery, forced ventilation, and air quality control.",
      service4: "Servicing and Maintenance",
      service4Desc:
        "Regular servicing of air conditioning units and ventilation systems, refrigerant refilling, filter cleaning, and system functionality checks.",
      whyChooseUs: "Why Choose Us",
      reason1: "Energy Efficiency",
      reason1Desc: "We use state-of-the-art devices with high energy classes for minimal operating costs.",
      reason2: "Certified Installation",
      reason2Desc:
        "Our team holds certificates for working with refrigeration systems and safe handling of refrigerants.",
      reason3: "Fast Service",
      reason3Desc:
        "We offer quick response and quality service for all types of air conditioning units and ventilation systems.",
      cta: "Contact us for a free assessment",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects in the field of ventilation and air conditioning",
    },
    de: {
      title: "Lüftung und Klimatisierung",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Wir sind spezialisiert auf die Planung, Installation und Wartung von Lüftungs- und Klimaanlagen für Wohn-, Gewerbe- und Industriegebäude. Unsere Lösungen gewährleisten optimale Luftqualität, Komfort und Energieeffizienz.",
      services: "Unsere Dienstleistungen",
      service1: "HLK-Systemplanung",
      service1Desc:
        "Erstellung technischer Dokumentation für Heizungs-, Lüftungs- und Klimatisierungssysteme (HLK), angepasst an spezifische Raumanforderungen und Gebäudezwecke.",
      service2: "Klimaanlageninstallation",
      service2Desc:
        "Professionelle Installation aller Arten von Klimageräten - Split-Systeme, Multi-Split, VRV/VRF-Systeme, zentrale Klimaanlagen mit kompletter Installation und Inbetriebnahme.",
      service3: "Lüftungssysteme",
      service3Desc:
        "Installation mechanischer Lüftungssysteme mit Wärmerückgewinnung, Zwangslüftung und Luftqualitätskontrolle.",
      service4: "Service und Wartung",
      service4Desc:
        "Regelmäßige Wartung von Klimageräten und Lüftungssystemen, Kältemittelnachfüllung, Filterreinigung und Funktionsprüfung.",
      whyChooseUs: "Warum uns wählen",
      reason1: "Energieeffizienz",
      reason1Desc: "Wir verwenden modernste Geräte mit hohen Energieklassen für minimale Betriebskosten.",
      reason2: "Zertifizierte Installation",
      reason2Desc:
        "Unser Team besitzt Zertifikate für die Arbeit mit Kältesystemen und den sicheren Umgang mit Kältemitteln.",
      reason3: "Schneller Service",
      reason3Desc:
        "Wir bieten schnelle Reaktion und Qualitätsservice für alle Arten von Klimageräten und Lüftungssystemen.",
      cta: "Kontaktieren Sie uns für eine kostenlose Bewertung",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte im Bereich Lüftung und Klimatisierung",
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
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src="/hvac-main.jpg" alt={t.title} className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="h-24 w-24 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <AirVent className="h-14 w-14 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">{t.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">{t.overviewText}</p>
          </div>
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

      {/* Projects Section */}
      <FilteredProjectsCarousel
        language={language}
        filterTags={
          language === "sr"
            ? ["HVAC", "Termotehnika"]
            : language === "en"
              ? ["HVAC", "Thermotechnical"]
              : ["HLK", "Thermotechnik"]
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
