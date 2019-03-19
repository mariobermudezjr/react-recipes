exports.resolvers = {
  Query: {
    getAllRecipes: async (toor, args, { Recipe }) => {
      const allRecipes = await Recipe.find();

      return allRecipes;
    }
  },
  Mutation: {
    // root, args, and context
    addRecipe: async (
      root,
      { name, description, category, instructions, username },
      { Recipe }
    ) => {
      const newRecipe = await new Recipe({
        name,
        description,
        category,
        instructions,
        username
      }).save();

      return newRecipe;
    }
  }
};
