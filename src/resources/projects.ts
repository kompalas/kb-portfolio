export type ProjectCitation = {
  title: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  kind: "research" | "code";
  period: string;
  role: string;
  link: string;
  image: string;
  description: string;
  descriptionEl: string;
  roleDescription: string;
  roleDescriptionEl: string;
  details: string;
  detailsEl: string;
  citation?: ProjectCitation;
};

export const projects: Project[] = [
  {
    id: "autopnn",
    title: "AutoPNN",
    kind: "research",
    period: "Jul 2024 - Oct 2025",
    role: "Research Team Leader @ University of Patras (CEID)",
    link: "https://autopnn.github.io",
    image: "/images/projects/autopnn/main.jpg",
    description:
      "Printed electronics can put a classifier on smart packaging, a diagnostic strip or a wearable patch, but the circuits are so large that every gate counts. AutoPNN is a two-year project on designing those classifiers automatically: it shrinks a neural network in software and in hardware together until it fits a printed circuit's area and power budget. I led the team working on it at the University of Patras.",
    descriptionEl:
      "Τα εκτυπωμένα ηλεκτρονικά μπορούν να ενσωματώσουν έναν ταξινομητή σε έξυπνες συσκευασίες, διαγνωστικές ταινίες ή φορετές συσκευές, αλλά τα κυκλώματα είναι τόσο μεγάλα που κάθε λογική πύλη μετράει. Το AutoPNN είναι ένα διετές έργο αυτοματοποιημένου σχεδιασμού αυτών των ταξινομητών: μειώνει από κοινού το νευρωνικό δίκτυο και το υλικό εκτέλεσής του, ώστε να χωράει στην επιφάνεια και το ενεργειακό προϋπολογισμό ενός εκτυπωμένου κυκλώματος. Οδήγησα την ομάδα που εργάστηκε στο Πανεπιστήμιο Πατρών.",
    roleDescription:
      "I led the team working on AutoPNN at the University of Patras, focusing on hardware-aware neural architecture search and approximate hardware design.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο AutoPNN στο Πανεπιστήμιο Πατρών, εστιάζοντας στην αναζήτηση νευρωνικών αρχιτεκτονικών με επίγνωση υλικού και στον προσεγγιστικό σχεδιασμό υλικού.",
    details:
      "AutoPNN combines hardware-aware neural architecture search, software-level minimization and approximate hardware architecture search. The goal is to produce the smallest printed classifier that meets a required accuracy target while remaining practical for an open-source design flow.",
    detailsEl:
      "Το AutoPNN συνδυάζει αναζήτηση νευρωνικών αρχιτεκτονικών με επίγνωση υλικού, ελαχιστοποίηση στο επίπεδο λογισμικού και αναζήτηση αρχιτεκτονικών προσεγγιστικού υλικού. Στόχος είναι η παραγωγή του μικρότερου εκτυπωμένου ταξινομητή που διατηρεί την απαιτούμενη ακρίβεια και παραμένει πρακτικός για ανοικτό σχεδιαστικό πλαίσιο.",
  },
  {
    id: "flexaf",
    title: "FlexAf",
    kind: "code",
    period: "Jul 2025 - Sep 2025",
    role: "Head Developer",
    link: "https://github.com/kompalas/flexaf",
    image: "/images/projects/flexaf/main.png",
    description:
      "A wearable health sensor has to decide which measurements are worth their circuit area. FlexAf lets the neural network make that choice while it trains: every input feature gets a learnable gate, and the training objective includes the hardware cost of each feature. The result is a classifier and its feature extraction designed together for flexible, mixed-signal wearables.",
    descriptionEl:
      "Ένας φορετός αισθητήρας υγείας πρέπει να αποφασίζει ποιες μετρήσεις αξίζουν τον απαιτούμενο χώρο κυκλώματος. Το FlexAf επιτρέπει στο νευρωνικό δίκτυο να κάνει αυτή την επιλογή κατά την εκπαίδευση: κάθε χαρακτηριστικό εισόδου έχει μια εκμαθανομένη πύλη και η συνάρτηση εκπαίδευσης λαμβάνει υπόψη το κόστος υλικού κάθε χαρακτηριστικού. Το αποτέλεσμα είναι ένας ταξινομητής και ένας εξαγωγέας χαρακτηριστικών που σχεδιάζονται μαζί.",
    roleDescription:
      "I designed and implemented FlexAf, a TensorFlow framework for differentiable feature selection and hardware-aware neural-network training.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το FlexAf, ένα πλαίσιο TensorFlow για διαφορίσιμη επιλογή χαρακτηριστικών και εκπαίδευση νευρωνικών δικτύων με επίγνωση υλικού.",
    details:
      "FlexAf is a TensorFlow framework for differentiable feature selection and hardware-aware neural-network training. Stochastic feature gates identify important measurements, cost-aware regularization accounts for feature-extraction area, and optional lottery-ticket pruning can further reduce the model.",
    detailsEl:
      "Το FlexAf είναι ένα πλαίσιο TensorFlow για διαφορίσιμη επιλογή χαρακτηριστικών και εκπαίδευση νευρωνικών δικτύων με επίγνωση υλικού. Οι στοχαστικές πύλες εντοπίζουν σημαντικές μετρήσεις, η κανονικοποίηση με κόστος υλικού λαμβάνει υπόψη την επιφάνεια εξαγωγής χαρακτηριστικών και η προαιρετική pruning με lottery-ticket προσέγγιση μπορεί να μειώσει περαιτέρω το μοντέλο.",
    citation: {
      title: "Feature-to-Classifier Co-Design for Mixed-Signal Smart Flexible Wearables for Healthcare at the Extreme Edge",
      url: "https://doi.org/10.1109/ICCAD66269.2025.11240680",
    },
  },
  {
    id: "mannheim-cecas",
    title: "MANNHEIM-CeCaS",
    kind: "research",
    period: "Jul 2023 - Jun 2024",
    role: "Research Associate @ Karlsruhe Institute of Technology",
    link: "https://elektronikforschung.de/projekte/mannheim-cecas",
    image: "/images/projects/cecas/cecas.jpg", // or "/images/projects/cecas/logo.jpeg
    description:
      "Today's cars rely on many separate control units. MANNHEIM-CeCaS asked what happens if you gather them into one central car server, a supercomputer built to automotive safety and reliability standards. About 30 partners worked on the project; my part at KIT was the AI side: ML models and hardware accelerators for sensor-side tasks, and a scheduler that splits neural-network work between the car server and an edge chip.",
    descriptionEl:
      "Τα σύγχρονα αυτοκίνητα βασίζονται σε πολλαπλές ξεχωριστές μονάδες ελέγχου. Το MANNHEIM-CeCaS εξετάζει την συγκέντρωση αυτών σε έναν κεντρικό server οχήματος, έναν υπερυπολογιστή που πληροί πρότυπα ασφάλειας και αξιοπιστίας της αυτοκινητοβιομηχανίας. Στο έργο συμμετείχαν περίπου 30 εταίροι. Στο KIT ανέλαβα το AI μέρος: μοντέλα μηχανικής μάθησης, επιταχυντές υλικού για εργασίες αισθητήρα και χρονοπρογραμματισμό μεταξύ του server και ενός edge SoC.",
    details:
      "The project pursued a central hardware and software architecture for highly automated driving. My contribution covered sensor-side vision, segmentation and detection models, co-design of an ML accelerator and scheduling of tasks across the central server and an edge SoC.",
    detailsEl:
      "Το έργο ανέπτυξε κεντρική αρχιτεκτονική υλικού και λογισμικού για υψηλά αυτοματοποιημένη οδήγηση. Η συνεισφορά μου κάλυψε μοντέλα όρασης, τμηματοποίησης και ανίχνευσης κοντά στους αισθητήρες, συν-σχεδιασμό επιταχυντή μηχανικής μάθησης και κατανομή εργασιών μεταξύ του κεντρικού server και ενός edge SoC.",
    roleDescription:
      "I led the team working on the MANNHEIM-CeCaS project at Karlsruhe Institute of Technology, focusing on the integration of hardware and software for highly automated driving.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο έργο MANNHEIM-CeCaS στο Ινστιτούτο Τέχνης του Καρστρόλφου, εστιάζοντας στην ενσωμάτωση υλικού και λογισμικού για υψηλά αυτοματοποιημένη οδήγηση.",
  },
  {
    id: "hetero-accel",
    title: "HeteroAccel",
    kind: "code",
    period: "Nov 2023 - Jun 2024",
    role: "Head Developer",
    link: "https://github.com/kompalas/hetero-accel",
    image: "/images/projects/heteroaccel/main.png",
    description:
      "When a chip has to run several neural networks at once, a single accelerator design rarely suits all of them. HeteroAccel searches for a set of different accelerators and a schedule for a given multi-network workload, using simulated annealing on top of Timeloop-Accelergy models to minimize energy-delay product.",
    descriptionEl:
      "Όταν ένα τσιπ πρέπει να εκτελεί πολλά νευρωνικά δίκτυα ταυτόχρονα, μία μόνο αρχιτεκτονική επιταχυντή σπάνια είναι κατάλληλη για όλα. Το HeteroAccel αναζητά ένα σύνολο διαφορετικών επιταχυντών και ένα χρονοπρόγραμμα για συγκεκριμένο φόρτο πολλών δικτύων, χρησιμοποιώντας simulated annealing πάνω σε μοντέλα Timeloop-Accelergy για ελαχιστοποίηση του γινόμενου ενέργειας-καθυστέρησης.",
    roleDescription:
      "I designed and implemented HeteroAccel, a framework for co-designing accelerator architectures and DNN schedules for multi-network workloads.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το HeteroAccel, ένα πλαίσιο για συν-σχεδιασμό αρχιτεκτονικών επιταχυντών και χρονοπρογραμμάτων νευρωνικών δικτύων για φόρτους πολλών δικτύων.",
    details:
      "The framework explores accelerator architectures and DNN schedules together, then compares heterogeneous designs with homogeneous and state-of-the-art baselines. It uses cycle-accurate modeling for delay, energy and area estimates.",
    detailsEl:
      "Το πλαίσιο εξετάζει μαζί τις αρχιτεκτονικές επιταχυντών και τα χρονοπρογράμματα των νευρωνικών δικτύων και συγκρίνει ετερογενείς σχεδιασμούς με ομογενείς και σύγχρονες μεθόδους αναφοράς. Για εκτιμήσεις καθυστέρησης, ενέργειας και επιφάνειας χρησιμοποιεί μοντελοποίηση ακριβή ανά κύκλο.",
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
    role: "Research Associate @ Karlsruhe Institute of Technology",
    link: "https://gepris.dfg.de/gepris/projekt/428566201",
    image: "/images/projects/accross/main.jpg",
    description:
      "Chips are designed with generous safety margins so that they keep working in the worst case, and those margins cost energy and speed. ACCROSS studies approximate computing across the whole system stack, from applications down to circuits, including reduced design margins and ways to measure the resulting error.",
    descriptionEl:
      "Τα τσιπ σχεδιάζονται με σημαντικά περιθώρια ασφάλειας ώστε να λειτουργούν στη χειρότερη περίπτωση και αυτά τα περιθώρια αυξάνουν την ενέργεια και μειώνουν την ταχύτητα. Το ACCROSS μελετά την προσεγγιστική υπολογιστική σε όλο το σύστημα, από τις εφαρμογές μέχρι τα κυκλώματα, συμπεριλαμβανομένων των μειωμένων περιθωρίων σχεδιασμού και των μεθόδων μέτρησης του αντίστοιχου σφάλματος.",
    details:
      "The DFG project took a cross-layer view of approximate computing. It developed error metrics, lightweight monitoring and models linking software and hardware, allowing designers to quantify the trade-off between efficiency and accuracy.",
    detailsEl:
      "Το έργο του DFG υιοθέτησε διαστρωματική προσέγγιση στην προσεγγιστική υπολογιστική. Ανέπτυξε μετρικές σφάλματος, ελαφρύς μηχανισμούς παρακολούθησης και μοντέλα που συνδέουν λογισμικό και υλικό, δίνοντας τη δυνατότητα ποσοτικής αξιολόγησης του ανταγωνισμού απόδοσης και ακρίβειας.",
    roleDescription:
      "I led the team working on ACCROSS at Karlsruhe Institute of Technology, focusing on approximate computing across the entire system stack.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο ACCROSS στο Ινστιτούτο Τέχνης του Καρστρόλφου, εστιάζοντας στην προσεγγιστική υπολογιστική σε όλο το σύστημα.",
  },
  {
    id: "ax-aging-aware-netlists",
    title: "AxAgingAwareNetlists",
    kind: "code",
    period: "Sep 2021 - Apr 2022",
    role: "Principal Developer",
    link: "https://github.com/kompalas/AxAgingAwareNetlists",
    image: "/images/projects/agingnetlists/main.jpg",
    description:
      "Transistors age, and designers normally cover that with extra timing margin that costs energy from day one. This repository contains approximate circuit netlists evolved with a genetic algorithm to absorb aging while preserving useful circuit behavior.",
    descriptionEl:
      "Οι τρανζίστορ γερνούν και οι σχεδιαστές συνήθως καλύπτουν αυτή την επίδραση με επιπλέον περιθώριο χρονισμού που αυξάνει την ενέργεια από την αρχή. Αυτό το αποθετήριο περιέχει προσεγγιστικά netlists κυκλωμάτων που παράγονται με γενετικό αλγόριθμο ώστε να αντιμετωπίζουν τη γήρανση διατηρώντας χρήσιμη συμπεριφορά.",
    roleDescription:
      "I led the team working on the AxAgingAwareNetlists project, focusing on developing approximate circuit designs that can adapt to aging effects.",
    roleDescriptionEl:
      "Οδήγησα την ομάδα που εργάστηκε στο έργο AxAgingAwareNetlists, εστιάζοντας στην ανάπτυξη προσεγγιστικών σχεδίων κυκλωμάτων που μπορούν να προσαρμόζονται στις επιδράσεις της γήρανσης.",
    details:
      "The repository separates baseline netlists, pre-synthesis approximate netlists and post-synthesis approximate netlists. It provides reproducible assets for studying aging-aware approximation of arithmetic and image-processing circuits.",
    detailsEl:
      "Το αποθετήριο διαχωρίζει τα αρχικά netlists αναφοράς, τα προσεγγιστικά netlists πριν τη σύνθεση και τα προσεγγιστικά netlists μετά τη σύνθεση. Παρέχει επαναλήψιμα δεδομένα για τη μελέτη προσεγγιστικής υπολογιστικής με επίγνωση γήρανσης σε αριθμητικά κυκλώματα και επεξεργασία εικόνας.",
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
    role: "Head Developer",
    link: "https://github.com/kompalas/PrintedTrees",
    image: "/images/projects/printedtrees/main.png",
    description:
      "A decision tree is about the simplest classifier you can build in hardware, a chain of comparisons, but in printed electronics every comparator counts. PrintedTrees uses NSGA-II to tune tree thresholds, reduce comparator count and generate synthesizable Verilog.",
    descriptionEl:
      "Το δέντρο αποφάσεων είναι από τους απλούστερους ταξινομητές υλικού, μια ακολουθία συγκρίσεων, αλλά στα εκτυπωμένα ηλεκτρονικά κάθε συγκριτής μετράει. Το PrintedTrees χρησιμοποιεί NSGA-II για ρύθμιση των ορίων του δέντρου, μείωση του αριθμού συγκριτών και παραγωγή συνθέσιμου Verilog.",
    roleDescription:
      "I designed and implemented PrintedTrees, a framework for evolving decision trees for printed electronics with a focus on minimizing comparator count while maintaining classification accuracy.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το PrintedTrees, ένα πλαίσιο για την παραγωγή δέντρων αποφάσεων για εκτυπωμένα ηλεκτρονικά με έμφαση στη μείωση του αριθμού συγκριτών διατηρώντας την ακρίβεια ταξινόμησης.",
    details:
      "The framework evaluates the trade-off between classification accuracy and the number of comparators, an important proxy for circuit area. It uses an EGFET printed-electronics design kit and produces Verilog implementations for the selected trees.",
    detailsEl:
      "Το πλαίσιο αξιολογεί την αντιστάθμιση μεταξύ ακρίβειας ταξινόμησης και αριθμού συγκριτών, ενός σημαντικού δείκτη επιφάνειας κυκλώματος. Χρησιμοποιεί πακέτο σχεδιασμού εκτυπωμένης ηλεκτρονικής EGFET και παράγει υλοποιήσεις Verilog για τα επιλεγμένα δέντρα.",
    citation: {
      title: "Approximate Decision Trees for Machine Learning Classification on Tiny Printed Circuits",
      url: "https://doi.org/10.1109/ISQED54688.2022.9806213",
    },
  },
  {
    id: "axcarbon",
    title: "AxCarbon",
    kind: "code",
    period: "Jan 2024 - May 2024",
    role: "Head Developer",
    link: "https://github.com/kompalas/axcarbon",
    image: "/images/projects/axcarbon/main.png",
    description:
      "AxCarbon evolves approximate versions of multipliers, adders and multiply-accumulate units by pruning gates from their netlists with a genetic algorithm. It covers integer and floating-point formats and evaluates power, area, performance and accuracy.",
    descriptionEl:
      "Το AxCarbon παράγει προσεγγιστικές εκδόσεις πολλαπλασιαστών, αθροιστών και μονάδων πολλαπλασιασμού-συσσώρευσης αφαιρώντας πύλες από τα netlists με γενετικό αλγόριθμο. Καλύπτει ακέραιες και κινητής-υποδιαστολής μορφές και αξιολογεί ισχύ, επιφάνεια, απόδοση και ακρίβεια.",
    roleDescription:
      "I designed and implemented AxCarbon, a framework for evolving approximate arithmetic circuits and evaluating their trade-offs in power, area, performance and accuracy.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα το AxCarbon, ένα πλαίσιο για την παραγωγή προσεγγιστικών αριθμητικών κυκλωμάτων και την αξιολόγηση των ανταγωνισμών τους σε ισχύ, επιφάνεια, απόδοση και ακρίβεια.",
    details:
      "The framework supports FP32, FP16 and bfloat16 arithmetic as well as integer circuits. It provides a repeatable flow for generating approximate candidates and comparing their power, area, delay and accuracy trade-offs.",
    detailsEl:
      "Το πλαίσιο υποστηρίζει αριθμητική FP32, FP16 και bfloat16 καθώς και ακέραια κυκλώματα. Παρέχει επαναλήψιμη ροή παραγωγής προσεγγιστικών υποψηφίων και σύγκρισης της ισχύος, επιφάνειας, καθυστέρησης και ακρίβειάς τους.",
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
    role: "Head Developer",
    link: "https://github.com/kompalas/floating-point-MAC",
    image: "/images/projects/fpmac/main.png",
    description:
      "A floating-point multiply-accumulate unit in Verilog where the mantissa multiplication can be replaced with an approximate multiplier. The repository contains the HDL, synthesized netlists, evaluation scripts and collected hardware results.",
    descriptionEl:
      "Μια μονάδα πολλαπλασιασμού-συσσώρευσης κινητής υποδιαστολής σε Verilog, όπου ο πολλαπλασιασμός mantissa μπορεί να αντικατασταθεί από προσεγγιστικό πολλαπλασιαστή. Το αποθετήριο περιέχει HDL, συνθεμένα netlists, scripts αξιολόγησης και συγκεντρωμένα αποτελέσματα υλικoύ.",
    roleDescription:
      "I designed and implemented the floating-point MAC unit, focusing on integrating approximate computing techniques to reduce power consumption and area.",
    roleDescriptionEl:
      "Σχεδίασα και υλοποίησα τη μονάδα πολλαπλασιασμού-συσσώρευσης κινητής υποδιαστολής, εστιάζοντας στην ενσωμάτωση τεχνικών προσεγγιστικής υπολογιστικής για μείωση της κατανάλωσης ισχύος και του χώρου.",
    details:
      "The implementation compares MBM and Mitchell logarithmic mantissa multipliers across full MAC configurations. It includes synthesis-ready HDL and evaluation assets for area, power and delay.",
    detailsEl:
      "Η υλοποίηση συγκρίνει τους προσεγγιστικούς πολλαπλασιαστές mantissa MBM και Mitchell σε πλήρεις διαμορφώσεις MAC. Περιλαμβάνει HDL έτοιμο για σύνθεση και στοιχεία αξιολόγησης επιφάνειας, ισχύος και καθυστέρησης.",
  },
  {
    id: "smartbeeing",
    title: "SMARTBEEing",
    kind: "research",
    period: "May 2021 - Dec 2021",
    role: "Junior Researcher @ Aristotle University of Thessaloniki",
    link: "https://smartbeeing.web.auth.gr/",
    image: "/images/projects/smartbeeing/main.png",
    description:
      "A beehive's health is difficult to judge from the outside. SMARTBEEing combines low-cost electronics inside hives with temperature, weight and audio monitoring so problems can be identified early. My contribution was a DSP algorithm for hive sound running on an embedded co-processor.",
    descriptionEl:
      "Η υγεία μιας κυψέλης είναι δύσκολο να αξιολογηθεί από έξω. Το SMARTBEEing συνδυάζει οικονομικά ηλεκτρονικά μέσα σε κυψέλες με παρακολούθηση θερμοκρασίας, βάρους και ήχου ώστε τα προβλήματα να εντοπίζονται νωρίς. Η συνεισφορά μου ήταν ένας αλγόριθμος DSP για τον ήχο της κυψέλης σε ενσωματωμένο συνεπεξεργαστή.",
    roleDescription:
      "I developed a DSP algorithm for hive sound running on an embedded co-processor, enabling early detection of stress factors in beehives.",
    roleDescriptionEl:
      "Ανάπτυξα έναν αλγόριθμο DSP για τον ήχο της κυψέλης σε ενσωματωμένο συνεπεξεργαστή, επιτρέποντας την έγκαιρη ανίχνευση παραγόντων στρες στις κυψέλες.",
    details:
      "The project brought hive electronics, acoustic processing and beekeeper notifications together to identify stress factors and support timely interventions. The system was evaluated with beekeepers under the supervision of AUTH.",
    detailsEl:
      "Το έργο συνδύασε ηλεκτρονικά κυψέλης, ακουστική επεξεργασία και ειδοποιήσεις μελισσοκόμων για την αναγνώριση παραγόντων στρες και την έγκαιρη παρέμβαση. Το σύστημα αξιολογήθηκε μαζί με μελισσοκόμους υπό την επίβλεψη του ΑΠΘ.",
  },
  {
    id: "ice",
    title: "ICE: Innovative Cultural Experience",
    kind: "research",
    period: "Feb 2019 - Apr 2021",
    role: "Junior Researcher @ Aristotle University of Thessaloniki",
    link: "https://ice.web.auth.gr/",
    image: "/images/projects/ice/main.png",
    description:
      "ICE combines a transparent touch window with augmented-reality video, 360-degree footage and audio for cultural exhibits. A companion IoT system can also measure visitor flow. I worked on neural networks for the AR applications and specification analysis.",
    descriptionEl:
      "Το ICE συνδυάζει ένα διαφανές παράθυρο αφής με βίντεο επαυξημένης πραγματικότητας, 360° υλικό και ήχο σε πολιτιστικά εκθέματα. Συμπληρωματικό σύστημα IoT μετρά τη ροή επισκεπτών. Εργάστηκα σε νευρωνικά δίκτυα για τις εφαρμογές AR και στην ανάλυση προδιαγραφών.",
    roleDescription:
      "I worked on neural networks for the AR applications and specification analysis, contributing to the development of an innovative cultural experience platform.",
    roleDescriptionEl:
      "Εργάστηκα σε νευρωνικά δίκτυα για τις εφαρμογές AR και στην ανάλυση προδιαγραφών, συμβάλλοντας στην ανάπτυξη μιας καινοτόμου πλατφόρμας πολιτιστικής εμπειρίας.",
    details:
      "The prototype was piloted in the cultural heritage context of Eastern Macedonia and Thrace, combining interactive presentation with visitor analytics and a central content-management workflow.",
    detailsEl:
      "Το πρωτότυπο δοκιμάστηκε στην πολιτιστική κληρονομιά της Ανατολικής Μακεδονίας και Θράκης, συνδυάζοντας διαδραστική παρουσίαση, αναλύσεις επισκεψιμότητας και κεντρική διαχείριση περιεχομένου.",
  },
  {
    id: "safeschools",
    title: "SafeSchools",
    kind: "research",
    period: "Feb 2019 - Apr 2021",
    role: "Junior Researcher @ Aristotle University of Thessaloniki",
    link: "https://safeschools.web.auth.gr/",
    image: "/images/projects/safeschools/main.png",
    description:
      "SafeSchools is an earthquake early-warning system for school buildings. It warns schools shortly before strong shaking arrives and estimates damage risk from building age, structure and site conditions. I developed its DSP-based data collection and preprocessing algorithms.",
    descriptionEl:
      "Το SafeSchools είναι σύστημα έγκαιρης προειδοποίησης σεισμού για σχολικά κτίρια. Προειδοποιεί σύντομα πριν την έντονη κίνηση και εκτιμά τον κίνδυνο ζημιάς με βάση την ηλικία, την κατασκευή και τις εδαφικές συνθήκες του κτιρίου. Ανέπτυξα τους αλγόριθμους DSP συλλογής και προεπεξεργασίας δεδομένων.",
    roleDescription:
      "I developed the DSP-based data collection and preprocessing algorithms for SafeSchools, contributing to the early-warning system for school buildings.",
    roleDescriptionEl:
      "Ανέπτυξα τους αλγόριθμους DSP συλλογής και προεπεξεργασίας δεδομένων για το SafeSchools, συμβάλλοντας στο σύστημα έγκαιρης προειδοποίησης για σχολικά κτίρια.",
    details:
      "The system combined real-time sensor data, building characteristics and rapid damage estimation and was piloted in three Thessaloniki schools.",
    detailsEl:
      "Το σύστημα συνδύασε δεδομένα αισθητήρων σε πραγματικό χρόνο, χαρακτηριστικά κτιρίου και γρήγορη εκτίμηση ζημιάς και δοκιμάστηκε σε τρία σχολεία της Θεσσαλονίκης.",
  },
];

export function getProjects(): Project[] {
  return projects;
}
