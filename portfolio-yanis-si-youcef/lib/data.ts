export type DocumentItem = {
  slug: string;
  title: string;
  collection: string;
  collectionSlug: string;
  series: string;
  year: number;
  date: string;
  role: string;
  type: string;
  format: "horizontal" | "vertical" | "square";
  url: string;
  youtubeId?: string;
  description?: string;
  people?: string[];
  archiveId: string;
};

export const documents: DocumentItem[] = [
  {slug:"dembele-ninho",title:"Ousmane Dembélé × Ninho",collection:"Billboard France",collectionSlug:"billboard-france",series:"Interviews",year:2026,date:"2026",role:"Rédacteur en chef",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=RGOYVcWsFZc",youtubeId:"RGOYVcWsFZc",description:"Entretien croisé avec Ousmane Dembélé et Ninho pour Billboard France.",people:["Ousmane Dembélé","Ninho"],archiveId:"BBF-2026-001"},
  {slug:"capsules-dembele-ninho",title:"Capsules — Dembélé × Ninho",collection:"Billboard France",collectionSlug:"billboard-france",series:"Capsules Instagram",year:2026,date:"2026",role:"Rédacteur en chef",type:"Vidéo verticale",format:"vertical",url:"https://www.instagram.com/reel/DZafkZ_sGK8/",people:["Ousmane Dembélé","Ninho"],archiveId:"BBF-2026-002"},
  {slug:"cortis",title:"Cortis",collection:"Billboard France",collectionSlug:"billboard-france",series:"Capsules Instagram",year:2026,date:"2026",role:"Rédacteur en chef",type:"Vidéo verticale",format:"vertical",url:"https://www.instagram.com/reel/DaH1wV-ofln/",archiveId:"BBF-2026-003"},
  {slug:"wesh-episode-1",title:"WESH — épisode 1",collection:"Booska-P",collectionSlug:"booska-p",series:"WESH",year:2021,date:"2021",role:"Journaliste",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=HOGtLDOyRZU",youtubeId:"HOGtLDOyRZU",archiveId:"BPK-2021-001"},
  {slug:"wesh-episode-2",title:"WESH — épisode 2",collection:"Booska-P",collectionSlug:"booska-p",series:"WESH",year:2021,date:"2021",role:"Journaliste",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=K0ZMSpNOjs4",youtubeId:"K0ZMSpNOjs4",archiveId:"BPK-2021-002"},
  {slug:"soyons-foot",title:"Soyons Foot — épisode",collection:"Booska-P",collectionSlug:"booska-p",series:"Soyons Foot",year:2021,date:"2021",role:"Journaliste",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=7lXj67S51qc",youtubeId:"7lXj67S51qc",archiveId:"BPK-2021-003"},
  {slug:"podium",title:"Podium — épisode",collection:"Booska-P",collectionSlug:"booska-p",series:"Podium",year:2021,date:"2021",role:"Journaliste",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=agpruO94mP8",youtubeId:"agpruO94mP8",archiveId:"BPK-2021-004"},
  {slug:"surcote-sous-cote",title:"Surcoté / Sous-coté",collection:"Booska-P",collectionSlug:"booska-p",series:"Formats",year:2021,date:"2021",role:"Journaliste",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=J-bXsnnAexc",youtubeId:"J-bXsnnAexc",archiveId:"BPK-2021-005"},
  {slug:"expresso-1",title:"L’Expresso — épisode 1",collection:"Médecins Sans Frontières",collectionSlug:"msf",series:"L’Expresso",year:2022,date:"2022",role:"Consultant réseaux sociaux",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=Qi3O4YVqFZg",youtubeId:"Qi3O4YVqFZg",archiveId:"MSF-2022-001"},
  {slug:"expresso-2",title:"L’Expresso — épisode 2",collection:"Médecins Sans Frontières",collectionSlug:"msf",series:"L’Expresso",year:2022,date:"2022",role:"Consultant réseaux sociaux",type:"Vidéo",format:"horizontal",url:"https://www.youtube.com/watch?v=Q8LVFZ5JxMU",youtubeId:"Q8LVFZ5JxMU",archiveId:"MSF-2022-002"},
  {slug:"ulyces-1",title:"Production Ulyces — 1",collection:"Ulyces",collectionSlug:"ulyces",series:"Documentaires",year:2022,date:"2022",role:"Rédacteur en chef",type:"Documentaire",format:"horizontal",url:"https://www.youtube.com/watch?v=ToGMxHKjWII",youtubeId:"ToGMxHKjWII",archiveId:"ULY-2022-001"},
  {slug:"ulyces-2",title:"Production Ulyces — 2",collection:"Ulyces",collectionSlug:"ulyces",series:"Documentaires",year:2022,date:"2022",role:"Rédacteur en chef",type:"Documentaire",format:"horizontal",url:"https://www.youtube.com/watch?v=3baPn8dCYZU",youtubeId:"3baPn8dCYZU",archiveId:"ULY-2022-002"}
];

export const collections = [
  {slug:"billboard-france",name:"Billboard France",accent:"#7251b5"},
  {slug:"booska-p",name:"Booska-P",accent:"#111111"},
  {slug:"le-bonbon",name:"Le Bonbon",accent:"#ff80c4"},
  {slug:"msf",name:"Médecins Sans Frontières",accent:"#d71920"},
  {slug:"ulyces",name:"Ulyces",accent:"linear-gradient(90deg,#5b32c9,#df4ec6,#f2a03d)"}
];
