
interface Props{
    onSelectCategory:(category:string)=>void;
}

const WorkFilter = ({onSelectCategory}:Props) => {
  return (
    <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
        <option selected>All categories</option>
        <option value="Developer">Developer</option>
        <option value="Cloud">Cloud</option>
      </select>
  )
}

export default WorkFilter