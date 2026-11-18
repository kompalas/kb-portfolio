import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Konstantinos",
  lastName: "Balaskas",
  name: `Konstantinos Balaskas`,
  role: "Post-Doctoral Researcher on Edge AI",
  avatar: "/images/balaskas.jpg",
  email: "kompalas@physics.auth.gr",
  location: "Thessaloniki, Greece",
  timeZone: "Europe/Athens",
  languages: ["English", "Spanish", "German", "Greek"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kompalas",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/konstantinos-balaskas",
    essential: true,
  },
  {
    name: "Google Scholar",
    icon: "googleScholar",
    link: "https://scholar.google.com/citations?user=_8XWxwgAAAAJ",
    essential: true,
  },
  {
    name: "ORCID",
    icon: "orcid",
    link: "https://orcid.org/0000-0003-2886-6896",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Konstantinos Balaskas | Edge AI researcher",
  description:
    "Portfolio of Konstantinos Balaskas, post-doctoral researcher on edge AI: ML accelerators, approximate computing and flexible electronics.",
  headline: <>Co-designing machine learning and hardware for the edge</>,
  subline: (
    <>
      I'm Konstantinos, a post-doctoral researcher working on edge AI. I co-design ML models and
      the hardware that runs them, from FPGAs and automotive SoCs to ultra-low-cost flexible
      electronics.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I'm a post-doctoral researcher working on edge AI. My work sits where machine learning
          meets hardware design: co-designing ML models and the accelerators that run them so they
          fit tight power, area and memory budgets.
        </p>
        <p>
          I completed my PhD in Informatics at the Karlsruhe Institute of Technology (KIT) in 2024,
          with a dissertation on cross-layer approximation techniques for the synthesis and
          optimization of ML accelerators. I then led the AutoPNN project at the University of
          Patras, on automated design of edge AI for flexible electronics.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
        {
          company: "HCDI/ELKAK",
          timeframe: "Jul 2026 - Jun 2027",
          role: "Scientific Advisor, Reserve Second Lieutenant",
          achievements: [
            <>Core team member in ELKAK's IT department.</>,
            <>Secretarial support to the CIO.</>,
            <>[TODO: confirm whether to keep this entry; it is mandatory military service.]</>,
          ],
          images: [],
        },
        {
          company: "University of Patras (CEID)",
          timeframe: "Jul 2024 - Oct 2025",
          role: "Post-doctoral Researcher",
          achievements: [
            <>Team leader in the AutoPNN project.</>,
            <>
              Developed an automated HW/SW framework for co-designing edge AI accelerators and
              ultra resource-efficient ML models in flexible electronics.
            </>,
            <>
              Trained neural networks with integrated differentiable feature selection and
              variation-robust training.
            </>,
            <>Supervised several Bachelor and Master theses.</>,
          ],
          images: [],
        },
        {
          company: "Informatics, Karlsruhe Institute of Technology (KIT)",
          timeframe: "Oct 2021 - Jun 2024",
          role: "Doctoral Research Scientist",
          achievements: [
            <>
              In MANNHEIM-CeCaS, co-designed an ML hardware accelerator and trained vision,
              segmentation and detection models for sensor-side AI; developed an ML scheduling
              algorithm to distribute tasks between a car server and an edge SoC; and contributed
              to automotive-grade design feasibility with Bosch, Continental and Infineon.
            </>,
            <>
              In ACCROSS, investigated reduced safety margins in circuit design and developed
              abstract models of approximate computing in ML.
            </>,
            <>
              Supervised Master theses and co-instructed Bachelor and Master courses (IoT Lab,
              Embedded ML, Embedded Systems II).
            </>,
          ],
          images: [],
        },
        {
          company: "Aristotle University (AUTH)",
          timeframe: "Feb 2019 - Oct 2021",
          role: "Junior Researcher",
          achievements: [
            <>SmartBeeing: DSP algorithm on auditory signals for embedded co-processors.</>,
            <>ICE: trained NNs for AR applications and developed specification analysis.</>,
            <>
              SafeSchools: DSP-based data collection and preprocessing algorithms for earthquake
              protection systems.
            </>,
          ],
          images: [],
        },
        {
          company: "Unique Technology Ltd.",
          timeframe: "Nov 2018 - Dec 2018",
          role: "Computer Technician (Apprenticeship)",
          achievements: [
            <>Hardware/software maintenance and system formatting; assembled consumer-ready desktop computers.</>,
          ],
          images: [],
        },
        {
          company: "AUTH",
          timeframe: "Feb 2014 - Jul 2014",
          role: "Teaching Assistant",
          achievements: [
            <>Corrected undergraduate assignments and provided technical support for online examinations.</>,
          ],
          images: [],
        },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
        {
          name: "PhD in Informatics/Computer Engineering",
          description: (
            <>
              Chair for Embedded Systems, Informatics Department, KIT, Germany. Oct 2020 - Jul 2024.
              Dissertation: "Cross-Layer Approximation Techniques for Synthesis and Optimization of
              Machine Learning Accelerators". Jointly affiliated with the Physics Department, AUTH.
            </>
          ),
        },
        {
          name: "M.Sc. in Electronics and Telecommunications",
          description: (
            <>Physics Department, AUTH. Oct 2018 - Sep 2020. GPA 9.95/10, highest in program history.</>
          ),
        },
        {
          name: "B.Sc. in Physics",
          description: <>Physics Department, AUTH. Oct 2013 - Jun 2018. GPA 7.9/10.</>,
        },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        tags: ["Python", "C/C++", "MATLAB", "R", "Bash/Shell"].map((name) => ({ name })),
      },
      {
        title: "ML frameworks",
        tags: [
          "PyTorch",
          "TensorFlow",
          "Keras",
          "MATLAB Deep Learning Toolbox",
          "Scikit-Learn",
          "NLP/LLMs",
        ].map((name) => ({ name })),
      },
      {
        title: "Hardware & EDA",
        tags: [
          "Verilog",
          "SystemVerilog",
          "VHDL",
          "Synopsys Design Compiler",
          "Synopsys PrimeTime",
          "Synopsys VCS",
          "QuestaSim",
          "ModelSim",
          "Xilinx Vivado",
          "Cadence Virtuoso",
        ].map((name) => ({ name })),
      },
      {
        title: "Scientific tools",
        tags: ["Mathematica", "OriginLab", "LabVIEW"].map((name) => ({ name })),
      },
      {
        title: "Development",
        tags: ["Linux", "Windows", "LaTeX", "Docker", "Git"].map((name) => ({ name })),
      },
    ],
  },
  publications: {
    display: true,
    title: "Publications",
    groups: [
      {
        title: "Journals",
        items: [
          {
            authors: <>F. Afentaki, <strong>K. Balaskas</strong>, A. Datta, et al.</>,
            title:
              "Real-time stress monitoring with flexible electronics: A co-design approach from ADCs to feature extractors and classifiers",
            venue: "IEEE Internet of Things Journal",
            date: "2026",
            doi: "10.1109/JIOT.2026.3718780",
          },
          {
            authors: <>Z. Demirdag, L. Bauer, <strong>K. Balaskas</strong>, H. Nassar, J. Henkel</>,
            title: "Design-space exploration for runtime-reconfigurable FPGA-based DNN accelerators",
            venue: "ACM TODAES",
            date: "2026",
            doi: "10.1145/3859878",
          },
          {
            authors: <>{"V. Mrazek, "}<strong>K. Balaskas</strong>{", P. Carolina Lozano Duarte, Z. Vasicek, M. B. Tahoori, G. Zervakis"}</>,
            title: "Arbitrary precision printed ternary neural networks with holistic evolutionary approximation",
            venue: "IEEE Transactions on Circuits and Systems for Artificial Intelligence",
            date: "Sep 2025",
            doi: "10.1109/TCASAI.2025.3604384",
          },
          {
            authors: <>K. Pfeiffer, <strong>K. Balaskas</strong>, K. Siozios, J. Henkel</>,
            title: "Energy-aware heterogeneous federated learning via approximate DNN accelerators",
            venue: "IEEE TCAD",
            date: "Nov 2024",
            doi: "10.1109/TCAD.2024.3509793",
          },
          {
            authors: <><strong>K. Balaskas</strong>, H. Khdr, M. B. Sikal, et al.</>,
            title: "Heterogeneous accelerator design for multi-DNN workloads via heuristic optimization",
            venue: "IEEE Embedded Systems Letters",
            date: "Jul 2024",
            doi: "10.1109/LES.2024.3443628",
          },
          {
            authors: <><strong>K. Balaskas</strong>, A. Karatzas, C. Sad, et al.</>,
            title: "Hardware-aware DNN compression via diverse pruning and mixed-precision quantization",
            venue: "IEEE TETC",
            date: "Jan 2024",
            doi: "10.1109/TETC.2023.3346944",
          },
          {
            authors: <>N. Penkov, <strong>K. Balaskas</strong>, M. Rapp, J. Henkel</>,
            title: "Differentiable slimming for memory-efficient transformers",
            venue: "IEEE Embedded Systems Letters",
            date: "Sep 2023",
            doi: "10.1109/LES.2023.3299638",
          },
          {
            authors: <><strong>K. Balaskas</strong>, F. Klemme, G. Zervakis, K. Siozios, H. Amrouch, J. Henkel</>,
            title: "Variability-aware approximate circuit synthesis via genetic optimization",
            venue: "IEEE TCAS-I",
            date: "Jun 2022",
            doi: "10.1109/TCSI.2022.3183858",
          },
          {
            authors: <><strong>K. Balaskas</strong>, G. Zervakis, H. Amrouch, J. Henkel, K. Siozios</>,
            title: "Automated design approximation to overcome circuit aging",
            venue: "IEEE TCAS-I",
            date: "Aug 2021",
            doi: "10.1109/TCSI.2021.3106149",
          },
        ],
      },
      {
        title: "Conferences",
        items: [
          {
            authors: <>G. Mentzos, <strong>K. Balaskas</strong>, G. Zervakis, J. Henkel</>,
            title: "Late breaking results: Towards low-latency TinyML via regularized activation packing",
            venue: "DAC",
            date: "Jul 2026",
            doi: "10.1145/3770743.3807719",
          },
          {
            authors: <>F. Afentaki, M. Shatta, <strong>K. Balaskas</strong>, G. Panagopoulos, G. Zervakis, M. B. Tahoori</>,
            title: "Design and optimization of mixed-kernel mixed-signal SVMs for flexible electronics",
            venue: "DATE",
            date: "Apr 2026",
            doi: "10.23919/DATE69613.2026.11539610",
          },
          {
            authors: <>M. Shatta, <strong>K. Balaskas</strong>, P. C. Lozano Duarte, G. Panagopoulos, M. B. Tahoori, G. Zervakis</>,
            title: "Feature-to-classifier co-design for mixed-signal smart flexible wearables for healthcare at the extreme edge (invited paper)",
            venue: "ICCAD",
            date: "Nov 2025",
            doi: "10.1109/ICCAD66269.2025.11240680",
          },
          {
            authors: <>G. Mentzos, V. Frey, <strong>K. Balaskas</strong>, G. Zervakis, J. Henkel</>,
            title: "R2T-Tiny: Runtime-reconfigurable throughput-optimized TinyML for hybrid inference acceleration on FPGA SoCs",
            venue: "ICCAD",
            date: "Oct 2025",
            doi: "10.1109/ICCAD66269.2025.11240939",
          },
          {
            authors: <>F. Afentaki, S. S. R. Nakkilla, <strong>K. Balaskas</strong>, et al.</>,
            title: "Exploration of low-power flexible stress monitoring classifiers for conformal wearables",
            venue: "ISLPED",
            date: "Aug 2025",
            doi: "10.1109/ISLPED65674.2025.11261704",
          },
          {
            authors: <>A. M. Panteleaki, <strong>K. Balaskas</strong>, G. Zervakis, H. Amrouch, I. Anagnostopoulos</>,
            title: "Carbon-efficient 3D DNN acceleration: Optimizing performance and sustainability",
            venue: "ISVLSI",
            date: "Jul 2025",
            doi: "10.1109/ISVLSI65124.2025.11130323",
          },
          {
            authors: <>P. Vergos, T. Vergos, F. Afentaki, <strong>K. Balaskas</strong>, G. Zervakis</>,
            title: "Support vector machines classification on bendable RISC-V",
            venue: "ISVLSI",
            date: "Jul 2025",
            doi: "10.1109/ISVLSI65124.2025.11130345",
          },
          {
            authors: <>I. Sertaridis, S. Besias, F. Afentaki, <strong>K. Balaskas</strong>, G. Zervakis</>,
            title: "Compact yet highly accurate printed classifiers using sequential support vector machine circuits",
            venue: "ISCAS",
            date: "May 2025",
            doi: "10.1109/ISCAS56072.2025.11043485",
          },
          {
            authors: <>M. B. Tahoori, E. Ozer, G. Zervakis, <strong>K. Balaskas</strong>, P. Pal</>,
            title: "Computing with printed and flexible electronics",
            venue: "ETS",
            date: "May 2025",
            doi: "10.1109/ETS63895.2025.11049609",
          },
          {
            authors: <>A. M. Panteleaki, <strong>K. Balaskas</strong>, G. Zervakis, H. Amrouch, I. Anagnostopoulos</>,
            title: "Late breaking results: Leveraging approximate computing for carbon-aware DNN accelerators",
            venue: "DATE",
            date: "Mar 2025",
            doi: "10.23919/DATE64628.2025.10993191",
          },
          {
            authors: <>S. Besias, I. Sertaridis, F. Afentaki, <strong>K. Balaskas</strong>, G. Zervakis</>,
            title: "Late breaking results: Energy-efficient printed machine learning classifiers with sequential SVMs",
            venue: "DATE",
            date: "Mar 2025",
            doi: "10.23919/DATE64628.2025.10993127",
          },
          {
            authors: <><strong>K. Balaskas</strong>, G. Zervakis, K. Siozios, M. B. Tahoori, J. Henkel</>,
            title: "Approximate decision trees for machine learning classification on tiny printed circuits",
            venue: "ISQED",
            date: "Feb 2022",
            doi: "10.1109/ISQED54688.2022.9806213",
          },
          {
            authors: <><strong>K. Balaskas</strong>, K. Siozios</>,
            title: "Fatigue detection using deep long short-term memory autoencoders",
            venue: "MOCAST",
            date: "Jul 2021",
            doi: "10.1109/MOCAST52088.2021.9493378",
          },
          {
            authors: <><strong>K. Balaskas</strong>, K. Siozios</>,
            title: "ECG analysis and heartbeat classification based on shallow neural networks",
            venue: "MOCAST",
            date: "Jul 2019",
            doi: "10.1109/MOCAST.2019.8742072",
          },
        ],
      },
    ],
  },
  talks: {
    display: true,
    title: "Talks",
    groups: [
      {
        title: "Invited talks",
        items: [
          {
            event: "Smart-Plant IEEE Seasonal School",
            title: "Diverse DNN Compression for Edge AI Accelerators",
            date: "Dec 10, 2023",
            location: "Thessaloniki, Greece",
          },
          {
            event: "2nd Conference for Undergraduate Research in Physics (SPEF)",
            title: "Implementation of Shallow NNs for ECG Analysis and Heartbeat Classification",
            date: "Apr 28, 2018",
            location: "Thessaloniki, Greece",
          },
        ],
      },
      {
        title: "Conference talks",
        items: [
          {
            event: "IEEE European Test Symposium (ETS)",
            title: "Holistic Bespoke Approximation for Printed ML Classifiers",
            date: "May 27, 2025",
            location: "Tallinn, Estonia",
          },
          {
            event: "Embedded Systems Week (ESWeek)",
            title: "Differentiable Slimming for Memory-Efficient Transformers",
            date: "Sep 18, 2023",
            location: "Hamburg, Germany",
          },
          {
            event: "23rd ISQED",
            title: "Approximate Decision Trees for ML Classification on Tiny Printed Circuits",
            date: "Apr 7, 2022",
            location: "San Francisco, USA (online)",
          },
          {
            event: "MOCAST 2021",
            title: "Fatigue Detection Using Deep Long Short-Term Memory Autoencoders",
            date: "Jul 5, 2021",
            location: "Thessaloniki, Greece",
          },
          {
            event: "MOCAST 2019",
            title: "ECG Analysis and Heartbeat Classification Based on Shallow Neural Networks",
            date: "May 13, 2019",
            location: "Thessaloniki, Greece",
          },
        ],
      },
    ],
  },
  languages: {
    display: true,
    title: "Languages",
    items: [
      { name: "English", level: 5 },
      { name: "Spanish", level: 3.5 },
      { name: "German", level: 1 },
      { name: "Greek", level: 5 },
    ],
  },
  interests: {
    display: true,
    title: "Interests",
    items: ["Semi-pro basketball player", "Guitar enthusiast"],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Research projects in edge AI, machine learning accelerators, approximate computing, and flexible electronics by ${person.name}.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
