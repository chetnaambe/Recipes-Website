

// import RecipeCard from "../Components/RecipeCard";

// const Popular = () => {
//   const favorite = JSON.parse(localStorage.getItem("fav")) || [];

//   // sirf first 3 favorites show karo (fixed order)
//   const topRecipes = favorite.slice(0, 3);

//   return (
//     <div className="w-full bg-[#FFFCF5] px-3.5 py-5 lg:mt-18">

//       <div className="flex items-center justify-center mt-5 lg:mt-9 flex-col ">
//         <h1 className="text-[30px] md:text-5xl lg:text-6xl font-[700]">
//           Popular Recipes You Can't Miss
//         </h1>

//         <p className="text-center text-[18px] font-[300] opacity-50 p-2 md:p-4 lg:p-4">
//           From comfort food classics to exotic flavors, our featured <br />
//           recipes are sure to impress.
//         </p>
//       </div>

//       {topRecipes.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 md:mt-28 lg:mt-20">
//           {topRecipes.map((recipe) => (
//             <RecipeCard key={recipe.id} recipe={recipe} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 text-lg">
//           No recipes found!
//         </p>
//       )}

//     </div>
//   );
// };

// export default Popular;

// import RecipeCard from "../Components/RecipeCard";

// const Popular = () => {

//   const topRecipes = [
//     {
//       id: 1,
//       title: "Butter Chicken",
//       image: "https://source.unsplash.com/400x300/?butter-chicken",
//       details: "Rich creamy Indian curry",
//     },
//     {
//       id: 2,
//       title: "Paneer Tikka",
//       image: "https://source.unsplash.com/400x300/?paneer-tikka",
//       details: "Spicy grilled paneer",
//     },
//     {
//       id: 3,
//       title: "Veg Biryani",
//       image: "https://source.unsplash.com/400x300/?biryani",
//       details: "Flavored rice dish",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#FFFCF5] px-3.5 py-5 lg:mt-18">

//       <div className="flex items-center justify-center mt-5 lg:mt-9 flex-col ">
//         <h1 className="text-[30px] md:text-5xl lg:text-6xl font-[700]">
//           Popular Recipes You Can't Miss
//         </h1>

//         <p className="text-center text-[18px] font-[300] opacity-50 p-2 md:p-4 lg:p-4">
//           From comfort food classics to exotic flavors, our featured <br />
//           recipes are sure to impress.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
//         {topRecipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Popular;


// import Dinner from "../assets/Dinner.png"
// import Breakfast from "../assets/Breakfast.png"
// import Lunch from "../assets/Lunch.png"
// const Popular = () => {
//   return(
//     <div className="w-full bg-[#FFFCF5] px-3.5 py-5 lg:mt-18 flex flex-col">
//       <div className="flex flex-col items-center gap-3">
//         <h1 className="text-4xl font-[600]">Our Specialties</h1>
//         <p className="text-[14px] opacity-45">Breakfast, lunch, dinner. Your daily dose of tasty recipes starts here</p>
//       </div>
//       <div className="flex flex-col md:flex-row px-5 py-5 bg-amber-400 gap-15">
//           <div>
//             <img className=" md:w-[400px] lg::w-[200px] w-full" src={ Dinner } alt="" />
//             <h2 className="text-center font-[500] text-[20px]">Dinner</h2>
//           </div>
//           <div>
//             <img className=" md:w-[400px] lg::w-[200px] w-full" src= {Breakfast} alt="" />
//             <h2 className="text-center font-[500] text-[20px]">Breakfast</h2>
//           </div>
//           <div>
//             <img className=" md:w-[400px] lg::w-[200px] w-full" src={ Lunch } alt="" />
//             <h2 className="text-center font-[500] text-[20px]">Dinner</h2>
//           </div>
//       </div>
//     </div>
//   )
// };

// export default Popular;


import Dinner from "../assets/Dinner.png";
import Breakfast from "../assets/Breakfast.png";
import Lunch from "../assets/Lunch.png";

const Popular = () => {
  return (
    <div className="w-full bg-[#fffcf59e]  px-3.5 py-10 lg:mt-18 flex flex-col gap-7">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl md:text-5xl font-semibold"><span className="text-[#F8A725]">Our</span> Specia<span className="text-[#F8A725]">lties</span></h1>
        <p className="text-[14px] opacity-60 text-center">
          Breakfast, lunch, dinner. Your daily dose of tasty recipes starts here
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center px-5 py-8 gap-10 mt-18">

        {/* Dinner */}
        <div className="flex flex-col items-center">
          <img
className="md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] w-full object-cover rounded-xl shadow-md"            src={Dinner}
            alt="Dinner"
          />
          <h2 className="mt-3 font-medium text-[20px]">Dinner</h2>
        </div>

        {/* Breakfast */}
        <div className="flex flex-col items-center">
          <img
className="md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] w-full object-cover rounded-xl shadow-md"            src={Breakfast}
            alt="Breakfast"
          />
          <h2 className="mt-3 font-medium text-[20px]">Breakfast</h2>
        </div>

        {/* Lunch */}
        <div className="flex flex-col items-center">
          <img
            className="md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] w-full object-cover rounded-xl shadow-md"
            src={Lunch}
            alt="Lunch"
          />
          <h2 className="mt-3 font-medium text-[20px] font-[700]">Lunch</h2>
        </div>

      </div>
    </div>
  );
};

export default Popular;