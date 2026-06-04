export const lab = {
  name: "Live Life Healthcare Lab",
  nameTa: "லைவ் லைப் ஹெல்த்கேர் லேப்",
  tagline: "Quality Laboratory Services",
  taglineTa: "வீட்டிற்கு வந்து இரத்த மாதிரி எடுக்கும் வசதி",
  phones: ["9751504558", "9751744558", "8190004558"],
  address: {
    line1: "14, Aarthi Complex",
    line2: "Lakshmi Thirumana Mandapam Opposite",
    line3: "Anushm Theatre, Kizhpuram",
    city: "Udumalaipettai",
    pin: "642126",
    state: "Tamil Nadu, India",
  },
  mapsUrl: "https://maps.app.goo.gl/QCwFzbpas4AccvJE7",
  owner: { name: "S. SatheeshKumar", qual: "DMLT., DXT." },
};

export type Test = { name: string; price: number | string; category: string };

export const tests: Test[] = [
  // Haematology
  { name: "HB, TC, DC, ESR", price: 150, category: "Haematology" },
  { name: "HB, TC, DC, PLC", price: 200, category: "Haematology" },
  { name: "Complete Haemogram", price: 300, category: "Haematology" },
  { name: "Complete Haemogram + ESR", price: 300, category: "Haematology" },
  { name: "Complete Haemogram + ESR + Smear Study", price: 450, category: "Haematology" },
  { name: "Haemoglobin", price: 50, category: "Haematology" },
  { name: "ESR", price: 50, category: "Haematology" },
  { name: "Platelet Count", price: 100, category: "Haematology" },
  { name: "Blood Group and Rh Typing", price: 50, category: "Haematology" },
  { name: "Bleeding Time & Clotting Time", price: 200, category: "Haematology" },
  { name: "Peripheral Smear Study", price: 150, category: "Haematology" },
  { name: "Absolute Eosinophil Count", price: 150, category: "Haematology" },
  // Biochemistry
  { name: "Lipid Profile", price: 300, category: "Biochemistry" },
  { name: "Liver Function Tests (LFT)", price: 520, category: "Biochemistry" },
  { name: "HbA1C", price: 400, category: "Biochemistry" },
  { name: "Blood Glucose (Single)", price: 40, category: "Biochemistry" },
  { name: "Glucose Tolerance Test (3 times)", price: 150, category: "Biochemistry" },
  { name: "Blood Urea", price: 100, category: "Biochemistry" },
  { name: "Serum Creatinine", price: 100, category: "Biochemistry" },
  { name: "Serum Cholesterol", price: 150, category: "Biochemistry" },
  { name: "Serum Uric Acid", price: 150, category: "Biochemistry" },
  { name: "Prothrombin Time (PT/INR)", price: 250, category: "Biochemistry" },
  { name: "CKMB", price: 400, category: "Biochemistry" },
  { name: "Amylase", price: 400, category: "Biochemistry" },
  { name: "Lipase", price: 450, category: "Biochemistry" },
  // Electrolytes
  { name: "Electrolytes Complete", price: 650, category: "Electrolytes" },
  { name: "Sodium", price: 150, category: "Electrolytes" },
  { name: "Potassium", price: 150, category: "Electrolytes" },
  { name: "Calcium", price: 150, category: "Electrolytes" },
  // Urine
  { name: "Urine Complete (Manual & Strip)", price: 150, category: "Urine" },
  { name: "Microalbuminuria", price: 350, category: "Urine" },
  { name: "Gravindex (Pregnancy Test)", price: 150, category: "Urine" },
  { name: "24 Hrs Urine Protein", price: 350, category: "Urine" },
  { name: "Urine PCR", price: 350, category: "Urine" },
  // Serology
  { name: "WIDAL — Slide Technique", price: 150, category: "Serology" },
  { name: "VDRL", price: 150, category: "Serology" },
  { name: "ASO", price: 400, category: "Serology" },
  { name: "RA Factor", price: 400, category: "Serology" },
  { name: "CRP", price: 400, category: "Serology" },
  { name: "HIV", price: 400, category: "Serology" },
  { name: "HBsAg", price: 300, category: "Serology" },
  { name: "HCV", price: 300, category: "Serology" },
  { name: "Dengue NS1, IgG, IgM", price: 800, category: "Serology" },
  // Thyroid & Hormones
  { name: "TFT (T3, T4, TSH)", price: 480, category: "Thyroid & Hormones" },
  { name: "TSH", price: 280, category: "Thyroid & Hormones" },
  { name: "FT3, FT4, TSH", price: 660, category: "Thyroid & Hormones" },
  { name: "Vitamin B12", price: 1000, category: "Thyroid & Hormones" },
  { name: "Vitamin D3", price: 1200, category: "Thyroid & Hormones" },
  { name: "Ferritin", price: 800, category: "Thyroid & Hormones" },
  { name: "PSA", price: 580, category: "Thyroid & Hormones" },
  { name: "CA-125", price: 800, category: "Thyroid & Hormones" },
  { name: "CEA", price: 800, category: "Thyroid & Hormones" },
  { name: "Beta HCG", price: 650, category: "Thyroid & Hormones" },
  { name: "Prolactin", price: 420, category: "Thyroid & Hormones" },
  { name: "Testosterone", price: 480, category: "Thyroid & Hormones" },
  { name: "AMH", price: 1700, category: "Thyroid & Hormones" },
  { name: "Troponin I", price: 950, category: "Thyroid & Hormones" },
  // Microbiology
  { name: "Urine Culture & Sensitivity", price: 450, category: "Microbiology" },
  { name: "Pus Culture & Sensitivity", price: 450, category: "Microbiology" },
  { name: "Blood Culture & Sensitivity", price: 850, category: "Microbiology" },
  { name: "FNAC", price: 650, category: "Microbiology" },
  // Cardiology & Pulmonology
  { name: "ECG (Electrocardiogram)", price: 200, category: "Cardiology & Pulmonology" },
  { name: "PFT (Pulmonary Function Test)", price: 500, category: "Cardiology & Pulmonology" },
  { name: "Advanced Digital Microscopy (HD Trinocular)", price: 300, category: "Microbiology" },
];

