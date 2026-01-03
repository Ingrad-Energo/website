export interface Project {
  title: {
    sr: string
    en: string
    de: string
  }
  desc: {
    sr: string
    en: string
    de: string
  }
  image: string
  tags: {
    sr: string[]
    en: string[]
    de: string[]
  }
}

export const projectsData: Project[] = [
  {
    title: {
      sr: "Rekonstrukcija Toplane",
      en: "Heating Plant Reconstruction",
      de: "Heizwerk-Rekonstruktion",
    },
    desc: {
      sr: "Kompletna rekonstrukcija toplane kapaciteta 15 MW, uključujući modernizaciju kotlovskog postrojenja i sistema distribucije toplote.",
      en: "Complete reconstruction of a 15 MW heating plant, including modernization of boiler facilities and heat distribution system.",
      de: "Vollständige Rekonstruktion eines 15-MW-Heizwerks, einschließlich Modernisierung der Kesselanlagen und des Wärmeverteilungssystems.",
    },
    image: "/modern-heating-system-industrial-facility.jpg",
    tags: {
      sr: ["Termoenergetika", "Inženjering", "Termotehnika"],
      en: ["Thermal Energy", "Engineering", "Thermotechnical"],
      de: ["Wärmeenergie", "Engineering", "Thermotechnik"],
    },
  },
  {
    title: {
      sr: "Gasna Distributivna Mreža",
      en: "Gas Distribution Network",
      de: "Gasverteilungsnetz",
    },
    desc: {
      sr: "Izgradnja gasne distributivne mreže ukupne dužine preko 8 km sa priključcima za stambene i industrijske objekte.",
      en: "Construction of a gas distribution network with a total length of over 8 km with connections for residential and industrial facilities.",
      de: "Bau eines Gasverteilungsnetzes mit einer Gesamtlänge von über 8 km mit Anschlüssen für Wohn- und Industrieanlagen.",
    },
    image: "/gas-pipeline-distribution-network.jpg",
    tags: {
      sr: ["Prirodni Gas", "Distribucija"],
      en: ["Natural Gas", "Distribution"],
      de: ["Erdgas", "Verteilung"],
    },
  },
  {
    title: {
      sr: "Poslovni Centar - HVAC",
      en: "Business Center - HVAC",
      de: "Geschäftszentrum - HLK",
    },
    desc: {
      sr: "Kompletna termotehnička instalacija za poslovni centar površine 12.000 m² sa sistemom grejanja, hlađenja i ventilacije.",
      en: "Complete thermotechnical installation for a 12,000 m² business center with heating, cooling and ventilation system.",
      de: "Vollständige thermotechnische Installation für ein 12.000 m² Geschäftszentrum mit Heizungs-, Kühl- und Lüftungssystem.",
    },
    image: "/hvac-system-commercial-building-interior.jpg",
    tags: {
      sr: ["Termotehnika", "HVAC"],
      en: ["Thermotechnical", "HVAC"],
      de: ["Thermotechnik", "HLK"],
    },
  },
]
