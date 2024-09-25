import { ensureRecipes } from "./recipeInterface";

export const recipes = ensureRecipes([
    {
        output: "Oak Planks",
        img: "/block/oak_planks.png",
        ingredients: [[]],
    },
    {
        output: "Spruce Planks",
        img: "/block/spruce_planks.png",
        ingredients: [[]],
    },
    {
        output: "Birch Planks",
        img: "/block/birch_planks.png",
        ingredients: [[]],
    },
    {
        output: "Jungle Planks",
        img: "/block/jungle_planks.png",
        ingredients: [[]],
    },
    {
        output: "Acacia Planks",
        img: "/block/acacia_planks.png",
        ingredients: [[]],
    },
    {
        output: "Dark Oak Planks",
        img: "/block/dark_oak_planks.png",
        ingredients: [[]],
    },
    {
        output: "Mangrove Planks",
        img: "/block/mangrove_planks.png",
        ingredients: [[]],
    },
    {
        output: "Cherry Planks",
        img: "/block/cherry_planks.png",
        ingredients: [[]],
    },
    {
        output: "Bamboo Planks",
        img: "/block/bamboo_planks.png",
        ingredients: [[]],
    },
    {
        output: "Crimson Planks",
        img: "/block/crimson_planks.png",
        ingredients: [[]],
    },
    {
        output: "Warped Planks",
        img: "/block/warped_planks.png",
        ingredients: [[]],
    },
    {
        output: "Oak Door",
        img: "/block/oak_door_top.png",
        ingredients: [["Oak Planks"]],
    },
    {
        output: "Chest",
        img: "/block/chest.webp",
        ingredients: [["Oak Planks"]],
    },
    {
        output: "Spruce Boat",
        img: "/item/spruce_boat.png",
        ingredients: [["Spruce Planks"]],
    },
    {
        output: "Spruce Boat With Chest",
        img: "/item/spruce_chest_boat.png",
        ingredients: [["Spruce Planks", "Chest"]],
    },
    {
        output: "Acacia Boat",
        img: "/item/acacia_boat.png",
        ingredients: [["Acacia Planks"]],
    },
    {
        output: "Dark Oak Boat",
        img: "/item/dark_oak_boat.png",
        ingredients: [["Dark Oak Planks"]],
    },
    {
        output: "Dark Oak Boat With Chest",
        img: "/item/dark_oak_chest_boat.png",
        ingredients: [["Dark Oak Planks", "Chest"]],
    },
    {
        output: "Crafting Table",
        img: "/block/crafting_table_front.png",
        ingredients: [["Oak Planks"]],
    },
    {
        output: "Stick",
        img: "/item/stick.png",
        ingredients: [["Oak Planks"]],
    },
    {
        output: "String",
        img: "/item/string.png",
        ingredients: [[]],
    },
    {
        output: "Wooden Pickaxe",
        img: "/item/wooden_pickaxe.png",
        ingredients: [["Stick", "Oak Planks"]],
    },
    {
        output: "Wooden Axe",
        img: "/item/wooden_axe.png",
        ingredients: [["Stick", "Oak Planks"]],
    },
    {
        output: "Wooden Shovel",
        img: "/item/wooden_shovel.png",
        ingredients: [["Stick", "Oak Planks"]],
    },
    {
        output: "Wooden Hoe",
        img: "/item/wooden_hoe.png",
        ingredients: [["Oak Planks", "Stick"]],
    },
    {
        output: "Wooden Sword",
        img: "/item/wooden_sword.png",
        ingredients: [["Stick", "Oak Planks"]],
    },
    {
        output: "Acacia Boat With Chest",
        img: "/item/acacia_chest_boat.png",
        ingredients: [["Acacia Planks", "Chest"]],
    },
    {
        output: "Bamboo Raft",
        img: "/item/bamboo_raft.png",
        ingredients: [["Bamboo Planks"]],
    },
    {
        output: "Bamboo Raft With Chest",
        img: "/item/bamboo_chest_raft.png",
        ingredients: [["Bamboo Planks", "Chest"]],
    },
    {
        output: "Beetroot Seeds",
        img: "/item/beetroot_seeds.png",
        ingredients: [[]],
    },
    {
        output: "Birch Boat",
        img: "/item/birch_boat.png",
        ingredients: [["Birch Planks"]],
    },
    {
        output: "Birch Boat With Chest",
        img: "/item/birch_chest_boat.png",
        ingredients: [["Birch Planks", "Chest"]],
    },
    {
        output: "Bow",
        img: "/item/bow.png",
        ingredients: [["Stick", "String"]],
    },
    {
        output: "Bucket",
        img: "/item/bucket.png",
        ingredients: [["Iron Ingot"]],
    },
    {
        output: "Carrot",
        img: "/item/carrot.png",
        ingredients: [[]],
    },
    {
        output: "Cherry Boat",
        img: "/item/cherry_boat.png",
        ingredients: [["Cherry Planks"]],
    },
    {
        output: "Cherry Boat With Chest",
        img: "/item/cherry_chest_boat.png",
        ingredients: [["Cherry Planks", "Chest"]],
    },
    {
        output: "Tripwire Hook",
        img: "/item/tripwire_hook.webp",
        ingredients: [["Stick", "Iron Ingot", "Oak Planks"]],
    },
    {
        output: "Crossbow",
        img: "/item/crossbow_arrow.png",
        ingredients: [["Stick", "String", "Iron Ingot", "Tripwire Hook"]],
    },
    {
        output: "Paper",
        img: "/item/paper.png",
        ingredients: [["Sugar Cane"]],
    },
    {
        output: "Blaze Rod",
        img: "/item/blaze_rod.png",
        ingredients: [[]],
    },
    {
        output: "Blaze Powder",
        img: "/item/blaze_powder.png",
        ingredients: [["Blaze Rod"]],
    },
    {
        output: "Clay Ball",
        img: "/item/clay_ball.png",
        ingredients: [[]],
    },
    {
        output: "Brick",
        img: "/item/brick.png",
        ingredients: [["Clay Ball"]],
    },
    {
        output: "Gold Nugget",
        img: "/item/gold_nugget.png",
        ingredients: [[]],
    },
    {
        output: "Gold Ingot",
        img: "/item/gold_ingot.png",
        ingredients: [["Gold Nugget"]],
    },
    {
        output: "Redstone",
        img: "/block/redstone_powder.webp",
        ingredients: [[]],
    },
    {
        output: "Clock",
        img: "/item/clock_00.png",
        ingredients: [["Gold Ingot", "Redstone"]],
    },
    {
        output: "Coal",
        img: "/item/coal.png",
        ingredients: [[]],
    },
    {
        output: "Copper Ingot",
        img: "/item/copper_ingot.png",
        ingredients: [[]],
    },
    {
        output: "Diamond",
        img: "/item/diamond.png",
        ingredients: [[]],
    },
    {
        output: "Iron Nugget",
        img: "/item/iron_nugget.png",
        ingredients: [[]],
    },
    {
        output: "Iron Ingot",
        img: "/item/iron_ingot.png",
        ingredients: [["Iron Nugget"]],
    },
    {
        output: "Ink Sac",
        img: "/item/ink_sac.png",
        ingredients: [[]],
    },
    {
        output: "Lapis Lazuli",
        img: "/item/lapis_lazuli.png",
        ingredients: [[]],
    },
    {
        output: "Leather",
        img: "/item/leather.png",
        ingredients: [[]],
    },
    {
        output: "Slimeball",
        img: "/item/slime_ball.png",
        ingredients: [[]],
    },
    {
        output: "Magma Cream",
        img: "/item/magma_cream.png",
        ingredients: [["Blaze Powder", "Slimeball"]],
    },
    {
        output: "Sugar Cane",
        img: "/item/sugar_cane.png",
        ingredients: [[]],
    },
    {
        output: "Wheat",
        img: "/item/wheat.png",
        ingredients: [[]],
    },
    {
        output: "Bread",
        img: "/item/bread.png",
        ingredients: [["Wheat"]],
    },
    {
        output: "Feather",
        img: "/item/feather.png",
        ingredients: [[]],
    },
    {
        output: "Flint",
        img: "/item/flint.png",
        ingredients: [[]],
    },
    {
        output: "Arrow",
        img: "/item/arrow.png",
        ingredients: [["Stick", "Feather", "Flint"]],
    },
    {
        output: "Beetroot",
        img: "/item/beetroot.png",
        ingredients: [[]],
    },
    {
        output: "Bone",
        img: "/item/bone.png",
        ingredients: [[]],
    },
    {
        output: "Bone Meal",
        img: "/item/bone_meal.png",
        ingredients: [["Bone"]],
    },
    {
        output: "Book",
        img: "/item/book.png",
        ingredients: [["Paper", "Leather"]],
    },
    {
        output: "Amethyst Shard",
        img: "/item/amethyst_shard.png",
        ingredients: [[]],
    },
    {
        output: "Rabbit Hide",
        img: "/item/rabbit_hide.png",
        ingredients: [[]],
    },
    {
        output: "Bowl",
        img: "/item/bowl.png",
        ingredients: [["Oak Planks"]],
    },
    {
        output: "Beetroot Soup",
        img: "/item/beetroot_soup.png",
        ingredients: [["Bowl", "Beetroot"]],
    },
    {
        output: "Book and Quill",
        img: "/item/written_book.png",
        ingredients: [["Book", "Ink Sac", "Feather"]],
    },
    {
        output: "Brush",
        img: "/item/brush.png",
        ingredients: [["Stick", "Copper Ingot", "Feather"]],
    },
    {
        output: "Fishing Rod",
        img: "/item/fishing_rod.png",
        ingredients: [["Stick", "String"]],
    },
    {
        output: "Carrot on a Stick",
        img: "/item/carrot_on_a_stick.png",
        ingredients: [["Carrot", "Fishing Rod"]],
    },
    {
        output: "Compass",
        img: "/item/compass_00.png",
        ingredients: [["Iron Ingot", "Redstone"]],
    },
    {
        output: "Diamond Boots",
        img: "/item/diamond_boots.png",
        ingredients: [["Diamond"]],
    },
    {
        output: "Diamond Leggings",
        img: "/item/diamond_leggings.png",
        ingredients: [["Diamond"]],
    },
    {
        output: "Diamond Chestplate",
        img: "/item/diamond_chestplate.png",
        ingredients: [["Diamond"]],
    },
    {
        output: "Diamond Helmet",
        img: "/item/diamond_helmet.png",
        ingredients: [["Diamond"]],
    },
    {
        output: "Diamond Hoe",
        img: "/item/diamond_hoe.png",
        ingredients: [["Diamond", "Stick"]],
    },
    {
        output: "Diamond Axe",
        img: "/item/diamond_axe.png",
        ingredients: [["Diamond", "Stick"]],
    },
    {
        output: "Diamond Pickaxe",
        img: "/item/diamond_pickaxe.png",
        ingredients: [["Diamond", "Stick"]],
    },
    {
        output: "Diamond Shovel",
        img: "/item/diamond_shovel.png",
        ingredients: [["Diamond", "Stick"]],
    },
    {
        output: "Diamond Sword",
        img: "/item/diamond_sword.png",
        ingredients: [["Diamond", "Stick"]],
    },
    {
        output: "Apple",
        img: "/item/apple.png",
        ingredients: [[]],
    },
    {
        output: "Golden Apple",
        img: "/item/golden_apple.png",
        ingredients: [["Apple", "Gold Ingot"]],
    },
    {
        output: "Golden Carrot",
        img: "/item/golden_carrot.png",
        ingredients: [["Carrot", "Gold Ingot"]],
    },
    {
        output: "Gold Boots",
        img: "/item/golden_boots.png",
        ingredients: [["Gold Ingot"]],
    },
    {
        output: "Gold Leggings",
        img: "/item/golden_leggings.png",
        ingredients: [["Gold Ingot"]],
    },
    {
        output: "Gold Chestplate",
        img: "/item/golden_chestplate.png",
        ingredients: [["Gold Ingot"]],
    },
    {
        output: "Gold Helmet",
        img: "/item/golden_helmet.png",
        ingredients: [["Gold Ingot"]],
    },
    {
        output: "Gold Hoe",
        img: "/item/golden_hoe.png",
        ingredients: [["Gold Ingot", "Stick"]],
    },
    {
        output: "Gold Axe",
        img: "/item/golden_axe.png",
        ingredients: [["Gold Ingot", "Stick"]],
    },
    {
        output: "Gold Pickaxe",
        img: "/item/golden_pickaxe.png",
        ingredients: [["Gold Ingot", "Stick"]],
    },
    {
        output: "Gold Shovel",
        img: "/item/golden_shovel.png",
        ingredients: [["Gold Ingot", "Stick"]],
    },
    {
        output: "Gold Sword",
        img: "/item/golden_sword.png",
        ingredients: [["Gold Ingot", "Stick"]],
    },
    {
        output: "Iron Boots",
        img: "/item/iron_boots.png",
        ingredients: [["Iron Ingot"]],
    },
    {
        output: "Iron Leggings",
        img: "/item/iron_leggings.png",
        ingredients: [["Iron Ingot"]],
    },
    {
        output: "Iron Chestplate",
        img: "/item/iron_chestplate.png",
        ingredients: [["Iron Ingot"]],
    },
    {
        output: "Iron Helmet",
        img: "/item/iron_helmet.png",
        ingredients: [["Iron Ingot"]],
    },
    {
        output: "Iron Hoe",
        img: "/item/iron_hoe.png",
        ingredients: [["Iron Ingot", "Stick"]],
    },
    {
        output: "Iron Axe",
        img: "/item/iron_axe.png",
        ingredients: [["Iron Ingot", "Stick"]],
    },
    {
        output: "Iron Pickaxe",
        img: "/item/iron_pickaxe.png",
        ingredients: [["Iron Ingot", "Stick"]],
    },
    {
        output: "Iron Shovel",
        img: "/item/iron_shovel.png",
        ingredients: [["Iron Ingot", "Stick"]],
    },
    {
        output: "Iron Sword",
        img: "/item/iron_sword.png",
        ingredients: [["Iron Ingot", "Stick"]],
    },
    {
        output: "Leather Boots",
        img: "/item/leather_boots.png",
        ingredients: [["Leather"]],
    },
    {
        output: "Leather Leggings",
        img: "/item/leather_leggings.png",
        ingredients: [["Leather"]],
    },
    {
        output: "Leather Chestplate",
        img: "/item/leather_chestplate.png",
        ingredients: [["Leather"]],
    },
    {
        output: "Leather Helmet",
        img: "/item/leather_helmet.png",
        ingredients: [["Leather"]],
    },
    {
        output: "Red Mushroom",
        img: "/block/red_mushroom.png",
        ingredients: [[]],
    },
    {
        output: "Brown Mushroom",
        img: "/block/brown_mushroom.png",
        ingredients: [[]],
    },
    {
        output: "Mushroom Stew",
        img: "/item/mushroom_stew.png",
        ingredients: [["Bowl", "Red Mushroom", "Brown Mushroom"]],
    },
    {
        output: "Spyglass",
        img: "/item/spyglass.png",
        ingredients: [["Amethyst Shard", "Copper Ingot"]],
    },
    {
        output: "Cobblestone",
        img: "/block/cobblestone.png",
        ingredients: [[]],
    },
    {
        output: "Stone Hoe",
        img: "/item/stone_hoe.png",
        ingredients: [["Cobblestone", "Stick"]],
    },
    {
        output: "Stone Axe",
        img: "/item/stone_axe.png",
        ingredients: [["Cobblestone", "Stick"]],
    },
    {
        output: "Stone Pickaxe",
        img: "/item/stone_pickaxe.png",
        ingredients: [["Cobblestone", "Stick"]],
    },
    {
        output: "Stone Shovel",
        img: "/item/stone_shovel.png",
        ingredients: [["Cobblestone", "Stick"]],
    },
    {
        output: "Stone Sword",
        img: "/item/stone_sword.png",
        ingredients: [["Cobblestone", "Stick"]],
    },
] as const);
