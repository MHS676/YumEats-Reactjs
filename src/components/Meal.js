import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCategory = (category) => {
    setFoods(mealData.filter((item) => item.category === category));
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h2 className="text-orange-500 font-bold text-2xl text-center py-2">Our Meal</h2>
      <div className="flex justify-center md:justify-center">
        {['All', 'Pizza', 'Chicken', 'Salad'].map((category) => (
          <button
            key={category}
            onClick={() => (category === 'All' ? setFoods(mealData) : filterCategory(category))}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <div key={item.id} className="border-none hover:scale-105 duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold ">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 border-white font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
