import { ensureRecipes, Recipe } from "./recipeInterface";
// import recipeData from "./data.json";


export const recipes = ensureRecipes([
    {
        output: "Oak Planks",
        img: "block/oak_planks.png",
        ingredients: [
            []
        ]
    },
    {
        output: "Chest",
        img: "block/chest.webp",
        ingredients: [
            ["Oak Planks"]
        ]
    }
] as const);

// export const recipes2 = ensureRecipes((
//     ([
//         ["Brick", [["Brick"]]],
//         ["Brick2", [["Brick"]]],
//     ] as const).map(([output, ingredients]) => ({ output, ingredients }))
// ));
