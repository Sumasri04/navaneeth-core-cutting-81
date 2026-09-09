'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Drill, MapPin, Menu, MessageCircle, Phone, Send, X } from 'lucide-react'

const phone = '+91 90004 77316'
const tel = 'tel:+919000477316'
const whatsapp = 'https://wa.me/919000477316?text=Hello%20Navaneeth%20Core%20Cutting%20Service%2C%20I%20need%20a%20quotation%20for%20core%20cutting%2Fconcrete%20cutting%20work.'

const services = [
  ['Core Cutting', 'Clean circular openings through concrete for services and construction work.', '/images/core-cutting.png'],
  ['AC Hole Cutting', 'Neat wall openings for air-conditioning lines and outdoor unit connections.', '/images/ac-hole.png'],
  ['Chimney Hole Cutting', 'Accurate openings for kitchen chimney ducts and ventilation routes.', '/images/ac-hole.png'],
  ['Plumber Hole Cutting', 'Practical drilling for pipes, drainage and plumbing installations.', '/images/core-cutting.png'],
  ['Wall Cutting', 'Controlled wall sawing for openings, channels and renovation work.', '/images/wall-cutting.png'],
  ['Slab Hole Cutting', 'Precise slab openings for plumbing, electrical and service requirements.', '/images/slab-cutting.png'],
  ['RCC Slab Cutting', 'Diamond cutting support for reinforced concrete slab modifications.', '/images/slab-cutting.png'],
  ['Gas Pipe Hole Cutting', 'Clean penetrations for gas pipe routing and related site work.', '/images/ac-hole.png'],
]

