
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