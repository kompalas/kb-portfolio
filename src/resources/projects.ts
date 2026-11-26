export type ProjectCitation = {
  title: string;
  url: string;
};

export type ProjectDetailBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

export type Project = {
  id: string;
  title: string;
  kind: "research" | "code";
  period: string;
  periodEl: string;
  role: string;
  roleEl: string;
  link: string;
  image: string;
  description: string;
  descriptionEl: string;
  roleDescription: string;
  roleDescriptionEl: string;
  details: string;
  detailsEl: string;
  detailsContent?: { en: ProjectDetailBlock[]; el: ProjectDetailBlock[] };
  citation?: ProjectCitation;
  downloadUrl?: string;
};

export const projects: Project[] = [
  {
    id: "autopnn",
    title: "AutoPNN",
    kind: "research",
    period: "Jul 2024 - Oct 2025",
    periodEl: "Ιούλ 2024 - Οκτ 2025",
    role: "Research Team Leader",
    roleEl: "Επικεφαλής Ερευνητικής Ομάδας",
    link: "https://autopnn.github.io",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1jV4heYMcd5wU8uG15kOlVEFXVmJRqHK1",
    image: "/images/projects/autopnn/logo.jpg",
    description:
      "Printed electronics can put intelligence on smart packaging, diagnostic strips and wearable patches, but their large feature sizes and limited power make conventional machine-learning circuits difficult to build. AutoPNN develops an automated design flow for printed neural networks that coordinates model exploration, neural-network simplification and hardware approximation to meet user-defined accuracy, area and energy constraints. As team leader at the University of Patras, I led the group developing this software-hardware co-design approach.",
    descriptionEl:
      "Τα εκτυπωμένα ηλεκτρονικά μπορούν να προσθέσουν υπολογιστικές δυνατότητες σε έξυπνες συσκευασίες, διαγνωστικές ταινίες και φορετά επιθέματα, όμως οι μεγάλες διαστάσεις των στοιχείων και οι περιορισμένες πηγές ενέργειας δυσκολεύουν την υλοποίηση κυκλωμάτων μηχανικής μάθησης. Το AutoPNN αναπτύσσει μια αυτοματοποιημένη ροή σχεδιασμού εκτυπωμένων νευρωνικών δικτύων, συνδυάζοντας την εξερεύνηση μοντέλων, την απλοποίηση νευρωνικών δικτύων και την εφαρμογή προσεγγιστικών τεχνικών στο υλικό, ώστε να ικανοποιούνται οι περιορισμοί ακρίβειας, επιφάνειας και ενέργειας. Ως επικεφαλής ομάδας στο Πανεπιστήμιο Πατρών, συντόνισα την ανάπτυξη αυτής της μεθόδου συν-σχεδιασμού λογισμικού και υλικού.",
    roleDescription:
      "I led the team working on AutoPNN at the University of Patras, focusing on hardware-aware neural architecture search and approximate hardware design.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο AutoPNN στο Πανεπιστήμιο Πατρών, εστιάζοντας στην αναζήτηση νευρωνικών αρχιτεκτονικών με επίγνωση υλικού και στον προσεγγιστικό σχεδιασμό υλικού.",
    details:
      "The framework's online optimization combines hardware-aware neural architecture search with neural minimization and hardware-approximation search. Offline tooling supplies libraries of approximate arithmetic units, hardware templates and surrogate models for area and accuracy, avoiding prohibitively expensive synthesis and simulation for every candidate. The project also investigates voltage scaling and extends the flow beyond conventional MLPs to other classifier and implementation styles. The goal is practical, battery-powered printed ML within explicit user and technology constraints.",
    detailsEl:
      "Η διαδικασία βελτιστοποίησης συνδυάζει αναζήτηση νευρωνικών αρχιτεκτονικών με επίγνωση υλικού, απλοποίηση των νευρωνικών δικτύων και αναζήτηση προσεγγιστικών υλοποιήσεων. Η υποστηρικτική υποδομή περιλαμβάνει βιβλιοθήκες προσεγγιστικών αριθμητικών μονάδων, πρότυπα υλικού και μοντέλα εκτίμησης επιφάνειας και ακρίβειας, ώστε να αποφεύγονται οι ιδιαίτερα χρονοβόρες συνθέσεις και προσομοιώσεις για κάθε υποψήφια λύση. Το έργο εξετάζει επίσης κλιμάκωση τάσης και επεκτείνει τη ροή πέρα από τα συμβατικά MLP, με στόχο πρακτικούς, αυτόνομους ταξινομητές για εκτυπωμένα ηλεκτρονικά και σαφείς περιορισμούς τεχνολογίας και εφαρμογής.",
  },
  {
    id: "flexaf",
    title: "FlexAf",
    kind: "code",
    period: "Jul 2025 - Sep 2025",
    periodEl: "Ιούλ 2025 - Σεπ 2025",
    role: "Head Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/flexaf",
    image: "/images/projects/flexaf/system.png",
    description:
      "Flexible wearable sensors have tight limits on area, power and integration density, and extracting every possible signal can cost more than classifying it. FlexAf makes feature selection part of neural-network training: learnable stochastic gates select useful measurements while a cost-aware objective accounts for the hardware area of extracting them. It is a software framework for co-optimizing the sensor's inputs and classifier in mixed-signal healthcare wearables.",
    descriptionEl:
      "Οι εύκαμπτοι φορετοί αισθητήρες έχουν αυστηρούς περιορισμούς επιφάνειας, ενέργειας και ολοκλήρωσης, ενώ η εξαγωγή όλων των πιθανών σημάτων μπορεί να κοστίζει περισσότερο από την ίδια την ταξινόμηση. Το FlexAf ενσωματώνει την επιλογή χαρακτηριστικών στην εκπαίδευση του νευρωνικού δικτύου: στοχαστικές, εκπαιδεύσιμες πύλες επιλέγουν τις χρήσιμες μετρήσεις και μια συνάρτηση κόστους λαμβάνει υπόψη την επιφάνεια υλικού που απαιτεί η εξαγωγή τους. Πρόκειται για πλαίσιο συν-βελτιστοποίησης των εισόδων του αισθητήρα και του ταξινομητή για μικτά αναλογικά και ψηφιακά συστήματα υγείας.",
    roleDescription:
      "I designed and implemented FlexAf, a TensorFlow framework for differentiable feature selection and hardware-aware neural-network training.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το FlexAf, ένα πλαίσιο TensorFlow για διαφορίσιμη επιλογή χαρακτηριστικών και εκπαίδευση νευρωνικών δικτύων με επίγνωση υλικού.",
    details:
      "The framework uses Gumbel-Sigmoid gates to make discrete feature choices trainable with gradient-based optimization. Per-feature lookup-table costs let training account for analog feature-extraction hardware instead of optimizing only the digital classifier. Learned gates can be thresholded to produce a compact feature set, with optional lottery-ticket pruning for further model reduction. The associated ICCAD work presents a broader mixed-signal feature-to-classifier co-design flow, including analog feature extractors and evaluation on healthcare benchmarks.",
    detailsEl:
      "Το πλαίσιο χρησιμοποιεί πύλες Gumbel-Sigmoid, ώστε οι διακριτές επιλογές χαρακτηριστικών να μπορούν να βελτιστοποιούνται με κλίσεις. Πίνακες κόστους ανά χαρακτηριστικό επιτρέπουν στην εκπαίδευση να συνυπολογίζει το αναλογικό υλικό εξαγωγής χαρακτηριστικών και όχι μόνο τον ψηφιακό ταξινομητή. Οι πύλες μπορούν να κατωφλιωθούν για την παραγωγή ενός μικρού συνόλου εισόδων, ενώ προαιρετική αραίωση τύπου lottery ticket μειώνει περαιτέρω το μοντέλο. Η σχετική εργασία στο ICCAD παρουσιάζει ευρύτερη μικτή αναλογική-ψηφιακή ροή συν-σχεδιασμού, αναλογικούς εξαγωγείς χαρακτηριστικών και αξιολόγηση σε εφαρμογές υγείας.",
    citation: {
      title:
        "Feature-to-Classifier Co-Design for Mixed-Signal Smart Flexible Wearables for Healthcare at the Extreme Edge",
      url: "https://doi.org/10.1109/ICCAD66269.2025.11240680",
    },
  },
  {
    id: "mannheim-cecas",
    title: "MANNHEIM-CeCaS",
    kind: "research",
    period: "Jul 2023 - Jun 2024",
    periodEl: "Ιούλ 2023 - Ιούν 2024",
    role: "Research Associate",
    roleEl: "Ερευνητικός Συνεργάτης",
    link: "https://elektronikforschung.de/projekte/mannheim-cecas",
    image: "/images/projects/cecas/car.jpg",
    description:
      "Modern vehicles distribute functions across many electronic control units, creating growing integration and software-complexity challenges. MANNHEIM-CeCaS developed the concept of a standardized, modular central car server: a high-performance computing platform integrated with zonal vehicle architecture and designed for the safety and reliability demands of automated driving. Within the consortium of 29 partners, my work at KIT focused on AI models, accelerators and the allocation of neural-network workloads between central and edge compute.",
    descriptionEl:
      "Τα σύγχρονα οχήματα κατανέμουν τις λειτουργίες τους σε πολλές ηλεκτρονικές μονάδες ελέγχου, γεγονός που αυξάνει την πολυπλοκότητα της ολοκλήρωσης και του λογισμικού. Το MANNHEIM-CeCaS ανέπτυξε την ιδέα ενός τυποποιημένου, αρθρωτού κεντρικού υπολογιστή οχήματος, ενσωματωμένου σε ζωνική αρχιτεκτονική και σχεδιασμένου για τις απαιτήσεις ασφάλειας και αξιοπιστίας της αυτοματοποιημένης οδήγησης. Στην κοινοπραξία των 29 εταίρων, η εργασία μου στο KIT εστίασε σε μοντέλα τεχνητής νοημοσύνης, επιταχυντές και κατανομή νευρωνικών εργασιών μεταξύ κεντρικού και περιφερειακού υπολογισμού.",
    details:
      "The project brought together automotive, semiconductor and research partners to validate a scalable compute platform spanning real-time zonal nodes and central high-performance computing. My team developed sensor-side computer-vision, segmentation and detection models, explored their hardware acceleration, and worked on scheduling inference across a central vehicle server and an edge SoC. The consortium presented its central-car-server results at its final technical review in November 2025.",
    detailsEl:
      "Το έργο ένωσε εταίρους από την αυτοκινητοβιομηχανία, τους ημιαγωγούς και την έρευνα για την επικύρωση μιας κλιμακούμενης πλατφόρμας υπολογισμού, από κόμβους πραγματικού χρόνου στις ζώνες του οχήματος έως κεντρικό υπολογισμό υψηλών επιδόσεων. Η ομάδα μου ανέπτυξε μοντέλα υπολογιστικής όρασης, τμηματοποίησης και ανίχνευσης κοντά στους αισθητήρες, διερεύνησε την επιτάχυνσή τους στο υλικό και εργάστηκε στον χρονοπρογραμματισμό συμπερασμού μεταξύ κεντρικού server οχήματος και edge SoC. Η κοινοπραξία παρουσίασε τα αποτελέσματα του κεντρικού υπολογιστή οχήματος στην τελική τεχνική αξιολόγηση τον Νοέμβριο του 2025.",
    roleDescription:
      "As a research associate at Karlsruhe Institute of Technology, I contributed to sensor-side AI models, accelerator design and workload scheduling for highly automated driving.",
    roleDescriptionEl:
      "Ως ερευνητικός συνεργάτης στο Ινστιτούτο Τεχνολογίας της Καρλσρούης, συνέβαλα σε μοντέλα τεχνητής νοημοσύνης κοντά στους αισθητήρες, στον σχεδιασμό επιταχυντών και στον χρονοπρογραμματισμό εργασιών για αυτοματοποιημένη οδήγηση.",
  },
  {
    id: "hetero-accel",
    title: "HeteroAccel",
    kind: "code",
    period: "Nov 2023 - Jun 2024",
    periodEl: "Νοέ 2023 - Ιούν 2024",
    role: "Head Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/hetero-accel",
    image: "/images/projects/heteroaccel/system.png",
    description:
      "When a chip has to run several neural networks at once, a single accelerator design rarely suits all of them. HeteroAccel searches for a set of different accelerators and a schedule for a given multi-network workload, using simulated annealing on top of Timeloop-Accelergy models to minimize energy-delay product.",
    descriptionEl:
      "Όταν ένα τσιπ πρέπει να εκτελεί πολλά νευρωνικά δίκτυα ταυτόχρονα, μία μόνο αρχιτεκτονική επιταχυντή σπάνια είναι κατάλληλη για όλα. Το HeteroAccel αναζητά ένα σύνολο διαφορετικών επιταχυντών και ένα χρονοπρόγραμμα για συγκεκριμένο φόρτο πολλών δικτύων, χρησιμοποιώντας simulated annealing πάνω σε μοντέλα Timeloop-Accelergy για ελαχιστοποίηση του γινόμενου ενέργειας-καθυστέρησης.",
    roleDescription:
      "I designed and implemented HeteroAccel, a framework for co-designing accelerator architectures and DNN schedules for multi-network workloads.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το HeteroAccel, ένα πλαίσιο για συν-σχεδιασμό αρχιτεκτονικών επιταχυντών και χρονοπρογραμμάτων νευρωνικών δικτύων για φόρτους πολλών δικτύων.",
    details:
      "A simulated-annealing search co-optimizes accelerator configurations and DNN task schedules against energy-delay product. Timeloop-Accelergy provides architecture and energy modeling; the repository includes workload and optimizer configuration, a homogeneous multi-accelerator baseline and a comparison with HDA-Q. The resulting design-space exploration reports estimated latency, energy and area for heterogeneous multi-network workloads.",
    detailsEl:
      "Η αναζήτηση simulated annealing συν-βελτιστοποιεί τις διαμορφώσεις επιταχυντών και τον χρονοπρογραμματισμό εργασιών νευρωνικών δικτύων με κριτήριο το γινόμενο ενέργειας-καθυστέρησης. Το Timeloop-Accelergy παρέχει μοντελοποίηση αρχιτεκτονικής και ενέργειας, ενώ το αποθετήριο περιλαμβάνει διαμορφώσεις φόρτων και βελτιστοποιητή, ομογενή βάση σύγκρισης και αξιολόγηση έναντι της μεθόδου HDA-Q. Η εξερεύνηση σχεδιασμού εκτιμά καθυστέρηση, ενέργεια και επιφάνεια για ετερογενείς φόρτους πολλών δικτύων.",
    citation: {
      title: "Heterogeneous Accelerator Design for Multi-DNN Workloads via Heuristic Optimization",
      url: "https://doi.org/10.1109/LES.2024.3443628",
    },
  },
  {
    id: "accross",
    title: "ACCROSS",
    kind: "research",
    period: "Jun 2022 - Jun 2023",
    periodEl: "Ιούν 2022 - Ιούν 2023",
    role: "Research Associate",
    roleEl: "Ερευνητικός Συνεργάτης",
    link: "https://gepris.dfg.de/gepris/projekt/428566201",
    image: "/images/projects/accross/logo.png",
    description:
      "Chips are designed with generous safety margins so that they keep working in the worst case, and those margins cost energy and speed. ACCROSS studies approximate computing across the whole system stack, from applications down to circuits, including reduced design margins and ways to measure the resulting error.",
    descriptionEl:
      "Τα τσιπ σχεδιάζονται με σημαντικά περιθώρια ασφάλειας ώστε να λειτουργούν στη χειρότερη περίπτωση και αυτά τα περιθώρια αυξάνουν την ενέργεια και μειώνουν την ταχύτητα. Το ACCROSS μελετά την προσεγγιστική υπολογιστική σε όλο το σύστημα, από τις εφαρμογές μέχρι τα κυκλώματα, συμπεριλαμβανομένων των μειωμένων περιθωρίων σχεδιασμού και των μεθόδων μέτρησης του αντίστοιχου σφάλματος.",
    details:
      "The DFG-funded collaboration investigated approximate computing from application and system models down to circuit-level design. It explored how reduced timing margins, run-time monitoring and cross-layer error models can expose efficiency opportunities while keeping application-level quality within acceptable bounds.",
    detailsEl:
      "Η συνεργασία που χρηματοδοτήθηκε από το DFG μελέτησε την προσεγγιστική υπολογιστική από τα μοντέλα εφαρμογών και συστημάτων έως τον σχεδιασμό κυκλωμάτων. Διερεύνησε πώς τα μειωμένα περιθώρια χρονισμού, η παρακολούθηση κατά την εκτέλεση και τα διαστρωματικά μοντέλα σφάλματος μπορούν να βελτιώσουν την αποδοτικότητα, διατηρώντας την ποιότητα της εφαρμογής σε αποδεκτά επίπεδα.",
    roleDescription:
      "As a research associate at Karlsruhe Institute of Technology, I contributed to cross-layer approximate computing and the connection between software, system and circuit models.",
    roleDescriptionEl:
      "Ως ερευνητικός συνεργάτης στο Ινστιτούτο Τεχνολογίας της Καρλσρούης, συνέβαλα στη διαστρωματική προσεγγιστική υπολογιστική και στη σύνδεση μοντέλων λογισμικού, συστημάτων και κυκλωμάτων.",
  },
  {
    id: "ax-aging-aware-netlists",
    title: "AxAgingAwareNetlists",
    kind: "code",
    period: "Sep 2021 - Apr 2022",
    periodEl: "Σεπ 2021 - Απρ 2022",
    role: "Principal Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/AxAgingAwareNetlists",
    image: "/images/projects/agingnetlists/system.png",
    description:
      "Transistors age, and designers normally cover that with extra timing margin that costs energy from day one. This repository contains approximate circuit netlists evolved with a genetic algorithm to absorb aging while preserving useful circuit behavior.",
    descriptionEl:
      "Τα τρανζίστορ γερνούν και οι σχεδιαστές συνήθως καλύπτουν αυτή την επίδραση με επιπλέον περιθώριο χρονισμού που αυξάνει την ενέργεια από την αρχή. Αυτό το αποθετήριο περιέχει προσεγγιστικά netlists κυκλωμάτων που παράγονται με γενετικό αλγόριθμο ώστε να αντιμετωπίζουν τη γήρανση διατηρώντας χρήσιμη συμπεριφορά.",
    roleDescription:
      "I led the team working on the AxAgingAwareNetlists project, focusing on developing approximate circuit designs that can adapt to aging effects.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο έργο AxAgingAwareNetlists, εστιάζοντας στην ανάπτυξη προσεγγιστικών σχεδίων κυκλωμάτων που μπορούν να προσαρμόζονται στις επιδράσεις της γήρανσης.",
    details:
      "The project applies genetic-algorithm-driven design approximation to account for circuit aging effects while balancing functional error and hardware cost. The repository keeps baseline circuits alongside approximate netlists both before and after synthesis, making it possible to inspect and reproduce the generated designs. It accompanies research on automated approximation as a way to overcome aging-related degradation.",
    detailsEl:
      "Το έργο εφαρμόζει προσεγγιστικό σχεδιασμό με γενετικό αλγόριθμο, λαμβάνοντας υπόψη τη γήρανση των κυκλωμάτων και εξισορροπώντας το λειτουργικό σφάλμα με το κόστος υλικού. Το αποθετήριο διατηρεί τα αρχικά κυκλώματα αναφοράς και τα προσεγγιστικά netlists πριν και μετά τη σύνθεση, ώστε τα παραγόμενα σχέδια να μπορούν να επιθεωρηθούν και να αναπαραχθούν. Συνοδεύει την έρευνα για την αυτοματοποιημένη προσέγγιση ως τρόπο αντιμετώπισης της υποβάθμισης λόγω γήρανσης.",
    citation: {
      title: "Automated Design Approximation to Overcome Circuit Aging",
      url: "https://doi.org/10.1109/TCSI.2021.3106149",
    },
  },
  {
    id: "printed-trees",
    title: "PrintedTrees",
    kind: "code",
    period: "Dec 2021 - Mar 2022",
    periodEl: "Δεκ 2021 - Μάρ 2022",
    role: "Head Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/PrintedTrees",
    image: "/images/projects/printedtrees/system.png",
    description:
      "A decision tree is about the simplest classifier you can build in hardware, a chain of comparisons, but in printed electronics every comparator counts. PrintedTrees uses NSGA-II to tune tree thresholds, reduce comparator count and generate synthesizable Verilog.",
    descriptionEl:
      "Το δέντρο αποφάσεων είναι από τους απλούστερους ταξινομητές υλικού, μια ακολουθία συγκρίσεων, αλλά στα εκτυπωμένα ηλεκτρονικά κάθε συγκριτής μετράει. Το PrintedTrees χρησιμοποιεί NSGA-II για ρύθμιση των ορίων του δέντρου, μείωση του αριθμού συγκριτών και παραγωγή συνθέσιμου Verilog.",
    roleDescription:
      "I designed and implemented PrintedTrees, a framework for evolving decision trees for printed electronics with a focus on minimizing comparator count while maintaining classification accuracy.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το PrintedTrees, ένα πλαίσιο για την παραγωγή δέντρων αποφάσεων για εκτυπωμένα ηλεκτρονικά με έμφαση στη μείωση του αριθμού συγκριτών διατηρώντας την ακρίβεια ταξινόμησης.",
    details:
      "PrintedTrees applies multi-objective NSGA-II search to balance classification accuracy against comparator count, a key driver of area in printed decision logic. It uses an EGFET printed-electronics design kit and generates synthesizable Verilog for the selected candidate trees. The work explores how approximate threshold choices can make useful classifiers feasible in tiny, low-power printed circuits.",
    detailsEl:
      "Το PrintedTrees χρησιμοποιεί πολυκριτηριακή αναζήτηση NSGA-II για να εξισορροπεί την ακρίβεια ταξινόμησης με τον αριθμό συγκριτών, βασικό παράγοντα της επιφάνειας στη λογική δέντρων αποφάσεων. Αξιοποιεί πακέτο σχεδιασμού εκτυπωμένων ηλεκτρονικών EGFET και παράγει συνθέσιμο Verilog για τα επιλεγμένα δέντρα. Η εργασία εξετάζει πώς η προσεγγιστική επιλογή ορίων μπορεί να καταστήσει εφικτούς χρήσιμους ταξινομητές σε μικροσκοπικά κυκλώματα χαμηλής ισχύος.",
    citation: {
      title:
        "Approximate Decision Trees for Machine Learning Classification on Tiny Printed Circuits",
      url: "https://doi.org/10.1109/ISQED54688.2022.9806213",
    },
  },
  {
    id: "axcarbon",
    title: "AxCarbon",
    kind: "code",
    period: "Jan 2024 - May 2024",
    periodEl: "Ιαν 2024 - Μάιος 2024",
    role: "Head Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/axcarbon",
    image: "/images/projects/axcarbon/system.png",
    description:
      "DNN accelerators have an environmental cost as well as a performance and energy cost. AxCarbon explores approximate arithmetic hardware as a way to reduce accelerator footprint: it evolves pruned multipliers, adders and multiply-accumulate units, then evaluates their effect on hardware cost and model quality. The project connects gate-level approximation with carbon-aware accelerator design.",
    descriptionEl:
      "Οι επιταχυντές νευρωνικών δικτύων έχουν περιβαλλοντικό αποτύπωμα, πέρα από το κόστος επίδοσης και ενέργειας. Το AxCarbon διερευνά το προσεγγιστικό αριθμητικό υλικό ως τρόπο μείωσης του αποτυπώματος των επιταχυντών: παράγει μέσω γενετικής αναζήτησης αραιωμένους πολλαπλασιαστές, αθροιστές και μονάδες πολλαπλασιασμού-συσσώρευσης και αξιολογεί την επίδρασή τους στο κόστος υλικού και στην ποιότητα του μοντέλου. Το έργο συνδέει την προσέγγιση σε επίπεδο πυλών με τον σχεδιασμό επιταχυντών που λαμβάνει υπόψη τις εκπομπές άνθρακα.",
    roleDescription:
      "I designed and implemented AxCarbon, a framework for evolving approximate arithmetic circuits and evaluating their trade-offs in power, area, performance and accuracy.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το AxCarbon, ένα πλαίσιο για την παραγωγή προσεγγιστικών αριθμητικών κυκλωμάτων και την αξιολόγηση των ανταγωνισμών τους σε ισχύ, επιφάνεια, απόδοση και ακρίβεια.",
    details:
      "The research uses gate-level pruning and precision scaling to generate area-aware approximate multipliers, then applies genetic optimization to the accelerator design. Its objective is the Carbon Delay Product (CDP), combining embodied-carbon concerns with performance, subject to accuracy and performance requirements. The associated DATE 2025 late-breaking-results paper reports the approach and its evaluation.",
    detailsEl:
      "Η έρευνα χρησιμοποιεί αφαίρεση πυλών και κλιμάκωση ακρίβειας για την παραγωγή προσεγγιστικών πολλαπλασιαστών μικρής επιφάνειας και στη συνέχεια βελτιστοποιεί τον σχεδιασμό επιταχυντή με γενετικό αλγόριθμο. Κριτήριο είναι το γινόμενο καθυστέρησης-άνθρακα (Carbon Delay Product, CDP), συνδυάζοντας το ενσωματωμένο ανθρακικό αποτύπωμα με την επίδοση, υπό περιορισμούς ακρίβειας και χρόνου εκτέλεσης. Η σχετική εργασία σύντομων αποτελεσμάτων στο DATE 2025 παρουσιάζει τη μέθοδο και την αξιολόγησή της.",
    citation: {
      title: "Leveraging Approximate Computing for Carbon-Aware DNN Accelerators",
      url: "https://doi.org/10.23919/DATE64628.2025.10993191",
    },
  },
  {
    id: "floating-point-mac",
    title: "Floating-point MAC",
    kind: "code",
    period: "Sep 2023 - Dec 2023",
    periodEl: "Σεπ 2023 - Δεκ 2023",
    role: "Head Developer",
    roleEl: "Επικεφαλής Προγραμματιστής",
    link: "https://github.com/kompalas/floating-point-MAC",
    image: "/images/projects/fpmac/system.png",
    description:
      "This project implements a floating-point multiply-accumulate (MAC) unit in Verilog and explores how approximate mantissa multipliers affect the hardware cost of arithmetic-intensive workloads. It includes the synthesizable design and evaluation assets, connecting approximate arithmetic blocks to the energy constraints faced by machine-learning accelerators and federated-learning devices.",
    descriptionEl:
      "Το έργο υλοποιεί σε Verilog μια μονάδα πολλαπλασιασμού-συσσώρευσης κινητής υποδιαστολής (MAC) και εξετάζει πώς οι προσεγγιστικοί πολλαπλασιαστές μαντίσσας επηρεάζουν το κόστος υλικού σε υπολογισμούς με πολλές αριθμητικές πράξεις. Περιλαμβάνει συνθέσιμη σχεδίαση και υλικό αξιολόγησης, συνδέοντας την προσεγγιστική αριθμητική με τους ενεργειακούς περιορισμούς επιταχυντών μηχανικής μάθησης και συσκευών ομοσπονδιακής μάθησης.",
    roleDescription:
      "I designed and implemented the floating-point MAC unit, focusing on integrating approximate computing techniques to reduce power consumption and area.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα τη μονάδα πολλαπλασιασμού-συσσώρευσης κινητής υποδιαστολής, εστιάζοντας στην ενσωμάτωση τεχνικών προσεγγιστικής υπολογιστικής για μείωση της κατανάλωσης ισχύος και του χώρου.",
    details:
      "The implementation compares MBM and Mitchell logarithmic mantissa multipliers in complete MAC configurations, rather than evaluating the multiplier in isolation. The repository includes HDL, synthesized netlists and scripts/results for comparing area, power and delay. The related federated-learning research uses compressed arithmetic formats and approximate DNN accelerators with a hardware-aware energy model that accounts for memory-access costs; the paper reports up to a fourfold reduction in energy requirements while maintaining higher accuracy.",
    detailsEl:
      "Η υλοποίηση συγκρίνει τους λογαριθμικούς προσεγγιστικούς πολλαπλασιαστές μαντίσσας MBM και Mitchell σε πλήρεις διαμορφώσεις MAC και όχι απομονωμένα. Το αποθετήριο περιλαμβάνει HDL, συνθεμένα netlists και scripts/αποτελέσματα για σύγκριση επιφάνειας, ισχύος και καθυστέρησης. Η σχετική έρευνα στην ομοσπονδιακή μάθηση χρησιμοποιεί συμπιεσμένες αριθμητικές μορφές και προσεγγιστικούς επιταχυντές DNN με μοντέλο ενέργειας που λαμβάνει υπόψη τις προσπελάσεις μνήμης· η εργασία αναφέρει έως και τετραπλάσια μείωση των ενεργειακών απαιτήσεων με διατήρηση υψηλότερης ακρίβειας.",
    citation: {
      title: "Energy-Aware Heterogeneous Federated Learning via Approximate DNN Accelerators",
      url: "https://doi.org/10.1109/TCAD.2024.3509793",
    },
  },
  {
    id: "smartbeeing",
    title: "SMARTBEEing",
    kind: "research",
    period: "May 2021 - Dec 2021",
    periodEl: "Μάιος 2021 - Δεκ 2021",
    role: "Junior Researcher",
    roleEl: "Νεότερος Ερευνητής",
    link: "https://smartbeeing.web.auth.gr/",
    image: "/images/projects/smartbeeing/main.png",
    description:
      "A colony's condition is not always visible during a brief hive inspection. SMARTBEEing develops a low-cost monitoring platform that combines hive sounds with measurements such as temperature and weight, using data-driven models to alert beekeepers to emerging stress and changes in colony behaviour. I developed a digital signal-processing algorithm for acoustic analysis on an embedded co-processor.",
    descriptionEl:
      "Η κατάσταση ενός μελισσιού δεν είναι πάντα εμφανής κατά τη σύντομη επιθεώρηση της κυψέλης. Το SMARTBEEing αναπτύσσει μια οικονομική πλατφόρμα παρακολούθησης που συνδυάζει τους ήχους της κυψέλης με μετρήσεις όπως η θερμοκρασία και το βάρος, αξιοποιώντας μοντέλα δεδομένων για την έγκαιρη ειδοποίηση των μελισσοκόμων σχετικά με παράγοντες καταπόνησης και αλλαγές στη συμπεριφορά της αποικίας. Ανέπτυξα αλγόριθμο ψηφιακής επεξεργασίας σήματος για την ακουστική ανάλυση σε ενσωματωμένο συνεπεξεργαστή.",
    roleDescription:
      "I developed a DSP algorithm for hive sound running on an embedded co-processor, enabling early detection of stress factors in beehives.",
    roleDescriptionEl:
      "Ανάπτυξα έναν αλγόριθμο DSP για τον ήχο της κυψέλης σε ενσωματωμένο συνεπεξεργαστή, επιτρέποντας την έγκαιρη ανίχνευση παραγόντων στρες στις κυψέλες.",
    details:
      "The platform collects in-field hive-audio data and develops predictive models intended to warn about events such as swarming, queen loss, food depletion and disease. Combining these signals with hive measurements supports earlier, more informed management than occasional manual checks alone. The project was developed with the AUTH Laboratory of Apiculture and Sericulture.",
    detailsEl:
      "Η πλατφόρμα συλλέγει δεδομένα ήχου από κυψέλες στο πεδίο και αναπτύσσει μοντέλα πρόβλεψης που στοχεύουν στην έγκαιρη ειδοποίηση για γεγονότα όπως η σμηνουργία, η απώλεια βασίλισσας, η εξάντληση τροφών και οι ασθένειες. Ο συνδυασμός αυτών των σημάτων με μετρήσεις της κυψέλης υποστηρίζει πιο έγκαιρη και τεκμηριωμένη διαχείριση από ό,τι οι περιστασιακοί χειροκίνητοι έλεγχοι. Το έργο υλοποιήθηκε με το Εργαστήριο Μελισσοκομίας και Σηροτροφίας του ΑΠΘ.",
  },
  {
    id: "ice",
    title: "ICE: Innovative Cultural Experience",
    kind: "research",
    period: "Feb 2019 - Apr 2021",
    periodEl: "Φεβ 2019 - Απρ 2021",
    role: "Junior Researcher",
    roleEl: "Νεότερος Ερευνητής",
    link: "https://ice.web.auth.gr/",
    image: "/images/projects/ice/logo.png",
    description:
      "ICE (Innovative Cultural Experience) brings cultural heritage into interactive, technology-enhanced displays. Its system combines augmented-reality content, immersive 360-degree video and audio with transparent interactive displays; a complementary low-cost IoT platform tracks anonymous visitor flows in museums. I contributed to neural-network applications for the AR experience and to system-specification analysis.",
    descriptionEl:
      "Το ICE (Innovative Cultural Experience) μετατρέπει την παρουσίαση της πολιτιστικής κληρονομιάς σε διαδραστική, τεχνολογικά εμπλουτισμένη εμπειρία. Το σύστημα συνδυάζει περιεχόμενο επαυξημένης πραγματικότητας, καθηλωτικό βίντεο 360° και ήχο με διαφανείς διαδραστικές οθόνες, ενώ μια συμπληρωματική οικονομική πλατφόρμα IoT καταγράφει ανώνυμα τη ροή επισκεπτών σε μουσεία. Συνέβαλα στις εφαρμογές νευρωνικών δικτύων για την εμπειρία AR και στην ανάλυση προδιαγραφών του συστήματος.",
    roleDescription:
      "I worked on neural networks for the AR applications and specification analysis, contributing to the development of an innovative cultural experience platform.",
    roleDescriptionEl:
      "Εργάστηκα σε νευρωνικά δίκτυα για τις εφαρμογές AR και στην ανάλυση προδιαγραφών, συμβάλλοντας στην ανάπτυξη μιας καινοτόμου πλατφόρμας πολιτιστικής εμπειρίας.",
    details:
      "The project combined contributions from computing, education and the humanities to make local cultural sites and collections accessible through digital storytelling and augmented reality. The dissemination programme reports a low-cost IoT system for real-time, anonymous visitor-flow tracking at museums, alongside the cultural-experience platform and educational applications.",
    detailsEl:
      "Το έργο συνδύασε συνεισφορές από την πληροφορική, την εκπαίδευση και τις ανθρωπιστικές επιστήμες, ώστε οι τοπικοί πολιτιστικοί χώροι και οι συλλογές να γίνουν προσβάσιμα μέσω ψηφιακής αφήγησης και επαυξημένης πραγματικότητας. Οι δράσεις διάχυσης καταγράφουν οικονομικό σύστημα IoT για ανώνυμη παρακολούθηση της ροής επισκεπτών σε πραγματικό χρόνο, καθώς και την πλατφόρμα πολιτιστικής εμπειρίας και εκπαιδευτικές εφαρμογές.",
  },
  {
    id: "safeschools",
    title: "SafeSchools",
    kind: "research",
    period: "Feb 2019 - Apr 2021",
    periodEl: "Φεβ 2019 - Απρ 2021",
    role: "Junior Researcher",
    roleEl: "Νεότερος Ερευνητής",
    link: "https://www.safeschools.gr/",
    image: "/images/projects/safeschools/logo.png",
    description:
      "SafeSchools is an earthquake early-warning system for school buildings. It warns schools shortly before strong shaking arrives and estimates damage risk from building age, structure and site conditions. I developed its DSP-based data collection and preprocessing algorithms.",
    descriptionEl:
      "Το SafeSchools είναι σύστημα έγκαιρης προειδοποίησης σεισμού για σχολικά κτίρια. Προειδοποιεί σύντομα πριν την έντονη κίνηση και εκτιμά τον κίνδυνο ζημιάς με βάση την ηλικία, την κατασκευή και τις εδαφικές συνθήκες του κτιρίου. Ανέπτυξα τους αλγόριθμους DSP συλλογής και προεπεξεργασίας δεδομένων.",
    roleDescription:
      "I developed the DSP-based data collection and preprocessing algorithms for SafeSchools, contributing to the early-warning system for school buildings.",
    roleDescriptionEl:
      "Ανέπτυξα τους αλγόριθμους DSP συλλογής και προεπεξεργασίας δεδομένων για το SafeSchools, συμβάλλοντας στο σύστημα έγκαιρης προειδοποίησης για σχολικά κτίρια.",
    details:
      "The project combines real-time sensor measurements with information about a building's age, structural characteristics and local conditions. Signal-processing pipelines prepare sensor data for rapid assessment and warning, and the system was piloted in three Thessaloniki schools.",
    detailsEl:
      "Το έργο συνδυάζει μετρήσεις αισθητήρων σε πραγματικό χρόνο με πληροφορίες για την ηλικία, τα δομικά χαρακτηριστικά και τις τοπικές συνθήκες ενός κτιρίου. Οι ροές επεξεργασίας σήματος προετοιμάζουν τα δεδομένα για ταχεία αξιολόγηση και προειδοποίηση, ενώ το σύστημα δοκιμάστηκε πιλοτικά σε τρία σχολεία της Θεσσαλονίκης.",
    detailsContent: {
      en: [
        {
          type: "paragraph",
          text: "SafeSchools combines real-time measurements from sensors installed in school buildings with information about each building's age, structural characteristics and local conditions.",
        },
        {
          type: "image",
          src: "/images/projects/safeschools/system.png",
          alt: "Diagram of the SafeSchools system architecture",
        },
        {
          type: "paragraph",
          text: "The system processes these signals to assess seismic activity and issue warnings shortly before strong shaking reaches the site.",
        },
        {
          type: "image",
          src: "/images/projects/safeschools/system_3d.jpg",
          alt: "Three-dimensional model of the SafeSchools system",
        },
        {
          type: "paragraph",
          text: "Signal-processing pipelines prepare sensor data for rapid assessment and warning. The system was piloted in three Thessaloniki schools.",
        },
      ],
      el: [
        {
          type: "paragraph",
          text: "Το SafeSchools συνδυάζει μετρήσεις σε πραγματικό χρόνο από αισθητήρες εγκατεστημένους σε σχολικά κτίρια με πληροφορίες για την ηλικία, τα δομικά χαρακτηριστικά και τις τοπικές συνθήκες κάθε κτιρίου.",
        },
        {
          type: "image",
          src: "/images/projects/safeschools/system.png",
          alt: "Διάγραμμα της αρχιτεκτονικής του συστήματος SafeSchools",
        },
        {
          type: "paragraph",
          text: "Το σύστημα επεξεργάζεται αυτά τα σήματα για να αξιολογήσει τη σεισμική δραστηριότητα και να εκδώσει προειδοποιήσεις λίγο πριν φτάσει η ισχυρή δόνηση στο σημείο.",
        },
        {
          type: "image",
          src: "/images/projects/safeschools/system_3d.jpg",
          alt: "Τρισδιάστατο μοντέλο του συστήματος SafeSchools",
        },
        {
          type: "paragraph",
          text: "Οι ροές επεξεργασίας σήματος προετοιμάζουν τα δεδομένα των αισθητήρων για ταχεία αξιολόγηση και προειδοποίηση. Το σύστημα δοκιμάστηκε πιλοτικά σε τρία σχολεία της Θεσσαλονίκης.",
        },
      ],
    },
  },
];

export function getProjects(): Project[] {
  return projects;
}
