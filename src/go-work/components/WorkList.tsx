interface Work {
  id: number;
  companyName: string;
  numberOfEmployee: number;
  position: string;
  category: string;
}

interface Props {
  works: Work[];
  onDelete: (id: number) => void;
}

const WorkList = ({ works, onDelete }: Props) => {
  if (works.length === 0) return null;

  return (
    <>
      <table className="table table bordered">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Number Of Employee</th>
            <th>Position</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work.id}>
              <td>{work.companyName}</td>
              <td>{work.numberOfEmployee}</td>
              <td>{work.position}</td>
              <td>{work.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(work.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Employee</td>
            <td>
              {works.reduce((acc, work) => work.numberOfEmployee + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default WorkList;
