import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => console.log(data);

  const genders = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];

  const skills = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React Js", label: "React Js" },
    { value: "Angular", label: "Angular" },
  ];

  return (
    <div className="login_form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto p-5 "
        style={{ background: "rgb(221 216 216)" }}
        noValidate
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.email && (
            <span className="text-danger mt-1 ">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-danger mt-1 ">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              maxLength: {
                value: 15,
                message: "Password maximum 15 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-danger mt-1">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-danger mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="age"
            {...register("age", {
              min: {
                value: 18,
                message: "Minimum age 18",
              },
              max: {
                value: 99,
                message: "Maximum age 99",
              },
            })}
          />
          {errors.age && (
            <span className="text-danger mt-1">{errors.age.message}</span>
          )}
        </div>
        <div className="mb-3">
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={genders}
                isClearable={true}
                isSearchable={true}
                value={field.value}
                placeholder="Select Gender"
              />
            )}
          />
          {errors.gender && (
            <span className="text-danger mt-1">{errors.gender.message}</span>
          )}
        </div>
        <div className="mb-3">
          <Controller
            name="skills"
            control={control}
            rules={{ required: "atleast one skill is required" }}
            render={({ field }) => (
              <CreatableSelect
                {...field}
                options={skills}
                isMulti
                isClearable={true}
                isSearchable={true}
                value={field.value}
                placeholder="SKILLS "
              />
            )}
          />
          {errors.skills && (
            <span className="text-danger mt-1">{errors.skills.message}</span>
          )}
        </div>

        <button className="btn btn-primary ">LogIn</button>
      </form>
    </div>
  );
};

export default SignUp;
