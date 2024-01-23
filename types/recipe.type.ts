export type Recipe = {
  name: String;
  ingredients?: Ingredient[];
  method?: String[];
};

export type Ingredient = {
  ingredient: String;
  amount: String;
  unit: "grams" | "ml" | "tbs" | "tsp" | "servings";
};
