import React from "react";
import { Recipe, recipes } from "./recipesData";
import "./App.css";

const RecipeComponent: React.FC<{ recipe: Recipe; level: number }> = ({ recipe: { name, img, ingredients }, level = 0 }) => {
    return (
        <div className={`w-auto h-auto flex flex-col items-center justify-end gap-5 ${level > 0 && "border-b border-gray-500"}`}>
            <div className="flex flex-row gap-10">
                {ingredients.map((r) =>
                    Array.isArray(r) ? (
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-10">
                                {(r as Recipe[]).map((e) => (
                                    <RecipeComponent recipe={e} level={level + 1} />
                                ))}
                            </div>
                            <p className="font-mono tracking-tighter text-gray-300 text-center">can be crafted with either</p>
                        </div>
                    ) : (
                        <RecipeComponent recipe={r} level={level + 1} />
                    )
                )}
            </div>

            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 p-2 border-gray-500 border-2">
                    <img src={img} className="w-full h-full" />
                </div>
                <p className="font-mono tracking-tighter text-gray-300 text-center">{name}</p>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="w-screen h-screen background-img overflow-y-auto">
            <div className="flex flex-col gap-20 p-24 w-auto min-w-min">
                {recipes.map((e) => (
                    <RecipeComponent recipe={e} level={0} />
                ))}
            </div>
        </div>
    );
}

export default App;