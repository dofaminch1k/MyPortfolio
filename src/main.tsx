import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { portfolio as data } from "./portfolio.config";
import "./style.css";
import PatternWaves from "./PatternWaves";
import TechText from "./TechText";

const navigation = ["Work", "Services", "About", "Process"];
const services = [
  ["Landing pages","Give a single offer a clear home. I shape the message, page structure and call to action around the decision you want visitors to make."],
  ["Business websites","Help people understand your business and get in touch. You get connected service pages, responsive layouts and a clear path to contact."],
  ["Web applications","Make everyday work easier. I turn a specific workflow into a focused interface with clear inputs, helpful feedback and practical views of your data."]
];
const steps = [
  ["Discovery","We discuss your audience, goals and constraints. You receive a written brief that defines the scope."],
  ["Structure & design","We map the content and review the key screens together, so you can see how the experience will work."],
  ["Development","I build responsive pages and interactions, with a working preview for your feedback."],
  ["Review & launch","I check the main flows, keyboard controls and screen sizes, then help you launch and hand over the source."]
];
function Arrow({diagonal=false}:{diagonal?:boolean}) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={diagonal?"M5 19 19 5M6 5h13v13":"M3 12h17m-7-7 7 7-7 7"}/></svg>;
}
function Brand(){return <a className="brand flex items-center" href="#top"><img src="./mark.svg" width="32" height="32" alt=""/>{data.name}</a>}
function Label({children}:{children:React.ReactNode}){return <div className="label"><i/>{children}</div>}
function safeLink(value:string){try{const url=new URL(value);return url.protocol==="https:"?url.href:""}catch{return ""}}
function App(){
  const [menu,setMenu]=useState(false);
  const menuButton=useRef<HTMLButtonElement>(null);
  const [current,setCurrent]=useState(0);
  const dialog=useRef<HTMLDialogElement>(null);
  const project=data.projects[current];
  useEffect(()=>{
    function handleKey(e:KeyboardEvent){if(e.key==="Escape" && menu){setMenu(false);menuButton.current?.focus()}}
    const desktop=matchMedia("(min-width: 761px)");
    function resize(){if(desktop.matches)setMenu(false)}
    desktop.addEventListener("change",resize);
    document.addEventListener("keydown",handleKey);
    return ()=>{desktop.removeEventListener("change",resize);document.removeEventListener("keydown",handleKey)};
  },[menu]);
  function openProject(index:number){setCurrent(index);dialog.current?.showModal();document.body.classList.add("modal-open")}
  const contacts=[
    {label:"Email",href:data.email.trim()?"mailto:"+data.email.trim():""},
    {label:"Telegram",href:safeLink(data.telegramUrl)},
    ...data.freelanceProfiles.map(p=>({label:p.label,href:safeLink(p.url)}))
  ].filter(p=>p.href);
  return <div id="top">
    <div className="wave-backdrop" aria-hidden="true"><PatternWaves preset="silk" color="#b0aabd" backgroundColor="#121116" opacity={0.31} interactive={false} intro={false} /></div>
    <a className="skip" href="#main">Skip to content</a>
    <header><div className="wrap header-inner"><Brand/><nav id="main-nav" aria-label="Main navigation" className={menu?"open":""}>{navigation.map(n=><a key={n} href={"#"+n.toLowerCase()} onClick={()=>setMenu(false)}>{n}</a>)}</nav><a href="#contact" className="header-cta" onClick={()=>setMenu(false)}>Let’s talk <Arrow diagonal/></a><button className="menu-button" aria-expanded={menu} aria-controls="main-nav" aria-label={menu?"Close menu":"Open menu"} ref={menuButton} onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button></div></header>
    <main id="main">
      <section className="wrap hero" aria-labelledby="headline"><div className="hero-text"><Label>Independent web developer</Label>
        <h1 id="headline" aria-label="Thoughtful websites. Built for your business.">
          {["Thoughtful", "websites.", "Built for your", "business."].map((line, index) => (
            <span className={index === 3 ? "headline-line headline-accent" : "headline-line"} key={line} aria-hidden="true">
              <span className="headline-fallback">{line}</span>
              <TechText text={line} fontSize={0} letterSpacing={-0.065} align="left"
                accentColor="#ff7038" reach={100} labels={false} draggable={false}
                clickKick={false} />
            </span>
          ))}
        </h1>
        <p>I build websites, landing pages and web applications with a focus on clear design, speed and ease of use.</p>
        <div className="actions flex flex-wrap"><a className="btn filled" href="#work">View my work <Arrow/></a><a className="btn" href="#contact">Let’s talk <Arrow diagonal/></a></div>
      </div><figure className="study"><div className="drawing"><span className="cross tl">+</span><span className="cross tr">+</span><span className="cross bl">+</span><span className="cross br">+</span><img src="./knot.svg" alt="An orange ribbon of closely spaced wire loops curves into a three-dimensional knot."/></div><figcaption><span><b>FIG. 01</b> / FORM STUDY</span><span>TORUS KNOT</span></figcaption></figure></section>
      <section className="section wrap" id="work"><Label>Portfolio</Label><div className="section-title"><h2>Selected work<span>.</span></h2></div><div className="work-grid">{data.projects.map((p,i)=><button className="project" key={p.name} onClick={()=>openProject(i)}><img src={p.image} alt={p.alt} width="760" height="490" loading="lazy"/><div className="project-copy"><small>{p.label}</small><div className="project-title"><h3>{p.name}</h3><Arrow diagonal/></div><p>{p.category}</p></div></button>)}</div></section>
      <section className="section wrap split" id="services"><div><Label>Services</Label><h2>What I build<span>.</span></h2></div><div>{services.map(([title,body])=><article className="row" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="about" className="about"><div className="wrap split"><div><Label>About me</Label><h2>Behind the work<span>.</span></h2></div><div><p className="intro">I turn ideas into digital products that feel simple to use.</p><p>I care about the details, from the order of information on a page to how a button feels on a phone. I explain my decisions in plain language so you can take part in shaping the result.</p></div></div></section>
      <section className="section wrap" id="process"><Label>Process</Label><h2>How we’ll work<span>.</span></h2><ol className="process">{steps.map(([title,body],i)=><li key={title}><small>0{i+1}</small><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
      <section className="section wrap split" id="contact"><div><Label>Contact</Label><h2>Let’s talk<span>.</span></h2></div><div><h3>What would you like to build?</h3><p>Tell me about your business, who the project is for and what you’d like it to do.</p>{contacts.length?<div className="actions flex flex-wrap">{contacts.map(c=><a className="btn" key={c.label} href={c.href}>{c.label}<Arrow diagonal/></a>)}</div>:<p className="contact-note">Direct contact details will appear here. If you found me on a freelance platform, please message me there.</p>}</div></section>
    </main><footer className="wrap"><Brand/><a href="#top">Back to top ↑</a></footer>
    <dialog ref={dialog} aria-labelledby="case-title" onClose={()=>document.body.classList.remove("modal-open")} onClick={e=>{if(e.target===dialog.current)dialog.current?.close()}}><article><button className="close" autoFocus aria-label="Close project" onClick={()=>dialog.current?.close()}>×</button><img src={project?.image} alt={project?.alt}/><div className="case-copy"><Label>{project.label}</Label><h2 id="case-title">{project?.name}</h2>{project.url && (
      <a className="btn filled" href={project.url} target="_blank" rel="noopener noreferrer">
        Visit website <Arrow diagonal/>
      </a>
    )}<h3>The task</h3><p>{project?.task}</p><h3>The solution</h3><p>{project?.solution}</p><h3>{project.url ? "Technologies" : "Proposed technologies"}</h3><p className="tech">{project?.technologies.join("  /  ")}</p></div></article></dialog>
  </div>
}
createRoot(document.getElementById("root")!).render(<App/>);