export const categories = [
  "All", "Haematology", "Biochemistry", "Electrolytes",
  "Urine", "Serology", "Thyroid & Hormones", "Microbiology",
  "Cardiology & Pulmonology",
];


export type Pkg = {
  slug: string;
  name: string;
  tests: number;
  mrp: number;
  price: number;
  includes: string[];
  featured?: boolean;
  highlight?: string;
};

// Sorted low → high by offer price
export const packages: Pkg[] = [
  {
    slug: "life-lite",
    name: "Life Lite",
    tests: 5, mrp: 480, price: 250,
    highlight: "Starter",
    includes: [
      "Haemoglobin — red blood cell count; detects anaemia",
      "Glucose FBS/PPBS — fasting & post-meal sugar; screens for diabetes",
      "Creatinine — kidney waste filter efficiency marker",
      "Bilirubin — liver pigment; flags jaundice & liver stress",
      "Calcium — bone mineral & nerve-signal indicator",
    ],
  },
  {
    slug: "diabetic-lite",
    name: "Diabetic Lite",
    tests: 6, mrp: 680, price: 499,
    includes: [
      "Glucose FBS/PPBS — fasting & post-meal sugar control",
      "Urine Sugar — detects glucose spill into urine",
      "Urine Ketone — flags dangerous fat-burning (DKA risk)",
      "Urea — kidney waste product; tracks renal stress",
      "Total Cholesterol — overall cardiovascular fat risk",
      "Creatinine — kidney filtration efficiency",
    ],
  },
  {
    slug: "fever-life",
    name: "Fever Life",
    tests: 34, mrp: 850, price: 500,
    includes: [
      "CBC with ESR & Peripheral Smear (16)",
      "Urine Complete Examination (16)",
      "Glucose RBS — random blood sugar snapshot",
      "Widal Test — typhoid antibody screen (S. Typhi & Paratyphi)",
    ],
  },
  {
    slug: "anaemia-lite",
    name: "Anaemia Lite",
    tests: 6, mrp: 900, price: 500,
    includes: [
      "Haemoglobin — oxygen-carrying capacity",
      "Peripheral Blood Smear — anaemia type identification",
      "Serum Iron — actual iron circulating in blood",
      "TIBC — total iron binding capacity",
      "UIBC — unsaturated iron binding capacity",
      "Transferrin Saturation % — % of carrier proteins loaded with iron",
    ],
  },
  {
    slug: "diabetic-max",
    name: "Diabetic Max",
    tests: 8, mrp: 1130, price: 700,
    includes: [
      "Blood Sugar FBS/PPBS — dual-point glucose control",
      "HbA1c — 3-month average blood sugar (gold standard)",
      "Urea — early kidney damage signal",
      "Creatinine — kidney filtration rate",
      "Total Cholesterol — cardiovascular risk",
      "BUN — cross-checks kidney–liver function",
      "eGFR — precise kidney function stage",
      "Serum Albumin — protein & liver health indicator",
    ],
  },
  {
    slug: "life-mini-master",
    name: "Life Mini Master",
    tests: 57, mrp: 2200, price: 1000,
    includes: [
      "CBC with ESR & Smear (16)",
      "Glucose FBS & PPBS (2)",
      "Kidney Function Test — Urea, Creatinine, Uric Acid, BUN, eGFR, Potassium (6)",
      "Liver Function Test (10)",
      "Lipid Profile (7)",
      "Urine Complete Examination (16)",
    ],
  },
  {
    slug: "life-basic",
    name: "Life Basic",
    tests: 68, mrp: 3800, price: 1600,
    includes: [
      "CBC with ESR & Smear (16)",
      "Glucose FBS & PPBS (2)",
      "HbA1c (1)",
      "Kidney Function Test (6)",
      "Thyroid — Free T3, Free T4, TSH (3)",
      "Urine Complete Examination (16)",
      "Liver Function Test (10)",
      "Lipid Profile (7)",
      "Serum Electrolytes (6)",
      "ECG — heart rhythm trace (1)",
    ],
  },
  {
    slug: "life-regular",
    name: "Life Regular",
    tests: 72, mrp: 5600, price: 2500,
    highlight: "Most Popular",
    featured: true,
    includes: [
      "CBC with ESR & Smear (16)",
      "Glucose FBS & PPBS + HbA1c (3)",
      "Kidney Function Test (6)",
      "Liver Function Test (10)",
      "Lipid Profile (7)",
      "Serum Electrolytes (6)",
      "Thyroid — Free T3, Free T4, TSH (3)",
      "Iron Profile (3)",
      "Urine Complete Examination (16)",
      "ECG (1)",
      "Pulmonary Function Test — PFT (1)",
    ],
  },
  {
    slug: "life-exclusive",
    name: "Life Exclusive",
    tests: 92, mrp: 8000, price: 4000,
    includes: [
      "CBC with ESR & Smear (16)",
      "Glucose Panel — FBS, PPBS, HbA1c, MBG (4)",
      "Kidney Function Test (5)",
      "ECG (1)",
      "Liver Function Test (9)",
      "Lipid Profile (7)",
      "Urine Complete Examination (16)",
      "Serum Electrolytes (6)",
      "Pancreas Profile — Amylase & Lipase (2)",
      "Thyroid — Free T3, Free T4, TSH (3)",
      "Iron Profile (4)",
      "Vitamin Profile — Vitamin D3 & B12 (2)",
      "Pulmonary Function Test — PFT (1)",
    ],
  },
  {
    slug: "life-max",
    name: "Life Max",
    tests: 134, mrp: 12000, price: 8000,
    highlight: "Most Comprehensive",
    includes: [
      "Diabetes Panel (5) + Pre-Diabetes Panel (4)",
      "Thyroid — Free T3, Free T4, TSH (3)",
      "Lipid Profile (9) — full cardiovascular fat panel",
      "Cardiac Risk Markers — Apo-A1, Apo-B, Hs-CRP, Lp(a), Homocysteine (6)",
      "Liver Function (12) + Pancreas Profile (2)",
      "Renal Function (5) + Kidney Microvascular — Microalbumin/Creatinine (3)",
      "Bone Markers (3) + Electrolytes (2) + Gout (Uric Acid)",
      "Iron Deficiency Profile (4) + Hair Loss — Zinc, Copper (2)",
      "Fat-Soluble Vitamins A, D, E, K (4) + B12 & Folate (2)",
      "Trace Micronutrients (7) — Cr, Co, Mn, Mo, Ni, Se, V",
      "Heavy Metal / Toxic Elements (15) — Pb, Hg, As, Cd, Al & more",
      "Testosterone — total male sex hormone level",
      "Hepatitis B Surface Antigen (HBsAg)",
      "Complete Haemogram (25) + Urine Routine (18)",
    ],
  },
];

