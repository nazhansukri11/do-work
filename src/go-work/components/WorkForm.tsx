import { categories } from "../../App"
const WorkForm = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Company Name</label>
            <input id="company-name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Number of Employee</label>
            <input id="number-of-employee" type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Position</label>
            <input id="position" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label"></label>
            <select className="form-select" id="category">
              <option selected>All Categories</option>
              {categories.map(category=><option key={category} value={category}>{category}</option>)}

            </select>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default WorkForm