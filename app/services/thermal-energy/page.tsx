"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Factory, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function ThermalEnergyPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Termoenergetska Postrojenja",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Projektujemo, izvođimo i održavamo kompletna termoenergetska postrojenja za daljinsko grejanje, industrijske procese i distributivne sisteme toplote. Naša rešenja obezbeđuju pouzdanu proizvodnju i distribuciju toplotne energije sa visokim stepenom energetske efikasnosti.",
      services: "Naše Usluge",
      service1: "Kotlovska Postrojenja i Toplane",
      service1Desc:
        "Projektovanje i izgradnja kotlovskih postrojenja različitih kapaciteta, od malih kotlarnica do velikih toplanskih sistema sa automatskom kontrolom rada i sistemima za tretman vode.",
      service2: "Sistemi Daljinskog Grejanja",
      service2Desc:
        "Izgradnja toplifikacionih sistema sa primarnom i sekundarnom mrežom, podstanicama, merilima i sistemima za regulaciju i nadzor toplotne energije.",
      service3: "Sistemi za Proizvodnju Tople Vode",
      service3Desc:
        "Instalacije za centralnu pripremu sanitarne tople vode sa akumulacionim bojlerima, cirkulacionim pumpama i sistemima za tretman i dezinfekciju vode prema sanitarnim propisima.",
      service4: "Distribucioni i Upravljački Sistemi",
      service4Desc:
        "Moderne sisteme distribucije toplotne energije sa automatizovanim upravljanjem, daljinskim nadzorom, energetskim bilansiranjem i optimizacijom potrošnje.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Kompletna Rešenja 'Ključ u Ruke'",
      reason1Desc:
        "Od studije izvodljivosti i projektovanja, preko nabavke opreme i izvođenja radova, do puštanja u rad i obuke osoblja - celokupan projekat realizujemo mi.",
      reason2: "Fokus na Energetsku Efikasnost",
      reason2Desc:
        "Primena najsavremenijih tehnologija, kondenzacionih kotlova, rekuperacije toplote i frekventne regulacije za minimalne operativne troškove.",
      reason3: "Non-Stop Tehnička Podrška",
      reason3Desc:
        "Obezbeđujemo stalni tehnički nadzor, preventivno održavanje i hitan servis 24/7 za nesmetano funkcionisanje postrojenja.",
      cta: "Kontaktirajte nas za analizu potreba",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti iz oblasti termoenergetskih postrojenja",
    },
    en: {
      title: "Thermal Energy Facilities",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "We design, install, and maintain complete thermal energy facilities for district heating, industrial processes, and heat distribution systems. Our solutions ensure reliable production and distribution of thermal energy with high levels of energy efficiency.",
      services: "Our Services",
      service1: "Boiler Facilities and Heating Plants",
      service1Desc:
        "Design and construction of boiler facilities of various capacities, from small boiler rooms to large heating plant systems with automatic operation control and water treatment systems.",
      service2: "District Heating Systems",
      service2Desc:
        "Construction of district heating systems with primary and secondary networks, substations, meters, and systems for regulation and monitoring of thermal energy.",
      service3: "Hot Water Production Systems",
      service3Desc:
        "Installations for central domestic hot water preparation with storage water heaters, circulation pumps, and systems for water treatment and disinfection according to sanitary regulations.",
      service4: "Distribution and Control Systems",
      service4Desc:
        "Modern thermal energy distribution systems with automated control, remote monitoring, energy balancing, and consumption optimization.",
      whyChooseUs: "Why Choose Us",
      reason1: "Complete Turnkey Solutions",
      reason1Desc:
        "From feasibility studies and design, through equipment procurement and construction work, to commissioning and staff training - we handle the entire project.",
      reason2: "Focus on Energy Efficiency",
      reason2Desc:
        "Application of state-of-the-art technologies, condensing boilers, heat recovery, and frequency control for minimal operating costs.",
      reason3: "24/7 Technical Support",
      reason3Desc:
        "We provide constant technical supervision, preventive maintenance, and emergency service 24/7 for uninterrupted facility operation.",
      cta: "Contact us for needs analysis",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects in the field of thermal energy facilities",
    },
    de: {
      title: "Wärmeenergieanlagen",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Wir planen, installieren und warten komplette Wärmeenergieanlagen für Fernwärme, industrielle Prozesse und Wärmeverteilungssysteme. Unsere Lösungen gewährleisten zuverlässige Produktion und Verteilung von Wärmeenergie mit hoher Energieeffizienz.",
      services: "Unsere Dienstleistungen",
      service1: "Kesselanlagen und Heizwerke",
      service1Desc:
        "Planung und Bau von Kesselanlagen verschiedener Kapazitäten, von kleinen Kesselräumen bis zu großen Heizwerksystemen mit automatischer Betriebssteuerung und Wasseraufbereitungssystemen.",
      service2: "Fernwärmesysteme",
      service2Desc:
        "Bau von Fernwärmesystemen mit primären und sekundären Netzen, Unterstationen, Zählern und Systemen zur Regelung und Überwachung von Wärmeenergie.",
      service3: "Warmwasserproduktionssysteme",
      service3Desc:
        "Anlagen zur zentralen Warmwasserbereitung mit Speicherwassererhitzern, Zirkulationspumpen und Systemen zur Wasseraufbereitung und -desinfektion gemäß Hygienevorschriften.",
      service4: "Verteilungs- und Steuerungssysteme",
      service4Desc:
        "Moderne Wärmeenergieverteilungssysteme mit automatisierter Steuerung, Fernüberwachung, Energiebilanzierung und Verbrauchsoptimierung.",
      whyChooseUs: "Warum Uns Wählen",
      reason1: "Komplette Schlüsselfertige Lösungen",
      reason1Desc:
        "Von Machbarkeitsstudien und Planung über Ausrüstungsbeschaffung und Bauarbeiten bis zur Inbetriebnahme und Personalschulung - wir übernehmen das gesamte Projekt.",
      reason2: "Fokus auf Energieeffizienz",
      reason2Desc:
        "Anwendung modernster Technologien, Brennwertkessel, Wärmerückgewinnung und Frequenzregelung für minimale Betriebskosten.",
      reason3: "24/7 Technische Unterstützung",
      reason3Desc:
        "Wir bieten ständige technische Überwachung, vorbeugende Wartung und Notdienst 24/7 für einen ununterbrochenen Anlagenbetrieb.",
      cta: "Kontaktieren Sie uns für eine Bedarfsanalyse",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte im Bereich Wärmeenergieanlagen",
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
              <Factory className="h-12 w-12 text-primary" />
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
            ? ["Termoenergetika", "Inženjering"]
            : language === "en"
              ? ["Thermal Energy", "Engineering"]
              : ["Wärmeenergie", "Engineering"]
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
