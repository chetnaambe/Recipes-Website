// import React from "react";
// import { useForm } from "react-hook-form";
// import { nanoid } from "nanoid";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const { register, handleSubmit, reset, watch } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = (formData) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];


//     const userExists = users.find(
//       (user) => user.email === formData.email
//     );

//     if (userExists) {
//       toast.error("User already exists with this email");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     const newUser = {
//       id: nanoid(),
//       name: formData.name,
//       email: formData.email,
//       password: formData.password
//     };

//     const updatedUsers = [...users, newUser];

//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//     toast.success("Signup successful");

//     reset();
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         className="bg-white p-6 rounded-xl shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           {...register("name", { required: true })}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email", { required: true })}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: true, minLength: 6 })}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         {/* Confirm Password */}
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           {...register("confirmPassword", { required: true })}
//           className="w-full p-2 border mb-2 rounded"
//         />

//         <button className="w-full bg-green-500 text-white py-2 rounded mt-2">
//           Sign Up
//         </button>

//         <p className="text-sm mt-2">
//           Already have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitHandler = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      toast.error("User already exists with this email");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const newUser = {
      id: nanoid(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Signup successful");

    reset();
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-2 py-2">

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="max-w-[450px] mx-auto flex flex-col gap-9 px-6 py-8 w-full shadow-[5px_5px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px] bg-white"
      >

        <h1 className="font-[500] text-3xl mb-4 text-center">
          Sign Up
        </h1>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

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
          placeholder="Create password"
          {...register("password", { required: true, minLength: 6 })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-[#F7A725] px-2 py-3.5 rounded-[5px] text-[19px] font-medium"
        >
          Sign Up
        </button>

        {/* Login link */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-[#F7A725] cursor-pointer font-medium"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </form>

    </div>
  );
};

export default Signup;