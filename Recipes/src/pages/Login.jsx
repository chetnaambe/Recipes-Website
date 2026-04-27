// import React from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = (formData) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const foundUser = users.find(
//       (user) =>
//         user.email === formData.email &&
//         user.password === formData.password
//     );

//     if (foundUser) {
//       toast.success("Login successful");

      
//       localStorage.setItem("currentUser", JSON.stringify(foundUser));

//       reset();
//       navigate("/recipes"); 
//     } else {
//       toast.error("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         className="bg-white p-6 rounded-xl shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email")}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         {/* Password */}
//         <input
//         type="password"
//           placeholder="Password"
//           {...register("password")}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         <button className="w-full bg-blue-500 text-white py-2 rounded mt-2">
//           Login
//         </button>
//         <p>Dont hav an Account  <span className="text-[blue]" onClick={()=> navigate("/Signup")}>sign up?</span></p>
//       </form>
//     </div>
//   );
// };

// export default Login;

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
    <div className="w-full min-h-screen flex items-center justify-center px-2 py-2">

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="max-w-[450px] mx-auto flex flex-col gap-9 px-6 py-8 w-full shadow-[5px_5px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px] bg-white"
      >

        <h1 className="font-[500] text-3xl mb-4 text-center">
          Login
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-[#F7A725] px-2 py-3.5 rounded-[5px] text-[19px] font-medium"
        >
          Login
        </button>

        {/* Signup link */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-[#F7A725] cursor-pointer font-medium"
            onClick={() => navigate("/Signup")}
          >
            Sign up
          </span>
        </p>

      </form>

    </div>
  );
};

export default Login;