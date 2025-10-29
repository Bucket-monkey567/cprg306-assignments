"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {
    const [mealIdeas, setMealIdeas] = useState([]);
    
    //fetch data from the MealDN
    async function fetchMealIdeas(ingredient) {
        if (!ingredient) return [];
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await res.json();
        return data.meals || [];
    }

    async function loadMealIdeas() {
        const ideas = await fetchMealIdeas(ingredient);
        setMealIdeas(ideas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            <ul>
                {mealIdeas.map((meal) => (
                    <li key={meal.idMeal}>
                    <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={80}
                    height={80}
                    style={{ borderRadius: "8px", marginRight: "8px" }}
                    />
                    {meal.strMeal}
                    </li>
                )
                )}
            </ul>
        </div>
    );

}

