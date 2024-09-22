
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
    return `item/${getImageName(name)}.png`;
}

// we restrict the type of ingredients to only have values of the outputs
export const ensureRecipes = <R extends readonly Recipe<any>[]>(
  recipes: R &
   { [K in keyof R]: Recipe<R[number]["output"]> }
): Recipe<R[number]["output"]>[] => {
  // we enlargen the return type from R to Recipe to circumvent readonly restrictions
  return recipes.map((recipe) => ({
    // if no image => add image based on name
    img: recipe.img ?? getUrl(recipe.output),
    ...recipe
  }));
};

// ): R => {
  // return recipes;


// async function urlExists(url: string) {
//   // use a fetch request to check if the url exists
//   const response = await fetch(url);
//   return response.status === 200;
// }

// async function getUrl(name: string) {
//     // check categories from ["item", "block"]
//     // use first one that exists
//     for (const category of ["item", "block"]) {
//         const url = `${category}/${getImageName(name)}.png`;
//         // check if url exists
//         // if it does return it
//         // if it doesn't, check next category
//         // if none exist, return default image
//         if (await urlExists(url)) return url;
//     }
//     // return `item/${getImageName(name)}.png`;
// }