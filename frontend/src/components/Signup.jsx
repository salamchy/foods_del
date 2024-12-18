import { FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { Link } from "react-router-dom";

const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Create an Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required
              {...register("email")} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required
              {...register("password")} />

            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Signup" className="btn bg-green text-white" />
          </div>
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
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaTwitter />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  )
}
export default signup