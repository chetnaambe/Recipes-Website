
import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateRec = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const { register, handleSubmit, reset, setValue } = useForm();

  const submitHandler = (recipe) => {
    // create id
    recipe.id = nanoid();

    // update state
    const copydata = [...data, recipe];
    setdata(copydata);

    // save in localStorage
    localStorage.setItem("recipes", JSON.stringify(copydata));

    // success message
    toast.success("Recipe created successfully");

    // reset form
    reset();

    // navigate after saving
    navigate("/recipes");
  };

  const formatTitle = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div className='w-full px-2 py-2'>
      <form
        className='max-w-[450px] mx-auto flex flex-col gap-9 px-4 py-4 w-full shadow-[5px_5px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px]'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className='font-[500] text-3xl mb-4'>Create Recipes</h1>

        {/* IMAGE */}
        <input
          type="text"
          {...register("image")}
          required
          placeholder='Enter image URL'
          className='outline-none px-2.5 border-b-2 border-[#F7A725] w-full'
        />

        {/* TITLE */}
        <input
          type="text"
          {...register("title")}
          required
          placeholder='Enter recipe title'
          onBlur={(e) => {
            const formatted = formatTitle(e.target.value);
            setValue("title", formatted);
          }}
          className='outline-none px-2.5 border-b-2 border-[#F7A725] w-full'
        />

        {/* DETAILS */}
        <textarea
          {...register("details")}
          required
          placeholder='Enter recipe details'
          className='outline-none px-2.5 border-b-2 border-[#F7A725] w-full'
        />

        {/* CATEGORY */}
        <select
          {...register("category")}
          required
          className='block outline-none px-2.5 border-b-2 border-[#F7A725] w-full'
        >
          <option value="">Select a category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        {/* SUBMIT BUTTON */}
        <button
          className='bg-[#F7A725] px-2 py-3.5 rounded-[5px] text-[19px] font-medium'
          type="submit"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRec;