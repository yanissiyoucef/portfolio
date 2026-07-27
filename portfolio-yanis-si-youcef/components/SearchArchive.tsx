"use client";
import {useEffect,useMemo,useState} from "react";
import {documents,collections} from "@/lib/data";
import {ArchiveCard} from "./ArchiveCard";

export function SearchArchive(){
 const [query,setQuery]=useState("");
 const [collection,setCollection]=useState("all");
 useEffect(()=>{const params=new URLSearchParams(window.location.search);setCollection(params.get("collection")||"all");},[]);
 const filtered=useMemo(()=>documents.filter(d=>{
  const hay=[d.title,d.collection,d.series,d.role,d.type,d.description,...(d.people||[])].join(" ").toLowerCase();
  return (collection==="all"||d.collectionSlug===collection)&&hay.includes(query.toLowerCase());
 }),[query,collection]);
 const years=[...new Set(filtered.map(d=>d.year))].sort((a,b)=>b-a);
 return <section className="archive-section">
  <div className="archive-tools" id="archives">
   <label htmlFor="archive-search">Rechercher dans les productions</label>
   <input id="archive-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Titre, média, personne, format…" />
   <div className="filters"><button className={collection==="all"?"active":""} onClick={()=>setCollection("all")}>Tout</button>{collections.map(c=><button key={c.slug} className={collection===c.slug?"active":""} onClick={()=>setCollection(c.slug)}>{c.name}</button>)}</div>
  </div>
  <div className="archive-heading"><p>{filtered.length} production{filtered.length>1?"s":""}</p><span>Du plus récent au plus ancien</span></div>
  <div className="chapter-stack">
  {years.map(year=>{
    const yearItems=filtered.filter(d=>d.year===year);
    const media=[...new Set(yearItems.map(d=>d.collection))];
    return <section className="year-chapter" key={year}>
      <header className="chapter-head"><strong>{year}</strong><span>{media.join(" · ")}</span></header>
      <div className="chapter-body">
        {media.map(name=><section className="media-chapter" key={name}>
          <div className="media-label"><h2>{name}</h2><span>{yearItems.filter(d=>d.collection===name).length} production{yearItems.filter(d=>d.collection===name).length>1?"s":""}</span></div>
          <div className="archive-grid">{yearItems.filter(d=>d.collection===name).map((d,index)=><ArchiveCard key={d.slug} item={d} index={index}/>)}</div>
        </section>)}
      </div>
    </section>
  })}
  </div>
  {filtered.length===0&&<p className="empty-state">Aucune production ne correspond à cette recherche.</p>}
 </section>
}
