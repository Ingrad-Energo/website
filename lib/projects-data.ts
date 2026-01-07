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
    image: "/projects/modern-heating-system-industrial-facility.jpg",
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
    image: "/projects/gas-pipeline-distribution-network.jpg",
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
    image: "/projects/hvac-system-commercial-building-interior.jpg",
    tags: {
      sr: ["Termotehnika", "HVAC"],
      en: ["Thermotechnical", "HVAC"],
      de: ["Thermotechnik", "HLK"],
    },
  },
  {
    title: {
      sr: "Liftovsko okno, Naučno-tehnološki park, Novi Sad",
      en: "Elevator shaft, Science and Technology Park, Novi Sad",
      de: "Aufzugsschacht, Wissenschafts- und Technologiepark, Novi Sad"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/science-park-elevator-shaft.jpg",
    tags: {
      sr: ["Čelične konstrukcije", "Inženjering"],
      en: ["Steel Structures", "Engineering"],
      de: ["Stahlkonstruktionen", "Engineering"]
    }
  },
  {
    title: {
      sr: "Sportski teren za padel, Novi Sad",
      en: "Padel sports court, Novi Sad",
      de: "Padel-Sportplatz, Novi Sad"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/padel-court-novi-sad.jpg",
    tags: {
      sr: ["Čelične konstrukcije", "Inženjering"],
      en: ["Steel Structures", "Engineering"],
      de: ["Stahlkonstruktionen", "Engineering"]
    }
  },
  {
    title: {
      sr: "Skladišni prostor, ThyssenKrupp, Indjija",
      en: "Warehouse space, ThyssenKrupp, Indjija",
      de: "Lagerfläche, ThyssenKrupp, Indjija"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/thyssenkrupp-warehouse-indjija.jpg",
    tags: {
      sr: ["Inženjering", "HVAC"],
      en: ["Engineering", "HVAC"],
      de: ["Engineering", "HVAC"]
    }
  },
  {
    title: {
      sr: "Distributivni gradski gasovod Skoplje -12k",
      en: "City gas distribution pipeline Skopje -12k",
      de: "Städtische Gasverteilungsleitung Skopje -12k"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/gas-pipeline-skopje.jpg",
    tags: {
      sr: ["Prirodni gas", "Distribucija", "Inženjering"],
      en: ["Natural Gas", "Distribution", "Engineering"],
      de: ["Erdgas", "Verteilung", "Engineering"]
    }
  },
  {
    title: {
      sr: "Minth Automotive Europe d.o.o.- Merno-regulaciona oprema tehnoloških potrošača u Loznici",
      en: "Minth Automotive Europe d.o.o.- Measuring and control equipment for technological consumers in Loznica",
      de: "Minth Automotive Europe d.o.o.- Mess- und Regeltechnik für technologische Verbraucher in Loznica"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/minth-automotive-loznica.jpg",
    tags: {
      sr: ["Inženjering", "HVAC", "Konsalting"],
      en: ["Engineering", "HVAC", "Consulting"],
      de: ["Engineering", "HLK", "Beratung"]
    }
  },
  {
    title: {
      sr: "NTP, Novi Sad- grejanje, hladjenje i ventilacija, instalacije ViK",
      en: "STP, Novi Sad- heating, cooling and ventilation, water and sewage installations",
      de: "NTP, Novi Sad- Heizung, Kühlung und Lüftung, Wasser- und Abwasserinstallationen"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/ntp-novi-sad-hvac.jpg",
    tags: {
      sr: ["HVAC", "Inženjering", "Termotehnika"],
      en: ["HVAC", "Engineering", "Thermotechnical"],
      de: ["HLK", "Engineering", "Thermotechnik"]
    }
  },
  {
    title: {
      sr: "Fudbalski stadion Lagator, Loznica- grejanje, hladjenje i ventilacija sa grejanjem terena. Instalacije ViK",
      en: "Lagator Football Stadium, Loznica- heating, cooling and ventilation with pitch heating. Water and sewage installations",
      de: "Fußballstadion Lagator, Loznica- Heizung, Kühlung und Lüftung mit Rasenheizung. Wasser- und Abwasserinstallationen"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/lagator-stadium-loznica.jpg",
    tags: {
      sr: ["HVAC", "Inženjering", "Termotehnika"],
      en: ["HVAC", "Engineering", "Thermotechnical"],
      de: ["HLK", "Engineering", "Thermotechnik"]
    }
  },
  {
    title: {
      sr: "Železnička stanica Prokop i Novi Beograd- grejanje i hlađenje sa hlađenjem tehnološke opreme komunikacionog čvorišta",
      en: "Railway stations Prokop and Novi Beograd- heating and cooling with technological equipment cooling for the communication hub",
      de: "Bahnhöfe Prokop und Novi Beograd- Heizung und Kühlung mit Kühlung der technologischen Ausrüstung des Kommunikationsknotenpunkts"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/railway-stations-belgrade.jpg",
    tags: {
      sr: ["HVAC", "Inženjering", "Termotehnika"],
      en: ["HVAC", "Engineering", "Thermotechnical"],
      de: ["HLK", "Engineering", "Thermotechnik"]
    }
  },
  {
    title: {
      sr: "Golden Lady Loznica-grejanje, hlađenje i ventilacija sa održavanjem vlažnosti proizvodnog pogona u Loznici. Prirodni gas i toplotne pumpe vazduh-voda",
      en: "Golden Lady Loznica- heating, cooling and ventilation with humidity control for the production plant in Loznica. Natural gas and air-to-water heat pumps",
      de: "Golden Lady Loznica- Heizung, Kühlung und Lüftung mit Feuchtigkeitsregulierung der Produktionshalle in Loznica. Erdgas und Luft-Wasser-Wärmepumpen"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/golden-lady-production-plant.jpg",
    tags: {
      sr: ["HVAC", "Inženjering", "Termotehnika", "Prirodni gas"],
      en: ["HVAC", "Engineering", "Thermotechnical", "Natural Gas"],
      de: ["HLK", "Engineering", "Thermotechnik", "Erdgas"]
    }
  },
  {
    title: {
      sr: "Farmakom- parna kotlarnica na mazut, razvod pare i povratak kondezata",
      en: "Farmakom- heavy fuel oil (mazut) steam boiler room, steam distribution and condensate return",
      de: "Farmakom- Dampfkesselanlage auf Schwerölbasis, Dampfverteilung und Kondensatrückführung"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/farmakom-steam-boiler.jpg",
    tags: {
      sr: ["Termoenergetika", "Inženjering", "Termotehnika"],
      en: ["Thermal Energy", "Engineering", "Thermotechnical"],
      de: ["Wärmeenergie", "Engineering", "Thermotechnik"]
    }
  },
  {
    title: {
      sr: "MHE Vučje- demontaža postojećeg cevovoda sa montažom novog cevovoda DN600 od akumulacionog bazena do turbinskih postrojenja",
      en: "SHPP Vucje- dismantling of the existing pipeline and installation of a new DN600 pipeline from the storage reservoir to the turbine plants",
      de: "Kleinwasserkraftwerk Vucje- Demontage der bestehenden Rohrleitung und Montage einer neuen Rohrleitung DN600 vom Speicherbecken bis zu den Turbinenanlagen"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/hydropower-vucje-pipeline.jpg",
    tags: {
      sr: ["Inženjering", "Termoenergetika"],
      en: ["Engineering", "Thermal Energy"],
      de: ["Engineering", "Wärmeenergie"]
    }
  },
  {
    title: {
      sr: "ELEM TE Oslomej, Kičevo- Zamena cevnih lukova RB linije pregrejane pare",
      en: "ELEM TPP Oslomej, Kicevo- Replacement of pipe bends on the RB superheated steam line",
      de: "ELEM TE Oslomej, Kicevo- Austausch von Rohrbögen der RB-Überhitztdampfleitung"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/thermal-plant-oslomej.jpg",
    tags: {
      sr: ["Termoenergetika", "Inženjering"],
      en: ["Thermal Energy", "Engineering"],
      de: ["Wärmeenergie", "Engineering"]
    }
  },
  {
    title: {
      sr: "HE Matka- montaža reverzibilnog cevovoda DN2500",
      en: "HPP Matka- installation of a DN2500 reversible pipeline",
      de: "Wasserkraftwerk Matka- Montage der reversiblen Rohrleitung DN2500"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/hydropower-matka-pipeline.jpg",
    tags: {
      sr: ["Inženjering", "Termoenergetika"],
      en: ["Engineering", "Thermal Energy"],
      de: ["Engineering", "Wärmeenergie"]
    }
  },
  {
    title: {
      sr: "HK WALSUM- Montaža gasnog reaktora- DeNOX",
      en: "HK WALSUM- Installation of a gas reactor- DeNOX",
      de: "HK WALSUM- Montage des Gasreaktors- DeNOX"
    },
    desc: {
      sr: "",
      en: "",
      de: ""
    },
    image: "/projects/gas-reactor-denox-walsum.jpg",
    tags: {
      sr: ["Inženjering", "Termoenergetika", "Prirodni gas"],
      en: ["Engineering", "Thermal Energy", "Natural Gas"],
      de: ["Engineering", "Wärmeenergie", "Erdgas"]
    }
  }
]
