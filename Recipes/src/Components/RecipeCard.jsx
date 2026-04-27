// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChefHat } from 'lucide-react';

// const RecipeCard = (props) => {
//   const { id, image, title, details, chef, views } = props.recipe;
//   const navigate = useNavigate();

//   return (
//     <div className='w-full flex flex-col rounded-2xl gap-3.5 overflow-hidden shadow-[15px_5px_15px_5px_#DFDFDF] p-3 bg-[#f7a725d9]'>
      
//       {/* TITLE */}
//       <div>
//         <h2 className='text-[30px] text-black py-4 px-4 font-[600]'>
//           {title}
//         </h2>
//       </div>

//       {/* IMAGE + VIEW OVERLAY */}
//       <div className='w-full rounded-[40px] overflow-hidden relative'>
        
//         <img
//           className='h-[470px] lg:h-[300px] w-full object-cover hover:scale-105 duration-100'
//           src={image}
//           alt={title}
//         />

//         {/* 👁️ VIEW COUNT
//         <div className='absolute top-3 right-3 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-md text-sm backdrop-blur-sm'>
//           <Eye size={16} />
//           <span>{views || 0}</span>
//         </div> */}

//       </div>

//       {/* DETAILS */}
//       <div>
//         <p>
//           {details.slice(0, 100)}...
//           <small className='text-white ml-1'>more</small>
//         </p>
//       </div>

//       {/* BUTTON */}
//       <div
//         className='w-full bg-black px-4 py-3 flex flex-row items-center justify-between gap-3.5 text-center text-white rounded-4xl cursor-pointer'
//         onClick={() => navigate(`/recipes/details/${id}`)}
//       >
//         <p className='text-[18px] font-[500]'>
//           See Complete Recipe
//         </p>
//         <ChefHat className='bg-white text-black p-1 rounded-full' size={32} />
//       </div>

//     </div>
//   );
// };

// export default RecipeCard;


import RecipeCard from "../Components/RecipeCard";

const Popular = () => {

  const topRecipes = [
    {
      id: 1,
      title: "Butter Chicken",
      image: "https://source.unsplash.com/400x300/?butter-chicken",
      details: "Rich creamy butter chicken made with Indian spices",
      views: 1200,
      likes: 450,
    },
    {
      id: 2,
      title: "Paneer Tikka",
      image: "https://source.unsplash.com/400x300/?paneer-tikka",
      details: "Smoky grilled paneer with spicy marinade",
      views: 980,
      likes: 380,
    },
    {
      id: 3,
      title: "Veg Biryani",
      image: "https://source.unsplash.com/400x300/?biryani",
      details: "Fragrant rice layered with vegetables and spices",
      views: 1500,
      likes: 600,
    },
  ];

  return (
    <div className="w-full bg-[#FFFCF5] px-3.5 py-5 lg:mt-18">

      <div className="flex items-center justify-center mt-5 lg:mt-9 flex-col ">
        <h1 className="text-[30px] md:text-5xl lg:text-6xl font-[700]">
          Popular Recipes You Can't Miss
        </h1>

        <p className="text-center text-[18px] font-[300] opacity-50 p-2 md:p-4 lg:p-4">
          From comfort food classics to exotic flavors, our featured <br />
          recipes are sure to impress.
        </p>
      </div>

      {/* 3 FIXED RECIPES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 md:mt-28 lg:mt-20">
        {topRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </div>
  );
};

export default Popular;