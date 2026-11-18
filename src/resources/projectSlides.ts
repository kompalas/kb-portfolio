import { getPosts } from "@/utils/utils";

export type ProjectSlide = {
  id: string;
  title: string;
  description: string;
  descriptionEl?: string;
  kind: "Research project" | "Coding project";
  language?: string;
  image?: string;
  projectUrl?: string;
  caseStudyUrl?: string;
};

const codingProjects: ProjectSlide[] = [
  {
    id: "coding-AxAgingAwareNetlists",
    title: "AxAgingAwareNetlists",
    description: "Aging-aware approximate netlists for arithmetic circuits and image processing benchmarks.",
    descriptionEl: "Netlist προσεγγιστικής αριθμητικής με επίγνωση της γήρανσης, για αριθμητικά κυκλώματα και επεξεργασία εικόνας.",
    kind: "Coding project",
    language: "SystemVerilog",
    projectUrl: "https://github.com/kompalas/AxAgingAwareNetlists",
  },
  {
    id: "coding-axcarbon",
    title: "axcarbon",
    description: "Automated GA-based generation of approximate FP MAC units.",
    descriptionEl: "Αυτοματοποιημένη παραγωγή μονάδων FP MAC με προσεγγιστική λειτουργία μέσω γενετικού αλγορίθμου.",
    kind: "Coding project",
    language: "SystemVerilog",
    projectUrl: "https://github.com/kompalas/axcarbon",
  },
  {
    id: "coding-flexaf",
    title: "flexaf",
    description: "Analog Features & Variation-Robust Training for Flexible Electronics.",
    descriptionEl: "Αναλογικά χαρακτηριστικά και εκπαίδευση ανθεκτική στις διακυμάνσεις για εύκαμπτα ηλεκτρονικά.",
    kind: "Coding project",
    language: "Jupyter Notebook",
    projectUrl: "https://github.com/kompalas/flexaf",
  },
  {
    id: "coding-floating-point-MAC",
    title: "floating-point-MAC",
    description: "RTL implementation of an FP MAC unit with approximate mantissa multiplication.",
    descriptionEl: "Υλοποίηση RTL μονάδας FP MAC με προσεγγιστικό πολλαπλασιασμό mantissa.",
    kind: "Coding project",
    language: "Verilog",
    projectUrl: "https://github.com/kompalas/floating-point-MAC",
  },
  {
    id: "coding-hetero-accel",
    title: "hetero-accel",
    description: "Design-space exploration for heterogeneous ASIC accelerator design and simulation.",
    descriptionEl: "Εξερεύνηση χώρου σχεδίασης και προσομοίωση ετερογενών επιταχυντών ASIC.",
    kind: "Coding project",
    language: "Python",
    projectUrl: "https://github.com/kompalas/hetero-accel",
  },
  {
    id: "coding-PrintedTrees",
    title: "PrintedTrees",
    description: "Automated generation of approximate decision-tree classifiers for area-optimized printed electronics.",
    descriptionEl: "Αυτοματοποιημένη παραγωγή προσεγγιστικών ταξινομητών δέντρων αποφάσεων για εκτυπωμένα ηλεκτρονικά βελτιστοποιημένα ως προς την επιφάνεια.",
    kind: "Coding project",
    language: "Verilog",
    projectUrl: "https://github.com/kompalas/PrintedTrees",
  },
];

export function getProjectSlides(): ProjectSlide[] {
  const greekDescriptions: Record<string, string> = {
    autopnn: "Αυτοματοποιημένο πλαίσιο HW/SW για συν-σχεδιασμό επιταχυντών edge AI και μοντέλων μηχανικής μάθησης αποδοτικών σε πόρους για εύκαμπτα ηλεκτρονικά.",
    "mannheim-cecas": "Επιταχυντής μηχανικής μάθησης και μοντέλα όρασης για AI κοντά στους αισθητήρες, με χρονοπρογραμματισμό εργασιών μεταξύ server οχήματος και edge SoC.",
    accross: "Έρευνα σε μειωμένα περιθώρια ασφαλείας κυκλωμάτων και αφηρημένα μοντέλα προσεγγιστικής υπολογιστικής στη μηχανική μάθηση.",
    "phd-cross-layer-approximation": "Διδακτορική έρευνα σε τεχνικές διαστρωματικής προσέγγισης για σύνθεση και βελτιστοποίηση επιταχυντών μηχανικής μάθησης.",
    smartbeeing: "Αλγόριθμος ψηφιακής επεξεργασίας ακουστικών σημάτων για ενσωματωμένους συνεπεξεργαστές.",
    ice: "Νευρωνικά δίκτυα για εφαρμογές επαυξημένης πραγματικότητας και ανάλυση προδιαγραφών.",
    safeschools: "Αλγόριθμοι συλλογής και προεπεξεργασίας δεδομένων για συστήματα προστασίας από σεισμούς.",
  };
  const researchProjects = getPosts(["src", "app", "work", "projects"])
    .sort((first, second) => first.metadata.title.localeCompare(second.metadata.title))
    .map((project) => ({
      id: `research-${project.slug}`,
      title: project.metadata.title,
      description: project.metadata.summary,
      descriptionEl: greekDescriptions[project.slug],
      kind: "Research project" as const,
      image: project.metadata.images[0],
      caseStudyUrl: `/work/${project.slug}`,
    }));

  return [...researchProjects, ...codingProjects];
}