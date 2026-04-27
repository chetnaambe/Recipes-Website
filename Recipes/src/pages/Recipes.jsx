import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext";
import RecipeCard  from "../Components/RecipeCard";


const Recipes = () => {

const { data }  = useContext(recipecontext);

return (
      <div className="p-4 mt-5">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-[600]">Disc<span className="text-[#F7A725]">over</span> Reci<span className="text-[#F7A725]">pes</span></h1>
          <p className="text-[17px] font-[300] opacity-45">Discover, Cook, and enjoy amazing recipes</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-9 gap-6 mt-11">
        
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}

      </div>
    </div>
  )
}

export default Recipes