// positions-data.js — generated from your provided list (formal English)

const T = s => s || "";
function roleEN(ms) {
  const k = T(ms).toLowerCase();

  // Heads (Ketua Exco ...)
  if (k.startsWith("ketua exco protokol")) return "Head of Protocol Bureau";
  if (k.startsWith("ketua exco logistik")) return "Head of Logistics Bureau";
  if (k.startsWith("ketua exco teknikal")) return "Head of Technical Bureau";
  if (k.startsWith("ketua exco multimedia")) return "Head of Multimedia Bureau";
  if (k.startsWith("ketua exco tiket")) return "Head of Ticketing Bureau";

  // EXCOs
  if (k.startsWith("exco protokol")) return "Executive Committee – Protocol";
  if (k.startsWith("exco logistik")) return "Executive Committee – Logistics";
  if (k.startsWith("exco keselamatan")) return "Executive Committee – Security";
  if (k.startsWith("exco hubungan luar")) return "Executive Committee – External Relations";
  if (k.startsWith("exco perhubungan jaringan luar")) return "Executive Committee – External Relations & Networking";
  if (k.startsWith("exco multimedia")) return "Executive Committee – Multimedia";

  // Higher council
  if (k.startsWith("bendahari")) return "Treasurer";
  if (k.startsWith("timbalan pengerusi")) return "Deputy Chairperson";
  if (k.startsWith("pengerusi")) return "Chairperson";

  // Others
  if (k.startsWith("fasilitator")) return "Facilitator";
  if (k.startsWith("subordinat") || k === "subordinat") return "Subordinate";
  if (k.startsWith("ahli biasa")) return "Ordinary Member";

  // Fallback: Title Case
  return ms.replace(/\b\w/g, c => c.toUpperCase());
}

function catOf(ms) {
  const k = T(ms).toLowerCase();
  if (
    k.startsWith("bendahari") ||
    k.startsWith("pengerusi") ||
    k.startsWith("timbalan pengerusi")
  ) return "higher";

  if (
    k.startsWith("ketua exco") ||
    k.startsWith("exco ")
  ) return "excos";

  if (k.startsWith("fasilitator")) return "facilitator";

  // default bucket
  return "subordinates";
}

