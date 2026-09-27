'use client';
import {useEffect,useState} from 'react';
export default function Home(){const [files,setFiles]=useState([]),[q,setQ]=useState(''),[cat,setCat]=useState('ALL'),[loading,setLoading]=useState(true);
async function load(){setLoading(true);const r=await fetch('/api/files');setFiles(await r.json());setLoading(false)}
useEffect(()=>{load()},[]); const cats=['ALL','CLASS 11','CLASS 12','DROPPER','RTS','VP AIR TEST','AITS','2026','2027','OTHER']; const shown=files.filter(f=>(cat==='ALL'||f.category===cat)&&((f.name||'').toLowerCase().includes(q.toLowerCase())));
return <main><header><h1>📚 PDF Library</h1><p>Automatically sorted from Telegram</p></header><div className="tools"><input placeholder="Search PDF..." value={q} onChange={e=>setQ(e.target.value)}/><select value={cat} onChange={e=>setCat(e.target.value)}>{cats.map(c=><option key={c}>{c}</option>)}</select><button onClick={load}>Refresh</button></div>{loading?<p>Loading...</p>:<div className="grid">{shown.map(f=><a className="card" key={f.id} href={f.file_url} target="_blank"><b>{f.name}</b><span>{f.category} {f.year?'• '+f.year:''}</span></a>)}</div>}{!loading&&!shown.length&&<p>No PDFs found.</p>}</main>}
