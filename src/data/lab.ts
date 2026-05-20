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
  // Special
  { name: "ECG", price: 250, category: "Special" },
  { name: "PFT (Pulmonary Function Test)", price: 550, category: "Special" },
  { name: "Biopsy", price: "500+", category: "Special" },
];

export const categories = [
  "All", "Haematology", "Biochemistry", "Electrolytes",
  "Urine", "Serology", "Thyroid & Hormones", "Microbiology", "Special",
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

export const packages: Pkg[] = [
  {
    slug: "mini",
    name: "Mini Health Package",
    tests: 61, mrp: 1200, price: 650,
    includes: ["Complete Blood Count (24)", "Diabetic (Glucose Fasting)", "Kidney Function (7)", "Lipid Profile (9)", "Urine Complete (20)"],
  },
  {
    slug: "basic",
    name: "Basic Health Package",
    tests: 79, mrp: 3200, price: 1600,
    includes: ["CBC (24)", "Diabetic (FBS + HbA1C)", "Lipid Profile", "Kidney Function", "Liver Function (12)", "Electrolytes", "Bone Health"],
  },
  {
    slug: "regular",
    name: "Regular Health Package",
    tests: 87, mrp: 4500, price: 2000,
    includes: ["CBC (24)", "Diabetic + HbA1C", "Lipid + Kidney + Liver", "Iron Profile", "Thyroid (T3/T4/TSH)", "Tumor Marker", "Urine Complete"],
    highlight: "Most Popular",
    featured: true,
  },
  {
    slug: "executive",
    name: "Executive Health Package",
    tests: 89, mrp: 5200, price: 2500,
    includes: ["CBC + Diabetic + HbA1C", "Lipid + Kidney + Liver", "Thyroid Function", "Tumor Marker", "Vitamin D & B12", "Iron Profile"],
  },
  {
    slug: "premium",
    name: "Premium Health Package",
    tests: 96, mrp: 7300, price: 3100,
    includes: ["Everything in Executive", "Pancreas Profile", "Cardiac Panel (6)", "Vitamin D & B12", "Iron Profile", "Bone Health"],
  },
  {
    slug: "fullbody",
    name: "Full Body Health Checkup",
    tests: 9, mrp: 3000, price: 1600,
    includes: ["CBC", "ESR", "FBS + HbA1C", "Renal Function", "Liver Function", "Lipid Profile", "Thyroid Profile", "Urine Routine"],
  },
  {
    slug: "master",
    name: "Master Health Checkup",
    tests: 90, mrp: 2500, price: 1600,
    includes: ["FBS + PPBS", "CBC + ESR + Smear", "Thyroid Function", "Lipid + Liver + Renal", "HbA1C", "Urine Complete"],
  },
  {
    slug: "diabetes-essential",
    name: "Diabetes Essential Panel",
    tests: 10, mrp: 1000, price: 550,
    includes: ["FBS + PPBS", "HbA1C", "Blood Urea + Creatinine", "Triglycerides", "BUN + eGFR"],
  },
  {
    slug: "diabetes-advanced",
    name: "Diabetes Advanced Panel",
    tests: 20, mrp: 1200, price: 899,
    includes: ["FBS + PPBS", "HbA1C", "Lipid Profile", "eGFR + BUN", "Urea + Creatinine"],
  },
  {
    slug: "preop",
    name: "Pre-Operative Panel",
    tests: 9, mrp: 0, price: 1600,
    includes: ["CBC", "Blood Group + Rh", "BT/CT", "Sugar + Urea + Creatinine", "HIV + HBsAg + HCV"],
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
