import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const RecipeCard = (props) => {
  const { id, image, title, details, chef, views } = props.recipe;
  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col rounded-2xl gap-3.5 overflow-hidden shadow-[15px_5px_15px_5px_#DFDFDF] p-3 bg-[#f7a725d9]'>
      
      {/* TITLE */}
      <div>
        <h2 className='text-[30px] text-black py-4 px-4 font-[600]'>
          {title}
        </h2>
      </div>

      {/* IMAGE + VIEW OVERLAY */}
      <div className='w-full rounded-[40px] overflow-hidden relative'>
        
        <img
          className='h-[470px] lg:h-[300px] w-full object-cover hover:scale-105 duration-100'
          src={image}
          alt={title}
        />

        {/* 👁️ VIEW COUNT
        <div className='absolute top-3 right-3 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-md text-sm backdrop-blur-sm'>
          <Eye size={16} />
          <span>{views || 0}</span>
        </div> */}

      </div>

      {/* DETAILS */}
      <div>
        <p>
          {details.slice(0, 100)}...
          <small className='text-white ml-1'>more</small>
        </p>
      </div>

      {/* BUTTON */}
      <div
        className='w-full bg-black px-4 py-3 flex flex-row items-center justify-between gap-3.5 text-center text-white rounded-4xl cursor-pointer'
        onClick={() => navigate(`/recipes/details/${id}`)}
      >
        <p className='text-[18px] font-[500]'>
          See Complete Recipe
        </p>
        <ChefHat className='bg-white text-black p-1 rounded-full' size={32} />
      </div>

    </div>
  );
};

export default RecipeCard;