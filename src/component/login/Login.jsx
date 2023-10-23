import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger mt-1 ">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger mt-1 ">This field is required</span>
          )}
        </div>
        <button className="btn btn-primary ">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
