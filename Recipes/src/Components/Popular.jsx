import RecipeCard from "../Components/RecipeCard";

const Popular = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  
  const topRecipes = [...favorite]
    .sort((a, b) => {
      const scoreA = (a.views || 0) + (a.likes || 0);
      const scoreB = (b.views || 0) + (b.likes || 0);
      return scoreB - scoreA;
    })
    .slice(0, 3);

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

      {topRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 md:mt-28 lg:mt-20">
          {topRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
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

export default Popular;