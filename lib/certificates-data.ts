export interface Certificate {
  id: string
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
  image: {
    sr: string
    en: string
    de: string
  }
  pdf: {
    sr: string
    en: string
    de: string
  }
}

export const certificatesData: Certificate[] = [
  {
    id: "um",
    title: {
      sr: "ISO 14001 - Zaštita Životne Sredine",
      en: "ISO 14001 - Environmental Management",
      de: "ISO 14001 - Umweltmanagement",
    },
    desc: {
      sr: "Sistem upravljanja zaštitom životne sredine",
      en: "Environmental management system certification",
      de: "Umweltmanagementsystem-Zertifizierung",
    },
    image: {
      sr: "/certificates/um_sr.png",
      en: "/certificates/um_en.png",
      de: "/certificates/um_de.png",
    },
    pdf: {
      sr: "/certificates/um_sr.pdf",
      en: "/certificates/um_en.pdf",
      de: "/certificates/um_de.pdf",
    },
  },
  {
    id: "45001_24",
    title: {
      sr: "ISO 45001:2024 - Bezbednost i Zdravlje na Radu",
      en: "ISO 45001:2024 - Occupational Health & Safety",
      de: "ISO 45001:2024 - Arbeitsschutz",
    },
    desc: {
      sr: "Sistem upravljanja zaštitom zdravlja i bezbednosti na radu",
      en: "Occupational health and safety management system",
      de: "Arbeitsschutzmanagementsystem",
    },
    image: {
      sr: "/certificates/45001_24_sr.png",
      en: "/certificates/45001_24_en.png",
      de: "/certificates/45001_24_de.png",
    },
    pdf: {
      sr: "/certificates/45001_24_sr.pdf",
      en: "/certificates/45001_24_en.pdf",
      de: "/certificates/45001_24_de.pdf",
    },
  },
  {
    id: "qm_24",
    title: {
      sr: "ISO 9001:2024 - Menadžment Kvalitetom",
      en: "ISO 9001:2024 - Quality Management",
      de: "ISO 9001:2024 - Qualitätsmanagement",
    },
    desc: {
      sr: "Sistem upravljanja kvalitetom",
      en: "Quality management system certification",
      de: "Qualitätsmanagementsystem-Zertifizierung",
    },
    image: {
      sr: "/certificates/qm_24_sr.png",
      en: "/certificates/qm_24_en.png",
      de: "/certificates/qm_24_de.png",
    },
    pdf: {
      sr: "/certificates/qm_24_sr.pdf",
      en: "/certificates/qm_24_en.pdf",
      de: "/certificates/qm_24_de.pdf",
    },
  },
  {
    id: "rev_scc_24",
    title: {
      sr: "SCC 2024 - Bezbednost",
      en: "SCC 2024 - Safety",
      de: "SCC 2024 - Sicherheit",
    },
    desc: {
      sr: "Sertifikat bezbednosti i upravljanja rizicima",
      en: "Safety certification and risk management",
      de: "Sicherheitszertifizierung und Risikomanagement",
    },
    image: {
      sr: "/certificates/rev_scc_24_sr.png",
      en: "/certificates/rev_scc_24_en.png",
      de: "/certificates/rev_scc_24_de.png",
    },
    pdf: {
      sr: "/certificates/rev_scc_24_sr.pdf",
      en: "/certificates/rev_scc_24_en.pdf",
      de: "/certificates/rev_scc_24_de.pdf",
    },
  },
]
