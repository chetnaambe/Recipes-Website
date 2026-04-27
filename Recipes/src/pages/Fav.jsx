
import React from "react";
import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];
 const favIds = favorite.map((item) => item.id);
  return (
    <div className="w-full p-5 mt-12">
      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorite.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} favIds={favIds} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No recipes found!
        </p>
      )}
    </div>
  );
};

export default Fav;