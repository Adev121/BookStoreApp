import React from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <Navbar/>
      <div className="flex items-center justify-center h-screen">
        <div
          id="my_modal_3"
          className="w-[400px] bg-slate-100 border border-slate-400 items-center shadow-2xl p-5 rounded-2xl"
        >
          <div className="">
            <form method="div" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              

              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="flex flex-col">
              <span className="my-2">Name:</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="py-4 h-7 border border-slate-400 rounded-xl placeholder:px-2"
                  {...register("name", { required: true })}
                />
                 {errors.email && <span className="text-red-400">This field is required</span>}
                <br />
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
                  className="py-4 h-7  border border-slate-400 rounded-xl placeholder:px-2"
                  {...register("password", { required: true })}
                />
                 {errors.email && <span className="text-red-400">This field is required</span>}
                <br />
                <span className="text-red-500 text-sm">
                  Password should be at least 8 characters long.
                </span>
              </div>
              <div className="flex justify-between my-4">
                <button className="bg-slate-400 py-2 px-5 rounded-xl text-black hover:bg-pink-500 hover:text-white duration-200">
                  Signup
                </button>
                <p>
                  Already registered ?{" "}
                  <span
                    className="text-pink-400 hover:cursor-pointer hover:text-pink-500 underline"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    <a href="/">
                      Login
                      <Login />
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Signup;
