import { useState } from "react";

const categories = [
  {
    id: "stryzenie",
    label: "Strzyżenie",
    icon: "✂️",
    services: [
      { id: 1, name: "Strzyżenie małe psy 🐩", duration: "60 min", price: "80 zł", desc: "Strzyżenie psów małych ras do 10 kg. Yorki, Maltańczyki, Biszony, Pudle miniaturowe. Modelowanie według standardu rasy lub według życzenia." },
      { id: 2, name: "Strzyżenie średnie psy 🐕", duration: "90 min", price: "120 zł", desc: "Strzyżenie psów ras średnich 10–25 kg. Spaniele, Sznaucery, Cocker Spaniele. Profesjonalne modelowanie sylwetki." },
      { id: 3, name: "Strzyżenie duże psy 🦮", duration: "120 min", price: "160 zł", desc: "Strzyżenie psów dużych ras powyżej 25 kg. Goldeny, Labradory, Berneńczyki. Wycena indywidualna dla bardzo dużych ras." },
      { id: 4, name: "Strzyżenie kotów 🐱", duration: "75 min", price: "100 zł", desc: "Strzyżenie i pielęgnacja kotów długowłosych. Maine Coon, Persy, Norwegi. Wykonywane z wyjątkową delikatnością." },
      { id: 5, name: "Trymowanie 🐾", duration: "90 min", price: "140 zł", desc: "Ręczne wyciąganie martwego włosa u ras szorstkowłosych. Terier, Jamnik szorstkowłosy. Pielęgnacja zgodna z naturą rasy." },
    ],
  },
  {
    id: "kapiel",
    label: "Kąpiel i Pielęgnacja",
    icon: "🛁",
    services: [
      { id: 6, name: "Kąpiel z odżywką 🐶", duration: "45 min", price: "60 zł", desc: "Kąpiel z profesjonalnym szamponem i odżywką dobraną do typu sierści. Suszenie i szczotkowanie w cenie." },
      { id: 7, name: "Kąpiel lecznicza 🌿", duration: "60 min", price: "90 zł", desc: "Kąpiel z szamponem leczniczym dla psów z problemami skórnymi, alergicznych lub z łupieżem. Dobrana przez specjalistę." },
      { id: 8, name: "Kąpiel SPA 🌸", duration: "75 min", price: "120 zł", desc: "Luksusowa kąpiel z maseczką nawilżającą, odżywką proteinową i aromaterapią. Sierść lśniąca i jedwabista." },
      { id: 9, name: "Kąpiel kota 🐈", duration: "60 min", price: "80 zł", desc: "Kąpiel kota z profesjonalnymi preparatami dla kotów. Wykonywana z wyjątkową cierpliwością i troską o komfort pupila." },
      { id: 10, name: "Rozczesywanie i dematting 🪮", duration: "45 min", price: "70 zł", desc: "Profesjonalne rozczesywanie kołtunów bez strzyżenia. Dla psów i kotów z gęstą lub długą sierścią." },
    ],
  },
  {
    id: "uroda",
    label: "Uroda i Stylizacja",
    icon: "💅",
    services: [
      { id: 11, name: "Obcinanie pazurków ✂️", duration: "20 min", price: "30 zł", desc: "Profesjonalne obcinanie pazurków u psów i kotów. Bezpieczne narzędzia, spokojna atmosfera." },
      { id: 12, name: "Czyszczenie uszu 🐾", duration: "20 min", price: "25 zł", desc: "Delikatne czyszczenie uszu preparatem weterynaryjnym. Profilaktyka infekcji i stanów zapalnych." },
      { id: 13, name: "Czyszczenie zębów 🦷", duration: "30 min", price: "45 zł", desc: "Czyszczenie zębów specjalną pastą i szczoteczką dla psów. Profilaktyka kamienia i chorób dziąseł." },
      { id: 14, name: "Stylizacja kokardkami 🎀", duration: "20 min", price: "20 zł", desc: "Stylizacja sierści kokardkami, spinkami lub bandanką. Twój pupil będzie wyglądał obłędnie!" },
      { id: 15, name: "Peeling łapek 🐾", duration: "25 min", price: "35 zł", desc: "Delikatny peeling i nawilżanie opuszków łap. Ochrona przed przesuszeniem i pękaniem skóry." },
    ],
  },
  {
    id: "kompleksowe",
    label: "Pakiety Kompleksowe",
    icon: "⭐",
    services: [
      { id: 16, name: "Pakiet Basic 🐕", duration: "90 min", price: "130 zł", desc: "Kąpiel z odżywką + suszenie + szczotkowanie + obcinanie pazurków + czyszczenie uszu. Wszystko czego pupil potrzebuje." },
      { id: 17, name: "Pakiet Premium 🌟", duration: "120 min", price: "180 zł", desc: "Kąpiel SPA + strzyżenie + stylizacja + obcinanie pazurków + czyszczenie uszu + kokardka gratis!" },
      { id: 18, name: "Pakiet Kot Elegancik 🐈", duration: "90 min", price: "150 zł", desc: "Kąpiel + strzyżenie + rozczesywanie + obcinanie pazurków + czyszczenie uszu. Kompletna pielęgnacja dla kota." },
      { id: 19, name: "Pakiet Szczeniak 🐶", duration: "60 min", price: "80 zł", desc: "Pierwsza wizyta w salonie! Delikatna kąpiel, suszenie, krótkie strzyżenie i oswajanie z pielęgnacją. Idealne na start." },
      { id: 20, name: "Pakiet Senior 🦮", duration: "90 min", price: "110 zł", desc: "Pielęgnacja dla starszych psów i kotów. Delikatne zabiegi, więcej czasu i uwagi, spokojna atmosfera." },
    ],
  },
];

