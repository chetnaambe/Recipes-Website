import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitHandler = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (foundUser) {
      toast.success("Login successful");

      
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      reset();
      navigate("/recipes"); 
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-2 border mb-2 rounded"
        />

        {/* Password */}
        <input
        type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full p-2 border mb-2 rounded"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded mt-2">
          Login
        </button>
        <p>Dont hav an Account  <span className="text-[blue]" onClick={()=> navigate("/Signup")}>sign up?</span></p>
      </form>
    </div>
  );
};

export default Login;