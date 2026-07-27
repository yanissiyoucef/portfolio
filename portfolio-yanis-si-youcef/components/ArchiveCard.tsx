import Link from "next/link";
import type {DocumentItem} from "@/lib/data";

function instagramEmbedUrl(url:string){
  const normalized=url.replace("/reels/","/reel/").replace(/\/$/,"");
  return `${normalized}/embed/`;
}

export function ArchiveCard({item,index=0,featured=false}:{item:DocumentItem,index?:number;featured?:boolean}){
 const image=item.youtubeId?`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`:undefined;
 const instagram=item.format==="vertical"&&item.url.includes("instagram.com");
 const embedUrl=instagram?instagramEmbedUrl(item.url):undefined;
 const content=<>
   <div className={`thumb ${instagram?"instagram-thumb":""}`} style={image?{backgroundImage:`url(${image})`}:undefined}>
    {instagram&&<>
      <iframe src={embedUrl} title={`Aperçu Instagram — ${item.title}`} loading="lazy" scrolling="no" allow="encrypted-media; picture-in-picture" />
      <span className="instagram-fallback">Voir le Reel sur Instagram</span>
    </>}
    {!image&&!instagram&&<span className="thumb-fallback">{item.collection}</span>}
    <span className="card-index">{String(index+1).padStart(2,"0")}</span>
    <i>{item.archiveId}</i>
   </div>
   <div className="card-copy">
    <p>{item.collection} <span>—</span> {item.year}</p>
    <h3>{item.title}</h3>
    <div className="card-meta"><span>{item.type}</span><span>{item.role}</span></div>
   </div>
 </>;

 if(instagram){
   return <a className={`card ${item.format} card-${index%7} ${featured?"featured-card":""}`} href={item.url} target="_blank" rel="noreferrer">{content}</a>;
 }
 return <Link className={`card ${item.format} card-${index%7} ${featured?"featured-card":""}`} href={`/document/${item.slug}`}>{content}</Link>;
}
