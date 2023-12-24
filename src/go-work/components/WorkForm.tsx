import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../categories";

interface Props {
  onSubmit: (data: WorkFormData) => void;
}

const schema = z.object({
  companyName: z.string().min(3).max(50),
  numberOfVacancy: z.number().int(),
  position: z.string().min(3).max(50),
  category: z.enum(categories),
});

type WorkFormData = z.infer<typeof schema>;

const WorkForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Company Name
        </label>
        <input
          {...register("companyName")}
          id="company-name"
          type="text"
          className="form-control"
        />
        {errors.companyName && (
          <p className="text-danger">{errors.companyName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Number of Vacancy
        </label>
        <input
          {...register("numberOfVacancy", { valueAsNumber: true })}
          id="number-of-vacancy"
          type="number"
          className="form-control"
        />
        {errors.numberOfVacancy && (
          <p className="text-danger">{errors.numberOfVacancy.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Position
        </label>
        <input
          {...register("position")}
          id="position"
          type="text"
          className="form-control"
        />
        {errors.position && (
          <p className="text-danger">{errors.position.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <select {...register("category")} className="form-select" id="category">
          <option selected>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default WorkForm;
