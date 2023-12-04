import { useState } from "react";
import "./App.css";
import WorkList from "./go-work/components/WorkList";

function App() {
  const [works,setWorks]=useState([
    {id:1,companyName:'Digi',numberOfEmployee:3,position:'Frontend Developer',category:'Developer'},
    {id:2,companyName:'Maxis',numberOfEmployee:6,position:'DevOps Engineer',category:'Cloud'},
    {id:3,companyName:'Celcom',numberOfEmployee:7,position:'Backend Developer',category:'Developer'},
    {id:4,companyName:'OneXOX',numberOfEmployee:1,position:'Cloud Engineer',category:'Cloud'},
  ]);

  return (
    <>
    <WorkList works={works} onDelete={(id)=>setWorks(works.filter((e)=>e.id !== id))} >

    </WorkList>
    </>
  );
}

export default App;
