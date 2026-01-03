"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Factory, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FilteredProjectsCarousel } from "@/components/filtered-projects-carousel"

export default function SteelPage() {
  const [language, setLanguage] = useState<"sr" | "en" | "de">("sr")

  const translations = {
    sr: {
      title: "Čelične Konstrukcije",
      backToHome: "Nazad na početnu",
      overview: "Pregled",
      overviewText:
        "Nudimo kompletna rešenja za projektovanje, izradu i montažu čeličnih konstrukcija za industrijske, komercijalne i infrastrukturne objekte. Naš tim inženjera i zavarivača poseduje sva potrebna ovlašćenja i bogato iskustvo u izradi zahtevnih čeličnih konstrukcija.",
      services: "Naše Usluge",
      service1: "Projektovanje čeličnih konstrukcija",
      service1Desc:
        "Statički proračuni i izrada projektne dokumentacije za čelične konstrukcije hala, mostova, nosećih platformi i drugih konstrukcija prema važećim standardima.",
      service2: "Proizvodnja u radionici",
      service2Desc:
        "Izrada čeličnih elemenata konstrukcija u našoj radionici opremljenom savremenim mašinama za sečenje, savijanje i zavarivanje čelika.",
      service3: "Montaža na terenu",
      service3Desc:
        "Profesionalna montaža čeličnih konstrukcija na objektima uz upotrebu odgovarajuće opreme i poštovanje svih bezbednosnih propisa.",
      service4: "Antikorozivna zaštita",
      service4Desc:
        "Priprema površina i nanošenje zaštitnih prevlaka (farbanje, pocinčavanje) radi dugotrajne zaštite od korozije.",
      whyChooseUs: "Zašto Izabrati Nas",
      reason1: "Sertifikovani Zavarivači",
      reason1Desc: "Naši zavarivači poseduju međunarodne sertifikate za zavarivanje čeličnih konstrukcija.",
      reason2: "Moderna Oprema",
      reason2Desc: "Koristimo savremenu opremu za preciznu izradu i montažu čeličnih konstrukcija.",
      reason3: "Kontrol Kvaliteta",
      reason3Desc: "Svaka konstrukcija prolazi rigoroznu kontrolu kvaliteta pre isporuke.",
      cta: "Kontaktirajte nas za realizaciju projekta",
      projectsTitle: "Naši Projekti",
      projectsSubtitle: "Realizovani projekti iz oblasti čeličnih konstrukcija",
    },
    en: {
      title: "Steel Structures",
      backToHome: "Back to Home",
      overview: "Overview",
      overviewText:
        "We offer complete solutions for the design, fabrication, and installation of steel structures for industrial, commercial, and infrastructure projects. Our team of engineers and welders holds all necessary qualifications and extensive experience in manufacturing demanding steel structures.",
      services: "Our Services",
      service1: "Steel Structure Design",
      service1Desc:
        "Static calculations and preparation of project documentation for steel structures of halls, bridges, support platforms, and other structures according to current standards.",
      service2: "Workshop Manufacturing",
      service2Desc:
        "Fabrication of steel structure elements in our workshop equipped with modern machinery for cutting, bending, and welding steel.",
      service3: "On-site Installation",
      service3Desc:
        "Professional installation of steel structures at sites using appropriate equipment and compliance with all safety regulations.",
      service4: "Corrosion Protection",
      service4Desc:
        "Surface preparation and application of protective coatings (painting, galvanizing) for long-term corrosion protection.",
      whyChooseUs: "Why Choose Us",
      reason1: "Certified Welders",
      reason1Desc: "Our welders hold international certificates for welding steel structures.",
      reason2: "Modern Equipment",
      reason2Desc: "We use state-of-the-art equipment for precise fabrication and installation of steel structures.",
      reason3: "Quality Control",
      reason3Desc: "Each structure undergoes rigorous quality control before delivery.",
      cta: "Contact us for project realization",
      projectsTitle: "Our Projects",
      projectsSubtitle: "Completed projects in the field of steel structures",
    },
    de: {
      title: "Stahlkonstruktionen",
      backToHome: "Zurück zur Startseite",
      overview: "Überblick",
      overviewText:
        "Wir bieten komplette Lösungen für die Planung, Herstellung und Montage von Stahlkonstruktionen für Industrie-, Gewerbe- und Infrastrukturprojekte. Unser Team aus Ingenieuren und Schweißern verfügt über alle erforderlichen Qualifikationen und umfangreiche Erfahrung in der Herstellung anspruchsvoller Stahlkonstruktionen.",
      services: "Unsere Dienstleistungen",
      service1: "Stahlkonstruktionsplanung",
      service1Desc:
        "Statische Berechnungen und Erstellung von Projektdokumentation für Stahlkonstruktionen von Hallen, Brücken, Tragplattformen und anderen Konstruktionen nach geltenden Normen.",
      service2: "Werkstattfertigung",
      service2Desc:
        "Herstellung von Stahlkonstruktionselementen in unserer Werkstatt, ausgestattet mit modernen Maschinen zum Schneiden, Biegen und Schweißen von Stahl.",
      service3: "Vor-Ort-Montage",
      service3Desc:
        "Professionelle Montage von Stahlkonstruktionen an Standorten unter Verwendung geeigneter Ausrüstung und Einhaltung aller Sicherheitsvorschriften.",
      service4: "Korrosionsschutz",
      service4Desc:
        "Oberflächenvorbereitung und Aufbringung von Schutzbeschichtungen (Lackierung, Verzinkung) für langfristigen Korrosionsschutz.",
      whyChooseUs: "Warum uns wählen",
      reason1: "Zertifizierte Schweißer",
      reason1Desc: "Unsere Schweißer besitzen internationale Zertifikate für das Schweißen von Stahlkonstruktionen.",
      reason2: "Moderne Ausrüstung",
      reason2Desc:
        "Wir verwenden modernste Ausrüstung für die präzise Herstellung und Montage von Stahlkonstruktionen.",
      reason3: "Qualitätskontrolle",
      reason3Desc: "Jede Konstruktion durchläuft vor der Auslieferung eine strenge Qualitätskontrolle.",
      cta: "Kontaktieren Sie uns für die Projektrealisierung",
      projectsTitle: "Unsere Projekte",
      projectsSubtitle: "Abgeschlossene Projekte im Bereich Stahlkonstruktionen",
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
            ? ["Čelične Konstrukcije"]
            : language === "en"
              ? ["Steel Structures"]
              : ["Stahlkonstruktionen"]
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
