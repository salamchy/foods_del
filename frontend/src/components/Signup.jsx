import { FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, signUpWithGithub, signUpWithTwitter, createUser } = useContext(AuthContext);

  //redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //google signIn
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert("Login Successful");
      navigate(from, { replace: true })
    }).catch((error) => {
      console.log(error)
    })
  }

  //Github signIn
  const handleLoginWithGithub = () => {
    signUpWithGithub().then((result) => {
      const user = result.user;
      alert("Login Successful");
      navigate(from, { replace: true })
    }).catch((error) => {
      console.log(error)
    })
  }

  //Twitter signIn
  const handleLoginWithTwitter = () => {
    signUpWithTwitter().then((result) => {
      const user = result.user;
      alert("Login Successful");
      navigate(from, { replace: true })
    }).catch((error) => {
      console.log(error)
    })
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      const user = result.user;
      alert("Account created successfully");
      reset();
      document.getElementById('my_modal_5').close();
      navigate(from, { replace: true })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Create an Account</h3>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required
              {...register("email")} />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required
              {...register("password")} />

            {/* forgot password */}
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          {/* submit button */}
          <div className="form-control mt-6">
            <input type="submit" value="Signup" className="btn bg-green text-white" />
          </div>

          {/* login button */}
          <p className="text-center my-2">Don't have an account?
            <button className="underline text-red ml-1"
              onClick={() => document.getElementById('my_modal_5').showModal()}
              to="/Login"> Login </button></p>

          {/* close button */}
          <Link to="/"
            onClick={() => document.getElementById('my_modal_5').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        </form>

        {/* social sign up */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin}>
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLoginWithTwitter}>
            <FaTwitter />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLoginWithGithub}>
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  )
}
export default Signup;