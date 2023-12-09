import { useState } from "react";
import "./App.css";
import WorkList from "./go-work/components/WorkList";
import WorkFilter from "./go-work/components/WorkFilter";
import WorkForm from "./go-work/components/WorkForm";


function App() {
  const [selectedCategory,setSelectedCategory]=useState('');
  const [works,setWorks]=useState([
    {id:1,companyName:'Digi',numberOfVacancy:3,position:'Frontend Developer',category:'Developer'},
    {id:2,companyName:'Maxis',numberOfVacancy:6,position:'DevOps Engineer',category:'Cloud'},
    {id:3,companyName:'Celcom',numberOfVacancy:7,position:'Backend Developer',category:'Developer'},
    {id:4,companyName:'OneXOX',numberOfVacancy:1,position:'Cloud Engineer',category:'Cloud'}
  ]);

  const visibleWorks=selectedCategory?works.filter(e=>e.category==selectedCategory):works

  return (
    
    <>
    <div className="m-3 mx-5">
    <WorkFilter onSelectCategory={(category)=>setSelectedCategory(category)}></WorkFilter>
    </div>
    <div className="m-3 mx-5">

    <WorkList works={visibleWorks} onDelete={(id)=>setWorks(works.filter((e)=>e.id !== id))} >

    </WorkList>
    </div>

    <div className="m-3 mx-5">

    <WorkForm onSubmit={(work)=>setWorks([...works,{...work,id:works.length+1}])}></WorkForm>
    </div>
    </>
  );
}

export default App;
