
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "aa120eab-a5d2-45f0-80a0-38c32a9419b7");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      toast.success("Message sent successfully");

      // 🔥 SAVE FEEDBACK IN LOCALSTORAGE
      const oldFeedback = JSON.parse(localStorage.getItem("feedback")) || [];

      const newFeedback = {
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "feedback",
        JSON.stringify([newFeedback, ...oldFeedback])
      );

      reset();
    } else {
      toast.error("Failed to send ❌");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-2 py-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          disabled={loading}
          className="bg-[#F7A725] px-2 py-3.5 rounded-[5px] text-[19px] font-medium"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;