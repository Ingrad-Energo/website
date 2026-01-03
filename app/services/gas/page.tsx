"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function GasPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Gasne Instalacije",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Specijalizovani smo za projektovanje, izvođenje i servisiranje gasnih instalacija za sve vrste objekata. Naši stručnjaci poseduju sve potrebne licence i sertifikate za rad sa gasnim sistemima, garantujući maksimalnu bezbednost i usklađenost sa propisima.",
      services: "Naše Usluge",
      service1: "Projektovanje gasnih instalacija",
      service1Desc:
        "Izrada projektne dokumentacije za priključak objekta na gasnu mrežu, unutrašnje gasne instalacije i gasovodne priključke sa svim potrebnim saglasnostima.",
      service2: "Izgradnja gasnih instalacija",
      service2Desc:
        "Izvođenje kompletnih gasnih instalacija za stambene, poslovne i industrijske objekte, uključujući postavljanje cevovoda, armature i mernih uređaja.",
      service3: "Priključci na distributivnu mrežu",
      service3Desc:
        "Realizacija priključaka na postojeću gasnu distributivnu mrežu uz koordinaciju sa nadležnim distributerima i ishodovanje svih potrebnih dozvola.",
      service4: "Periodični pregledi i servis",
      service4Desc:
        "Obavezni periodični pregledi gasnih instalacija, kontrola ispravnosti, detekcija curenja i redovno održavanje sistema.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Licencirani Tim",
      reason1Desc:
        "Svi naši stručnjaci poseduju važeće licence za rad na gasnim instalacijama i redovno se usavršavaju.",
      reason2: "Bezbednost na Prvom Mestu",
      reason2Desc: "Poštujemo sve bezbednosne propise i standarde, jer bezbednost je naš glavni prioritet.",
      reason3: "Kompletna Usluga",
      reason3Desc: "Od projektovanja do konačnog priključka i održavanja - sve radimo mi.",
      cta: "Kontaktirajte nas za ponudu",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti iz oblasti gasnih instalacija",
    },
    en: {
      title: "Gas Installations",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "We specialize in the design, installation, and servicing of gas installations for all types of buildings. Our experts hold all necessary licenses and certificates for working with gas systems, guaranteeing maximum safety and compliance with regulations.",
      services: "Our Services",
      service1: "Gas Installation Design",
      service1Desc:
        "Preparation of project documentation for connecting buildings to the gas network, internal gas installations, and gas pipeline connections with all necessary approvals.",
      service2: "Gas Installation Construction",
      service2Desc:
        "Implementation of complete gas installations for residential, commercial, and industrial buildings, including pipeline installation, valves, and metering devices.",
      service3: "Distribution Network Connections",
      service3Desc:
        "Realization of connections to existing gas distribution networks with coordination with relevant distributors and obtaining all necessary permits.",
      service4: "Periodic Inspections and Service",
      service4Desc:
        "Mandatory periodic inspections of gas installations, functionality checks, leak detection, and regular system maintenance.",
      whyChooseUs: "Why Choose Us",
      reason1: "Licensed Team",
      reason1Desc:
        "All our experts hold valid licenses for working on gas installations and regularly upgrade their skills.",
      reason2: "Safety First",
      reason2Desc: "We comply with all safety regulations and standards, as safety is our main priority.",
      reason3: "Complete Service",
      reason3Desc: "From design to final connection and maintenance - we do it all.",
      cta: "Contact us for a quote",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects in the field of gas installations",
    },
    de: {
      title: "Gasinstallationen",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Wir sind spezialisiert auf Planung, Installation und Wartung von Gasanlagen für alle Gebäudetypen. Unsere Experten besitzen alle erforderlichen Lizenzen und Zertifikate für die Arbeit mit Gassystemen und garantieren maximale Sicherheit und Einhaltung der Vorschriften.",
      services: "Unsere Dienstleistungen",
      service1: "Gasanlagenplanung",
      service1Desc:
        "Erstellung von Projektdokumentation für den Anschluss von Gebäuden an das Gasnetz, interne Gasinstallationen und Gasleitungsanschlüsse mit allen erforderlichen Genehmigungen.",
      service2: "Gasanlagenbau",
      service2Desc:
        "Umsetzung kompletter Gasinstallationen für Wohn-, Gewerbe- und Industriegebäude, einschließlich Rohrleitungsverlegung, Armaturen und Messgeräte.",
      service3: "Verteilnetzanschlüsse",
      service3Desc:
        "Realisierung von Anschlüssen an bestehende Gasverteilnetze mit Koordination mit zuständigen Verteilern und Einholung aller erforderlichen Genehmigungen.",
      service4: "Regelmäßige Inspektionen und Service",
      service4Desc:
        "Obligatorische regelmäßige Inspektionen von Gasanlagen, Funktionsprüfungen, Lecksuche und regelmäßige Systemwartung.",
      whyChooseUs: "Warum uns wählen",
      reason1: "Lizenziertes Team",
      reason1Desc:
        "Alle unsere Experten besitzen gültige Lizenzen für die Arbeit an Gasinstallationen und bilden sich regelmäßig weiter.",
      reason2: "Sicherheit an erster Stelle",
      reason2Desc:
        "Wir halten alle Sicherheitsvorschriften und -standards ein, denn Sicherheit ist unsere oberste Priorität.",
      reason3: "Komplettservice",
      reason3Desc: "Von der Planung bis zum endgültigen Anschluss und der Wartung - wir machen alles.",
      cta: "Kontaktieren Sie uns für ein Angebot",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte im Bereich Gasinstallationen",
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

      {/* Filtered Projects Carousel */}
      <FilteredProjectsCarousel
        language={language}
        filterTags={
          language === "sr"
            ? ["Prirodni Gas", "Distribucija"]
            : language === "en"
              ? ["Natural Gas", "Distribution"]
              : ["Erdgas", "Verteilung"]
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
