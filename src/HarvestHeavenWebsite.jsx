import React from "react";
import { motion } from "framer-motion";

function Icon({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-green-100 text-green-800 ${className}`}>
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return <div className={`bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const timeline = [
  { day: "Day 1–2", title: "Composting Setup", text: "Prepare wheat straw/chicken manure/gypsum mix, wetting, stacking and first mixing for button mushroom compost." },
  { day: "Day 3–7", title: "Composting & Turning", text: "Regular turning, moisture balancing and material mixing until compost becomes uniform and ready for pasteurization." },
  { day: "Day 8–14", title: "Phase 2 Composting", text: "Compost conditioning and cleaning process to make compost suitable for mushroom spawn." },
  { day: "Day 15", title: "Spawning", text: "High quality button mushroom spawn is mixed evenly into prepared compost and filled into beds/trays/bags." },
  { day: "Day 16–29", title: "Spawn Run", text: "Mycelium spreads through the compost. Beds remain undisturbed and hygiene is maintained." },
  { day: "Day 30", title: "Casing", text: "Casing soil is applied evenly on fully colonized compost to support pin formation." },
  { day: "Day 31–38", title: "Case Run", text: "Mycelium grows into the casing layer and the surface is maintained carefully for uniform growth." },
  { day: "Day 39–45", title: "Pinning", text: "Small mushroom pins start forming on the casing surface. Clean watering and air management are followed." },
  { day: "Day 46–60", title: "First Harvest", text: "Fresh white button mushrooms are harvested by hand, cleaned, graded and packed quickly." },
  { day: "Day 61–85", title: "Second & Third Flush", text: "Remaining flushes are harvested in cycles, with daily grading, packing and dispatch." },
];

const products = [
  "Fresh White Button Mushroom – 200g Punnet",
  "Fresh White Button Mushroom – 1kg Pack",
  "Farm fresh bulk supply for hotels, restaurants and retailers",
  "Hygienic packing with batch-wise quality control",
];

function VCLogo() {
  return (
    <div className="h-24 w-24 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400 bg-gradient-to-br from-green-950 to-green-700 flex items-center justify-center relative">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff4a3" />
            <stop offset="100%" stopColor="#d4a017" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="#065f46" stroke="#facc15" strokeWidth="4" />
        <text x="30" y="78" fontSize="56" fontFamily="serif" fontWeight="bold" fill="url(#gold)">V</text>
        <text x="56" y="82" fontSize="54" fontFamily="serif" fill="url(#gold)">C</text>
        <path d="M58 28 Q65 18 72 28" stroke="url(#gold)" strokeWidth="3" fill="none" />
        <path d="M63 28 L63 38" stroke="url(#gold)" strokeWidth="3" />
        <path d="M52 65 Q65 50 78 65" fill="url(#gold)" />
        <rect x="61" y="65" width="8" height="18" rx="4" fill="url(#gold)" />
      </svg>
    </div>
  );
}

export default function HarvestHeavenWebsite() {
  return (
    <div className="min-h-screen bg-[#fbfff9] text-green-950">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3"><VCLogo /><div><h1 className="text-xl md:text-2xl font-bold tracking-wide">HarvestHeaven Agro Farm LLP</h1><p className="text-sm text-green-700">Velvet Cap White Button Mushrooms</p></div></div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold"><a href="#process">Process</a><a href="#products">Products</a><a href="#license">License</a><a href="#contact">Contact</a></nav>
        </div>
      </header>
      <section className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-emerald-700" /><div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_30%,white,transparent_25%)]" /><div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center text-white"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}><p className="uppercase tracking-[0.3em] text-yellow-300 font-semibold mb-4">Healthy & Delicious</p><h2 className="text-5xl md:text-7xl font-black leading-tight">Farm Fresh White Button Mushrooms</h2><p className="mt-6 text-lg text-green-50 max-w-xl">Premium quality mushrooms grown with controlled farm practices, hygienic handling and quick packing for freshness.</p><div className="mt-8 flex flex-wrap gap-3"><span className="px-5 py-3 rounded-full bg-white text-green-950 font-bold">100% Natural</span><span className="px-5 py-3 rounded-full bg-yellow-400 text-green-950 font-bold">No Preservatives</span><span className="px-5 py-3 rounded-full bg-white/15 border border-white/30 font-bold">No Chemicals</span></div></motion.div><motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex justify-center"><div className="bg-white rounded-[2rem] p-8 shadow-2xl text-center max-w-sm"><VCLogo /><h3 className="mt-6 text-3xl font-serif text-yellow-600">Velvet Cap</h3><p className="text-green-900 font-black text-2xl mt-1">MUSHROOM</p><div className="mt-6 rounded-2xl bg-green-50 p-4 text-green-950"><p className="font-bold">White Button Mushrooms</p><p className="text-sm mt-1">Net Wt. 200g | 1kg Pack Available</p></div></div></motion.div></div></section>
      <section id="process" className="max-w-7xl mx-auto px-6 py-16"><div className="text-center max-w-3xl mx-auto"><Icon className="mx-auto h-12 w-12 text-2xl">📅</Icon><h2 className="text-4xl font-black mt-4">Mushroom Growing Process — Day Wise</h2><p className="mt-4 text-green-700">From compost preparation to spawn run, casing, pinning and harvesting. Only days are mentioned as requested.</p></div><div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{timeline.map((item, index) => (<Card key={index} className="rounded-2xl border-green-100 shadow-sm hover:shadow-md transition"><CardContent className="p-6"><div className="inline-flex px-4 py-2 rounded-full bg-green-900 text-white font-bold text-sm">{item.day}</div><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-green-700 leading-relaxed">{item.text}</p></CardContent></Card>))}</div></section>
      <section id="products" className="bg-green-50 py-16"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start"><div><Icon className="h-12 w-12 text-2xl">📦</Icon><h2 className="text-4xl font-black mt-4">Products & Packing</h2><p className="mt-4 text-green-700">Fresh mushrooms are graded, packed and supplied for retail and bulk requirements.</p></div><div className="grid gap-4">{products.map((p, i) => (<div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex gap-3 items-start"><Icon className="h-8 w-8 shrink-0">🌿</Icon><span className="font-semibold">{p}</span></div>))}</div></div></section>
      <section id="license" className="max-w-7xl mx-auto px-6 py-16"><div className="grid md:grid-cols-3 gap-5"><Card className="rounded-2xl border-green-100"><CardContent className="p-6"><Icon className="h-11 w-11 text-xl">✅</Icon><h3 className="font-black text-xl mt-4">Food License</h3><p className="mt-2 text-green-700">FSSAI License Number</p><p className="font-black text-2xl mt-2">11526079000194</p></CardContent></Card><Card className="rounded-2xl border-green-100"><CardContent className="p-6"><Icon className="h-11 w-11 text-xl">✅</Icon><h3 className="font-black text-xl mt-4">GST Details</h3><p className="mt-2 text-green-700">GST Number</p><p className="font-black text-xl mt-2">Add GST Number Here</p></CardContent></Card><Card className="rounded-2xl border-green-100"><CardContent className="p-6"><Icon className="h-11 w-11 text-xl">🌱</Icon><h3 className="font-black text-xl mt-4">Quality Promise</h3><p className="mt-2 text-green-700">100% Natural, No Preservatives, No Chemicals, Farm Fresh Quality.</p></CardContent></Card></div></section>
      <footer id="contact" className="bg-green-950 text-white py-14"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8"><div><div className="flex items-center gap-3"><VCLogo /><div><h2 className="text-2xl font-black">HarvestHeaven Agro Farm LLP</h2><p className="text-green-200">@velvetcap_mushroom</p></div></div><p className="mt-6 text-green-100 max-w-xl">Pro packed & marketed by HarvestHeaven Agro Farm LLP.</p></div><div className="space-y-4 text-green-50"><p className="flex gap-3"><span className="shrink-0 text-yellow-300">📍</span> S No-20/1/22, Surekha Villa, Gaikwad Farm, Krupa Engineering Road, Keshavnagar, Mundhwa, Pune, Maharashtra - 411036</p><p className="flex gap-3"><span className="shrink-0 text-yellow-300">✉️</span> harvestheaven.agrofarm@gmail.com</p><p className="flex gap-3"><span className="shrink-0 text-yellow-300">📞</span> 9586051580 / 9884473716</p></div></div></footer>
    </div>
  );
}
