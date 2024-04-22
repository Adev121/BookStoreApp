import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  
  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };
  
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="flex flex-col">
                <span className="my-2">Email:</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="py-4 h-7 border border-slate-400 rounded-xl placeholder:px-2"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-400">This field is required</span>}
                <br />
                <span className="my-2">Password:</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="py-4 h-7 border border-slate-400 rounded-xl placeholder:px-2"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-400">This field is required</span>}
              </div>
              <div className="flex justify-between my-3">
                <button
                  className="bg-slate-400 py-2 px-5 rounded-xl text-black hover:bg-pink-500 hover:text-white duration-200"
                >
                  Login
                </button>
                <p>
                  Not registered ?{" "}
                  <span className="text-pink-400 hover:cursor-pointer hover:text-pink-500 underline">
                    <a href="/Signup">SignUp</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
