import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Heart } from "lucide-react";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, setValue } = useForm();
  const params = useParams();

  // ✅ ID FIX (important)
  const recipe = data.find((r) => String(r.id) === String(params.id));

  // ✅ favorite state
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  // ✅ liked state (UI)
  const [liked, setLiked] = useState(false);

  // ✅ sync liked with localStorage
  useEffect(() => {
    if (!recipe) return;

    const isExist = favorite.find((f) => String(f.id) === String(recipe.id));
    setLiked(!!isExist);
  }, [recipe, favorite]);

  // ✅ ADD to fav
  const FavHandler = () => {
    const exists = favorite.find((f) => f.id === recipe.id);
    if (!exists) {
      const copyfav = [...favorite, recipe];
      setfavorite(copyfav);
      localStorage.setItem("fav", JSON.stringify(copyfav));
    }
  };

  // ✅ REMOVE from fav
  const UnFavHandler = () => {
    const filterfav = favorite.filter((f) => f.id !== recipe.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  // ✅ UPDATE
  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => String(r.id) === String(params.id));
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };

    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated");
  };

  // ✅ DELETE
  const DeleteHandler = () => {
    const filterdata = data.filter(
      (r) => String(r.id) !== String(params.id)
    );
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe Deleted");
    navigate("/recipes");
  };

const formatTitle = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

  return recipe ? (
    <div className="w-full flex flex-col lg:flex-row gap-9 mt-11 px-5">

      {/* LEFT */}
      <div className="w-full lg:w-1/2 px-8 py-5 flex flex-col">
        <div className="relative">
          <img
            className="w-[350px] h-[350px] object-cover rounded-xl"
            src={recipe.image}
            alt=""
          />

          {/* ❤️ HEART FIX */}
          <Heart
            className="absolute top-3 right-3"
            size={28}
            onClick={() => {
              if (liked) {
                UnFavHandler();
              } else {
                FavHandler();
              }
            }}
            fill={liked ? "red" : "none"}
            color={liked ? "red" : "black"}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <h1 className="text-4xl font-[600]">{recipe.title}</h1>
          <p className="text-[14px] opacity-50">{recipe.details}</p>
          <p className="text-[18px]">{recipe.category}</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <form
        className="w-full lg:w-1/2 px-6 py-4 flex flex-col gap-6 shadow rounded-xl"
        onSubmit={handleSubmit(updateHandler)}
      >
        <h1 className="text-3xl font-medium">Update Recipe</h1>

        <input
          {...register("image")}
          defaultValue={recipe.image}
          placeholder="Image URL"
          className="border-b-2 outline-none border-[#ee9e1d]"
        />

        <input
          {...register("title")}
          defaultValue={recipe.title}
          placeholder="Title"
            onBlur={(e) => {
    const formatted = formatTitle(e.target.value);
    setValue("title", formatted);
  }}
          className="border-b-2 outline-none border-[#ee9e1d]"
        />

        <textarea
          {...register("details")}
          defaultValue={recipe.details}
          placeholder="Details"
          className="border-b-2 outline-none border-[#ee9e1d]"
        />

        <select
          {...register("category")}
          defaultValue={recipe.category}
          className="border-b-2 outline-none border-[#ee9e1d]"
        >
          <option value="">Select</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="bg-[#F7A725] py-3 rounded">
          Update Recipe
        </button>

        <button
          type="button"
          onClick={DeleteHandler}
          className="bg-red-500 py-3 rounded text-white"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default RecipeDetails;