# Portfolio brief: Konstantinos Balaskas

Put this file in the root of the Magic Portfolio repo (next to package.json), then tell your AI assistant:

> Read PORTFOLIO_BRIEF.md and implement Part 1. Stop when it works in `npm run dev` and tell me what you changed. I will ask for the next part after I check it.

Work one part at a time (Part 1 to Part 5). Small steps are easier to check and cheaper to run.

---

## Rules for the assistant

- This is the Magic Portfolio template (Next.js + Once UI). Follow the patterns already in the repo. Make the smallest change that works.
- Site text lives in `src/resources/content.tsx`. Routes and settings live in `src/resources/once-ui.config.ts`. Projects are `.mdx` files in `src/app/work/projects`. Copy an existing project file's frontmatter format.
- Do NOT invent facts. Where something is missing, write a visible placeholder like `[TODO: add link]`.
- Do NOT publish the phone number or the referees' contact details, even though they are in the CV.
- Keep the Once UI attribution in the footer (the template license requires it).
- Never read, print or edit `.env` files.
- After each part, run `npm run build` and fix any errors. Do not run `git commit` or `git push` unless asked.
- Mark every sentence I should check with a trailing `(DRAFT)` in your summary message, not in the site text.

---

## Target site (modelled on deanhuang.com and the Magic Portfolio demo)

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Short summary, link to About, latest-news preview, featured project, contact form at the bottom |
| About | `/about` | CV-style: Introduction, Work Experience (one sub-block per employer), Studies, Technical Skills, then Publications, Talks, Languages, Interests |
| Projects | `/work` | The template's "Work" page, relabelled "Projects" in the menu and page title |
| News | `/news` (new) | Timeline of news, newest first |

Turn OFF the Blog and Gallery routes. Header shows location and a live clock (time zone `Europe/Athens`). Footer shows social links and the Once UI credit.

---

## Part 1: Identity, routes and avatar

- Name: Konstantinos Balaskas (first name Konstantinos, last name Balaskas)
- Role: Post-Doctoral Researcher on Edge AI
- Location: Thessaloniki, Greece. `[TODO: confirm; my current post is in Athens]`
- Time zone: Europe/Athens
- Email: kompalas@physics.auth.gr `[TODO: confirm this is the address to show publicly]`
- Avatar: `/images/avatar.jpg` (I will replace the file myself, do not change the path)
- Socials:
  - LinkedIn: https://linkedin.com/in/konstantinos-balaskas
  - GitHub: https://github.com/kompalas
  - Google Scholar: https://scholar.google.com/citations?user=_8XWxwgAAAAJ
  - ORCID: https://orcid.org/0000-0003-2886-6896
- Site title and meta description: "Konstantinos Balaskas | Edge AI researcher" / "Portfolio of Konstantinos Balaskas, post-doctoral researcher on edge AI: ML accelerators, approximate computing and flexible electronics."
- Routes: `/` true, `/about` true, `/work` true, `/blog` false, `/gallery` false, and add `/news` true. Add "News" to the header menu and rename the "Work" label to "Projects".

## Part 2: Home page

- Headline (DRAFT): "Co-designing machine learning and hardware for the edge"
- Subline (DRAFT): "I'm Konstantinos, a post-doctoral researcher working on edge AI. I co-design ML models and the hardware that runs them, from FPGAs and automotive SoCs to ultra-low-cost flexible electronics."
- Top badge: the most recent news item, linking to `/news`.
- Button/avatar link to About.
- Featured project: AutoPNN (see Projects).
- "Recent news" section: show the 3 newest items from the news data (date + title + one line), then a "See all news" link to `/news`.
- Replace the newsletter block at the bottom with the contact form from Part 5.

## Part 3: About page (CV-style, like Dean's)

Keep the template's About layout (avatar, section navigation, collapsible/sub-item blocks). Fill it as follows.

### Introduction (DRAFT, two paragraphs)

1. "I'm a post-doctoral researcher working on edge AI. My work sits where machine learning meets hardware design: co-designing ML models and the accelerators that run them so they fit tight power, area and memory budgets."
2. "I completed my PhD in Informatics at the Karlsruhe Institute of Technology (KIT) in 2024, with a dissertation on cross-layer approximation techniques for the synthesis and optimization of ML accelerators. I then led the AutoPNN project at the University of Patras, on automated design of edge AI for flexible electronics."

### Work experience (one block per employer, newest first)

1. **Scientific Advisor, Reserve Second Lieutenant**: Hellenic Center for Defence Innovation (HCDI/ELKAK), Athens, Greece. Jul 2026 to Jun 2027.
   - Core team member in ELKAK's IT department
   - Secretarial support to the CIO
   - `[TODO: I may remove this block; it is my mandatory military service]`
