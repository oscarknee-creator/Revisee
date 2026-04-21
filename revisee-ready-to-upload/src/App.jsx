
import React,{useState,useEffect} from "react";
const subs=["Maths","English","Biology","Chemistry","Physics","History","Geography","Business","French","German","Spanish","RS"];
export default function App(){
 const [name,setName]=useState(localStorage.getItem("name")||"");
 const [temp,setTemp]=useState(name);
 const [mono,setMono]=useState(localStorage.getItem("mono")==="1");
 useEffect(()=>localStorage.setItem("name",name),[name]);
 useEffect(()=>localStorage.setItem("mono",mono?"1":"0"),[mono]);
 if(!name) return <div className="center"><div className="card"><h1>Revisee</h1><p>What should we call you?</p><input value={temp} onChange={e=>setTemp(e.target.value)} /><button onClick={()=>setName(temp)}>Enter</button></div></div>
 return <div className={mono?"mono":""}><header><b>Revisee</b><span>Welcome {name}</span></header><div className="toolbar"><button onClick={()=>{const n=prompt("Change name",name); if(n) setName(n)}}>Change Name</button><button onClick={()=>setMono(!mono)}>Black & White</button></div><div className="grid">{subs.map(s=><div className="card" key={s}><h3>{s}</h3><p>Flashcards • Posters • Exam Boards</p></div>)}</div><footer>Get in touch: oscar.knee@icloud.com</footer></div>
}
