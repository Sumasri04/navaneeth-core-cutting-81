'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Clock3,
  Drill,
  HardHat,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react'

const phone = '+91 90004 77316'
const whatsapp = 'https://wa.me/919000477316?text=Hi%20Navaneeth%20Core%20Cutting%20Service%2C%20I%20need%20a%20quote.'

const services = [
  { icon: Drill, title: 'Core Cutting', text: 'Precise circular cuts through concrete slabs, walls and foundations for plumbing, electrical and HVAC work.' },
  { icon: Ruler, title: 'Wall & Slab Cutting', text: 'Controlled sawing for clean openings, expansion joints and structural modifications.' },
  { icon: ShieldCheck, title: 'Diamond Drilling', text: 'Low-vibration drilling for reinforced concrete with accurate sizing and minimal disruption.' },
  { icon: HardHat, title: 'Concrete Breaking', text: 'Targeted breaking and removal support for renovations, repairs and site preparation.' },
]

const gallery = [
  { label: 'Core cutting in progress', size: 'large', file: 'project-core-cutting-01.jpg' },
  { label: 'Diamond drilling detail', size: 'small', file: 'project-diamond-drilling-02.jpg' },
  { label: 'Wall opening preparation', size: 'small', file: 'project-wall-cutting-03.jpg' },
  { label: 'Equipment on site', size: 'wide', file: 'project-equipment-04.jpg' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="top-strip"><div className="site-shell flex items-center justify-between gap-4"><span>Concrete cutting & diamond drilling in Miyapur, Hyderabad</span><a href={`tel:${phone.replaceAll(' ', '')}`}>Available for site enquiries <Phone size={13} /></a></div></div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="site-shell flex h-20 items-center justify-between">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label="Navaneeth Core Cutting Service home">
            <span className="brand-mark"><Drill size={22} strokeWidth={2.5} /></span>
            <span><strong className="block font-heading text-base tracking-tight">NAVANEETH</strong><span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Core Cutting Service</span></span>
          </a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[76px] flex-col gap-1 rounded-lg border border-border bg-card p-3 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#equipment" onClick={closeMenu}>Equipment</a><a href="#areas" onClick={closeMenu}>Service Areas</a><a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex"><a className="btn-secondary" href={whatsapp}><MessageCircle size={17} /> WhatsApp</a><a className="btn-primary" href={`tel:${phone.replaceAll(' ', '')}`}><Phone size={17} /> Call Now</a></div>
          <button className="rounded-md p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="site-shell grid items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="max-w-xl"><p className="eyebrow"><span className="eyebrow-line" /> Local concrete cutting specialists</p><h1 className="font-heading text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-primary-foreground sm:text-6xl lg:text-7xl">Clean cuts.<br /><span className="text-brand-yellow">Solid results.</span></h1><p className="mt-6 max-w-lg text-pretty text-lg leading-8 text-primary-foreground/70">Professional core cutting, wall cutting and diamond drilling for construction, renovation and services work across Miyapur and Hyderabad.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="btn-yellow" href={`tel:${phone.replaceAll(' ', '')}`}><Phone size={18} /> Call Now</a><a className="btn-orange" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Us</a></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/70"><span className="inline-flex items-center gap-2"><CircleCheck size={16} className="text-brand-yellow" /> Precise site work</span><span className="inline-flex items-center gap-2"><CircleCheck size={16} className="text-brand-yellow" /> Clean, controlled cuts</span></div></div>
          <ReplaceableImage label="Hero image: concrete core cutting on site" file="hero-concrete-core-cutting.jpg" className="hero-image" />
        </div>
      </section>

      <section className="border-b border-border bg-brand-yellow py-4"><div className="site-shell flex flex-col justify-between gap-2 text-sm font-semibold text-primary sm:flex-row"><span>Need a concrete opening?</span><a href="#contact" className="inline-flex items-center gap-2 underline underline-offset-4">Share your site requirement <ArrowRight size={16} /></a></div></section>

      <section id="services" className="section-padding"><div className="site-shell"><SectionIntro kicker="What we do" title="The right cut for the job" text="Focused concrete services for the openings, modifications and drilling work your site needs." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><span className="icon-box"><Icon size={22} /></span><h3 className="mt-6 font-heading text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Enquire now <ArrowRight size={15} /></a></article>)}</div></div></section>

      <section className="dark-panel section-padding"><div className="site-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className="eyebrow text-brand-yellow"><span className="eyebrow-line bg-brand-yellow" /> Simple site process</p><h2 className="section-title text-primary-foreground">Tell us what needs<br /><span className="text-brand-yellow">to be opened.</span></h2><p className="mt-5 max-w-md leading-7 text-primary-foreground/65">Send a quick message with your location, material and approximate opening size. We&apos;ll discuss the right approach for your site.</p><a href={whatsapp} className="btn-yellow mt-8" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Start on WhatsApp</a></div><div className="grid gap-4 sm:grid-cols-3">{[['01','Share details','Send photos, location and dimensions.'],['02','Get the approach','We discuss access, equipment and scope.'],['03','Plan the work','Agree on a suitable site visit or work slot.']].map(([num,title,text]) => <div className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section id="equipment" className="section-padding bg-muted/35"><div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center"><ReplaceableImage label="Equipment image: diamond drilling rig" file="equipment-diamond-drill.jpg" className="equipment-image" /><div><p className="eyebrow"><span className="eyebrow-line" /> Equipment & approach</p><h2 className="section-title">Built for accurate<br />concrete work.</h2><p className="mt-5 leading-7 text-muted-foreground">The jobsite comes first. We select the suitable cutting or drilling setup for the material, access conditions and opening required.</p><ul className="mt-7 grid gap-4 text-sm font-semibold"><li className="flex items-center gap-3"><BadgeCheck className="text-brand-orange" size={20} /> Diamond tooling for reinforced concrete</li><li className="flex items-center gap-3"><BadgeCheck className="text-brand-orange" size={20} /> Controlled work around finished areas</li><li className="flex items-center gap-3"><BadgeCheck className="text-brand-orange" size={20} /> Clear communication before work begins</li></ul></div></div></section>

      <section id="projects" className="section-padding"><div className="site-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionIntro kicker="Site work" title="A closer look at the work" text="Replace these image areas with your own project photography when ready." /><a href="#contact" className="hidden btn-secondary sm:inline-flex">Discuss your project <ArrowRight size={16} /></a></div><div className="gallery-grid mt-10">{gallery.map((item, index) => <button key={item.file} onClick={() => setActiveImage(index)} className={`gallery-tile ${item.size}`} aria-label={`View ${item.label}`}><ReplaceableImage label={item.label} file={item.file} /><span className="gallery-caption">{item.label}<ArrowRight size={15} /></span></button>)}</div></div></section>

      <section id="areas" className="dark-panel section-padding"><div className="site-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow text-brand-yellow"><span className="eyebrow-line bg-brand-yellow" /> Where we work</p><h2 className="section-title text-primary-foreground">Serving sites<br />across Hyderabad.</h2><p className="mt-5 leading-7 text-primary-foreground/65">Based in Miyapur and available for construction, renovation and services work in surrounding local areas.</p></div><div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-3">{['Miyapur','Kondapur','Hafeezpet','Chandanagar','Bachupally','Gachibowli'].map(area => <div key={area} className="flex items-center gap-2 bg-primary p-5 text-sm font-semibold text-primary-foreground"><MapPin size={16} className="text-brand-yellow" /> {area}</div>)}</div></div></section>

      <section id="contact" className="section-padding"><div className="site-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow"><span className="eyebrow-line" /> Start your enquiry</p><h2 className="section-title">Let&apos;s talk<br />about your site.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">A few details are enough to get started. For the fastest response, call or message us directly.</p><div className="mt-8 grid gap-4"><a className="contact-link" href={`tel:${phone.replaceAll(' ', '')}`}><span className="contact-icon"><Phone size={19} /></span><span><small>Call directly</small><strong>{phone}</strong></span></a><a className="contact-link" href={whatsapp}><span className="contact-icon bg-brand-yellow text-primary"><MessageCircle size={19} /></span><span><small>Message on WhatsApp</small><strong>Send project details</strong></span></a><div className="contact-link"><span className="contact-icon bg-muted text-primary"><Clock3 size={19} /></span><span><small>Response</small><strong>Share your preferred work window</strong></span></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="grid gap-5 sm:grid-cols-2"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number" /></label></div><label>Project location<input required name="location" placeholder="e.g. Miyapur, Hyderabad" /></label><label>What do you need help with?<textarea required name="message" rows={5} placeholder="Tell us about the opening, material or drilling requirement..." /></label><button className="btn-primary w-full justify-center sm:w-auto" type="submit"><Send size={17} /> {sent ? 'Enquiry noted' : 'Send enquiry'}</button>{sent && <p className="text-sm font-semibold text-brand-orange" role="status">Thanks — we&apos;ll review your requirement and get back to you.</p>}</form></div></section>

      <footer className="border-t border-border bg-muted/35 py-8"><div className="site-shell flex flex-col justify-between gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center"><div><strong className="font-heading text-foreground">NAVANEETH CORE CUTTING SERVICE</strong><p className="mt-1">Miyapur, Hyderabad · Concrete cutting & drilling</p></div><p>© {new Date().getFullYear()} Navaneeth Core Cutting Service</p></div></footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23} /></a><a className="floating-call" href={`tel:${phone.replaceAll(' ', '')}`} aria-label="Call Navaneeth Core Cutting Service"><Phone size={20} /></a>

      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image preview" onClick={() => setActiveImage(null)}><div onClick={(event) => event.stopPropagation()} className="lightbox-card"><ReplaceableImage label={gallery[activeImage].label} file={gallery[activeImage].file} /><button onClick={() => setActiveImage(null)} className="lightbox-close" aria-label="Close preview"><X /></button><p>{gallery[activeImage].label}</p></div></div>}
    </main>
  )
}

function ReplaceableImage({ label, file, className = '' }: { label: string; file: string; className?: string }) {
  return <div className={`replaceable-image ${className}`} role="img" aria-label={`${label}. Replace with ${file}`}><div className="image-grid" /><div className="image-copy"><span className="image-kicker">Replaceable photo area</span><strong>{label}</strong><small>{file}</small></div><span className="image-corner" /></div>
}

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <div className="max-w-xl"><p className="eyebrow"><span className="eyebrow-line" /> {kicker}</p><h2 className="section-title mt-3">{title}</h2><p className="mt-4 leading-7 text-muted-foreground">{text}</p></div>
}