2. **Post-doctoral Researcher**: Department of Computer Engineering & Informatics (CEID), University of Patras, Greece. Jul 2024 to Oct 2025.
   - Team leader in the AutoPNN project
   - Developed an automated HW/SW framework for co-designing edge AI accelerators and ultra resource-efficient ML models in flexible electronics
   - Trained neural networks with integrated differentiable feature selection and variation-robust training
   - Supervised several Bachelor and Master theses
3. **Doctoral Research Scientist**: Informatics, Karlsruhe Institute of Technology, Germany. Oct 2021 to Jun 2024.
   - Research associate in the MANNHEIM-CeCaS project: co-designed an ML hardware accelerator and trained ML models (vision, segmentation, detection) for sensor-side AI tasks; developed an ML scheduling algorithm for task distribution between a car server and an edge SoC; contributed to automotive-grade design feasibility (partners include Bosch, Continental, Infineon)
   - Research associate in the ACCROSS project: investigated reduced safety margins in circuit design; developed abstract models for approximate computing in ML
   - Supervised Master theses and co-instructed Bachelor and Master courses (IoT Lab, Embedded ML, Embedded Systems II)
4. **Junior Researcher**: Physics Department, Aristotle University of Thessaloniki (AUTH), Greece. Feb 2019 to Oct 2021.
   - SmartBeeing: DSP algorithm on auditory signals for embedded co-processors
   - ICE: trained NNs for AR applications and developed specification analysis
   - SafeSchools: DSP-based data collection and preprocessing algorithms for earthquake protection systems
5. **Teaching Assistant**: Physics Department, AUTH. Feb 2014 to Jul 2014. Corrected undergraduate assignments; provided technical support for online examinations.
6. **Computer Technician (Apprenticeship)**: Unique Technology Ltd., Thessaloniki. Nov 2018 to Dec 2018. Hardware/software maintenance and system formatting; assembled consumer-ready desktop computers.

### Studies

1. **PhD in Informatics/Computer Engineering**: Chair for Embedded Systems, Informatics Department, KIT, Germany. Oct 2020 to Jul 2024. Dissertation: "Cross-Layer Approximation Techniques for Synthesis and Optimization of Machine Learning Accelerators". Jointly affiliated with the Physics Department, AUTH.
2. **M.Sc. in Electronics and Telecommunications**: Physics Department, AUTH. Oct 2018 to Sep 2020. GPA 9.95/10, highest in program history.
3. **B.Sc. in Physics**: Physics Department, AUTH. Oct 2013 to Jun 2018. GPA 7.9/10.

### Technical skills (groups with chips)

- Programming & scripting: Python, C/C++, MATLAB, R, Bash/Shell
- Machine learning frameworks: PyTorch, TensorFlow, Keras, MATLAB Deep Learning Toolbox, Scikit-Learn, NLP/LLMs
- Hardware design & EDA tools: Verilog, SystemVerilog, VHDL, Synopsys Design Compiler, Synopsys PrimeTime, Synopsys VCS, QuestaSim, ModelSim, Xilinx Vivado, Cadence Virtuoso
- Scientific & engineering tools: Mathematica, OriginLab, LabVIEW
- Development & productivity: Linux, Windows, LaTeX, Docker, Git

### Languages (level out of 5)

English 5, Spanish 3.5, German 1, Greek 5

### Interests

Semi-pro basketball player. Guitar enthusiast.

### Talks

Invited:
- Smart-Plant IEEE Seasonal School: "Diverse DNN Compression for Edge AI Accelerators", Dec 10, 2023, Thessaloniki, Greece
- 2nd Conference for Undergraduate Research in Physics (SPEF): "Implementation of Shallow NNs for ECG Analysis and Heartbeat Classification", Apr 28, 2018, Thessaloniki, Greece

Conference:
- IEEE European Test Symposium (ETS): "Holistic Bespoke Approximation for Printed ML Classifiers", May 27, 2025, Tallinn, Estonia
- Embedded Systems Week (ESWeek): "Differentiable Slimming for Memory-Efficient Transformers", Sep 18, 2023, Hamburg, Germany
- 23rd ISQED: "Approximate Decision Trees for ML Classification on Tiny Printed Circuits", Apr 7, 2022, San Francisco, USA (online)
- MOCAST 2021: "Fatigue Detection Using Deep Long Short-Term Memory Autoencoders", Jul 5, 2021, Thessaloniki, Greece
- MOCAST 2019: "ECG Analysis and Heartbeat Classification Based on Shallow Neural Networks", May 13, 2019, Thessaloniki, Greece

### Publications