const staff = [
  { id: 1, name: "Kasia", role: "Groomer & Stylistka 🐩", avatar: "K", color: "#f9a8d4" },
  { id: 2, name: "Ola", role: "Groomer specjalista od kotów 🐱", avatar: "O", color: "#c4b5fd" },
  { id: 3, name: "Marta", role: "Groomer & Trymowanie 🐾", avatar: "M", color: "#86efac" },
];

const timeSlots = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
  "13:00","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"];

const getDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
};

const dayNames = ["Nd","Pn","Wt","Śr","Cz","Pt","Sb"];
const monthNames = ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"];

export default function PetGrooming() {
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("stryzenie");
  const [selected, setSelected] = useState({ service: null, category: null, staff: null, day: null, time: null });
  const [expandedService, setExpandedService] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", pet: "", notes: "" });
  const [booked, setBooked] = useState(false);

  const days = getDays();
  const currentCategory = categories.find(c => c.id === activeCategory);
  const selectedService = categories.flatMap(c => c.services).find(s => s.id === selected.service);

  const canNext = () => {
    if (step === 1) return selected.service !== null;
    if (step === 2) return selected.staff !== null;
    if (step === 3) return selected.day !== null && selected.time !== null;
    if (step === 4) return form.name && form.phone;
    return false;
  };

  if (booked) return (
    <div style={st.root}>
      <Header />
      <div style={st.successWrap}>
        <div style={st.successCard}>
          <div style={st.successIcon}>🐾</div>
          <h2 style={st.successTitle}>Rezerwacja potwierdzona!</h2>
          <p style={st.successSub}>Czekamy na Ciebie i Twojego pupila! 🐶🐱</p>
          <div style={st.confirmBox}>
            <Row label="Zabieg" value={selectedService?.name} />
            <Row label="Groomer" value={staff.find(s=>s.id===selected.staff)?.name} />
            <Row label="Data" value={selected.day ? `${selected.day.getDate()} ${monthNames[selected.day.getMonth()]} ${selected.day.getFullYear()}` : ""} />
            <Row label="Godzina" value={selected.time} />
            {form.pet && <Row label="Pupil" value={form.pet} />}
            <Row label="Cena" value={selectedService?.price} highlight />
          </div>
          <p style={st.confirmNote}>Wyślemy przypomnienie SMS na numer <strong>{form.phone}</strong></p>
          <button style={st.btnPrimary} onClick={()=>{ setBooked(false); setStep(1); setSelected({service:null,category:null,staff:null,day:null,time:null}); setForm({name:"",phone:"",email:"",pet:"",notes:""}); }}>
            Nowa rezerwacja 🐾
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={st.root}>
      <Header />

      <div style={st.progressWrap}>
        <div style={st.progress}>
          {["Zabieg","Groomer","Termin","Dane"].map((label, i) => (
            <div key={i} style={st.stepWrap}>
              <div style={{...st.stepDot, background: step > i+1 ? "#f472b6" : step === i+1 ? "#f472b6" : "#fce7f3", border: step >= i+1 ? "2px solid #f472b6" : "2px solid #fbcfe8", color: step >= i+1 ? "#fff" : "#f9a8d4"}}>
                {step > i+1 ? "✓" : i+1}
              </div>
              <div style={{...st.stepLabel, color: step >= i+1 ? "#db2777" : "#fbcfe8"}}>{label}</div>
              {i < 3 && <div style={{...st.stepLine, background: step > i+1 ? "#f472b6" : "#fce7f3"}} />}
            </div>
          ))}
        </div>
      </div>

      <div style={st.container}>
        {step === 1 && (
          <div>
            <h2 style={st.stepTitle}>Wybierz zabieg 🐾</h2>
            <div style={st.tabs}>
              {categories.map(cat => (
                <button key={cat.id} style={{...st.tab, ...(activeCategory===cat.id ? st.tabActive : {})}} onClick={()=>setActiveCategory(cat.id)}>
                  <span>{cat.icon}</span>
                  <span style={st.tabLabel}>{cat.label}</span>
                </button>
              ))}
            </div>
            <div style={st.serviceList}>
              {currentCategory?.services.map(s => (
                <div key={s.id} style={{...st.serviceCard, ...(selected.service===s.id ? st.serviceCardActive : {})}}>
                  <div style={st.serviceTop}>
                    <div style={st.serviceInfo}>
                      <div style={st.serviceName}>{s.name}</div>
                      <div style={st.serviceMeta}>
                        <span style={st.serviceTime}>⏱ {s.duration}</span>
                        <span style={st.servicePrice}>{s.price}</span>
                      </div>
                    </div>
                    {selected.service===s.id
                      ? <div style={st.checkmark}>✓</div>
                      : <button style={st.selectBtn} onClick={()=>setSelected(p=>({...p, service: s.id, category: activeCategory}))}>Wybierz</button>
                    }
                  </div>
                  <button style={st.descToggle} onClick={()=>setExpandedService(expandedService===s.id ? null : s.id)}>
                    {expandedService===s.id ? "▲ Ukryj opis" : "▼ Opis zabiegu"}
                  </button>
                  {expandedService===s.id && <div style={st.descText}>{s.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={st.stepTitle}>Wybierz groomera ✂️</h2>
            {selectedService && <div style={st.selectedBadge}>Wybrany zabieg: <strong>{selectedService.name}</strong></div>}
            <div style={st.staffList}>
              {staff.map(s => (
                <button key={s.id} style={{...st.staffCard, ...(selected.staff===s.id ? st.staffCardActive : {})}} onClick={()=>setSelected(p=>({...p, staff: s.id}))}>
                  <div style={{...st.avatar, background: s.color}}>{s.avatar}</div>
                  <div style={st.staffInfo}>
                    <div style={st.staffName}>{s.name}</div>
                    <div style={st.staffRole}>{s.role}</div>
                    <div style={st.stars}>★★★★★ <span style={st.starsCount}>5.0</span></div>
                  </div>
                  {selected.staff===s.id && <div style={st.checkmarkRight}>✓</div>}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={st.stepTitle}>Wybierz termin 📅</h2>
            <div style={st.daysScroll}>
              {days.map((d, i) => {
                const isSel = selected.day && selected.day.toDateString() === d.toDateString();
                const isOff = d.getDay() === 0;
                return (
                  <button key={i} disabled={isOff} style={{...st.dayBtn, ...(isSel ? st.dayBtnActive : {}), ...(isOff ? st.dayBtnOff : {})}} onClick={()=>setSelected(p=>({...p, day: d, time: null}))}>
                    <div style={st.dayName}>{dayNames[d.getDay()]}</div>
                    <div style={st.dayNum}>{d.getDate()}</div>
                    <div style={st.dayMonth}>{monthNames[d.getMonth()]}</div>
                  </button>
                );
              })}
            </div>
            {selected.day && (
              <div style={st.timesWrap}>
                <div style={st.timesTitle}>Dostępne godziny</div>
                <div style={st.timesGrid}>
                  {timeSlots.map(t => {
                    const taken = ["10:00","11:30","14:00","16:30"].includes(t);
                    return (
                      <button key={t} disabled={taken} style={{...st.timeBtn, ...(selected.time===t ? st.timeBtnActive : {}), ...(taken ? st.timeBtnTaken : {})}} onClick={()=>!taken && setSelected(p=>({...p, time: t}))}>
                        {t}
                        {taken && <div style={st.takenLabel}>zajęte</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={st.stepTitle}>Twoje dane 🐾</h2>
            <div style={st.summaryBox}>
              <div style={st.summaryTitle}>Podsumowanie rezerwacji</div>
              <Row label="Zabieg" value={selectedService?.name} />
              <Row label="Groomer" value={staff.find(s=>s.id===selected.staff)?.name} />
              <Row label="Data" value={selected.day ? `${selected.day.getDate()} ${monthNames[selected.day.getMonth()]}` : ""} />
              <Row label="Godzina" value={selected.time} />
              <Row label="Czas trwania" value={selectedService?.duration} />
              <Row label="Cena" value={selectedService?.price} highlight />
            </div>
            <div style={st.formGroup}>
              <label style={st.label}>Imię i nazwisko opiekuna *</label>
              <input style={st.input} placeholder="np. Anna Kowalska" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} />
            </div>
            <div style={st.formGroup}>
              <label style={st.label}>Numer telefonu *</label>
              <input style={st.input} placeholder="+48 000 000 000" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} />
            </div>
            <div style={st.formGroup}>
              <label style={st.label}>Imię i rasa pupila 🐾</label>
              <input style={st.input} placeholder="np. Burek, Labrador" value={form.pet} onChange={e=>setForm(p=>({...p,pet:e.target.value}))} />
            </div>
            <div style={st.formGroup}>
              <label style={st.label}>Uwagi (opcjonalnie)</label>
              <textarea style={{...st.input, height:80, resize:"vertical"}} placeholder="np. charakter psa, szczególne potrzeby, alergie..." value={form.notes} onChange={e=>setForm(p=>({...p,notes:e.target.value}))} />
            </div>
          </div>
        )}

        <div style={st.navRow}>
          {step > 1 && <button style={st.btnSecondary} onClick={()=>setStep(s=>s-1)}>← Wstecz</button>}
          <div style={{flex:1}} />
          {step < 4
            ? <button style={{...st.btnPrimary, opacity: canNext()?1:0.4, cursor: canNext()?"pointer":"not-allowed"}} onClick={()=>canNext()&&setStep(s=>s+1)}>Dalej →</button>
            : <button style={{...st.btnConfirm, opacity: canNext()?1:0.4, cursor: canNext()?"pointer":"not-allowed"}} onClick={()=>canNext()&&setBooked(true)}>🐾 Potwierdź rezerwację</button>
          }
        </div>
      </div>

      <div style={st.footer}>🐾 Psie & Kocie SPA • ul. Łapkowa 5 • +48 123 456 789</div>
    </div>
  );
}

function Header() {
  return (
    <div style={st.header}>
      <div style={st.logo}>
        <span style={st.logoIcon}>🐾</span>
        <div>
          <div style={st.logoName}>Psie & Kocie SPA</div>
          <div style={st.logoSub}>Studio Urody dla Zwierząt</div>
        </div>
      </div>
      <div style={st.headerPhone}>📞 +48 123 456 789</div>
    </div>
  );
}

function Row({ label, value, highlight }) {
  return (
    <div style={st.row}>
      <span style={st.rowLabel}>{label}</span>
      <span style={{...st.rowValue, ...(highlight ? st.rowHighlight : {})}}>{value}</span>
    </div>
  );
}

const st = {
  root: { minHeight:"100vh", background:"#fff0f6", fontFamily:"'Georgia', serif", color:"#4a1942" },
  header: { background:"#ffe4f0", borderBottom:"2px solid #f9a8d4", padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" },
  logo: { display:"flex", alignItems:"center", gap:12 },
  logoIcon: { fontSize:32 },
  logoName: { fontSize:20, fontWeight:700, color:"#be185d", letterSpacing:1, WebkitTextStroke:"0.5px #000", textShadow:"1px 1px 0 #000" },
  logoSub: { fontSize:11, color:"#db2777", letterSpacing:1.5, textTransform:"uppercase", WebkitTextStroke:"0.3px #000" },
  headerPhone: { fontSize:13, color:"#be185d", fontWeight:600 },
  progressWrap: { background:"#ffe4f0", borderBottom:"2px solid #f9a8d4", padding:"20px 24px" },
  progress: { display:"flex", alignItems:"flex-start", justifyContent:"center", gap:0, maxWidth:600, margin:"0 auto" },
  stepWrap: { display:"flex", flexDirection:"column", alignItems:"center", position:"relative", gap:6 },
  stepDot: { width:32, height:32, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, zIndex:1, border:"2px solid #f472b6" },
  stepLabel: { fontSize:11, letterSpacing:0.5, textTransform:"uppercase", fontWeight:700, WebkitTextStroke:"0.3px #000" },
  stepLine: { position:"absolute", top:16, left:"calc(50% + 16px)", width:60, height:2, zIndex:0 },
  container: { maxWidth:680, margin:"0 auto", padding:"28px 20px 60px" },
  stepTitle: { fontSize:22, fontWeight:700, color:"#be185d", marginBottom:20, WebkitTextStroke:"0.5px #000" },
  tabs: { display:"flex", gap:8, overflowX:"auto", paddingBottom:8, marginBottom:20, flexWrap:"wrap" },
  tab: { display:"flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:20, border:"2px solid #fbcfe8", background:"#fff0f6", cursor:"pointer", whiteSpace:"nowrap", flexShrink:0 },
  tabActive: { border:"2px solid #f472b6", background:"#fce7f3" },
  tabLabel: { fontSize:13, fontWeight:700, color:"#be185d", WebkitTextStroke:"0.3px #000" },
  serviceList: { display:"flex", flexDirection:"column", gap:10 },
  serviceCard: { background:"#fff5f9", border:"2px solid #fbcfe8", borderRadius:14, padding:"16px" },
  serviceCardActive: { border:"2px solid #f472b6", background:"#fce7f3" },
  serviceTop: { display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 },
  serviceInfo: { flex:1 },
  serviceName: { fontSize:15, fontWeight:700, color:"#be185d", marginBottom:6, WebkitTextStroke:"0.3px #000" },
  serviceMeta: { display:"flex", gap:16, alignItems:"center" },
  serviceTime: { fontSize:12, color:"#db2777", fontWeight:600 },
  servicePrice: { fontSize:15, fontWeight:700, color:"#be185d", WebkitTextStroke:"0.5px #000" },
  checkmark: { background:"#f472b6", color:"#fff", borderRadius:"50%", width:28, height:28, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0, fontWeight:700, border:"2px solid #000" },
  selectBtn: { background:"#fce7f3", border:"2px solid #f472b6", color:"#be185d", borderRadius:8, padding:"6px 14px", fontSize:13, cursor:"pointer", flexShrink:0, fontWeight:700 },
  descToggle: { background:"transparent", border:"none", color:"#db2777", fontSize:12, cursor:"pointer", marginTop:10, padding:0, fontWeight:600 },
  descText: { fontSize:13, color:"#9d174d", marginTop:8, lineHeight:1.6, borderTop:"1px solid #fbcfe8", paddingTop:10 },
  selectedBadge: { background:"#fce7f3", border:"2px solid #f472b6", borderRadius:10, padding:"10px 14px", fontSize:13, color:"#be185d", marginBottom:16, fontWeight:600 },
  staffList: { display:"flex", flexDirection:"column", gap:10 },
  staffCard: { background:"#fff5f9", border:"2px solid #fbcfe8", borderRadius:14, padding:"16px", display:"flex", alignItems:"center", gap:14, cursor:"pointer", textAlign:"left", position:"relative" },
  staffCardActive: { border:"2px solid #f472b6", background:"#fce7f3" },
  avatar: { width:52, height:52, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:700, color:"#fff", flexShrink:0, border:"2px solid #000" },
  staffInfo: { flex:1 },
  staffName: { fontSize:16, fontWeight:700, color:"#be185d", WebkitTextStroke:"0.3px #000" },
  staffRole: { fontSize:12, color:"#db2777", marginBottom:4, fontWeight:600 },
  stars: { fontSize:13, color:"#f59e0b" },
  starsCount: { color:"#db2777", fontSize:11 },
  checkmarkRight: { background:"#f472b6", color:"#fff", borderRadius:"50%", width:24, height:24, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, border:"2px solid #000" },
  daysScroll: { display:"flex", gap:8, overflowX:"auto", paddingBottom:8, marginBottom:20 },
  dayBtn: { flexShrink:0, width:56, padding:"10px 0", borderRadius:12, border:"2px solid #fbcfe8", background:"#fff5f9", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2 },
  dayBtnActive: { border:"2px solid #f472b6", background:"#fce7f3" },
  dayBtnOff: { opacity:0.3, cursor:"not-allowed" },
  dayName: { fontSize:10, color:"#db2777", textTransform:"uppercase", fontWeight:700 },
  dayNum: { fontSize:18, fontWeight:700, color:"#be185d", WebkitTextStroke:"0.3px #000" },
  dayMonth: { fontSize:10, color:"#db2777", fontWeight:600 },
  timesWrap: {},
  timesTitle: { fontSize:12, color:"#db2777", marginBottom:12, textTransform:"uppercase", letterSpacing:1, fontWeight:700 },
  timesGrid: { display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:8 },
  timeBtn: { padding:"10px 0", borderRadius:10, border:"2px solid #fbcfe8", background:"#fff5f9", color:"#be185d", fontSize:14, cursor:"pointer", position:"relative", fontWeight:600 },
  timeBtnActive: { border:"2px solid #f472b6", background:"#fce7f3", color:"#be185d", fontWeight:700 },
  timeBtnTaken: { opacity:0.4, cursor:"not-allowed" },
  takenLabel: { fontSize:9, color:"#db2777", display:"block" },
  summaryBox: { background:"#fff5f9", borderRadius:14, padding:"16px", marginBottom:20, border:"2px solid #fbcfe8" },
  summaryTitle: { fontSize:11, color:"#db2777", textTransform:"uppercase", letterSpacing:1, marginBottom:12, fontWeight:700 },
  row: { display:"flex", justifyContent:"space-between", marginBottom:8 },
  rowLabel: { fontSize:13, color:"#db2777", fontWeight:600 },
  rowValue: { fontSize:13, color:"#be185d", fontWeight:600 },
  rowHighlight: { color:"#be185d", fontSize:16, fontWeight:700, WebkitTextStroke:"0.5px #000" },
  formGroup: { marginBottom:16 },
  label: { display:"block", fontSize:11, color:"#db2777", marginBottom:6, textTransform:"uppercase", letterSpacing:0.5, fontWeight:700 },
  input: { width:"100%", background:"#fff5f9", border:"2px solid #fbcfe8", borderRadius:10, padding:"12px 14px", color:"#be185d", fontSize:15, outline:"none", boxSizing:"border-box", fontFamily:"inherit", fontWeight:600 },
  navRow: { display:"flex", alignItems:"center", marginTop:24 },
  btnPrimary: { background:"linear-gradient(135deg, #f472b6, #db2777)", color:"#fff", border:"2px solid #000", borderRadius:12, padding:"13px 28px", fontSize:15, fontWeight:700, cursor:"pointer", textShadow:"1px 1px 0 #000" },
  btnSecondary: { background:"#fce7f3", color:"#be185d", border:"2px solid #f472b6", borderRadius:12, padding:"12px 20px", fontSize:14, cursor:"pointer", fontWeight:700 },
  btnConfirm: { background:"linear-gradient(135deg, #f472b6, #db2777)", color:"#fff", border:"2px solid #000", borderRadius:12, padding:"14px 32px", fontSize:16, fontWeight:700, cursor:"pointer", textShadow:"1px 1px 0 #000" },
  successWrap: { display:"flex", justifyContent:"center", padding:"60px 20px" },
  successCard: { background:"#fff5f9", border:"2px solid #f472b6", borderRadius:24, padding:"48px 32px", textAlign:"center", maxWidth:480, width:"100%" },
  successIcon: { fontSize:56, marginBottom:16 },
  successTitle: { fontSize:26, fontWeight:700, color:"#be185d", marginBottom:8, WebkitTextStroke:"0.5px #000" },
  successSub: { fontSize:14, color:"#db2777", marginBottom:24, fontWeight:600 },
  confirmBox: { background:"#fff0f6", borderRadius:14, padding:"20px", marginBottom:20, border:"2px solid #fbcfe8", textAlign:"left" },
  confirmNote: { fontSize:13, color:"#db2777", marginBottom:24, fontWeight:600 },
  footer: { background:"#ffe4f0", borderTop:"2px solid #f9a8d4", padding:"20px 24px", textAlign:"center", fontSize:11, color:"#db2777", letterSpacing:1, fontWeight:700 },
};
