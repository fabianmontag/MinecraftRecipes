type NonEmptyArray<T> = readonly [T, ...T[]];

// Define the Recipe interface using a generic type parameter for ingredients
export interface Recipe<Item extends string> {
    output: Item;
    img?: string;
    // we don't want uncraftable items
    // a basic resource has one recipe without ingredients, e.g. cobblestone has [[]]
    ingredients: NonEmptyArray<readonly Item[]>;
}

function getImageName(name: string) {
    return name.toLowerCase().replace(" ", "_");
}

function getUrl(name: string) {
    return `./item/${getImageName(name)}.png`;
}

// we restrict the type of ingredients to only have values of the outputs
export const ensureRecipes = <R extends readonly Recipe<any>[]>(
    recipes: R & { [K in keyof R]: Recipe<R[number]["output"]> }
): Recipe<R[number]["output"]>[] => {
    // we enlargen the return type from R to Recipe to circumvent readonly restrictions
    return recipes.map((recipe) => ({
        // if no image => add image based on name
        img: recipe.img ?? getUrl(recipe.output),
        ...recipe,
    }));
};