window.POSITIONS = [
  // ===== UNIVERSITY (2024)
  { role_ms:"KETUA EXCO TIKET", role_en:roleEN("KETUA EXCO TIKET"), org:"DIYA FEST 3.0 2024 MADANI", date:"01/10/2024", year:2024, scope:"UNIVERSITY", category:catOf("KETUA EXCO TIKET") },
  { role_ms:"KETUA EXCO TIKET", role_en:roleEN("KETUA EXCO TIKET"), org:"KALAKRITHI 6.0", date:"14/12/2024", year:2024, scope:"UNIVERSITY", category:catOf("KETUA EXCO TIKET") },
  { role_ms:"EXCO PROTOKOL", role_en:roleEN("EXCO PROTOKOL"), org:"Public Speaking Competition (Inter-Faculty)", date:"05/09/2024", year:2024, scope:"UNIVERSITY", category:catOf("EXCO PROTOKOL") },
  { role_ms:"EXCO MULTIMEDIA", role_en:roleEN("EXCO MULTIMEDIA"), org:"Kavadi Making Competition", date:"01/05/2024", year:2024, scope:"UNIVERSITY", category:catOf("EXCO MULTIMEDIA") },

  // ===== UNIVERSITY (2023)
  { role_ms:"SUBORDINAT", role_en:roleEN("SUBORDINAT"), org:"DIYA FEST 2.0", date:"02/11/2023", year:2023, scope:"UNIVERSITY", category:catOf("SUBORDINAT") },
  { role_ms:"KETUA EXCO TEKNIKAL", role_en:roleEN("KETUA EXCO TEKNIKAL"), org:"Holi Festival 2023", date:"20/10/2023", year:2023, scope:"UNIVERSITY", category:catOf("KETUA EXCO TEKNIKAL") },
  { role_ms:"EXCO LOGISTIK", role_en:roleEN("EXCO LOGISTIK"), org:"Inter-Faculty Sports Carnival (KASUFIK) 2023", date:"09/01/2023", year:2023, scope:"UNIVERSITY", category:catOf("EXCO LOGISTIK") },

  // ===== UNIVERSITY (2022)
  { role_ms:"EXCO KESELAMATAN", role_en:roleEN("EXCO KESELAMATAN"), org:"DIYA FEST 2022 UPNM", date:"22/11/2022", year:2022, scope:"UNIVERSITY", category:catOf("EXCO KESELAMATAN") },
  { role_ms:"FASILITATOR", role_en:roleEN("FASILITATOR"), org:"Organizational Leadership & Management Course 2022", date:"26/11/2022", year:2022, scope:"UNIVERSITY", category:catOf("FASILITATOR") },

  // ===== NATIONAL / KEBANGSAAN
  { role_ms:"EXCO PROTOKOL", role_en:roleEN("EXCO PROTOKOL"), org:"CSR @ Community, Kg PerSeirai, Batu Pahat, Johor", date:"26/11/2022", year:2022, scope:"NATIONAL", category:catOf("EXCO PROTOKOL") },
  { role_ms:"FASILITATOR", role_en:roleEN("FASILITATOR"), org:"National Science Fair for Young Children 2023", date:"26/09/2023", year:2023, scope:"NATIONAL", category:catOf("FASILITATOR") },
  { role_ms:"EXCO LOGISTIK", role_en:roleEN("EXCO LOGISTIK"), org:"Jelajah IPT & STEM Series 4", date:"08/11/2022", year:2022, scope:"NATIONAL", category:catOf("EXCO LOGISTIK") },
  { role_ms:"BENDAHARI", role_en:roleEN("BENDAHARI"), org:"Hackathon X UMPSA", date:"19/10/2022", year:2022, scope:"NATIONAL", category:catOf("BENDAHARI") },
  { role_ms:"BENDAHARI", role_en:roleEN("BENDAHARI"), org:"SULAM ORDS 2024", date:"06/06/2024", year:2024, scope:"NATIONAL", category:catOf("BENDAHARI") },
  { role_ms:"KETUA EXCO MULTIMEDIA", role_en:roleEN("KETUA EXCO MULTIMEDIA"), org:"Leadership Through Budaya Madani Programme", date:"23/01/2024", year:2024, scope:"NATIONAL", category:catOf("KETUA EXCO MULTIMEDIA") },
  { role_ms:"FASILITATOR", role_en:roleEN("FASILITATOR"), org:"Corporate Social Responsibility (CSR) FST", date:"23/08/2023", year:2023, scope:"NATIONAL", category:catOf("FASILITATOR") },
  { role_ms:"PENGERUSI", role_en:roleEN("PENGERUSI"), org:"ESPORT Gamers Unite Tournament (GUT)", date:"", year:2023, scope:"NATIONAL", category:catOf("PENGERUSI") },

  // ===== FACULTY
  { role_ms:"KETUA EXCO MULTIMEDIA", role_en:roleEN("KETUA EXCO MULTIMEDIA"), org:"Dean’s Award Ceremony FSTP 2023/2024", date:"11/12/2024", year:2024, scope:"FACULTY", category:catOf("KETUA EXCO MULTIMEDIA") },
  { role_ms:"TIMBALAN PENGERUSI", role_en:roleEN("TIMBALAN PENGERUSI"), org:"AWS Cloud Collective", date:"12/11/2022", year:2022, scope:"FACULTY", category:catOf("TIMBALAN PENGERUSI") },
  { role_ms:"EXCO TEKNIKAL", role_en:roleEN("EXCO TEKNIKAL"), org:"Dean’s Award Ceremony FSTP 2022/2023", date:"18/01/2023", year:2023, scope:"FACULTY", category:catOf("EXCO TEKNIKAL") },
  { role_ms:"SUBORDINAT", role_en:roleEN("SUBORDINAT"), org:"FSTP Soft Skills Programme", date:"30/11/2022", year:2022, scope:"FACULTY", category:catOf("SUBORDINAT") },

  // ===== STUDENT CLUBS (BADAN PELAJAR)
  { role_ms:"AHLI BIASA", role_en:roleEN("AHLI BIASA"), org:"G.E. Avengers UPNM", date:"24/09/2024", year:2024, scope:"CLUB", category:catOf("AHLI BIASA") },
  { role_ms:"TIMBALAN PENGERUSI", role_en:roleEN("TIMBALAN PENGERUSI"), org:"PERWIRA Toastmasters Club", date:"08/09/2024", year:2024, scope:"CLUB", category:catOf("TIMBALAN PENGERUSI") },
  { role_ms:"EXCO PERHUBUNGAN JARINGAN LUAR", role_en:roleEN("EXCO PERHUBUNGAN JARINGAN LUAR"), org:"MY AGROSIS Club UPNM", date:"24/09/2024", year:2024, scope:"CLUB", category:catOf("EXCO PERHUBUNGAN JARINGAN LUAR") },
  { role_ms:"EXCO HUBUNGAN LUAR", role_en:roleEN("EXCO HUBUNGAN LUAR"), org:"Kelab Program Siswa Sihat UPNM", date:"24/09/2024", year:2024, scope:"CLUB", category:catOf("EXCO HUBUNGAN LUAR") },
  { role_ms:"BENDAHARI", role_en:roleEN("BENDAHARI"), org:"DESTEC (Defence Science & Technology Club)", date:"09/10/2023", year:2023, scope:"CLUB", category:catOf("BENDAHARI") },
  { role_ms:"EXCO MULTIMEDIA", role_en:roleEN("EXCO MULTIMEDIA"), org:"Pesta Ponggal 2023", date:"07/02/2023", year:2023, scope:"CLUB", category:catOf("EXCO MULTIMEDIA") },
  { role_ms:"KETUA EXCO LOGISTIK", role_en:roleEN("KETUA EXCO LOGISTIK"), org:"Peers Leaders UPNM", date:"14/12/2022", year:2022, scope:"CLUB", category:catOf("KETUA EXCO LOGISTIK") },
  { role_ms:"SUBORDINAT", role_en:roleEN("SUBORDINAT"), org:"DESTEC (Defence Science & Technology Club)", date:"15/11/2022", year:2022, scope:"CLUB", category:catOf("SUBORDINAT") },
  { role_ms:"KETUA EXCO PROTOKOL", role_en:roleEN("KETUA EXCO PROTOKOL"), org:"AMAR (Anti-Corruption Students Movement)", date:"15/11/2022", year:2022, scope:"CLUB", category:catOf("KETUA EXCO PROTOKOL") },

  // ===== EXTRA UNIVERSITY (older)
  { role_ms:"BENDAHARI", role_en:roleEN("BENDAHARI"), org:"Raya Reels: Unleash Your Creativity", date:"04/04/2022", year:2022, scope:"UNIVERSITY", category:catOf("BENDAHARI") },
  { role_ms:"EXCO LOGISTIK", role_en:roleEN("EXCO LOGISTIK"), org:"Inter-Varsity Expedition", date:"16/05/2022", year:2022, scope:"UNIVERSITY", category:catOf("EXCO LOGISTIK") }
];