const otherServices = ['RCC Road Cutting', 'Concrete Cutting', 'Concrete Chipping', 'Demolition Services', 'Wire Saw Cutting', 'Wall Saw Cutting', 'Floor Cutting', 'Beam Cutting', 'Stair Cutting', 'Lift Opening Cutting', 'Window & Door Cutting']
const gallery = [
  { title: 'Core cutting', category: 'Core Cutting', image: '/images/core-cutting.png' },
  { title: 'Wall opening', category: 'Wall Cutting', image: '/images/wall-cutting.png' },
  { title: 'Slab cutting', category: 'Slab Cutting', image: '/images/slab-cutting.png' },
  { title: 'AC service opening', category: 'AC & Plumbing Holes', image: '/images/ac-hole.png' },
  { title: 'Concrete cutting', category: 'Concrete Cutting', image: '/images/slab-cutting.png' },
  { title: 'Site equipment', category: 'Demolition', image: '/images/equipment.png' },
]
const categories = ['All', 'Core Cutting', 'Wall Cutting', 'Slab Cutting', 'AC & Plumbing Holes', 'Concrete Cutting', 'Demolition']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null)
  const [sent, setSent] = useState(false)
  const filtered = category === 'All' ? gallery : gallery.filter((item) => item.category === category)
  const closeMenu = () => setMenuOpen(false)

  return <main id="home">
    <div className="top-strip"><div className="site-shell"><span>Core cutting & concrete cutting service in Miyapur</span><a href={tel}>Call {phone} <Phone size={13} /></a></div></div>
    <header className="site-header"><div className="site-shell header-inner">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark"><Drill size={22} /></span><span><strong>NAVANEETH</strong><small>Core Cutting Service</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#home" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#equipment" onClick={closeMenu}>Equipment</a><a href="#areas" onClick={closeMenu}>Service Areas</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
      <div className="header-actions"><a href={whatsapp} className="btn btn-outline"><MessageCircle size={16} /> WhatsApp</a><a href={tel} className="btn btn-dark"><Phone size={16} /> Call Now</a></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>

    <section className="hero"><div className="site-shell hero-grid"><div className="hero-copy"><p className="eyebrow"><span /> Local concrete cutting service</p><h1>Professional Core Cutting <em>&amp; Concrete Cutting Services</em></h1><p className="hero-lead">Precise core cutting, wall cutting, slab cutting and drilling services for construction, renovation, AC, plumbing and other site requirements.</p><div className="hero-actions"><a href={tel} className="btn btn-yellow"><Phone size={18} /> Call Us Now</a><a href={whatsapp} className="btn btn-orange" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Us</a></div><p className="hero-phone">Call directly: <a href={tel}>{phone}</a></p></div><ImageFrame src="/images/hero.png" alt="Worker operating a concrete core cutting machine on site" className="hero-photo" /></div></section>

    <section id="services" className="section"><div className="site-shell"><SectionIntro kicker="Our services" title="Focused solutions for concrete work" text="Reliable cutting and drilling support for construction, renovation, AC, plumbing and site requirements." /><div className="service-grid">{services.map(([title, text, image]) => <article className="service-card" key={title}><ImageFrame src={image} alt={title} /><div className="service-content"><h3>{title}</h3><p>{text}</p><a href="#contact">Enquire now <ArrowRight size={15} /></a></div></article>)}</div><details className="other-services"><summary>Other Services <ChevronDown size={18} /></summary><div>{otherServices.map((service) => <a href="#contact" key={service}>{service}<ArrowRight size={14} /></a>)}</div></details></div></section>

    <section className="dark-section process"><div className="site-shell process-grid"><div><p className="eyebrow yellow"><span /> Easy to get started</p><h2>Tell us what needs to be opened.</h2><p>Share your location and site requirement. We can discuss the suitable cutting or drilling approach for your work.</p><a className="btn btn-yellow" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Start on WhatsApp</a></div><div className="steps">{[['01', 'Share details', 'Send location, photos and dimensions.'], ['02', 'Discuss the work', 'We understand the material, access and requirement.'], ['03', 'Send enquiry', 'Choose a convenient time to discuss the job.']].map(([num, title, text]) => <div className="step" key={num}><b>{num}</b><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section id="equipment" className="section equipment"><div className="site-shell"><SectionIntro kicker="Equipment" title="Professional Equipment" text="Suitable cutting and drilling equipment for practical site requirements." /><div className="equipment-grid"><ImageFrame src="/images/equipment.png" alt="Professional concrete cutting and drilling equipment" className="equipment-main" /><div className="equipment-list">{[['Core cutting machine', '/images/core-cutting.png'], ['Concrete cutting machine', '/images/slab-cutting.png'], ['Core drilling machine', '/images/ac-hole.png'], ['Wall cutting machine', '/images/wall-cutting.png']].map(([title, image]) => <div className="equipment-item" key={title}><ImageFrame src={image} alt={title} /><strong>{title}</strong></div>)}</div></div></div></section>

    <section id="projects" className="section projects"><div className="site-shell"><SectionIntro kicker="Project gallery" title="Our Recent Work" text="A selection of concrete cutting and drilling work from active construction sites." /><div className="filters" role="tablist">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="gallery">{filtered.map((item) => <button className="gallery-item" key={item.title} onClick={() => setActive(item)}><ImageFrame src={item.image} alt={item.title} /><span>{item.title}<ArrowRight size={15} /></span></button>)}</div></div></section>

    <section id="areas" className="dark-section areas"><div className="site-shell areas-grid"><div><p className="eyebrow yellow"><span /> Service area</p><h2>Serving Miyapur and nearby areas.</h2><p>Based at Nadi Gadda Thanda, Miyapur, Serilingampally, Ranga Reddy, Telangana.</p><p className="landmark"><MapPin size={18} /> Beside Miyapur Metro Station</p></div><div className="area-card"><h3>Local site enquiries welcome</h3><p>Share your exact project location when you contact us so we can understand the requirement.</p><a href="#contact" className="btn btn-yellow">Send an enquiry <ArrowRight size={16} /></a></div></div></section>

    <section className="section about"><div className="site-shell about-grid"><div><p className="eyebrow"><span /> About the business</p><h2>About Navaneeth Core Cutting Service</h2></div><div><p>Navaneeth Core Cutting Service provides core cutting, wall cutting, slab cutting, drilling and concrete cutting services for construction, renovation, AC, plumbing and other site requirements.</p><p>Based in Miyapur, we serve customers in nearby areas with a focus on precise and efficient cutting work.</p></div></div></section>

    <section id="contact" className="section contact"><div className="site-shell contact-grid"><div><p className="eyebrow"><span /> Contact us</p><h2>Let&apos;s discuss your site requirement.</h2><p>Call or WhatsApp for a quick discussion, or send the enquiry form with your project details.</p><div className="contact-actions"><a href={tel}><Phone size={19} /><span><small>Call Now</small><strong>{phone}</strong></span></a><a href={whatsapp}><MessageCircle size={19} /><span><small>WhatsApp Us</small><strong>Send your requirement</strong></span></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone Number<input required name="phone" type="tel" placeholder="Your phone number" /></label></div><label>Project Location<input required name="location" placeholder="Where is the work located?" /></label><label>Service Required<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(([title]) => <option key={title}>{title}</option>)}</select></label><label>Message<textarea name="message" rows={4} placeholder="Tell us about the work you need..." /></label><button className="btn btn-dark" type="submit"><Send size={17} /> {sent ? 'Enquiry sent' : 'Send Enquiry'}</button>{sent && <p className="form-success" role="status"><Check size={16} /> Thank you. We will get back to you.</p>}</form></div></section>

    <footer><div className="site-shell footer-inner"><div><strong>NAVANEETH CORE CUTTING SERVICE</strong><p>Nadi Gadda Thanda, Miyapur, Telangana</p></div><p>© {new Date().getFullYear()} Navaneeth Core Cutting Service</p></div></footer>
    <a className="floating-call" href={tel} aria-label="Call Now"><Phone size={20} /></a><a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Us"><MessageCircle size={23} /></a>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}><div className="lightbox-card" onClick={(event) => event.stopPropagation()}><ImageFrame src={active.image} alt={active.title} /><button onClick={() => setActive(null)} aria-label="Close image"><X /></button><p>{active.title}</p></div></div>}
  </main>
}

function ImageFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) { return <div className={`image-frame ${className}`}><img src={src} alt={alt} /></div> }
function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) { return <div className="section-intro"><p className="eyebrow"><span /> {kicker}</p><h2>{title}</h2><p>{text}</p></div> }