export const faqs = [
  { q: "Where is the lab located?", a: "14, Aarthi Complex, Lakshmi Thirumana Mandapam Opp., Anushm Theatre, Kizhpuram, Udumalaipettai 642 126." },
  { q: "Is the lab open 24 hours?", a: "Yes. The lab operates 24 hours a day, 7 days a week — including holidays." },
  { q: "Do you offer home collection?", a: "Yes. Free home sample collection is available across Udumalaipettai. Call any of our three numbers to book." },
  { q: "How long does it take to receive results?", a: "Most routine tests are completed within a few hours. Advanced tests may take longer — staff will advise the expected turnaround at sample collection." },
  { q: "Are the tests done on automated machines?", a: "Yes. All biochemical tests are processed on a Fully Auto Analyser and Fully Automated Cell Counter for maximum accuracy and consistency." },
  { q: "Is the lab accredited?", a: "Yes. Live Life Healthcare Lab is a participant in the CMC Quality Centre Programme, ensuring standardised national-grade quality testing." },
  { q: "How long should I fast before a blood test?", a: "A 12-hour fast is required for most blood tests, especially sugar and lipid panels. Plain water is allowed." },
  { q: "Do you have packages for diabetes patients?", a: "Yes. Diabetes Essential (₹550) and Diabetes Advanced (₹899) panels are available. Monitoring every 3 months is advised." },
  { q: "Can I walk in without an appointment?", a: "Yes. Walk-ins are welcome at any hour. Booking ahead is appreciated for home collection." },
  { q: "What is the most affordable health package?", a: "The Mini Health Package covers 61 tests for just ₹650 (MRP ₹1,200)." },
];