Show as a list grouped by "Journal articles" and "Conference proceedings", newest first, each with a DOI link (https://doi.org/<DOI>). Bold "K. Balaskas" in the author list.

Journal articles:
- F. Afentaki, K. Balaskas, A. Datta, et al., "Real-time stress monitoring with flexible electronics: A co-design approach from ADCs to feature extractors and classifiers," IEEE Internet of Things Journal, 2026. DOI 10.1109/JIOT.2026.3718780
- Z. Demirdag, L. Bauer, K. Balaskas, H. Nassar, J. Henkel, "Design-space exploration for runtime-reconfigurable FPGA-based DNN accelerators," ACM TODAES, 2026. DOI 10.1145/3859878
- V. Mrazek, K. Balaskas, P. Carolina Lozano Duarte, Z. Vasicek, M. B. Tahoori, G. Zervakis, "Arbitrary precision printed ternary neural networks with holistic evolutionary approximation," IEEE Trans. on Circuits and Systems for Artificial Intelligence, Sep 2025. DOI 10.1109/TCASAI.2025.3604384
- K. Pfeiffer, K. Balaskas, K. Siozios, J. Henkel, "Energy-aware heterogeneous federated learning via approximate DNN accelerators," IEEE TCAD, Nov 2024. DOI 10.1109/TCAD.2024.3509793
- K. Balaskas, H. Khdr, M. B. Sikal, et al., "Heterogeneous accelerator design for multi-DNN workloads via heuristic optimization," IEEE Embedded Systems Letters, Jul 2024. DOI 10.1109/LES.2024.3443628
- K. Balaskas, A. Karatzas, C. Sad, et al., "Hardware-aware DNN compression via diverse pruning and mixed-precision quantization," IEEE TETC, Jan 2024. DOI 10.1109/TETC.2023.3346944
- N. Penkov, K. Balaskas, M. Rapp, J. Henkel, "Differentiable slimming for memory-efficient transformers," IEEE Embedded Systems Letters, Sep 2023. DOI 10.1109/LES.2023.3299638
- K. Balaskas, F. Klemme, G. Zervakis, K. Siozios, H. Amrouch, J. Henkel, "Variability-aware approximate circuit synthesis via genetic optimization," IEEE TCAS-I, Jun 2022. DOI 10.1109/TCSI.2022.3183858
- K. Balaskas, G. Zervakis, H. Amrouch, J. Henkel, K. Siozios, "Automated design approximation to overcome circuit aging," IEEE TCAS-I, Aug 2021. DOI 10.1109/TCSI.2021.3106149

Conference proceedings:
- F. Afentaki, M. Shatta, K. Balaskas, G. Panagopoulos, G. Zervakis, M. B. Tahoori, "Design and optimization of mixed-kernel mixed-signal SVMs for flexible electronics," DATE, Apr 2026. DOI 10.23919/DATE69613.2026.11539610
- G. Mentzos, K. Balaskas, G. Zervakis, J. Henkel, "Late breaking results: Towards low-latency TinyML via regularized activation packing," DAC, Jul 2026. DOI 10.1145/3770743.3807719
- F. Afentaki, S. S. R. Nakkilla, K. Balaskas, et al., "Exploration of low-power flexible stress monitoring classifiers for conformal wearables," ISLPED, Aug 2025. DOI 10.1109/ISLPED65674.2025.11261704
- S. Besias, I. Sertaridis, F. Afentaki, K. Balaskas, G. Zervakis, "Late breaking results: Energy-efficient printed machine learning classifiers with sequential SVMs," DATE, Mar 2025. DOI 10.23919/DATE64628.2025.10993127
- G. Mentzos, V. Frey, K. Balaskas, G. Zervakis, J. Henkel, "R2T-Tiny: Runtime-reconfigurable throughput-optimized TinyML for hybrid inference acceleration on FPGA SoCs," ICCAD, Oct 2025. DOI 10.1109/ICCAD66269.2025.11240939
- A. M. Panteleaki, K. Balaskas, G. Zervakis, H. Amrouch, I. Anagnostopoulos, "Carbon-efficient 3D DNN acceleration: Optimizing performance and sustainability," ISVLSI, Jul 2025. DOI 10.1109/ISVLSI65124.2025.11130323
- A. M. Panteleaki, K. Balaskas, G. Zervakis, H. Amrouch, I. Anagnostopoulos, "Late breaking results: Leveraging approximate computing for carbon-aware DNN accelerators," DATE, Mar 2025. DOI 10.23919/DATE64628.2025.10993191
- I. Sertaridis, S. Besias, F. Afentaki, K. Balaskas, G. Zervakis, "Compact yet highly accurate printed classifiers using sequential support vector machine circuits," ISCAS, May 2025. DOI 10.1109/ISCAS56072.2025.11043485
- M. Shatta, K. Balaskas, P. C. Lozano Duarte, G. Panagopoulos, M. B. Tahoori, G. Zervakis, "Feature-to-classifier co-design for mixed-signal smart flexible wearables for healthcare at the extreme edge (invited paper)," ICCAD, Nov 2025. DOI 10.1109/ICCAD66269.2025.11240680
- M. B. Tahoori, E. Ozer, G. Zervakis, K. Balaskas, P. Pal, "Computing with printed and flexible electronics," ETS, May 2025. DOI 10.1109/ETS63895.2025.11049609
- P. Vergos, T. Vergos, F. Afentaki, K. Balaskas, G. Zervakis, "Support vector machines classification on bendable RISC-V," ISVLSI, Jul 2025. DOI 10.1109/ISVLSI65124.2025.11130345
- K. Balaskas, G. Zervakis, K. Siozios, M. B. Tahoori, J. Henkel, "Approximate decision trees for machine learning classification on tiny printed circuits," ISQED, Feb 2022. DOI 10.1109/ISQED54688.2022.9806213
- K. Balaskas, K. Siozios, "Fatigue detection using deep long short-term memory autoencoders," MOCAST, Jul 2021. DOI 10.1109/MOCAST52088.2021.9493378
- K. Balaskas, K. Siozios, "ECG analysis and heartbeat classification based on shallow neural networks," MOCAST, Jul 2019. DOI 10.1109/MOCAST.2019.8742072

## Part 4: Projects page (the `/work` route)

One MDX file per project in `src/app/work/projects`. Use only the facts below. Cover images and links are placeholders: `[TODO: cover image]`, `[TODO: project link]`. Delete the template's sample projects.

1. **AutoPNN** (Univ. of Patras, 2024 to 2025, team leader): automated HW/SW framework for co-designing edge AI accelerators and ultra resource-efficient ML models in flexible electronics, with differentiable feature selection and variation-robust training. Featured on Home.
2. **MANNHEIM-CeCaS** (KIT, 2021 to 2024): co-designed an ML hardware accelerator and trained vision, segmentation and detection models for sensor-side AI; ML scheduling between a car server and an edge SoC; automotive-grade design feasibility with industry partners.
3. **ACCROSS** (KIT): reduced safety margins in circuit design and abstract models of approximate computing in ML.
4. **PhD research: Cross-layer approximation for ML accelerators** (KIT, 2020 to 2024): dissertation "Cross-Layer Approximation Techniques for Synthesis and Optimization of Machine Learning Accelerators".
5. **SmartBeeing** (AUTH, 2019 to 2021): DSP algorithm on auditory signals for embedded co-processors.
6. **ICE** (AUTH): NNs for AR applications and specification analysis.
7. **SafeSchools** (AUTH): DSP-based data collection and preprocessing for earthquake protection systems.

## Part 5: News timeline and contact form

### News page (`/news`)

- Data lives in one easy-to-edit file, `src/resources/news.ts`, an array of `{ date: "YYYY-MM", title, text, link?, tag? }`.
- Layout: vertical timeline, newest first, grouped by year. A thin vertical line, a dot per item, date on the left (stacked above on mobile), and the title, one or two lines of text, an optional tag chip and an optional "paper" link on the right. Use Once UI components and design tokens already in the repo, so it matches the theme and works in light and dark mode.
- The Home page shows the 3 newest items and a "See all news" link.

Seed items (DRAFT; I will verify wording and dates, and add links):

| date | title | tag |
|---|---|---|
| 2026-07 | Started as Scientific Advisor at the Hellenic Center for Defence Innovation (HCDI/ELKAK), Athens | Career |
| 2026-07 | "Late breaking results: Towards low-latency TinyML via regularized activation packing" published at DAC 2026 | Paper |
| 2026-04 | "Design and optimization of mixed-kernel mixed-signal SVMs for flexible electronics" published at DATE 2026 | Paper |
| 2026-01 | "Real-time stress monitoring with flexible electronics" published in IEEE Internet of Things Journal `[TODO: confirm month]` | Paper |
| 2026-01 | "Design-space exploration for runtime-reconfigurable FPGA-based DNN accelerators" published in ACM TODAES `[TODO: confirm month]` | Paper |
| 2025-11 | Invited paper at ICCAD 2025 on feature-to-classifier co-design for smart flexible wearables | Paper |
| 2025-10 | Completed my post-doc at the University of Patras (CEID) | Career |
| 2025-05 | Talk at IEEE European Test Symposium (ETS), Tallinn: "Holistic Bespoke Approximation for Printed ML Classifiers" | Talk |

### Contact form (bottom of Home, replacing the newsletter block)

- Heading: "Get in touch". Fields: name, email, message, plus a hidden honeypot field for spam.
- Submit with `fetch` (POST, JSON) to the URL in the environment variable `NEXT_PUBLIC_FORM_ENDPOINT`. I will create the endpoint with a hosted form service. If the variable is empty, show a "Email me" button (`mailto:`) instead of the form.
- Show clear success and error messages. Do not add a server or database.
- Add `NEXT_PUBLIC_FORM_ENDPOINT=` (empty) to `.env.example` only.
