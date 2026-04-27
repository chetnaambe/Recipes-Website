import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {

  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (data, e) => {

    emailjs
      .send(
        "service_05u0i85",
        "template_1jq9glm",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "R-ymV4kdTCoMemlMV"
      )
      .then(() => {
        toast.success("Message sent successfully ✅");
        reset();
      })
      .catch((error) => {
        console.log("ERROR:", error);
        toast.error("Failed to send ❌");
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-2 py-2">
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="max-w-[450px] mx-auto flex flex-col gap-9 px-6 py-8 w-full shadow-[5px_5px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px]"
      >
        <h1 className="font-[500] text-3xl mb-4">Contact Us</h1>

        <input
          type="text"
          placeholder="eg. Chetna Ambe"
          {...register("name", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        <input
          type="email"
          placeholder="chetnaambe75@gmail.com"
          {...register("email", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        <textarea
          placeholder="Enter your message"
          {...register("message", { required: true })}
          className="outline-none px-2.5 border-b-2 border-[#F7A725] w-full"
        />

        <button
          type="submit"
          className="bg-[#F7A725] px-2 py-3.5 rounded-[5px] text-[19px] font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;