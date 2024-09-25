import React from "react";
import { Recipe } from "./recipeInterface";
import { recipes } from "./recipeData";
import "./App.css";

const RecipeComponent: React.FC<{ recipe: Recipe<string>; level: number }> = React.memo(({ recipe: { output, img, ingredients }, level = 0 }) => {
    return (
        <div className={`w-auto h-auto flex flex-col items-center justify-end gap-5 ${level > 0 && "border-b border-gray-500"}`}>
            <div className="flex flex-row gap-10">
                {ingredients[0].map((r, i) => (
                    <div className="flex flex-col items-center justify-end gap-2" key={i}>
                        {<RecipeComponent recipe={recipes.find((e) => e.output === r)!} level={level + 1} />}
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 p-2 border-gray-500 border-2">
                    <img src={img} className="w-full h-full" alt={output} loading="lazy" />
                </div>
                <p className="font-mono tracking-tighter text-gray-300 text-center">{output}</p>
            </div>
        </div>
    );
});

function App() {
    return (
        <div className="w-screen h-screen background-img overflow-y-auto">
            <div className="flex flex-col gap-20 p-24 w-auto min-w-min">
                {recipes.map((e, i) => (
                    <RecipeComponent recipe={e} level={0} key={i} />
                ))}
            </div>
        </div>
    );
}

export default App;
