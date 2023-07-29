import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">*name required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">*The name must be atleast 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">*age required.</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
